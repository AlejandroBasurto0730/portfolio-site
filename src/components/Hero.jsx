import { useEffect, useRef, useState } from "react";
import { projects, FEATURED_PROJECT_ID } from "../data/projects";
import ProjectModal from "./ProjectModal";
import HeroWord from "./HeroWord";
import { useLanguage } from "../LanguageContext";
import { t, localizeProject } from "../i18n";

const featuredBase = projects.find((p) => p.id === FEATURED_PROJECT_ID);

export default function Hero() {
  const videoRef = useRef(null);
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const { lang } = useLanguage();
  const hero = t[lang].hero;
  const featured = localizeProject(featuredBase, lang);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || featured.mediaType !== "video") return;
    el.play().catch(() => {});
  }, [featured.mediaType]);

  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-eyebrow">{hero.eyebrow}</div>
        <h1 className="hero-title">
          <span className="hero-title-prefix">{hero.titlePrefix}</span>
          <HeroWord text={hero.moves} />
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
          {featured.mediaType === "video" ? (
            <>
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
            </>
          ) : (
            <img className="hero-visual-video" src={featured.media} alt={featured.title} />
          )}
        </button>
        {featured.mediaType !== "video" && (
          <p className="hero-visual-caption">
            {hero.featured} — {featured.title}
          </p>
        )}
      </div>

      {showCaseStudy && (
        <ProjectModal project={featured} onClose={() => setShowCaseStudy(false)} />
      )}
    </section>
  );
}
