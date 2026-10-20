import { useReveal } from "../hooks/useReveal";
import SectionHead from "./SectionHead";
import { useLanguage } from "../LanguageContext";
import { t } from "../i18n";

// Drop a photo into /public (e.g. /about-photo.jpg) and put its path here.
const ABOUT_PHOTO = "/about-photo.jpg";

export default function About() {
  const [ref, visible] = useReveal();
  const { lang } = useLanguage();
  const about = t[lang].about;

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHead no="02" title={about.title} />

        <div ref={ref} className={`about-body ${visible ? "is-visible" : ""} ${ABOUT_PHOTO ? "has-photo" : ""}`}>
          {ABOUT_PHOTO && (
            <div className="about-photo">
              <img src={ABOUT_PHOTO} alt="Alejandro Basurto" loading="lazy" />
            </div>
          )}
          <div className="about-text">
            <p className="about-lead">{about.p1}</p>
            <p>{about.p2}</p>
            <p>{about.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
