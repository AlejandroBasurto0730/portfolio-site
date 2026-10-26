import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageContext";

const COPY = {
  en: { label: "Demo reel · 30 s", soundOn: "Sound on", soundOff: "Sound off" },
  es: { label: "Demo reel · 30 s", soundOn: "Activar sonido", soundOff: "Silenciar" },
};

// Hero reel: starts muted and looping as soon as it is on screen.
// Sound is opt-in with one tap.
export default function Reel() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return undefined;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    if (!next) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
    setMuted(next);
  };

  return (
    <div className="reel-hero">
      <div className="reel-frame">
        <video
          ref={videoRef}
          src="/projects/demo-reel.mp4"
          poster="/projects/demo-reel-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <button type="button" className="reel-sound" onClick={toggleSound} aria-pressed={!muted}>
          {muted ? c.soundOn : c.soundOff}
        </button>
      </div>
      <span className="reel-label">{c.label}</span>
    </div>
  );
}
