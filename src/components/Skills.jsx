import { useReveal } from "../hooks/useReveal";
import SectionHead from "./SectionHead";
import { useLanguage } from "../LanguageContext";
import { t } from "../i18n";

export default function Skills() {
  const [ref, visible] = useReveal();
  const { lang } = useLanguage();
  const skills = t[lang].skills;

  const GROUPS = [
    { label: skills.design, items: skills.designItems },
    { label: skills.motion, items: skills.motionItems },
    { label: skills.tools, items: skills.toolsItems },
    { label: skills.education, items: skills.educationItems },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHead title={skills.title} />

        <div ref={ref} className={`skills-grid ${visible ? "is-visible" : ""}`}>
          {GROUPS.map((g, i) => (
            <div className="skills-col" key={g.label} style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="skills-label mono">{g.label}</div>
              <ul className="skills-list">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
