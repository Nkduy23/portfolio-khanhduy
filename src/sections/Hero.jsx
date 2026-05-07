import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaArrowRight } from "react-icons/fa";
import { PERSONAL_INFO } from "../utils/constants";
import Button from "../components/common/Button";
import MagneticButton from "../components/common/MagneticButton";

// Typing animation hook
function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) => (isDeleting ? t.slice(0, -1) : current.slice(0, t.length + 1)));
        },
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

// SVG Dev Character (custom CSS-animated SVG)
function DevCharacter() {
  return (
    <svg viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "320px" }}>
      {/* Monitor */}
      <rect x="60" y="60" width="180" height="130" rx="12" fill="rgba(18,18,26,0.9)" stroke="rgba(0,212,255,0.4)" strokeWidth="2" />
      <rect x="70" y="70" width="160" height="110" rx="6" fill="#0a0a0f" />

      {/* Code lines on screen */}
      <motion.rect x="80" y="82" width="60" height="4" rx="2" fill="#00d4ff" opacity="0.8" animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
      <motion.rect x="80" y="92" width="100" height="4" rx="2" fill="#a78bfa" opacity="0.6" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
      <motion.rect x="88" y="102" width="80" height="4" rx="2" fill="#34d399" opacity="0.5" animate={{ opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
      <motion.rect x="88" y="112" width="50" height="4" rx="2" fill="#00d4ff" opacity="0.5" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} />
      <motion.rect x="80" y="122" width="90" height="4" rx="2" fill="#a78bfa" opacity="0.4" animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 1.2 }} />
      <motion.rect x="88" y="132" width="70" height="4" rx="2" fill="#fbbf24" opacity="0.5" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />
      {/* Cursor blink */}
      <motion.rect x="80" y="142" width="2" height="12" rx="1" fill="#00d4ff" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />

      {/* Monitor stand */}
      <rect x="135" y="190" width="30" height="20" rx="2" fill="rgba(18,18,26,0.9)" stroke="rgba(0,212,255,0.2)" strokeWidth="1.5" />
      <rect x="115" y="210" width="70" height="6" rx="3" fill="rgba(18,18,26,0.9)" stroke="rgba(0,212,255,0.2)" strokeWidth="1.5" />

      {/* Character body */}
      {/* Head */}
      <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
        <circle cx="150" cy="272" r="28" fill="#f4a27e" />
        {/* Eyes */}
        <motion.ellipse
          cx="141"
          cy="270"
          rx="3.5"
          ry="3"
          animate={{ scaleY: [1, 0.2, 1] }}
          style={{ originY: "center" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 2,
          }}
          fill="#2d1b0e"
        />

        <motion.ellipse
          cx="159"
          cy="270"
          rx="3.5"
          ry="3"
          animate={{ scaleY: [1, 0.2, 1] }}
          style={{ originY: "center" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 2,
          }}
          fill="#2d1b0e"
        />
        {/* Glasses */}
        <circle cx="141" cy="270" r="6" fill="none" stroke="rgba(0,212,255,0.7)" strokeWidth="1.5" />
        <circle cx="159" cy="270" r="6" fill="none" stroke="rgba(0,212,255,0.7)" strokeWidth="1.5" />
        <line x1="147" y1="270" x2="153" y2="270" stroke="rgba(0,212,255,0.7)" strokeWidth="1.5" />
        <line x1="135" y1="266" x2="130" y2="264" stroke="rgba(0,212,255,0.7)" strokeWidth="1.5" />
        <line x1="165" y1="266" x2="170" y2="264" stroke="rgba(0,212,255,0.7)" strokeWidth="1.5" />
        {/* Smile */}
        <path d="M143 278 Q150 284 157 278" stroke="#2d1b0e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Hair */}
        <path d="M125 265 Q127 248 150 245 Q173 248 175 265 Q165 255 150 254 Q135 255 125 265Z" fill="#1a0f0a" />
      </motion.g>

      {/* Keyboard hands */}
      <motion.g animate={{ y: [0, -1.5, 0] }} transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}>
        <rect x="90" y="225" width="50" height="12" rx="6" fill="#f4a27e" opacity="0.9" />
        <rect x="160" y="225" width="50" height="12" rx="6" fill="#f4a27e" opacity="0.9" />
      </motion.g>

      {/* Decorative orbit ring */}
      <motion.circle
        cx="150"
        cy="170"
        r="140"
        fill="none"
        stroke="rgba(0,212,255,0.06)"
        strokeWidth="1"
        strokeDasharray="4 8"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "150px 170px" }}
      />
    </svg>
  );
}

