import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

const MOVES_LETTERS = "MOVES".split("");
const featured = projects.find((p) => p.id === "prj_03");

export default function Hero() {
  const videoRef = useRef(null);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => {});
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-eyebrow">Brand and motion design — Vancouver, BC</div>
        <h1 className="hero-title">
          Design that{" "}
          <span className="hero-title-walk" aria-label="MOVES">
            {MOVES_LETTERS.map((letter, i) => (
              <span
                key={i}
                className="walk-letter"
                style={{ animationDelay: `${i * 0.1}s` }}
                aria-hidden="true"
              >
                {letter}
              </span>
            ))}
          </span>
          .
        </h1>
        <p className="hero-sub">
          Alejandro Basurto — building brand identity systems and motion
          graphics that hold up in print, on screen, and in motion.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            View work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-visual container">
        <button
          className="hero-visual-frame"
          onClick={() => setShowCaseStudy(true)}
          aria-label={`View featured project: ${featured.title}`}
        >
          <video
            ref={videoRef}
            className="hero-visual-video"
            src={featured.media}
            poster={featured.poster}
            muted
            loop
            playsInline
            preload="auto"
          />
          <span className="hero-visual-label">Featured project — {featured.title}</span>
        </button>
      </div>

      {showCaseStudy && (
        <ProjectModal project={featured} onClose={() => setShowCaseStudy(false)} />
      )}
    </section>
  );
}
