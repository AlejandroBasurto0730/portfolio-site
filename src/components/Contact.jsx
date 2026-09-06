import { useReveal } from "../hooks/useReveal";
import SectionHead from "./SectionHead";

export default function Contact() {
  const [ref, visible] = useReveal();
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHead title="Contact" />

        <div ref={ref} className={`contact-body ${visible ? "is-visible" : ""}`}>
          <a href="mailto:alejandrobasurto0730@gmail.com" className="contact-email">
            alejandrobasurto0730@gmail.com
          </a>

          <div className="contact-links mono">
            <a href="tel:+12368654631">236-865-4631</a>
            <a href="https://www.linkedin.com/in/rodolfo-basurto-aba375291/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <a
            className="contact-resume-btn"
            href="/resume/Alejandro_Basurto_Resume.pdf"
            download
          >
            Download Resume
          </a>
        </div>

        <div className="contact-footer mono">
          <span>© 2026 Alejandro Basurto</span>
          <span>North Vancouver, BC</span>
        </div>
      </div>
    </section>
  );
}
