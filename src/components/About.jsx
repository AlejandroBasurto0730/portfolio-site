import { useReveal } from "../hooks/useReveal";
import SectionHead from "./SectionHead";
import { useLanguage } from "../LanguageContext";
import { t } from "../i18n";

export default function About() {
  const [ref, visible] = useReveal();
  const { lang } = useLanguage();
  const about = t[lang].about;

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHead title={about.title} />

        <div ref={ref} className={`about-body ${visible ? "is-visible" : ""}`}>
          <p>{about.p1}</p>
          <p>{about.p2}</p>
          <p>{about.p3}</p>
        </div>
      </div>
    </section>
  );
}
