import { useEffect, useRef } from "react";

// Desktop-only follower cursor. Grows and shows a label over interactive
// project cards and carousels.
export default function Cursor() {
  const ref = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return undefined;
    const el = ref.current;
    let x = -100,
      y = -100,
      cx = -100,
      cy = -100,
      raf = 0;
    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      el.classList.add("is-on");
      const t = e.target.closest?.("[data-cursor], .project-card-button, .carousel-track, .btn, a, button");
      let text = "";
      if (t) {
        if (t.dataset?.cursor) text = t.dataset.cursor;
        else if (t.closest(".project-card-button")) text = "View";
        else if (t.classList.contains("carousel-track")) text = "Drag";
      }
      label.current.textContent = text;
      el.classList.toggle("is-big", !!text);
      el.classList.toggle("is-link", !text && !!t);
    };
    const leave = () => el.classList.remove("is-on");
    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(loop);
    document.documentElement.classList.add("has-cursor");
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <span ref={label} className="cursor-label" />
    </div>
  );
}
