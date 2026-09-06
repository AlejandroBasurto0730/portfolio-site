import { useEffect, useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import { requestPlay, releasePlay } from "../videoPlaybackManager";

export default function ProjectCard({ project, index, onOpen, onEnlarge, isOpen }) {
  const { title, type, year, blurb, media, mediaType, poster, isPlaceholder, orientation, link } = project;
  const [ref, visible] = useReveal();
  const videoRef = useRef(null);
  const frameRef = useRef(null);

  const isVideo = mediaType === "video";
  const canEnlarge = isVideo && !!onEnlarge;

  // Single source of truth for play/pause: only decode video while its card
  // is actually on screen AND its modal/lightbox isn't open. Playback goes
  // through a shared manager that caps concurrent decoders — asking too
  // many <video> elements to play at once is what was causing the freezes.
  useEffect(() => {
    if (!isVideo) return;
    const el = videoRef.current;
    const frame = frameRef.current;
    if (!el || !frame) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (isOpen) {
          releasePlay(el);
          return;
        }
        if (entry.isIntersecting) {
          requestPlay(el);
        } else {
          releasePlay(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(frame);
    return () => {
      observer.disconnect();
      releasePlay(el);
    };
  }, [isVideo, isOpen]);

  const handleMouseEnter = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    // Browsers pause an autoplaying video the moment it's unmuted without a
    // real click/tap behind it (hover doesn't count). Re-request playback
    // through the manager, and if that's blocked, fall back to muted
    // instead of freezing.
    requestPlay(el).then(() => {
      if (el.paused) el.muted = true;
    });
  };

  const handleMouseLeave = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
  };

  const handleFrameClick = () => {
    if (onOpen) {
      onOpen();
    } else if (canEnlarge) {
      onEnlarge();
    }
  };

  const handleFrameKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleFrameClick();
    }
  };

  const CardInner = (
    <>
      <div
        ref={frameRef}
        className={`project-frame ${isPlaceholder ? "is-placeholder" : ""} ${
          orientation === "vertical" ? "is-vertical" : ""
        }`}
        onMouseEnter={isVideo ? handleMouseEnter : undefined}
        onMouseLeave={isVideo ? handleMouseLeave : undefined}
      >
        {isVideo ? (
          <video
            ref={videoRef}
            src={media}
            poster={poster}
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : (
          <img src={media} alt={title} loading="lazy" />
        )}
        {canEnlarge && (
          <span className="expand-indicator" aria-hidden="true">
            ⤢
          </span>
        )}
      </div>

      <div className="project-meta">
        <div className="project-meta-top">
          <h3 className="project-title">{title}</h3>
          <span className="project-year">{year}</span>
        </div>
        <div className="project-type">{type}</div>
        <p className="project-blurb">{blurb}</p>
        {onOpen && <span className="project-view-link">View full project →</span>}
      </div>
    </>
  );

  return (
    <div
      ref={ref}
      className={`project-card ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${(index % 4) * 70}ms` }}
    >
      {onOpen || canEnlarge ? (
        <div
          className="project-card-face project-card-button"
          role="button"
          tabIndex={0}
          onClick={handleFrameClick}
          onKeyDown={handleFrameKeyDown}
        >
          {CardInner}
        </div>
      ) : link ? (
        <a href={link} target="_blank" rel="noreferrer" className="project-card-link">
          {CardInner}
        </a>
      ) : (
        <div className="project-card-face">{CardInner}</div>
      )}
    </div>
  );
}
