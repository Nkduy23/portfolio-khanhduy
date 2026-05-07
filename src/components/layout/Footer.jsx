import { PERSONAL_INFO } from "../../utils/constants";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.75rem",
          color: "var(--text-subtle)",
          letterSpacing: "0.05em",
        }}
      >
        © 2025 <span style={{ color: "var(--accent)" }}>{PERSONAL_INFO.name}</span> — Built with React + Framer Motion ❤️
      </p>
    </footer>
  );
}
