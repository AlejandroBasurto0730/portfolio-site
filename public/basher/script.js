/* ============================================================
   BASHER — shared site behaviour: i18n (EN/ES) + nav + footer
   ============================================================ */

const I18N = {
  en: {
    nav: { home:"Home", about:"About Us", services:"Services", careers:"Careers", contact:"Contact" },
    footer: {
      tagline: "Passion for what we do…",
      office: "Office",
      addressLine: "Paseo de la Reforma 342, Piso 26<br>Col. Juárez, Alc. Cuauhtémoc<br>C.P. 06600 — Mexico City",
      contact: "Contact",
      contactBlock: "Rodolfo Basurto<br><a href=\"mailto:rbasurto@basher.mx\">rbasurto@basher.mx</a><br>+52 55 3222 5122<br><a href=\"mailto:contacto@basher.mx\">contacto@basher.mx</a>",
      site: "Site",
      rights: "All rights reserved."
    },

    /* ---------- HOME ---------- */
    hero: {
      eyebrow: "Basurto Herrera Consultores, S.C.",
      title: "Technical rigor and personalized service.",
      lede: "Accounting, tax and audit services with direct involvement from the lead partner.",
      cta1: "Our services",
      cta2: "Get in touch"
    },
    home: {
      aboutEyebrow: "Who we are",
      aboutTitle: "A Mexican firm built on experience and trust",
      aboutBody: "We are a Mexican firm of public accountants and independent professionals, founded on the vision of our founding partner to offer clients the knowledge and experience gained over more than 30 years of service to public and private, national and international companies.",
      aboutCta: "More about us",
      pillarsEyebrow: "What drives us",
      pillarsTitle: "Mission, vision and values",
      servicesEyebrow: "What we do",
      servicesTitle: "Services",
      servicesLede: "Audit, accounting and tax compliance, and accounting advisory services, with direct involvement from the lead partner.",
      servicesCta: "View all services",
      industriesEyebrow: "Our experience",
      industriesTitle: "Sector experience",
      ctaTitle: "Let's build value together.",
      ctaBody: "Tell us about your company and we'll show you how Basher can support your compliance and growth.",
      ctaButton: "Contact our team"
    },

    /* ---------- shared: mission / vision / values ---------- */
    mission: { title:"Mission", body:"“To generate value and trust for our clients through the quality and timeliness of our services.”" },
    vision: { title:"Vision", body:"“To become a business partner to our clients and help them generate tangible and intangible value.”" },
    values: {
      title:"Values",
      items:["Integrity","Transparency","Confidentiality","Teamwork","Open communication","Openness to change"]
    },

    /* ---------- ABOUT ---------- */
    aboutPage: {
      eyebrow: "About Basher",
      title: "Who we are",
      lede: "A Mexican firm of public accountants and independent professionals, built on more than 30 years of experience."
    },
    who: {
      eyebrow: "Who we are",
      title: "Knowledge and experience you can rely on",
      body: "We are a Mexican firm of public accountants and independent professionals, founded on the vision of our founding partner to offer clients the knowledge and experience gained over more than 30 years of service to public and private, national and international companies.",
      tagline: "Basher, passion for what we do…",
      stat1n: "30+", stat1s: "Years of experience",
      stat2n: "7", stat2s: "Industries served"
    },
    industries: {
      eyebrow: "Our experience",
      title: "Sector experience",
      body: "Our experience has allowed us to specialize across several sectors of the economy, bringing added value to the services we provide.",
      tags: ["Consumer sector","Industrial sector","Services sector","Financial services sector"],
      items: [
        "This sector produces and markets goods purchased by end consumers for personal or household use. It is one of the most dynamic sectors of the global economy, closely tied to consumers' purchasing power and consumption habits. We understand the business risks these companies face, and our experience lets us make valuable recommendations so leadership can manage them strategically.",
        "We understand the processes of transforming raw materials into manufactured or semi-finished products, and how this sector integrates with other industries.",
        "This important sector does not produce physical goods, but offers intangible products that meet consumers' basic needs — an area where we have extensive experience.",
        "We support clients in the financial services sector and understand the importance of activities related to raising funds, managing risk and allocating resources among individuals, companies and government."
      ]
    },
    careers: {
      eyebrow: "Join Basher",
      title: "Growing our talent",
      lede: "At Basher you'll develop professional judgment working with clients and tackling real challenges, as part of a team that shares knowledge, recognizes achievements and solves problems together.",
      items: [
        { title: "We grow together", body: "We celebrate progress, offer support and share knowledge." },
        { title: "We work with openness", body: "We speak with clarity, own our mistakes, act with respect and seek to understand others." },
        { title: "We stand behind our work", body: "We seek to understand before proposing, and offer personalized, reliable attention." }
      ]
    },
    careersCta: {
      title: "Want to join Basher?",
      body: "Tell us about your background and let's talk about the opportunities available.",
      button: "Contact us"
    },
    partners: {
      eyebrow: "Our team",
      title: "Meet our partner",
      lede: "Rodolfo Basurto leads our practice, bringing the technical depth and hands-on attention our clients rely on.",
      eduTitle: "Education",
      expTitle: "Professional experience",
      rodolfo: {
        name: "C.P.C. and M.B.A. Rodolfo Basurto",
        role: "Partner Lead, Audit &amp; Advisory",
        edu: [
          "Certified Public Accountant by the Mexican Institute of Public Accountants (CPC).",
          "Public Accountant Registered with the General Tax Administration (CPR).",
          "Master's in Administration and Finance.",
          "Senior Management Program at IPADE.",
          "Leadership Program at Georgetown University.",
          "Member of the National College of Independent Professional Corporate Advisors."
        ],
        exp: [
          "Partner Lead of the Audit &amp; Advisory practice.",
          "More than 30 years of experience as a consultant, serving Mexican and international public and private companies.",
          "Instructor in accounting standards and university professor.",
          "Extensive experience in Financial Reporting Standards (NIF), International Financial Reporting Standards (IFRS) and U.S. Generally Accepted Accounting Principles (US GAAP).",
          "More than 20 years collaborating with an international (Big Four) firm."
        ]
      }
    },
    aboutCta: {
      title: "Ready to work with a partner who knows your industry?",
      body: "Reach out and let's talk about how Basher can support your team.",
      button: "Contact us"
    },

    /* ---------- SERVICES ---------- */
    servicesPage: {
      eyebrow: "What we do",
      title: "Our services",
      lede: "Audit, accounting and tax compliance, and accounting advisory services, with direct involvement from the lead partner."
    },
    svc: {
      auditoriaTitle: "Audit",
      auditoriaIntro: "We follow international standards to carry out the audit process, supported by technology tools that let us issue reliable audit reports for the benefit of our clients.",
      auditoriaChecklist: [
        "Financial statement audits",
        "Audits for tax purposes",
        "Special-purpose audits",
        "Statutory auditor's report (dictamen de comisario)"
      ],

      cumplimientoTitle: "Accounting &amp; Tax Compliance",
      cumplimientoIntro: "We help our clients meet their accounting and tax regulatory obligations, ensuring accuracy and timeliness in filing those obligations.",
      cumplimientoContableLabel: "Accounting",
      cumplimientoContable: [
        "General accounting",
        "Review of consolidation packages",
        "Preparation of annual financial statements",
        "Accounting training"
      ],
      cumplimientoFiscalLabel: "Tax",
      cumplimientoFiscal: [
        "Monthly and annual tax calculations",
        "Transfer pricing studies",
        "Tax audit report (dictamen fiscal)"
      ],

      consultoriaTitle: "Accounting Advisory",
      consultoriaIntro: "Our accounting advisory services bring a strategic perspective to our clients, strengthening their risk-analysis processes for decision-making.",
      consultoria: [
        "Diagnosis of local and international accounting regulatory compliance",
        "Support implementing specific accounting standards (NIF, IFRS or US GAAP)",
        "Assessment of internal control structure design",
        "Review of internal control operating effectiveness",
        "Support restructuring internal control processes"
      ]
    },
    servicesCta: {
      title: "Not sure which service you need?",
      body: "Tell us about your company's situation and we'll help you find the right scope of work.",
      button: "Talk to us"
    },

    /* ---------- CONTACT ---------- */
    contactPage: {
      eyebrow: "Get in touch",
      title: "Contact us",
      lede: "We would be glad to hear about your company and discuss how Basher can help."
    },
    contact: {
      officeTitle: "Office location",
      officeCity: "Mexico City",
      officeAddress: "Paseo de la Reforma 342, Piso 26<br>Col. Juárez, Alc. Cuauhtémoc<br>C.P. 06600<br>Ciudad de México",
      infoTitle: "Contact information",
      infoName: "Rodolfo Basurto",
      formTitle: "Send us a message",
      labelName: "Full name",
      labelEmail: "Email",
      labelSubject: "Subject",
      labelMessage: "Message",
      placeholderName: "Your name",
      placeholderEmail: "you@company.com",
      placeholderSubject: "How can we help?",
      placeholderMessage: "Tell us a bit about your company and what you need...",
      submit: "Send message",
      note: "This form opens your email client addressed to contacto@basher.mx — no data is stored or sent anywhere else."
    }
  },

  es: {
    nav: { home:"Inicio", about:"Nosotros", services:"Servicios", careers:"Carreras", contact:"Contacto" },
    footer: {
      tagline: "Pasión por lo que hacemos…",
      office: "Oficina",
      addressLine: "Paseo de la Reforma 342, Piso 26<br>Col. Juárez, Alc. Cuauhtémoc<br>C.P. 06600 — Ciudad de México",
      contact: "Contacto",
      contactBlock: "Rodolfo Basurto<br><a href=\"mailto:rbasurto@basher.mx\">rbasurto@basher.mx</a><br>+52 55 3222 5122<br><a href=\"mailto:contacto@basher.mx\">contacto@basher.mx</a>",
      site: "Sitio",
      rights: "Todos los derechos reservados."
    },

    /* ---------- HOME ---------- */
    hero: {
      eyebrow: "Basurto Herrera Consultores, S.C.",
      title: "Rigor técnico y servicio personalizado.",
      lede: "Servicios contables, fiscales y de auditoría con participación directa del socio líder.",
      cta1: "Nuestros servicios",
      cta2: "Contáctanos"
    },
    home: {
      aboutEyebrow: "Quiénes somos",
      aboutTitle: "Una firma mexicana construida sobre experiencia y confianza",
      aboutBody: "Somos una firma mexicana de contadores públicos y profesionistas independientes, que nació con la visión del socio fundador de ofrecer a nuestros clientes sus conocimientos y experiencia adquiridos a lo largo de más de 30 años de servicio a empresas públicas y privadas, nacionales e internacionales.",
      aboutCta: "Más sobre nosotros",
      pillarsEyebrow: "Lo que nos mueve",
      pillarsTitle: "Misión, visión y valores",
      servicesEyebrow: "Lo que hacemos",
      servicesTitle: "Servicios",
      servicesLede: "Auditoría, cumplimiento contable y fiscal, y consultoría contable, con la participación directa del socio líder.",
      servicesCta: "Ver todos los servicios",
      industriesEyebrow: "Nuestra experiencia",
      industriesTitle: "Experiencia sectorial",
      ctaTitle: "Construyamos valor juntos.",
      ctaBody: "Cuéntanos sobre tu empresa y te mostraremos cómo Basher puede apoyar tu cumplimiento y crecimiento.",
      ctaButton: "Contacta a nuestro equipo"
    },

    /* ---------- shared: mission / vision / values ---------- */
    mission: { title:"Misión", body:"“Generar valor y confianza a nuestros clientes a través de la calidad y oportunidad de nuestros servicios.”" },
    vision: { title:"Visión", body:"“Convertirnos en un socio de negocios de nuestros clientes y apoyarlos a generar valor tangible e intangible.”" },
    values: {
      title:"Valores",
      items:["Integridad","Transparencia","Confidencialidad","Trabajo en equipo","Comunicación abierta","Disponibilidad al cambio"]
    },

    /* ---------- ABOUT ---------- */
    aboutPage: {
      eyebrow: "Sobre Basher",
      title: "Quiénes somos",
      lede: "Una firma mexicana de contadores públicos y profesionistas independientes, con más de 30 años de experiencia."
    },
    who: {
      eyebrow: "Quiénes somos",
      title: "Conocimiento y experiencia en los que puedes confiar",
      body: "Somos una firma mexicana de contadores públicos y profesionistas independientes, que nació con la visión del socio fundador de ofrecer a nuestros clientes sus conocimientos y experiencia adquiridos a lo largo de más de 30 años de servicio a empresas públicas y privadas, nacionales e internacionales.",
      tagline: "Basher, pasión por lo que hacemos…",
      stat1n: "30+", stat1s: "Años de experiencia",
      stat2n: "7", stat2s: "Industrias atendidas"
    },
    industries: {
      eyebrow: "Nuestra experiencia",
      title: "Experiencia sectorial",
      body: "Nuestra experiencia nos ha permitido especializarnos en diversos sectores de nuestra economía, lo que aporta valor a la prestación de nuestros servicios.",
      tags: ["Sector de consumo","Sector industrial","Sector de servicios","Sector de servicios financieros"],
      items: [
        "Este sector produce y comercializa bienes adquiridos por los consumidores finales para su uso personal o doméstico. Representa uno de los sectores más dinámicos de la economía global y se caracteriza por estar directamente vinculado al poder adquisitivo y los hábitos de consumo de los clientes. Entendemos los riesgos de negocio a los que se enfrentan y nuestra experiencia nos permite hacer recomendaciones de valor para que la alta dirección los gestione estratégicamente.",
        "Entendemos los procesos de transformación de materias primas en productos manufacturados o semielaborados y cómo este sector se integra en otras industrias.",
        "Este importante sector, que no produce bienes materiales pero ofrece productos intangibles que satisfacen necesidades básicas de los consumidores, forma parte de nuestros segmentos de negocio en los que contamos con amplia experiencia.",
        "Apoyamos a clientes del sector de servicios financieros y entendemos la importancia de las actividades relacionadas con la captación, gestión de riesgos y colocación de recursos entre personas, empresas y gobierno."
      ]
    },
    careers: {
      eyebrow: "Únete a Basher",
      title: "Atracción de talento",
      lede: "En Basher desarrollarás criterio profesional trabajando con clientes y enfrentando retos reales, dentro de un equipo que comparte conocimiento, reconoce los logros y resuelve los problemas en conjunto.",
      items: [
        { title: "Crecemos juntos", body: "Celebramos los avances, ofrecemos apoyo y compartimos conocimiento." },
        { title: "Trabajamos con apertura", body: "Hablamos con claridad, reconocemos errores, actuamos con respeto y buscamos comprender a los demás." },
        { title: "Respondemos por nuestro trabajo", body: "Entendemos antes de proponer y ofrecemos una atención personalizada y confiable." }
      ]
    },
    careersCta: {
      title: "¿Quieres unirte a Basher?",
      body: "Cuéntanos sobre tu perfil y hablemos de las oportunidades disponibles.",
      button: "Contáctanos"
    },
    partners: {
      eyebrow: "Nuestro equipo",
      title: "Conoce a nuestro socio",
      lede: "Rodolfo Basurto lidera nuestra práctica, aportando la profundidad técnica y la atención cercana en la que confían nuestros clientes.",
      eduTitle: "Formación académica",
      expTitle: "Experiencia profesional",
      rodolfo: {
        name: "C.P.C. y M.B.A. Rodolfo Basurto",
        role: "Socio Líder, Auditoría y Asesoría",
        edu: [
          "Contador Público Certificado por el Instituto Mexicano de Contadores Públicos (CPC).",
          "Contador Público Registrado ante la Administración General Fiscal (CPR).",
          "Maestría en Administración y Finanzas.",
          "Programa de Alta Dirección de Empresas en el IPADE.",
          "Programa de Liderazgo en Georgetown University.",
          "Miembro del Colegio Nacional de Consejeros Profesionales Independientes de Empresas."
        ],
        exp: [
          "Socio Líder del área de Auditoría y Asesoría.",
          "Más de 30 años de experiencia como consultor, atendiendo a compañías internacionales y mexicanas, públicas y privadas.",
          "Instructor de normatividad contable y catedrático universitario.",
          "Amplia experiencia en Normas de Información Financiera (NIF), Normas Internacionales de Información Financiera (NIIF) y Principios de Contabilidad Generalmente Aceptados en Estados Unidos (US GAAP).",
          "Más de 20 años colaborando para una firma internacional (Big Four)."
        ]
      }
    },
    aboutCta: {
      title: "¿Listo para trabajar con un socio que conoce tu industria?",
      body: "Contáctanos y hablemos sobre cómo Basher puede apoyar a tu equipo.",
      button: "Contáctanos"
    },

    /* ---------- SERVICES ---------- */
    servicesPage: {
      eyebrow: "Lo que hacemos",
      title: "Nuestros servicios",
      lede: "Auditoría, cumplimiento contable y fiscal, y consultoría contable, con la participación directa del socio líder."
    },
    svc: {
      auditoriaTitle: "Auditoría",
      auditoriaIntro: "Nos apegamos a la normatividad internacional para llevar a cabo el proceso de auditoría, apoyándonos en herramientas tecnológicas que nos permiten emitir informes de auditoría confiables en beneficio de nuestros clientes.",
      auditoriaChecklist: [
        "Auditorías de estados financieros",
        "Auditorías para efectos fiscales",
        "Auditorías para propósitos específicos",
        "Dictamen de Comisario"
      ],

      cumplimientoTitle: "Cumplimiento contable y fiscal",
      cumplimientoIntro: "Apoyamos a nuestros clientes a cumplir con sus obligaciones normativas, tanto contables como fiscales, garantizando la exactitud y oportunidad en la presentación de dichas obligaciones.",
      cumplimientoContableLabel: "Contable",
      cumplimientoContable: [
        "Contabilidad general",
        "Revisión de paquetes de consolidación",
        "Elaboración de estados financieros anuales",
        "Capacitación en materia contable"
      ],
      cumplimientoFiscalLabel: "Fiscal",
      cumplimientoFiscal: [
        "Cálculo de impuestos mensuales y anuales",
        "Estudios de precios de transferencia",
        "Dictamen fiscal"
      ],

      consultoriaTitle: "Consultoría contable",
      consultoriaIntro: "Nuestros servicios de consultoría contable aportan una visión estratégica a nuestros clientes para que fortalezcan sus procesos de análisis de riesgos para la toma de decisiones.",
      consultoria: [
        "Diagnóstico sobre cumplimiento normativo contable, local e internacional",
        "Apoyo en la implementación de normas contables específicas (NIF, NIIF o US GAAP)",
        "Evaluación del diseño de la estructura de control interno",
        "Revisión de la eficacia operativa del control interno",
        "Apoyo en la reestructura de procesos de control interno"
      ]
    },
    servicesCta: {
      title: "¿No estás seguro qué servicio necesitas?",
      body: "Cuéntanos sobre la situación de tu empresa y te ayudaremos a definir el alcance adecuado.",
      button: "Hablemos"
    },

    /* ---------- CONTACT ---------- */
    contactPage: {
      eyebrow: "Hablemos",
      title: "Contáctanos",
      lede: "Nos encantaría conocer más sobre tu empresa y platicar cómo Basher puede ayudarte."
    },
    contact: {
      officeTitle: "Ubicación de la oficina",
      officeCity: "Ciudad de México",
      officeAddress: "Paseo de la Reforma 342, Piso 26<br>Col. Juárez, Alc. Cuauhtémoc<br>C.P. 06600<br>Ciudad de México",
      infoTitle: "Información de contacto",
      infoName: "Rodolfo Basurto",
      formTitle: "Envíanos un mensaje",
      labelName: "Nombre completo",
      labelEmail: "Correo electrónico",
      labelSubject: "Asunto",
      labelMessage: "Mensaje",
      placeholderName: "Tu nombre",
      placeholderEmail: "tu@empresa.com",
      placeholderSubject: "¿Cómo podemos ayudarte?",
      placeholderMessage: "Cuéntanos un poco sobre tu empresa y lo que necesitas...",
      submit: "Enviar mensaje",
      note: "Este formulario abre tu cliente de correo dirigido a contacto@basher.mx — no se almacena ni se envía información a ningún otro lugar."
    }
  }
};

