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
      featuredWhy: "Why this one first: my most complete work. A full brand identity plus a bilingual website I designed and built from scratch for a real client.",
      featuredCta: "View case study →",
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
      p1: "I'm a graphic and motion designer based in North Vancouver, BC, with BCIT certificates in Graphic Design and in Video Editing and Production, after studying Multimedia Design at Universidad Anáhuac. My work sits at the intersection of brand identity and motion — I care about systems that hold up whether they're printed, animated, or scrolled.",
      p2: "I spent two years as the in-house designer at Crowe MacKay LLP, a national professional services firm, producing web, email, social, video, and event materials and publishing them in Sitecore and Mailchimp. Before that I interned at Henkel in Mexico, and today I edit social videos for House of Knives. On the side I build self-directed projects — brand systems, editorial redesigns, and motion reels — to keep pushing what I can make.",
      p3: "Currently open to graphic design and marketing roles focused on brand design and motion graphics. I work in Spanish and English, and I'm learning French.",
    },
    skills: {
      title: "Skills",
      design: "Design",
      motion: "Motion",
      tools: "Tools",
      education: "Education & languages",
      designItems: ["Brand Identity", "Typography", "Print & Packaging", "Editorial Layout", "Social Media Content"],
      motionItems: ["After Effects", "Premiere Pro", "Kinetic Type", "Short-Form Edit"],
      toolsItems: ["Illustrator, Photoshop, InDesign", "Figma", "Sitecore CMS, Mailchimp", "HTML & CSS"],
      educationItems: ["Multimedia Design (2019–2023) — Universidad Anáhuac México", "Associate Certificate, Graphic Design — BCIT", "Certificate, Video Production & Editing — BCIT", "Spanish · English (IELTS C1) · French (A2–B1)"],
    },
    contact: {
      title: "Contact",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSend: "Send message",
      formSending: "Sending…",
      formSuccess: "Thanks — your message is in. I'll get back to you soon.",
      formError: "Something went wrong. Try again, or email me directly.",
    },
    modal: {
      problem: "The Problem",
      research: "Research",
      solution: "The Solution",
      viewLiveSite: "View live site ↗",
      viewPdf: "Download the full brand guidelines (PDF) ↓",
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
      featuredWhy: "Por qué va primero: es mi trabajo más completo. Una identidad de marca y un sitio web bilingüe que diseñé y construí desde cero para un cliente real.",
      featuredCta: "Ver caso de estudio →",
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
      p1: "Soy diseñador gráfico y de motion, radicado en North Vancouver, BC, con certificados de BCIT en Diseño Gráfico y en Edición y Producción de Video, tras estudiar Diseño Multimedia en la Universidad Anáhuac. Mi trabajo vive en el cruce entre identidad de marca y motion — me importan los sistemas que funcionan igual de bien impresos, animados, o navegando en pantalla.",
      p2: "Pasé dos años como diseñador in-house en Crowe MacKay LLP, una firma nacional de servicios profesionales, produciendo materiales web, de correo, redes, video y eventos, y publicándolos en Sitecore y Mailchimp. Antes hice una pasantía en Henkel en México, y hoy edito videos para redes de House of Knives. Aparte construyo proyectos propios — sistemas de marca, rediseños editoriales y reels de motion — para seguir exigiéndome.",
      p3: "Actualmente abierto a roles de diseño gráfico y marketing enfocados en diseño de marca y motion graphics. Trabajo en español e inglés, y estoy aprendiendo francés.",
    },
    skills: {
      title: "Habilidades",
      design: "Diseño",
      motion: "Motion",
      tools: "Herramientas",
      education: "Educación e idiomas",
      designItems: ["Identidad de Marca", "Tipografía", "Impresión y Empaque", "Layout Editorial", "Contenido para Redes"],
      motionItems: ["After Effects", "Premiere Pro", "Tipografía Cinética", "Edición Short-Form"],
      toolsItems: ["Illustrator, Photoshop, InDesign", "Figma", "Sitecore CMS, Mailchimp", "HTML y CSS"],
      educationItems: ["Diseño Multimedia (2019–2023) — Universidad Anáhuac México", "Certificado Asociado, Diseño Gráfico — BCIT", "Certificado, Producción y Edición de Video — BCIT", "Español · Inglés (IELTS C1) · Francés (A2–B1)"],
    },
    contact: {
      title: "Contacto",
      formName: "Nombre",
      formEmail: "Correo",
      formMessage: "Mensaje",
      formSend: "Enviar mensaje",
      formSending: "Enviando…",
      formSuccess: "Gracias — tu mensaje ya llegó. Te respondo pronto.",
      formError: "Algo salió mal. Intenta de nuevo, o escríbeme directo por correo.",
    },
    modal: {
      problem: "El Problema",
      research: "Investigación",
      solution: "La Solución",
      viewLiveSite: "Ver sitio en vivo ↗",
      viewPdf: "Descargar el manual de marca completo (PDF) ↓",
    },
    inspiration: {
      button: "Inspírame",
      close: "Cerrar",
    },
  },
};
