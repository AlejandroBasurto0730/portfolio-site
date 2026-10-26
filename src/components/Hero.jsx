import Reel from "./Reel";
import HeroWord from "./HeroWord";
import { useLanguage } from "../LanguageContext";
import { t } from "../i18n";

export default function Hero() {
  const { lang } = useLanguage();
  const hero = t[lang].hero;

  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-eyebrow">
          <span className="hero-status">
            <i aria-hidden="true" />
            {lang === "es" ? "Disponible para trabajar" : "Open to work"}
          </span>
          <span className="hero-eyebrow-text">{hero.eyebrow}</span>
        </div>
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
        <Reel />
      </div>
    </section>
  );
}
