import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const es = lang === "es";
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <p className="site-footer-line">
          {es ? "¿Trabajamos juntos? " : "Want to work together? "}
          <a href="mailto:alejandrobasurto0730@gmail.com">alejandrobasurto0730@gmail.com</a>
        </p>
        <nav className="site-footer-links" aria-label={es ? "Contacto" : "Contact"}>
          <a href="tel:+12368654631">236-865-4631</a>
          <a href="https://www.linkedin.com/in/rodolfo-basurto-aba375291/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/resume/Alejandro_Basurto_Resume.pdf" download>{es ? "CV (PDF)" : "Résumé (PDF)"}</a>
        </nav>
      </div>
    </footer>
  );
}
