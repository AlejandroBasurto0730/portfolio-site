import { useCallback, useEffect, useRef, useState } from "react";

// Lightweight swipe carousel: native scroll-snap (smooth on touch) plus
// mouse drag, arrow buttons and a progress bar. Scroll handling writes
// straight to the DOM — no React re-render per scroll frame — so it stays
// smooth even with video cards.
export default function Carousel({ children, className = "", label = "carousel" }) {
  const trackRef = useRef(null);
  const barRef = useRef(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const edges = useRef({ prev: false, next: true });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    if (barRef.current) barRef.current.style.transform = `scaleX(${0.12 + 0.88 * p})`;
    const prev = el.scrollLeft > 4;
    const next = el.scrollLeft < max - 4;
    if (prev !== edges.current.prev) {
      edges.current.prev = prev;
      setCanPrev(prev);
    }
    if (next !== edges.current.next) {
      edges.current.next = next;
      setCanNext(next);
    }
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
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
    drag.current = { down: true, x: e.clientX, left: trackRef.current.scrollLeft, moved: false };
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
    if (!drag.current.down) return;
    drag.current.down = false;
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
          <span ref={barRef} />
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
