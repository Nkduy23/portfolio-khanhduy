import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/animation/Reveal";
import SectionTitle from "../components/common/SectionTitle";
import { SKILLS } from "../utils/constants";

const CATEGORIES = [
  { key: "all", label: "Tất cả" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Tools" },
];

const CATEGORY_COLORS = {
  frontend: { bg: "rgba(0,212,255,0.08)", border: "rgba(0,212,255,0.2)", text: "#00d4ff" },
  backend: { bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", text: "#a78bfa" },
  database: { bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.2)", text: "#fbbf24" },
  tools: { bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.2)", text: "#34d399" },
};

function SkillBadge({ skill, category, index }) {
  const color = CATEGORY_COLORS[category];
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.05 }}
      style={{
        padding: "0.75rem 1.25rem",
        borderRadius: "12px",
        background: color.bg,
        border: `1px solid ${color.border}`,
        display: "flex",
        alignItems: "center",
        gap: "0.625rem",
        cursor: "default",
        transition: "box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 8px 24px ${color.bg}`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <span style={{ fontSize: "1.1rem" }}>{skill.icon}</span>
      <span
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "0.875rem",
          fontWeight: 500,
          color: color.text,
          whiteSpace: "nowrap",
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

// Flatten all skills with their category
function getAllSkills() {
  return Object.entries(SKILLS).flatMap(([cat, skills]) => skills.map((s) => ({ ...s, category: cat })));
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");
  const allSkills = getAllSkills();

  const filtered = activeFilter === "all" ? allSkills : allSkills.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" style={{ padding: "7rem 1.5rem", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionTitle subtitle="// 02 — skills">Kỹ năng & Công nghệ</SectionTitle>

        {/* Filter tabs */}
        <Reveal variant="fadeUp">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "3rem",
              padding: "1rem 0",
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.key;
              return (
                <motion.button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "0.5rem 1.25rem",
                    borderRadius: "999px",
                    border: `1px solid ${isActive ? "rgba(0,212,255,0.5)" : "rgba(255,255,255,0.08)"}`,
                    background: isActive ? "rgba(0,212,255,0.1)" : "transparent",
                    color: isActive ? "var(--accent)" : "var(--text-muted)",
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    cursor: "none",
                    transition: "all 0.25s ease",
                  }}
                >
                  {cat.label}
                </motion.button>
              );
            })}
          </div>
        </Reveal>

        {/* Skills grid */}
        <motion.div
          layout
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.875rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <SkillBadge key={`${skill.category}-${skill.name}`} skill={skill} category={skill.category} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Category breakdown */}
        <Reveal variant="fadeUp" delay={0.2}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginTop: "4rem",
            }}
          >
            {Object.entries(SKILLS).map(([cat, skills]) => {
              const color = CATEGORY_COLORS[cat];
              const label = CATEGORIES.find((c) => c.key === cat)?.label || cat;
              return (
                <div
                  key={cat}
                  style={{
                    padding: "1.25rem",
                    borderRadius: "14px",
                    background: color.bg,
                    border: `1px solid ${color.border}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "0.7rem",
                      color: color.text,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: color.text,
                    }}
                  >
                    {skills.length}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>technologies</div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
