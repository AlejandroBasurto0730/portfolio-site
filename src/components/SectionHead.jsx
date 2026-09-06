import { useReveal } from "../hooks/useReveal";

export default function SectionHead({ title, subtitle }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`section-head ${visible ? "is-visible" : ""}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
