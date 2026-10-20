import { useReveal } from "../hooks/useReveal";

export default function SectionHead({ title, subtitle, no }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`section-head ${visible ? "is-visible" : ""}`}>
      {no && <span className="section-no">{no} /</span>}
      <h2 className="section-title">
        <span className="section-title-inner">{title}</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
