import { useEffect, useState } from "react";

const LABELS = {
  hero: "Home",
  work: "Work",
  about: "About",
  skills: "Skills",
  contact: "Contact",
};

export default function Nav({ active, sections }) {
  const [mobileOpen, setMobileOpen] = useState(false);

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
            Resume
          </a>
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
          Download Resume
        </a>
      </div>
    </header>
  );
}
