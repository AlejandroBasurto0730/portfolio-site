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
  const frameRef = useRef(null);
  const originRef = useRef(null);
  const { lang } = useLanguage();
  const hero = t[lang].hero;
  const featured = localizeProject(featuredBase, lang);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || featured.mediaType !== "video") return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.play().catch(() => {});
      else el.pause();
    });
    io.observe(el);
    return () => io.disconnect();
  }, [featured.mediaType]);

  // Gentle parallax: the featured frame drifts slower than the page.
  useEffect(() => {
    const el = frameRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const y = Math.min(window.scrollY, 900);
      el.style.setProperty("--par", `${(y * 0.12).toFixed(1)}px`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

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
          ref={frameRef}
          className="hero-visual-frame"
          onClick={() => {
            originRef.current = frameRef.current?.getBoundingClientRect() ?? null;
            setShowCaseStudy(true);
          }}
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
            </>
          ) : (
            <img className="hero-visual-video" src={featured.media} alt={featured.title} />
          )}
        </button>
        <p className="hero-visual-caption">
          {hero.featured} — {featured.title}
        </p>
      </div>

      {showCaseStudy && (
        <ProjectModal project={featured} origin={originRef.current} onClose={() => setShowCaseStudy(false)} />
      )}
    </section>
  );
}
