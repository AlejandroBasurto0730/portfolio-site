import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import SectionHead from "./SectionHead";
import { useLanguage } from "../LanguageContext";
import { t } from "../i18n";

// Replace with your Formspree endpoint, e.g. "https://formspree.io/f/xxxxxxxx"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_ME";

export default function Contact() {
  const [ref, visible] = useReveal();
  const { lang } = useLanguage();
  const contact = t[lang].contact;
  const nav = t[lang].nav;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHead title={contact.title} />

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
            {nav.resumeDownload}
          </a>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="name">{contact.formName}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-field">
                <label htmlFor="email">{contact.formEmail}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="message">{contact.formMessage}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="contact-form-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? contact.formSending : contact.formSend}
            </button>

            {status === "success" && (
              <p className="contact-form-status is-success">{contact.formSuccess}</p>
            )}
            {status === "error" && (
              <p className="contact-form-status is-error">{contact.formError}</p>
            )}
          </form>
        </div>

        <div className="contact-footer mono">
          <span>© 2026 Alejandro Basurto</span>
          <span>North Vancouver, BC</span>
        </div>
      </div>
    </section>
  );
}
