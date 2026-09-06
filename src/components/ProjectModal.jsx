import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ImageLightbox from "./ImageLightbox";

export default function ProjectModal({ project, onClose }) {
  const [zoomedSrc, setZoomedSrc] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && !zoomedSrc) onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, zoomedSrc]);

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
              <div className="modal-image-grid">
                {section.images.map((img) => {
                  const src = typeof img === "string" ? img : img.src;
                  const caption = typeof img === "string" ? null : img.caption;
                  return (
                    <div key={src} className="modal-image-item">
                      <button
                        className="modal-image-frame"
                        onClick={() => setZoomedSrc(src)}
                        aria-label="View larger"
                      >
                        <img src={src} alt={caption || `${title} — ${section.title}`} loading="lazy" />
                        <span className="modal-image-expand" aria-hidden="true">
                          ⤢
                        </span>
                      </button>
                      {caption && <p className="modal-image-caption">{caption}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {zoomedSrc && (
        <ImageLightbox src={zoomedSrc} alt={title} onClose={() => setZoomedSrc(null)} />
      )}
    </>,
    document.body
  );
}