function resolvePath(obj, path){
  return path.split(".").reduce((o,k)=> (o && o[k] !== undefined) ? o[k] : undefined, obj);
}

function getLang(){
  return localStorage.getItem("basher-lang") || "en";
}

function applyTranslations(lang){
  const dict = I18N[lang] || I18N.en;
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = resolvePath(dict, key);
    if (val === undefined) return;
    if (Array.isArray(val)){
      // render as <li> items inside the element
      el.innerHTML = val.map(item => `<li>${item}</li>`).join("");
    } else {
      el.innerHTML = val;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el=>{
    const spec = el.getAttribute("data-i18n-attr"); // format: "attr:key"
    const [attr, key] = spec.split(":");
    const val = resolvePath(dict, key);
    if (val !== undefined) el.setAttribute(attr, val);
  });

  const enEl = document.querySelector(".lang-en");
  const esEl = document.querySelector(".lang-es");
  if (enEl && esEl){
    enEl.setAttribute("data-active", lang === "en" ? "true" : "false");
    esEl.setAttribute("data-active", lang === "es" ? "true" : "false");
  }

  window.dispatchEvent(new Event("basher:translated"));
}

function setLang(lang){
  localStorage.setItem("basher-lang", lang);
  applyTranslations(lang);
}

function initLangToggle(){
  const btn = document.getElementById("langToggle");
  if (!btn) return;
  btn.addEventListener("click", ()=>{
    const next = getLang() === "en" ? "es" : "en";
    setLang(next);
  });
}

