import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Star } from "lucide-react";
import Reveal from "../components/animation/Reveal";
import SectionTitle from "../components/common/SectionTitle";
import { PERSONAL_INFO } from "../utils/constants";
import { useInView } from "react-intersection-observer";

// Count-up animation
function CountUp({ to, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    const numericTo = parseFloat(to);
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * numericTo;
      setCount(numericTo % 1 !== 0 ? current.toFixed(2) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(to);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const infoItems = [
  { icon: <MapPin size={14} />, label: PERSONAL_INFO.location },
  { icon: <GraduationCap size={14} />, label: `${PERSONAL_INFO.school} — ${PERSONAL_INFO.major}` },
  { icon: <Star size={14} />, label: `GPA ${PERSONAL_INFO.gpa}` },
];

export default function About() {
  return (
    <section id="about" style={{ minHeight: "100vh", padding: "7rem 1.5rem", position: "relative" }}>
      {/* Subtle accent orb */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionTitle subtitle="// 01 — about me">Về bản thân</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left: Text */}
          <div style={{ padding: "1rem 0" }}>
            <Reveal variant="fadeLeft">
              <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Tôi là <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Nguyễn Khánh Duy</span>, sinh viên năm cuối ngành <span style={{ color: "var(--accent)" }}>Web Programming</span>{" "}
                tại FPT Polytechnic. Sinh năm 2003, hiện sống tại Cu Chi, TP.HCM.
              </p>
            </Reveal>
            <Reveal variant="fadeLeft" delay={0.1}>
              <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Tôi có kinh nghiệm xây dựng các ứng dụng web từ frontend đến backend, với sở trường về <span style={{ color: "var(--accent)" }}>React, TypeScript</span> và thiết kế kiến trúc hệ thống.
                Đã từng đảm nhận vai trò <span style={{ color: "var(--purple)" }}>Team Leader</span> trong các dự án thực tế.
              </p>
            </Reveal>
            <Reveal variant="fadeLeft" delay={0.2}>
              <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                Không ngại nhận task khó, thích làm full flow từ UI đến API. Luôn học hỏi và muốn đóng góp vào một team chuyên nghiệp thực sự.
              </p>
            </Reveal>

            {/* Info list */}
            <Reveal variant="fadeLeft" delay={0.25}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
                {infoItems.map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Download CV button */}
            <Reveal variant="fadeLeft" delay={0.3}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "10px",
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.25)",
                  color: "var(--accent)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,212,255,0.14)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0,212,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                📄 Tải CV
              </a>
            </Reveal>
          </div>

          {/* Right: Avatar card + Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Avatar Card */}
            <Reveal variant="fadeRight">
              <div
                style={{
                  padding: "2rem",
                  borderRadius: "20px",
                  background: "var(--glass-bg)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid var(--glass-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                {/* Avatar placeholder — replace src with hero.png */}
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: "linear-gradient(135deg, var(--accent), var(--purple))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: 700,
                    fontFamily: "Syne, sans-serif",
                    color: "#0a0a0f",
                  }}
                >
                  <img src="./src/assets/avatar-khanhduy.jpg" alt="" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>{PERSONAL_INFO.name}</p>
                  <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", color: "var(--accent)" }}>{PERSONAL_INFO.role}</p>
                  <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                    {["React", "TS", "Node"].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "0.15rem 0.5rem",
                          borderRadius: "4px",
                          background: "rgba(0,212,255,0.08)",
                          border: "1px solid rgba(0,212,255,0.15)",
                          fontSize: "0.65rem",
                          color: "var(--accent)",
                          fontFamily: "JetBrains Mono, monospace",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Stats Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
              {PERSONAL_INFO.stats.map((stat, i) => (
                <Reveal key={stat.label} variant="fadeRight" delay={i * 0.1}>
                  <div
                    style={{
                      padding: "1.5rem 1rem",
                      borderRadius: "16px",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      textAlign: "center",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,212,255,0.25)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--glass-border)")}
                  >
                    <div
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        background: "linear-gradient(135deg, var(--accent), var(--purple))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        lineHeight: 1,
                        marginBottom: "0.5rem",
                      }}
                    >
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace" }}>{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Status badge */}
            <Reveal variant="fadeRight" delay={0.3}>
              <div
                style={{
                  padding: "1rem 1.25rem",
                  borderRadius: "12px",
                  background: "rgba(52,211,153,0.06)",
                  border: "1px solid rgba(52,211,153,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#34d399", flexShrink: 0, boxShadow: "0 0 8px #34d399" }} className="animate-pulse-glow" />
                <span style={{ fontSize: "0.85rem", color: "#34d399", fontWeight: 500 }}>Sẵn sàng nhận việc — ưu tiên TP.HCM & Remote</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
