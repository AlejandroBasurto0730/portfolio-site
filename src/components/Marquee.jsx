import { useLanguage } from "../LanguageContext";
import { t } from "../i18n";

// Endless ribbon of skills/tools. Pauses on hover/touch.
export default function Marquee() {
  const { lang } = useLanguage();
  const s = t[lang].skills;
  const items = [...s.designItems, ...s.motionItems, ...s.toolsItems];
  const row = (suffix) =>
    items.map((item, i) => (
      <span className="marquee-item" key={`${suffix}${i}`}>
        {item}
        <i aria-hidden="true">✦</i>
      </span>
    ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-group">{row("a")}</div>
        <div className="marquee-group">{row("b")}</div>
      </div>
    </div>
  );
}