function initMobileNav(){
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mainNav");
  if (!hamburger || !nav) return;
  hamburger.addEventListener("click", ()=>{
    nav.classList.toggle("open");
  });
  nav.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=> nav.classList.remove("open"));
  });
}

function initYear(){
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

function initContactForm(){
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = form.querySelector("#cf-name").value.trim();
    const email = form.querySelector("#cf-email").value.trim();
    const subject = form.querySelector("#cf-subject").value.trim() || "Website inquiry";
    const message = form.querySelector("#cf-message").value.trim();
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:contacto@basher.mx?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function initHeroParallax(){
  const hero = document.querySelector(".hero");
  const video = hero ? hero.querySelector(".hero-video") : null;
  if (!hero || !video) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const MAX_SHIFT = 40; // px — stays within the video's extra scale so no edges show
  const SPEED = 0.18;   // fraction of scroll distance the background lags by
  let ticking = false;

  function update(){
    ticking = false;
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return; // hero not in view
    let shift = -rect.top * SPEED;
    if (shift > MAX_SHIFT) shift = MAX_SHIFT;
    if (shift < -MAX_SHIFT) shift = -MAX_SHIFT;
    video.style.transform = `scale(1.12) translateY(${shift}px)`;
  }

  function onScroll(){
    if (!ticking){
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}

function initNetworkMap(){
  const svg = document.querySelector(".network-map-svg");
  if (!svg) return;
  const countries = Array.from(svg.querySelectorAll(".country.is-hq, .country.is-partner"));
  if (!countries.length) return;

  // Order must match the network.countries translation arrays.
  const PARTNER_ORDER = ["COL","BRA","ARG","CHL","ESP","CAN"];

  const callout = svg.querySelector(".map-callout");
  const line = callout.querySelector(".map-callout-line");
  const dot = callout.querySelector(".map-callout-dot");
  const bg = callout.querySelector(".map-callout-bg");
  const text = callout.querySelector(".map-callout-text");
  const viewBoxW = (svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width) || 1200;
  const hintEl = document.querySelector(".network-map-hint");
  const canHoverDevice = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function updateNames(){
    const dict = I18N[getLang()] || I18N.en;
    const names = (dict.network && dict.network.countries) || [];
    const hqName = (dict.network && dict.network.hqName) || "Mexico";
    countries.forEach(el=>{
      const id = el.id.replace("c-", "");
      if (id === "MEX"){
        el.setAttribute("data-name", hqName);
      } else {
        const idx = PARTNER_ORDER.indexOf(id);
        if (idx > -1 && names[idx]) el.setAttribute("data-name", names[idx]);
      }
    });
    if (hintEl){
      const net = dict.network || {};
      hintEl.textContent = canHoverDevice
        ? (net.mapHint || hintEl.textContent)
        : (net.mapHintTouch || net.mapHint || hintEl.textContent);
    }
  }

  // Keeps the callout's text/line/dot a roughly constant on-screen size no
  // matter how small the responsive SVG has been scaled down to — a fixed
  // SVG-unit font-size would shrink to unreadable on a narrow phone.
  function getScale(){
    const rect = svg.getBoundingClientRect();
    return rect.width ? rect.width / viewBoxW : 1;
  }

  function hideCallout(){
    callout.classList.remove("is-visible");
  }

  function showCallout(path){
    const name = path.getAttribute("data-name");
    if (!name) return;
    const bbox = path.getBBox();
    const cx = bbox.x + bbox.width / 2;
    const cy = bbox.y + bbox.height / 2;
    const scale = getScale() || 1;
    const fontSize = 15 / scale;
    const lift = 36 / scale;
    const padX = 8 / scale;
    const padY = 6 / scale;
    const margin = 6 / scale;

    let labelY = cy - lift;
    if (labelY < margin) labelY = margin;

    text.setAttribute("font-size", fontSize.toFixed(2));
    text.textContent = name;
    text.setAttribute("x", cx);
    text.setAttribute("y", labelY);
    text.setAttribute("text-anchor", "middle");

    // Nudge horizontally so the label never spills outside the map.
    const tb = text.getBBox();
    let shiftX = 0;
    if (tb.x < margin) shiftX = margin - tb.x;
    else if (tb.x + tb.width > viewBoxW - margin) shiftX = (viewBoxW - margin) - (tb.x + tb.width);
    if (shiftX !== 0) text.setAttribute("x", cx + shiftX);
    const tb2 = text.getBBox();

    bg.setAttribute("x", tb2.x - padX);
    bg.setAttribute("y", tb2.y - padY);
    bg.setAttribute("width", tb2.width + padX * 2);
    bg.setAttribute("height", tb2.height + padY * 2);
    bg.setAttribute("rx", (5 / scale).toFixed(2));

    line.setAttribute("x1", cx);
    line.setAttribute("y1", cy);
    line.setAttribute("x2", cx);
    line.setAttribute("y2", tb2.y + tb2.height + padY);
    line.setAttribute("stroke-width", (1.5 / scale).toFixed(2));

    dot.setAttribute("cx", cx);
    dot.setAttribute("cy", cy);
    dot.setAttribute("r", (3.5 / scale).toFixed(2));

    callout.classList.add("is-visible");
  }

  const canHover = canHoverDevice;

  countries.forEach(path=>{
    if (canHover){
      path.addEventListener("mouseenter", ()=> showCallout(path));
      path.addEventListener("mouseleave", hideCallout);
    } else {
      path.addEventListener("click", (e)=>{
        e.stopPropagation();
        const already = callout.classList.contains("is-visible") && callout.dataset.current === path.id;
        if (already){
          hideCallout();
          callout.dataset.current = "";
        } else {
          showCallout(path);
          callout.dataset.current = path.id;
        }
      });
    }
    path.addEventListener("focus", ()=> showCallout(path));
    path.addEventListener("blur", hideCallout);
  });

  if (!canHover){
    svg.addEventListener("click", ()=>{
      hideCallout();
      callout.dataset.current = "";
    });
  }

  window.addEventListener("resize", hideCallout);

  updateNames();
  window.addEventListener("basher:translated", updateNames);
}

// Services page: each service section starts collapsed and only reveals its
// detail content when the user clicks its header. The top quick-nav links
// (#tributaria, #auditoria, etc.) also open the matching section and scroll
// it into view below the two sticky bars (site header + services quick-nav).
function initServiceAccordion(){
  const sections = Array.from(document.querySelectorAll(".service-detail"));
  if (!sections.length) return;

  const items = sections.map(section=>{
    const toggle = section.querySelector(".service-detail-toggle");
    const panel = section.querySelector(".service-detail-panel");
    return { id: section.id, section, toggle, panel };
  }).filter(item => item.toggle && item.panel);

  function setOpen(item, open){
    item.toggle.setAttribute("aria-expanded", open ? "true" : "false");
    item.panel.classList.toggle("is-open", open);
  }

  function scrollToSection(section){
    const header = document.querySelector(".site-header");
    const nav = document.querySelector(".services-nav");
    const offset = (header ? header.offsetHeight : 0) + (nav ? nav.offsetHeight : 0) + 12;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  }

  items.forEach(item=>{
    item.toggle.addEventListener("click", ()=>{
      const isOpen = item.toggle.getAttribute("aria-expanded") === "true";
      setOpen(item, !isOpen);
      if (!isOpen) scrollToSection(item.section);
    });
  });

  // Quick-nav links: open the target section instead of just jumping to it.
  document.querySelectorAll(".services-nav-inner a[href^='#']").forEach(link=>{
    link.addEventListener("click", (e)=>{
      const id = link.getAttribute("href").slice(1);
      const item = items.find(it => it.id === id);
      if (!item) return;
      e.preventDefault();
      setOpen(item, true);
      scrollToSection(item.section);
    });
  });

  // Deep link support: services.html#litigio opens and scrolls to that section.
  if (location.hash){
    const item = items.find(it => "#" + it.id === location.hash);
    if (item){
      setOpen(item, true);
      window.addEventListener("load", ()=> scrollToSection(item.section));
    }
  }
}

function initScrollReveal(){
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)){
    els.forEach(el => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", ()=>{
  applyTranslations(getLang());
  initLangToggle();
  initMobileNav();
  initYear();
  initContactForm();
  initHeroParallax();
  initNetworkMap();
  initServiceAccordion();
  initScrollReveal();
});
