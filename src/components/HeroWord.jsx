import { useEffect, useLayoutEffect, useRef } from "react";

// The hero's animated word. A stickman walks in holding a rope tied to the
// word, hauls it in from the left hand-over-hand, dusts off his hands, puts
// them on his hips, then walks off to the right. The word stays.
//
// Everything is driven by one requestAnimationFrame loop that computes a
// "pose" (hand / foot targets) per phase, smooths it, solves two-bone IK for
// arms and legs, and writes straight to SVG attributes — no React re-renders.

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => {
  t = clamp(t);
  return t * t * (3 - 2 * t);
};
const easeOut = (t) => 1 - Math.pow(1 - clamp(t), 3);

// Rig dimensions, in local "units" (hip is the origin, y points down).
const TORSO = 34;
const HEAD_R = 8;
const UPPER = 20;
const LOWER = 20;
const THIGH = 24;
const SHIN = 24;
const GROUND = 45; // hip → ground, with slightly bent legs

// Timeline
const START_DELAY = 0.25;
const HALF = 0.45; // seconds per pull stroke
const STROKES = 8;
const PULL = HALF * STROKES;
const SETTLE = 0.5;
const DUST = 1.7;
const HIPS = 1.4;

// Hand poses while pulling (local units)
const E_L = [-36, -16];
const C_L = [-14, -18];
const E_R = [-28, -14];
const C_R = [-8, -18];

function ik(sx, sy, tx, ty, l1, l2, kx, ky) {
  let dx = tx - sx;
  let dy = ty - sy;
  let d = Math.hypot(dx, dy) || 0.0001;
  const max = l1 + l2 - 0.01;
  if (d > max) {
    const k = max / d;
    dx *= k;
    dy *= k;
    d = max;
    tx = sx + dx;
    ty = sy + dy;
  }
  const a = (d * d + l1 * l1 - l2 * l2) / (2 * d);
  const h = Math.sqrt(Math.max(0, l1 * l1 - a * a));
  const ux = dx / d;
  const uy = dy / d;
  const mx = sx + ux * a;
  const my = sy + uy * a;
  const c1x = mx - uy * h;
  const c1y = my + ux * h;
  const c2x = mx + uy * h;
  const c2y = my - ux * h;
  const pick1 = c1x * kx + c1y * ky >= c2x * kx + c2y * ky;
  return pick1 ? [c1x, c1y, tx, ty] : [c2x, c2y, tx, ty];
}

