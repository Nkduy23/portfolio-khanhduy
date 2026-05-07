import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Reveal from "../components/animation/Reveal";
import SectionTitle from "../components/common/SectionTitle";
import { EXPERIENCE } from "../utils/constants";

const TYPE_CONFIG = {
  work: { color: "#fbbf24", icon: "👷", label: "Work" },
  education: { color: "#a78bfa", icon: "🎓", label: "Education" },
  project: { color: "#00d4ff", icon: "💻", label: "Project" },
  current: { color: "#34d399", icon: "🚀", label: "Now" },
};

function TimelineItem({ item, index, isLast }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const config = TYPE_CONFIG[item.type];
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 60px 1fr",
        gap: "0",
        alignItems: "flex-start",
        marginBottom: isLast ? 0 : "0",
        position: "relative",
      }}
    >
      {/* Left side */}
      <div style={{ paddingRight: "2rem", paddingBottom: "3rem", textAlign: "right" }}>
        {isLeft && (
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            <TimelineCard item={item} config={config} />
          </motion.div>
        )}
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: config.color,
              opacity: 0.25,
            }}
          >
            {item.year}
          </motion.div>
        )}
      </div>

      {/* Center — dot + line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: `${config.color}18`,
            border: `2px solid ${config.color}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            flexShrink: 0,
            zIndex: 2,
            boxShadow: `0 0 20px ${config.color}30`,
          }}
        >
          {config.icon}
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              width: "2px",
              flexGrow: 1,
              minHeight: "60px",
              background: `linear-gradient(to bottom, ${config.color}60, rgba(255,255,255,0.06))`,
              transformOrigin: "top",
            }}
          />
        )}
      </div>

      {/* Right side */}
      <div style={{ paddingLeft: "2rem", paddingBottom: "3rem" }}>
        {!isLeft && (
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            <TimelineCard item={item} config={config} />
          </motion.div>
        )}
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: config.color,
              opacity: 0.25,
              paddingTop: "0.5rem",
            }}
          >
            {item.year}
          </motion.div>
        )}
      </div>
    </div>
  );
}

function TimelineCard({ item, config }) {
  return (
    <div
      style={{
        padding: "1.5rem",
        borderRadius: "16px",
        background: "var(--glass-bg)",
        backdropFilter: "blur(12px)",
        border: "1px solid var(--glass-border)",
        textAlign: "left",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${config.color}35`;
        e.currentTarget.style.boxShadow = `0 12px 36px ${config.color}10`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--glass-border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "0.2rem 0.6rem",
          borderRadius: "6px",
          background: `${config.color}12`,
          border: `1px solid ${config.color}30`,
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.65rem",
          color: config.color,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}
      >
        {config.label}
      </span>

      <h3
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "1rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: "0.25rem",
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontSize: "0.8rem",
          color: config.color,
          marginBottom: "0.75rem",
          fontWeight: 500,
        }}
      >
        {item.subtitle}
      </p>
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--text-muted)",
          lineHeight: 1.65,
        }}
      >
        {item.description}
      </p>
    </div>
  );
}

// Mobile timeline (stacked, no alternating)
function MobileTimeline() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {EXPERIENCE.map((item, i) => {
        const config = TYPE_CONFIG[item.type];
        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
        return (
          <div key={i} ref={ref} style={{ display: "flex", gap: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: `${config.color}18`,
                  border: `2px solid ${config.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.875rem",
                  flexShrink: 0,
                }}
              >
                {config.icon}
              </motion.div>
              {i < EXPERIENCE.length - 1 && (
                <div
                  style={{
                    width: "2px",
                    flexGrow: 1,
                    minHeight: "40px",
                    background: `linear-gradient(to bottom, ${config.color}60, rgba(255,255,255,0.06))`,
                  }}
                />
              )}
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }} style={{ paddingBottom: "2rem", flex: 1 }}>
              <TimelineCard item={item} config={config} />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "7rem 1.5rem", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionTitle subtitle="// 04 — experience" align="center">
          Hành trình
        </SectionTitle>

        {/* Desktop timeline */}
        <div className="hidden md:block">
          {EXPERIENCE.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} isLast={i === EXPERIENCE.length - 1} />
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="block md:hidden">
          <MobileTimeline />
        </div>
      </div>
    </section>
  );
}
