import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function VideoLightbox({ src, title, orientation, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div className="lightbox-backdrop" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ✕
      </button>
      <video
        className={`lightbox-video ${orientation === "vertical" ? "is-vertical" : ""}`}
        src={src}
        autoPlay
        loop
        controls
        playsInline
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
}