export default function HeroWord({ text }) {
  const stageRef = useRef(null);
  const wordRef = useRef(null);
  const probeRef = useRef(null);
  const svgRef = useRef(null);
  const els = useRef({});
  const setEl = (name) => (node) => {
    els.current[name] = node;
  };

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Park the word off-screen before first paint so it never flashes in place.
  useLayoutEffect(() => {
    if (reduced) return;
    const word = wordRef.current;
    if (word) word.style.transform = "translate3d(-200vw,0,0)";
  }, [reduced]);

  useEffect(() => {
    if (reduced) return undefined;
    const stage = stageRef.current;
    const word = wordRef.current;
    const probe = probeRef.current;
    const svg = svgRef.current;
    const e = els.current;
    if (!stage || !word || !probe || !svg) return undefined;

    let raf = 0;
    let cancelled = false;
    let t0 = null;
    let last = 0;
    let prevDx = null;
    let sm = null; // smoothed pose
    let released = null; // rope end when it was let go
    let tl = null; // timeline, computed once at start

    const measure = () => {
      const fs = parseFloat(getComputedStyle(stage).fontSize) || 60;
      const s = (fs * 1.02) / 101; // figure is ~1 font-size tall
      const wordLeft = word.offsetLeft;
      const wordW = word.offsetWidth;
      const B = word.offsetTop + probe.offsetTop; // baseline, stage coords
      const stageLeft = stage.getBoundingClientRect().left;
      const vw = document.documentElement.clientWidth;
      const anchorX = wordLeft + wordW;
      const homeX = anchorX + 36 * s + 10;
      return {
        fs,
        s,
        B,
        anchorX,
        anchorY: B - fs * 0.34,
        homeX,
        stageLeft,
        vw,
        dx0: -(stageLeft + wordLeft + wordW + 30),
      };
    };

    const finish = () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      word.style.transform = "";
      svg.style.display = "none";
    };

    const setPath = (node, d) => node && node.setAttribute("d", d);
    const setPts = (node, pts) =>
      node && node.setAttribute("points", pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" "));

    const frame = (now) => {
      if (cancelled) return;
      if (t0 === null) {
        t0 = now;
        last = now;
      }
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      const t = (now - t0) / 1000 - START_DELAY;
      const g = measure();
      const { s, B, fs } = g;

      if (!tl) {
        const inDist = (g.vw + 40 - (g.stageLeft + g.homeX)) / s;
        const inDur = clamp(inDist / 120, 1.3, 3.2);
        const outDur = clamp((inDist + 20) / 105, 1.5, 3.6);
        const pullAt = inDur;
        const settleAt = pullAt + PULL;
        const dustAt = settleAt + SETTLE;
        const hipsAt = dustAt + DUST;
        const outAt = hipsAt + HIPS;
        tl = { inDur, outDur, pullAt, settleAt, dustAt, hipsAt, outAt, end: outAt + outDur };
      }

      if (t < 0) {
        svg.style.visibility = "hidden";
        raf = requestAnimationFrame(frame);
        return;
      }
      svg.style.visibility = "visible";
      if (t > tl.end) {
        finish();
        return;
      }

      // ── Word position ────────────────────────────────────────────
      let dx;
      if (t < tl.pullAt) dx = g.dx0;
      else if (t < tl.settleAt) {
        const tp = t - tl.pullAt;
        const k = Math.min(STROKES, Math.floor(tp / HALF));
        const u = k >= STROKES ? 0 : (tp / HALF) % 1;
        const prog = (k + (k >= STROKES ? 0 : smooth(u))) / STROKES;
        dx = g.dx0 * (1 - prog);
      } else {
        const tau = t - tl.settleAt;
        dx = fs * 0.2 * Math.exp(-7 * tau) * Math.sin(2 * Math.PI * 2.1 * tau);
        if (tau > 1.2) dx = 0;
      }
      const v = prevDx === null ? 0 : (dx - prevDx) / dt;
      prevDx = dx;
      const skew = -clamp(v * 0.012, -11, 11);
      word.style.transform = `translate3d(${dx.toFixed(1)}px,0,0) skewX(${skew.toFixed(2)}deg)`;

      // ── Target pose for this moment ─────────────────────────────
      const walkX = (u, from, to) => lerp(from, to, u * u * (3 - 2 * u));
      const farRight = g.vw - g.stageLeft + 50;
      let hx = g.homeX;
      let lean = 0;
      let nod = 0;
      let lh = [-8, -3];
      let rh = [8, -3];
      let lf = [-10, GROUND];
      let rf = [10, GROUND];
      let eye = 0;
      let walking = false;
      let phaseU = 0;

      if (t < tl.pullAt) {
        // walk in from the right, rope taut
        walking = true;
        const u = t / tl.inDur;
        hx = walkX(clamp(u), farRight, g.homeX);
        lean = -4;
        lh = E_L;
        rh = E_R;
        eye = -1;
      } else if (t < tl.settleAt) {
        const tp = t - tl.pullAt;
        const k = Math.min(STROKES - 1, Math.floor(tp / HALF));
        const u = (tp - k * HALF) / HALF;
        phaseU = u;
        const su = smooth(u);
        const evenLeftPulls = k % 2 === 0;
        const pullL = evenLeftPulls ? su : 1 - su; // 0 = extended, 1 = pulled in
        const pullR = 1 - pullL;
        lh = [lerp(E_L[0], C_L[0], pullL), lerp(E_L[1], C_L[1], pullL) - 4 * Math.sin(Math.PI * (1 - pullL) * pullL * 2) * 0.5];
        rh = [lerp(E_R[0], C_R[0], pullR), lerp(E_R[1], C_R[1], pullR) - 4 * Math.sin(Math.PI * (1 - pullR) * pullR * 2) * 0.5];
        lean = 8 + 7 * Math.sin(Math.PI * u);
        lf = [-13, GROUND];
        rf = [11, GROUND];
        eye = -1;
        nod = 1.2 * Math.sin(Math.PI * u);
      } else if (t < tl.dustAt) {
        // caught breath: hands at the chest, rope still held
        lh = [-16, -17];
        rh = [-10, -17];
        lean = lerp(12, 0, smooth((t - tl.settleAt) / SETTLE));
        lf = [-12, GROUND];
        rf = [10, GROUND];
        eye = -0.5;
      } else if (t < tl.hipsAt) {
        // dust off the palms
        const u = (t - tl.dustAt) / DUST;
        phaseU = u;
        if (u < 0.72) {
          const w = Math.sin(2 * Math.PI * 3.2 * u);
          const ramp = smooth(u / 0.08);
          lh = [lerp(-14, -3, ramp), -22 + 6 * w * ramp];
          rh = [lerp(-8, 3, ramp), -22 - 6 * w * ramp];
        } else if (u < 0.86) {
          // clap together, then flick apart
          const k = smooth((u - 0.72) / 0.14);
          lh = [lerp(-3, -22, k), lerp(-22, -26, k)];
          rh = [lerp(3, 22, k), lerp(-22, -26, k)];
        } else {
          const k = smooth((u - 0.86) / 0.14);
          lh = [lerp(-22, -10, k), lerp(-26, -3, k)];
          rh = [lerp(22, 10, k), lerp(-26, -3, k)];
        }
        lean = 0;
        lf = [-11, GROUND];
        rf = [11, GROUND];
        eye = 0;
        nod = u < 0.72 ? 1.5 * Math.sin(2 * Math.PI * 3.2 * u) : 0;
      } else if (t < tl.outAt) {
        // hands on hips, proud, foot tap
        const u = (t - tl.hipsAt) / HIPS;
        phaseU = u;
        lh = [-10, -3];
        rh = [10, -3];
        lean = -3 + 1.5 * Math.sin(Math.PI * u);
        lf = [-14, GROUND];
        rf = [14, GROUND - 3.5 * Math.max(0, Math.sin(2 * Math.PI * 3 * u))];
        eye = 0;
        nod = 1.5 * Math.sin(2 * Math.PI * 1.5 * u);
      } else {
        // walk away to the right
        walking = true;
        const u = (t - tl.outAt) / tl.outDur;
        hx = walkX(clamp(u), g.homeX, farRight + 20);
        lean = 4;
        eye = 1;
      }

      let bob = 0;
      if (walking) {
        const phi = hx / (s * 13);
        const A = 14;
        lf = [A * Math.sin(phi), GROUND - 9 * Math.max(0, Math.cos(phi))];
        rf = [A * Math.sin(phi + Math.PI), GROUND - 9 * Math.max(0, Math.cos(phi + Math.PI))];
        bob = 1.6 * Math.abs(Math.sin(phi));
        if (t >= tl.outAt) {
          const sw = 12 * Math.sin(phi);
          lh = [-6 + sw, -4];
          rh = [6 - sw, -4];
        }
      }

      // ── Smooth toward the target pose ───────────────────────────
      const target = { lean, nod, lh0: lh[0], lh1: lh[1], rh0: rh[0], rh1: rh[1], lf0: lf[0], lf1: lf[1], rf0: rf[0], rf1: rf[1], eye };
      if (!sm) sm = { ...target };
      const k = 1 - Math.exp(-(walking ? 26 : 20) * dt);
      for (const key in target) sm[key] += (target[key] - sm[key]) * k;

      // ── Rig → stage pixels ──────────────────────────────────────
      const hipY = B - GROUND * s - bob * s;
      const P = (x, y) => [hx + x * s, hipY + y * s];
      const lr = (sm.lean * Math.PI) / 180;
      const Sx = Math.sin(lr) * TORSO;
      const Sy = -Math.cos(lr) * TORSO;
      const SLx = Sx - 5;
      const SRx = Sx + 5;

      const armL = ik(SLx, Sy, sm.lh0, sm.lh1, UPPER, LOWER, -1, 1);
      const armR = ik(SRx, Sy, sm.rh0, sm.rh1, UPPER, LOWER, 1, 1);
      const legL = ik(0, 0, sm.lf0, sm.lf1, THIGH, SHIN, walking ? 1 : -1, 0.2);
      const legR = ik(0, 0, sm.rf0, sm.rf1, THIGH, SHIN, walking ? 1 : 1, 0.2);

      const hip = P(0, 0);
      const sh = P(Sx, Sy);
      const headC = P(Sx + Math.sin(lr) * (HEAD_R + 2), Sy - Math.cos(lr) * (HEAD_R + 2) + sm.nod);
      const w = Math.max(1.9, 2.7 * s);

      setPts(e.torso, [hip, sh]);
      setPts(e.armL, [P(SLx, Sy), P(armL[0], armL[1]), P(armL[2], armL[3])]);
      setPts(e.armR, [P(SRx, Sy), P(armR[0], armR[1]), P(armR[2], armR[3])]);
      setPts(e.legL, [hip, P(legL[0], legL[1]), P(legL[2], legL[3])]);
      setPts(e.legR, [hip, P(legR[0], legR[1]), P(legR[2], legR[3])]);
      if (e.head) {
        e.head.setAttribute("cx", headC[0].toFixed(1));
        e.head.setAttribute("cy", headC[1].toFixed(1));
        e.head.setAttribute("r", (HEAD_R * s).toFixed(1));
      }
      const ex = sm.eye * 3 * s;
      [[e.eyeL, -3.2], [e.eyeR, 3.2]].forEach(([node, off]) => {
        if (!node) return;
        node.setAttribute("cx", (headC[0] + ex + off * s * (1 - Math.abs(sm.eye) * 0.35)).toFixed(1));
        node.setAttribute("cy", (headC[1] - 0.6 * s).toFixed(1));
        node.setAttribute("r", (1.15 * s).toFixed(2));
      });
      svg.style.setProperty("--stick-w", `${w}px`);

      // ── Rope ────────────────────────────────────────────────────
      const hL = P(armL[2], armL[3]);
      const hR = P(armR[2], armR[3]);
      const front = hL[0] <= hR[0] ? hL : hR;
      const back = front === hL ? hR : hL;
      const ax = g.anchorX + dx - 2;
      const ay = g.anchorY;
      const attached = t < tl.dustAt;

      if (attached) {
        const dist = Math.hypot(front[0] - ax, front[1] - ay);
        const taut = t < tl.pullAt ? 1 : t < tl.settleAt ? 0.5 + 0.5 * Math.cos(2 * Math.PI * phaseU) : 0;
        const sag = (2 + 0.05 * dist) * (t < tl.pullAt ? 0.3 : 0.4 + 0.6 * taut) + (t >= tl.settleAt ? 6 : 0);
        const mx = (ax + front[0]) / 2;
        const my = (ay + front[1]) / 2 + sag;
        const tailX = back[0] + 5 * s;
        const tailY = B - 1.5 * s;
        setPath(
          e.rope,
          `M${ax.toFixed(1)} ${ay.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${front[0].toFixed(1)} ${front[1].toFixed(1)}` +
            ` L${back[0].toFixed(1)} ${back[1].toFixed(1)}` +
            (t >= tl.pullAt ? ` Q${(back[0] + 2 * s).toFixed(1)} ${(back[1] + 22 * s).toFixed(1)} ${tailX.toFixed(1)} ${tailY.toFixed(1)}` : "")
        );
        e.rope.style.opacity = 1;
        released = { x: front[0], y: front[1] };
      } else if (released) {
        // the rope is dropped and falls to the ground, then fades
        const rel = clamp((t - tl.dustAt) / 0.9);
        const fall = easeOut(rel);
        const endX = lerp(released.x, lerp(released.x, ax, 0.45), fall);
        const endY = lerp(released.y, B - 1.5 * s, fall);
        const sag = lerp(2, 16, fall);
        setPath(
          e.rope,
          `M${ax.toFixed(1)} ${ay.toFixed(1)} Q${((ax + endX) / 2).toFixed(1)} ${(((ay + endY) / 2) + sag).toFixed(1)} ${endX.toFixed(1)} ${endY.toFixed(1)}`
        );
        e.rope.style.opacity = 1 - smooth((rel - 0.45) / 0.55);
      }

      // pile of pulled-in rope at his feet
      if (e.pile) {
        const prog = t < tl.pullAt ? 0 : clamp((t - tl.pullAt) / PULL);
        const pileOpacity = t < tl.dustAt ? 1 : 1 - smooth((t - tl.dustAt) / 0.9);
        e.pile.setAttribute("cx", (g.homeX + 20 * s).toFixed(1));
        e.pile.setAttribute("cy", (B - 1.4 * s).toFixed(1));
        e.pile.setAttribute("rx", ((1 + 13 * prog) * s).toFixed(1));
        e.pile.setAttribute("ry", ((0.6 + 3.6 * prog) * s).toFixed(1));
        e.pile.style.opacity = prog > 0.02 ? pileOpacity : 0;
      }

      // dust puffs while rubbing hands
      const dustU = t >= tl.dustAt && t < tl.hipsAt ? (t - tl.dustAt) / DUST : -1;
      (e.puffs || []).forEach((node, i) => {
        if (!node) return;
        const age = dustU < 0 ? -1 : (dustU - 0.55 - i * 0.025) / 0.3;
        if (age < 0 || age > 1) {
          node.style.opacity = 0;
          return;
        }
        const ang = -Math.PI / 2 + (i - 2.5) * 0.55;
        const c = P(0, -20);
        node.setAttribute("cx", (c[0] + Math.cos(ang) * 22 * s * age).toFixed(1));
        node.setAttribute("cy", (c[1] + Math.sin(ang) * 22 * s * age + 8 * s * age * age).toFixed(1));
        node.setAttribute("r", ((1.2 + 1.2 * age) * s).toFixed(2));
        node.style.opacity = (1 - age) * 0.75;
      });

      raf = requestAnimationFrame(frame);
    };

    const startLoop = () => {
      if (cancelled) return;
      raf = requestAnimationFrame(frame);
    };
    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.race([fontsReady, new Promise((r) => setTimeout(r, 1200))]).then(startLoop);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <span className="hero-stage" ref={stageRef}>
      <span className="hero-title-walk" ref={wordRef}>
        {text}.<span className="walk-probe" ref={probeRef} aria-hidden="true" />
      </span>
      {!reduced && (
        <svg className="hero-stick" ref={svgRef} aria-hidden="true" style={{ visibility: "hidden" }}>
          <path ref={setEl("rope")} className="stick-rope" fill="none" />
          <ellipse ref={setEl("pile")} className="stick-rope" fill="none" />
          <polyline ref={setEl("legL")} className="stick-line" fill="none" />
          <polyline ref={setEl("legR")} className="stick-line" fill="none" />
          <polyline ref={setEl("torso")} className="stick-line" fill="none" />
          <polyline ref={setEl("armL")} className="stick-line" fill="none" />
          <polyline ref={setEl("armR")} className="stick-line" fill="none" />
          <circle ref={setEl("head")} className="stick-head" />
          <circle ref={setEl("eyeL")} className="stick-eye" />
          <circle ref={setEl("eyeR")} className="stick-eye" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle
              key={i}
              ref={(n) => {
                els.current.puffs = els.current.puffs || [];
                els.current.puffs[i] = n;
              }}
              className="stick-puff"
              style={{ opacity: 0 }}
            />
          ))}
        </svg>
      )}
    </span>
  );
}
