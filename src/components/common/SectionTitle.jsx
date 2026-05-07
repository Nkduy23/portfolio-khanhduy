import Reveal from "../animation/Reveal";

export default function SectionTitle({ children, subtitle, align = "left" }) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 mb-16 ${alignClass}`}>
      <Reveal variant="fadeUp">
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            color: "var(--accent)",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {subtitle || "// section"}
        </span>
      </Reveal>
      <Reveal variant="fadeUp" delay={0.1}>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "var(--text-primary)",
          }}
        >
          {children}
        </h2>
      </Reveal>
      <Reveal variant="fadeUp" delay={0.15}>
        <div
          style={{
            width: "48px",
            height: "2px",
            background: "linear-gradient(90deg, var(--accent), var(--purple))",
            borderRadius: "1px",
          }}
        />
      </Reveal>
    </div>
  );
}
