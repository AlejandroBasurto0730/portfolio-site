import { useReveal } from "../hooks/useReveal";
import SectionHead from "./SectionHead";

export default function About() {
  const [ref, visible] = useReveal();
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHead title="About" />

        <div ref={ref} className={`about-body ${visible ? "is-visible" : ""}`}>
          <p>
            I'm a graphic designer based in North Vancouver, BC, with a diploma
            in Graphic Design and a diploma in Video Editing and Production
            from BCIT. My work sits at the intersection of brand identity and
            motion — I care about systems that hold up whether they're printed,
            animated, or scrolled.
          </p>
          <p>
            I spent over two years as an in-house designer at Crowe MacKay LLP,
            and interned with Henkel in Mexico before that. Outside client and
            agency work, I build self-directed projects — brand systems,
            editorial redesigns, and motion reels — to keep pushing what I can
            make.
          </p>
          <p>
            Currently open to graphic design and marketing roles focused on
            brand design and motion graphics.
          </p>
        </div>
      </div>
    </section>
  );
}
