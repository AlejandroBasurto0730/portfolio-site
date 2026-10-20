import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({ lang: "en", toggleLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("site-lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("site-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const toggleLang = () => {
    const root = document.documentElement;
    root.classList.remove("lang-swap");
    void root.offsetWidth; // restart the animation
    root.classList.add("lang-swap");
    setTimeout(() => root.classList.remove("lang-swap"), 700);
    setLang((l) => (l === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
