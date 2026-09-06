import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ImageLightbox from "./ImageLightbox";
import VideoLightbox from "./VideoLightbox";

export default function ProjectModal({ project, onClose }) {
  const [zoomed, setZoomed] = useState(null); // { type, src, poster, orientation }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && !zoomed) onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, zoomed]);

  if (!project) return null;
  const { title, type, year, blurb, caseStudy } = project;
  const { problem, solution, research } = caseStudy || {};

  return createPortal(
    <>
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>

          <div className="modal-header">
            <div className="modal-meta">
              {type} · {year}
            </div>
            <h2 className="modal-title">{title}</h2>
            <p className="modal-blurb">{blurb}</p>
          </div>

          {(problem || solution || research) && (
            <div className="modal-process">
              {problem && (
                <div className="modal-process-block">
                  <h3 className="modal-process-label">The Problem</h3>
                  <p className="modal-process-text">{problem}</p>
                </div>
              )}
              {research && (
                <div className="modal-process-block">
                  <h3 className="modal-process-label">Research</h3>
                  <p className="modal-process-text">{research}</p>
                </div>
              )}
              {solution && (
                <div className="modal-process-block">
                  <h3 className="modal-process-label">The Solution</h3>
                  <p className="modal-process-text">{solution}</p>
                </div>
              )}
            </div>
          )}

          {caseStudy?.sections.map((section) => (
            <div key={section.title} className="modal-section">
              <h3 className="modal-section-title">{section.title}</h3>
              <div className={`modal-image-grid ${section.layout === "compare" ? "is-compare" : ""}`}>
                {section.images.map((item) => {
                  const src = typeof item === "string" ? item : item.src;
                  const caption = typeof item === "string" ? null : item.caption;
                  const isVideo = typeof item === "object" && item.type === "video";
                  const poster = typeof item === "object" ? item.poster : undefined;
                  const orientation = typeof item === "object" ? item.orientation : undefined;

                  return (
                    <div key={src} className="modal-image-item">
                      {isVideo ? (
                        <button
                          className="modal-image-frame"
                          onClick={() => setZoomed({ type: "video", src, poster, orientation })}
                          aria-label="Play larger"
                        >
                          <video src={src} poster={poster} muted loop playsInline preload="metadata" />
                          <span className="modal-image-expand" aria-hidden="true">
                            ⤢
                          </span>
                        </button>
                      ) : (
                        <button
                          className="modal-image-frame"
                          onClick={() => setZoomed({ type: "image", src })}
                          aria-label="View larger"
                        >
                          <img src={src} alt={caption || `${title} — ${section.title}`} loading="lazy" />
                          <span className="modal-image-expand" aria-hidden="true">
                            ⤢
                          </span>
                        </button>
                      )}
                      {caption && <p className="modal-image-caption">{caption}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {zoomed?.type === "image" && (
        <ImageLightbox src={zoomed.src} alt={title} onClose={() => setZoomed(null)} />
      )}
      {zoomed?.type === "video" && (
        <VideoLightbox
          src={zoomed.src}
          title={title}
          orientation={zoomed.orientation}
          onClose={() => setZoomed(null)}
        />
      )}
    </>,
    document.body
  );
}
