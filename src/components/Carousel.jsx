import { useCallback, useEffect, useRef, useState } from "react";

// Lightweight swipe carousel: native scroll-snap (great on touch) plus
// mouse drag, arrow buttons, a progress bar, and a depth effect where cards
// away from the center shrink slightly.
export default function Carousel({ children, className = "", label = "carousel", depth = true }) {
  const trackRef = useRef(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    if (!depth) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    for (const child of el.children) {
      const c = child.offsetLeft + child.offsetWidth / 2;
      const d = Math.min(1, Math.abs(c - mid) / (el.clientWidth * 0.75));
      child.style.setProperty("--depth", d.toFixed(3));
    }
  }, [depth]);

  useEffect(() => {
    update();
    const el = trackRef.current;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [update, children]);

  const go = (dir) => {
    const el = trackRef.current;
    const first = el.children[0];
    const step = first ? first.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = trackRef.current;
    drag.current = { down: true, x: e.clientX, left: el.scrollLeft, moved: false };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 6 && !d.moved) {
      d.moved = true;
      trackRef.current.classList.add("is-dragging");
    }
    if (d.moved) trackRef.current.scrollLeft = d.left - dx;
  };
  const endDrag = () => {
    const d = drag.current;
    if (!d.down) return;
    d.down = false;
    trackRef.current.classList.remove("is-dragging");
  };
  // Swallow the click that ends a drag so cards don't open by accident.
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.stopPropagation();
      e.preventDefault();
      drag.current.moved = false;
    }
  };

  return (
    <div className={`carousel ${className}`} role="region" aria-label={label}>
      <div
        ref={trackRef}
        className="carousel-track"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
      >
        {children}
      </div>
      <div className="carousel-bar">
        <div className="carousel-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${0.12 + 0.88 * progress})` }} />
        </div>
        <div className="carousel-arrows">
          <button type="button" onClick={() => go(-1)} disabled={!canPrev} aria-label="Previous">
            ←
          </button>
          <button type="button" onClick={() => go(1)} disabled={!canNext} aria-label="Next">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
