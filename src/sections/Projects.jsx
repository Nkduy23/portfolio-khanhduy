import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";
import Reveal from "../components/animation/Reveal";
import SectionTitle from "../components/common/SectionTitle";
import { PROJECTS } from "../utils/constants";

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <Reveal variant="fadeUp" delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          borderRadius: "20px",
          background: "var(--glass-bg)",
          backdropFilter: "blur(12px)",
          border: "1px solid var(--glass-border)",
          overflow: "hidden",
          cursor: "default",
          transition: "border-color 0.4s ease, box-shadow 0.4s ease",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${project.color}40`;
          e.currentTarget.style.boxShadow = `0 20px 60px ${project.color}14`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--glass-border)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: "3px",
            background: `linear-gradient(90deg, ${project.color}, ${isEven ? "#00d4ff" : "#a78bfa"})`,
          }}
        />

        {/* Card body */}
        <div style={{ padding: "1.75rem 2rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
          {/* Header row: emoji icon + live badge + action buttons */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            {/* Icon */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: `${project.color}14`,
                border: `1px solid ${project.color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                flexShrink: 0,
              }}
            >
              {project.emoji}
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Xem source code"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = project.color;
                    e.currentTarget.style.borderColor = `${project.color}40`;
                    e.currentTarget.style.background = `${project.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }}
                >
                  <FaGithub size={16} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Mở live demo"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: `${project.color}12`,
                    border: `1px solid ${project.color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: project.color,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${project.color}22`;
                    e.currentTarget.style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${project.color}12`;
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <FaArrowUpRightFromSquare size={14} />
                </a>
              )}
            </div>
          </div>

          {/* Title + subtitle */}
          <div>
            <h3
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                marginBottom: "0.2rem",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.7rem",
                color: project.color,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              flex: 1,
            }}
          >
            {project.description}
          </p>

          {/* Stack + Deploy info */}
          <div
            style={{
              padding: "0.875rem",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
            }}
          >
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <span style={{ fontSize: "0.7rem", color: "var(--text-subtle)", fontFamily: "JetBrains Mono, monospace", width: "40px", flexShrink: 0, paddingTop: "1px" }}>Stack</span>
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{project.stack}</span>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <span style={{ fontSize: "0.7rem", color: "var(--text-subtle)", fontFamily: "JetBrains Mono, monospace", width: "40px", flexShrink: 0, paddingTop: "1px" }}>Deploy</span>
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{project.deploy}</span>
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "0.2rem 0.55rem",
                  borderRadius: "6px",
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}25`,
                  fontSize: "0.72rem",
                  fontFamily: "JetBrains Mono, monospace",
                  color: project.color,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: "0.875rem 2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          {/* Live badge */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.2rem 0.625rem",
              borderRadius: "999px",
              background: `${project.badge.color}12`,
              border: `1px solid ${project.badge.color}30`,
              fontSize: "0.68rem",
              fontFamily: "JetBrains Mono, monospace",
              color: project.badge.color,
              letterSpacing: "0.05em",
            }}
          >
            {project.demo && (
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: project.badge.color, boxShadow: `0 0 6px ${project.badge.color}` }} className="animate-pulse-glow" />
            )}
            {project.badge.label}
          </span>

          {/* Links */}
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.78rem",
                  color: "var(--text-subtle)",
                  textDecoration: "none",
                  fontFamily: "JetBrains Mono, monospace",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-subtle)")}
              >
                <FaGithub size={12} /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.78rem",
                  color: project.color,
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "gap 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "0.5rem")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "0.3rem")}
              >
                <MdRocketLaunch size={13} /> Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 1.5rem", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionTitle subtitle="// 03 — projects">Dự án nổi bật</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            padding: "1rem 0",
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <Reveal variant="fadeUp" delay={0.3}>
          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              borderRadius: "16px",
              background: "rgba(0,212,255,0.04)",
              border: "1px solid rgba(0,212,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: "1rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>Muốn xem thêm?</p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>Tất cả source code đều public trên GitHub</p>
            </div>
            <a
              href="https://github.com/Nkduy23"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "10px",
                background: "rgba(0,212,255,0.1)",
                border: "1px solid rgba(0,212,255,0.3)",
                color: "var(--accent)",
                fontWeight: 500,
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.18)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaGithub size={16} /> github.com/Nkduy23
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
