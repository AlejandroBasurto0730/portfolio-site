import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { t } from "../i18n";

export default function Nav({ active, sections }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const nav = t[lang].nav;

  const LABELS = {
    work: nav.work,
    about: nav.about,
    skills: nav.skills,
    contact: nav.contact,
  };

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const links = sections.filter((id) => id !== "hero");

  return (
    <header className="nav">
      <div className="container nav-inner">
        <button className="nav-logo" onClick={() => scrollTo("hero")} aria-label="Back to top">
          Alejandro Basurto
        </button>

        <nav className="nav-links" aria-label="Section navigation">
          {links.map((id) => (
            <button
              key={id}
              className={`nav-link ${active === id ? "is-active" : ""}`}
              onClick={() => scrollTo(id)}
            >
              {LABELS[id]}
            </button>
          ))}
          <a className="nav-resume" href="/resume/Alejandro_Basurto_Resume.pdf" download>
            {nav.resume}
          </a>
          <button className="nav-lang" onClick={toggleLang} aria-label="Switch language">
            {lang === "en" ? "ES" : "EN"}
          </button>
        </nav>

        <button
          className={`nav-toggle ${mobileOpen ? "is-open" : ""}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile-panel ${mobileOpen ? "is-open" : ""}`}>
        {links.map((id) => (
          <button
            key={id}
            className={`nav-mobile-link ${active === id ? "is-active" : ""}`}
            onClick={() => scrollTo(id)}
          >
            {LABELS[id]}
          </button>
        ))}
        <a
          className="nav-mobile-resume"
          href="/resume/Alejandro_Basurto_Resume.pdf"
          download
          onClick={() => setMobileOpen(false)}
        >
          {nav.resumeDownload}
        </a>
        <button
          className="nav-mobile-lang"
          onClick={() => {
            toggleLang();
            setMobileOpen(false);
          }}
        >
          {lang === "en" ? "Español" : "English"}
        </button>
      </div>
    </header>
  );
}
