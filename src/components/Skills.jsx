import { useReveal } from "../hooks/useReveal";
import SectionHead from "./SectionHead";

const GROUPS = [
  {
    label: "Design",
    items: ["Brand Identity", "Editorial Layout", "Packaging", "Typography", "Art Direction"],
  },
  {
    label: "Motion",
    items: ["After Effects", "Premiere Pro", "Kinetic Type", "Short-Form Edit"],
  },
  {
    label: "Tools",
    items: ["Adobe Creative Suite", "Figma", "Sitecore CMS"],
  },
  {
    label: "Education",
    items: ["Diploma, Graphic Design — BCIT", "Diploma, Video Editing & Production — BCIT"],
  },
];

export default function Skills() {
  const [ref, visible] = useReveal();
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHead title="Skills" />

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
