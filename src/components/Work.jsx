import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHead from "./SectionHead";
import ProjectModal from "./ProjectModal";
import VideoLightbox from "./VideoLightbox";

const GROUPS = [
  { key: "design", label: "Design" },
  { key: "motion", label: "Motion Graphics" },
];

export default function Work() {
  const [openProject, setOpenProject] = useState(null);
  const [lightboxProject, setLightboxProject] = useState(null);

  return (
    <section id="work" className="work">
      <div className="container">
        <SectionHead title="Selected work" subtitle="A few projects, spanning brand and motion." />

        {GROUPS.map((group) => {
          const items = projects.filter((p) => p.category === group.key);
          if (items.length === 0) return null;

          return (
            <div key={group.key} className="work-group">
              <h3 className="work-group-label">{group.label}</h3>
              <div className="work-grid">
                {items.map((p, i) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    index={i}
                    onOpen={p.caseStudy ? () => setOpenProject(p) : undefined}
                    onEnlarge={!p.caseStudy ? () => setLightboxProject(p) : undefined}
                    isOpen={openProject?.id === p.id || lightboxProject?.id === p.id}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {openProject && (
        <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
      )}

      {lightboxProject && (
        <VideoLightbox
          src={lightboxProject.media}
          title={lightboxProject.title}
          orientation={lightboxProject.orientation}
          onClose={() => setLightboxProject(null)}
        />
      )}
    </section>
  );
}
