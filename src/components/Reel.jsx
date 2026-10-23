import { useRef, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { useReveal } from "../hooks/useReveal";

const COPY = {
  en: { label: "Demo reel", title: "Reel, 2026", sub: "Brand and motion work in 34 seconds.", play: "Play reel" },
  es: { label: "Demo reel", title: "Reel, 2026", sub: "Trabajo de marca y motion en 34 segundos.", play: "Reproducir reel" },
};

export default function Reel() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const [ref, visible] = useReveal();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    setPlaying(true);
    v.muted = false;
    v.play().catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });
  };

  return (
    <section id="reel" className="reel">
      <div className="container">
        <div ref={ref} className={`reel-head ${visible ? "is-visible" : ""}`}>
          <span className="section-no">{c.label}</span>
          <p className="reel-sub">{c.sub}</p>
        </div>
        <div className="reel-frame">
          <video
            ref={videoRef}
            src="/projects/demo-reel.mp4"
            poster="/projects/demo-reel-poster.jpg"
            controls={playing}
            playsInline
            preload="none"
            onEnded={() => setPlaying(false)}
          />
          {!playing && (
            <button type="button" className="reel-play" onClick={start} aria-label={c.play}>
              <span>▶</span>
              {c.play}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
