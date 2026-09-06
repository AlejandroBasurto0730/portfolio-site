import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import InspirationButton from "./components/InspirationButton";
import "./App.css";

const SECTIONS = ["hero", "work", "about", "skills", "contact"];

export default function App() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      let current = "hero";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Nav active={active} sections={SECTIONS} />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
      <InspirationButton />
    </>
  );
}