export default function Hero() {
  const typedText = useTypingEffect(PERSONAL_INFO.roles);

  const scrollToNext = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "6rem 1.5rem 3rem",
      }}
    >
      {/* Background orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          className="animate-float-1"
          style={{
            position: "absolute",
            top: "15%",
            right: "10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="animate-float-2"
          style={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="animate-float-3"
          style={{
            position: "absolute",
            top: "50%",
            left: "40%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 0.875rem",
                borderRadius: "999px",
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.2)",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399" }} className="animate-pulse-glow" />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Available for Internship</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "1rem",
                color: "var(--text-muted)",
                marginBottom: "0.75rem",
              }}
            >
              Xin chào, tôi là
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #fff 40%, rgba(0,212,255,0.7))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Nguyen
              </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--purple))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Khanh Duy
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.75rem",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
                color: "var(--text-muted)",
              }}
            >
              <span style={{ color: "var(--purple)" }}>&gt;</span>
              <span style={{ color: "var(--accent)" }}>{typedText}</span>
              <span className="animate-blink" style={{ color: "var(--accent)", fontWeight: 300 }}>
                |
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                fontSize: "0.975rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: "440px",
                marginBottom: "2.5rem",
              }}
            >
              Sinh viên Web Programming tại <span style={{ color: "var(--accent)" }}>FPT Polytechnic</span> — đam mê xây dựng frontend đẹp, performant và trải nghiệm người dùng có chiều sâu.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}
            >
              <MagneticButton>
                <Button
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="primary"
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.25rem" }}
                >
                  Xem Projects <FaArrowRight size={16} />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href={`mailto:${PERSONAL_INFO.email}`} variant="outline" style={{ padding: "0.75rem 1.25rem" }}>
                  Liên hệ ngay
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Social links */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              {[
                { href: PERSONAL_INFO.github, icon: <FaGithub size={18} />, label: "GitHub" },
                { href: PERSONAL_INFO.linkedin, icon: <FaLinkedin size={18} />, label: "LinkedIn" },
                { href: `mailto:${PERSONAL_INFO.email}`, icon: <FaEnvelope size={18} />, label: "Email" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    color: "var(--text-muted)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,212,255,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {icon}
                </a>
              ))}

              <span style={{ width: "1px", height: "24px", background: "var(--glass-border)", margin: "0 0.25rem" }} />
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", color: "var(--text-subtle)", letterSpacing: "0.1em" }}>@Nkduy23</span>
            </motion.div>
          </div>

          {/* Right: Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Glow behind character */}
            <div
              style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ position: "relative", zIndex: 1 }}>
              <DevCharacter />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{
                position: "absolute",
                top: "-5%",
                left: "-5%",
                padding: "0.5rem 0.875rem",
                background: "rgba(18,18,26,0.9)",
                border: "1px solid rgba(0,212,255,0.25)",
                borderRadius: "10px",
                backdropFilter: "blur(12px)",
                fontSize: "0.75rem",
                fontFamily: "JetBrains Mono, monospace",
                color: "var(--accent)",
                whiteSpace: "nowrap",
              }}
            >
              ⚛️ React + TypeScript
              <p>▲ Next.js Developer</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{
                position: "absolute",
                bottom: "8%",
                right: "-2%",
                padding: "0.5rem 0.875rem",
                background: "rgba(18,18,26,0.9)",
                border: "1px solid rgba(167,139,250,0.25)",
                borderRadius: "10px",
                backdropFilter: "blur(12px)",
                fontSize: "0.75rem",
                fontFamily: "JetBrains Mono, monospace",
                color: "var(--purple)",
                whiteSpace: "nowrap",
              }}
            >
              🎓 GPA 3.79/4.0
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToNext}
        className="animate-scroll-bounce"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
          color: "var(--text-muted)",
        }}
      >
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.15em" }}>SCROLL</span>
        <FaChevronDown size={18} style={{ color: "var(--accent)" }} />
      </motion.button>
    </section>
  );
}
