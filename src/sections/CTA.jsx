import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Reveal from "../components/animation/Reveal";
import MagneticButton from "../components/common/MagneticButton";
import { PERSONAL_INFO } from "../utils/constants";

export default function CTA() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}>
      {/* Big glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, rgba(167,139,250,0.04) 50%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <Reveal variant="zoom">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.375rem 1rem",
              borderRadius: "999px",
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.2)",
              marginBottom: "2rem",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--purple)", boxShadow: "0 0 8px var(--purple)" }} className="animate-pulse-glow" />
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", color: "var(--purple)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Open to Work</span>
          </div>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.1}>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(2rem, 6vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            Hãy{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--purple))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              cùng nhau
            </span>{" "}
            tạo ra điều gì đó tuyệt vời
          </h2>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.2}>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "500px",
              margin: "0 auto 2.5rem",
            }}
          >
            Tôi đang tìm kiếm vị trí Internship Frontend tại TP.HCM hoặc Remote. Nếu bạn cần một developer đam mê và chịu khó, hãy liên hệ nhé!
          </p>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.3}>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <MagneticButton>
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem 2rem",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, var(--accent), var(--purple))",
                  border: "none",
                  color: "#0a0a0f",
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: "none",
                  boxShadow: "0 0 40px rgba(0,212,255,0.25)",
                }}
              >
                Nhắn tin cho tôi <ArrowRight size={18} />
              </motion.button>
            </MagneticButton>

            <MagneticButton>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem 2rem",
                  borderRadius: "14px",
                  background: "var(--glass-bg)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "var(--text-primary)",
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                }}
              >
                <Download size={16} /> Tải CV
              </motion.a>
            </MagneticButton>
          </div>
        </Reveal>

        {/* Divider */}
        <Reveal variant="fade" delay={0.5}>
          <div
            style={{
              marginTop: "4rem",
              padding: "1.5rem",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.8rem", color: "var(--text-subtle)" }}>📧</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.85rem",
                color: "var(--accent)",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
