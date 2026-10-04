import { projectsEs } from "./data/projects_es";

// Merges a project's English base data with its Spanish translation (if any)
// when lang === "es". Falls back to English for any field without a
// translation, so a partial/missing entry never breaks the page.
export function localizeProject(project, lang) {
  if (lang !== "es") return project;
  const tr = projectsEs[project.id];
  if (!tr) return project;

  const merged = { ...project };
  if (tr.type) merged.type = tr.type;
  if (tr.blurb) merged.blurb = tr.blurb;
  if (tr.tags) merged.tags = tr.tags;

  if (project.caseStudy && tr.caseStudy) {
    merged.caseStudy = {
      ...project.caseStudy,
      problem: tr.caseStudy.problem ?? project.caseStudy.problem,
      research: tr.caseStudy.research ?? project.caseStudy.research,
      solution: tr.caseStudy.solution ?? project.caseStudy.solution,
      sections: project.caseStudy.sections.map((sec, si) => {
        const trSec = tr.caseStudy.sections?.[si];
        if (!trSec) return sec;
        return {
          ...sec,
          title: trSec.title ?? sec.title,
          images: sec.images.map((img, ii) => {
            const capEs = trSec.images?.[ii];
            if (!capEs) return img;
            if (typeof img === "string") return img;
            return { ...img, caption: capEs };
          }),
        };
      }),
    };
  }

  return merged;
}

export const t = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      skills: "Skills",
      contact: "Contact",
      resume: "Resume",
      resumeDownload: "Download Resume",
    },
    hero: {
      eyebrow: "Brand and motion design — Vancouver, BC",
      titlePrefix: "Design that",
      moves: "MOVES",
      sub: "Alejandro Basurto — building brand identity systems and motion graphics that hold up in print, on screen, and in motion.",
      viewWork: "View work",
      getInTouch: "Get in touch",
      featured: "Featured project",
    },
    work: {
      title: "Selected work",
      subtitle: "A few projects, spanning brand and motion.",
      design: "Design",
      motion: "Motion Graphics",
      viewFullProject: "View full project →",
    },
    about: {
      title: "About",
      p1: "I'm a graphic designer based in North Vancouver, BC, with a diploma in Graphic Design and a diploma in Video Editing and Production from BCIT. My work sits at the intersection of brand identity and motion — I care about systems that hold up whether they're printed, animated, or scrolled.",
      p2: "I spent over two years as an in-house designer at Crowe MacKay LLP, and interned with Henkel in Mexico before that. Outside client and agency work, I build self-directed projects — brand systems, editorial redesigns, and motion reels — to keep pushing what I can make.",
      p3: "Currently open to graphic design and marketing roles focused on brand design and motion graphics.",
    },
    skills: {
      title: "Skills",
      design: "Design",
      motion: "Motion",
      tools: "Tools",
      education: "Education",
      designItems: ["Brand Identity", "Editorial Layout", "Packaging", "Typography", "Art Direction"],
      motionItems: ["After Effects", "Premiere Pro", "Kinetic Type", "Short-Form Edit"],
      toolsItems: ["Adobe Creative Suite", "Figma", "Sitecore CMS"],
      educationItems: ["Diploma, Graphic Design — BCIT", "Diploma, Video Editing & Production — BCIT"],
    },
    contact: {
      title: "Contact",
    },
    modal: {
      problem: "The Problem",
      research: "Research",
      solution: "The Solution",
      viewLiveSite: "View live site ↗",
    },
    inspiration: {
      button: "Inspire me",
      close: "Close",
    },
  },
  es: {
    nav: {
      work: "Trabajo",
      about: "Sobre mí",
      skills: "Habilidades",
      contact: "Contacto",
      resume: "CV",
      resumeDownload: "Descargar CV",
    },
    hero: {
      eyebrow: "Diseño de marca y motion — Vancouver, BC",
      titlePrefix: "Diseño que",
      moves: "SE MUEVE",
      sub: "Alejandro Basurto — construyo sistemas de identidad de marca y motion graphics que funcionan igual de bien impresos, en pantalla, y en movimiento.",
      viewWork: "Ver trabajo",
      getInTouch: "Contáctame",
      featured: "Proyecto destacado",
    },
    work: {
      title: "Trabajo seleccionado",
      subtitle: "Algunos proyectos, entre marca y motion.",
      design: "Diseño",
      motion: "Motion Graphics",
      viewFullProject: "Ver proyecto completo →",
    },
    about: {
      title: "Sobre mí",
      p1: "Soy diseñador gráfico, radicado en North Vancouver, BC, con un diploma en Diseño Gráfico y un diploma en Edición y Producción de Video de BCIT. Mi trabajo vive en el cruce entre identidad de marca y motion — me importan los sistemas que funcionan igual de bien impresos, animados, o navegando en pantalla.",
      p2: "Pasé más de dos años como diseñador in-house en Crowe MacKay LLP, y antes hice una pasantía en Henkel en México. Fuera del trabajo con clientes y agencias, construyo proyectos propios — sistemas de marca, rediseños editoriales, y reels de motion — para seguir exigiéndome.",
      p3: "Actualmente abierto a roles de diseño gráfico y marketing enfocados en diseño de marca y motion graphics.",
    },
    skills: {
      title: "Habilidades",
      design: "Diseño",
      motion: "Motion",
      tools: "Herramientas",
      education: "Educación",
      designItems: ["Identidad de Marca", "Layout Editorial", "Empaque", "Tipografía", "Dirección de Arte"],
      motionItems: ["After Effects", "Premiere Pro", "Tipografía Cinética", "Edición Short-Form"],
      toolsItems: ["Adobe Creative Suite", "Figma", "Sitecore CMS"],
      educationItems: ["Diploma, Diseño Gráfico — BCIT", "Diploma, Edición y Producción de Video — BCIT"],
    },
    contact: {
      title: "Contacto",
    },
    modal: {
      problem: "El Problema",
      research: "Investigación",
      solution: "La Solución",
      viewLiveSite: "Ver sitio en vivo ↗",
    },
    inspiration: {
      button: "Inspírame",
      close: "Cerrar",
    },
  },
};
