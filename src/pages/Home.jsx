import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import CTA from "../sections/CTA";

// Placeholder sections — sẽ được thay bằng nội dung thật ở Phase 4
const Section = ({ id, label }) => (
  <section
    id={id}
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "6rem 1.5rem",
      borderTop: "1px solid rgba(255,255,255,0.04)",
    }}
  >
    <p
      style={{
        fontFamily: "JetBrains Mono, monospace",
        color: "var(--accent)",
        fontSize: "1rem",
        opacity: 0.4,
      }}
    >
      // {label} — coming in Phase 4
    </p>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <CTA />
    </>
  );
}
