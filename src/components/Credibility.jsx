import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../LanguageContext";

const DATA = {
  en: {
    label: "Experience & education",
    items: [
      { name: "Crowe MacKay LLP", role: "In-house graphic designer · 2+ years" },
      { name: "Henkel", role: "Graphic design intern" },
      { name: "House of Knifes", role: "Freelance video editor" },
      { name: "BCIT", role: "Graphic Design · Video Editing & Production" },
    ],
  },
  es: {
    label: "Experiencia y formación",
    items: [
      { name: "Crowe MacKay LLP", role: "Diseñador gráfico interno · 2+ años" },
      { name: "Henkel", role: "Prácticas en diseño gráfico" },
      { name: "House of Knifes", role: "Editor de video freelance" },
      { name: "BCIT", role: "Diseño Gráfico · Edición y Producción de Video" },
    ],
  },
};

export default function Credibility() {
  const [ref, visible] = useReveal();
  const { lang } = useLanguage();
  const d = DATA[lang];
  return (
    <div ref={ref} className={`creds ${visible ? "is-visible" : ""}`}>
      <div className="container">
        <div className="creds-label">{d.label}</div>
        <ul className="creds-list">
          {d.items.map((it, i) => (
            <li key={it.name} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="creds-name">{it.name}</span>
              <span className="creds-role">{it.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
