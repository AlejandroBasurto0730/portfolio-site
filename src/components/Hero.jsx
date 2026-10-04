import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import { useLanguage } from "../LanguageContext";
import { t, localizeProject } from "../i18n";

const featuredBase = projects.find((p) => p.id === "prj_03");

export default function Hero() {
  const videoRef = useRef(null);
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const { lang } = useLanguage();
  const hero = t[lang].hero;
  const moveLetters = hero.moves.split("");
  const featured = localizeProject(featuredBase, lang);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => {});
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-eyebrow">{hero.eyebrow}</div>
        <h1 className="hero-title">
          {hero.titlePrefix}{" "}
          <span className="hero-title-walk" aria-label={hero.moves}>
            {moveLetters.map((letter, i) => (
              <span
                key={i}
                className={`walk-letter ${letter === " " ? "walk-space" : ""}`}
                style={{ animationDelay: `${i * 0.1}s` }}
                aria-hidden="true"
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
          .
        </h1>
        <p className="hero-sub">{hero.sub}</p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            {hero.viewWork}
          </a>
          <a href="#contact" className="btn btn-ghost">
            {hero.getInTouch}
          </a>
        </div>
      </div>

      <div className="hero-visual container">
        <button
          className="hero-visual-frame"
          onClick={() => setShowCaseStudy(true)}
          aria-label={`${hero.featured}: ${featured.title}`}
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
          <span className="hero-visual-label">
            {hero.featured} — {featured.title}
          </span>
        </button>
      </div>

      {showCaseStudy && (
        <ProjectModal project={featured} onClose={() => setShowCaseStudy(false)} />
      )}
    </section>
  );
}
