import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import Reveal from "../components/animation/Reveal";
import SectionTitle from "../components/common/SectionTitle";
import { PERSONAL_INFO } from "../utils/constants";

const contactItems = [
  { icon: <FaEnvelope size={18} />, label: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}`, color: "#00d4ff" },
  { icon: <FaPhone size={18} />, label: "Phone", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}`, color: "#a78bfa" },
  { icon: <FaMapMarkerAlt size={18} />, label: "Location", value: PERSONAL_INFO.location, href: null, color: "#34d399" },
];

const socialItems = [
  { icon: <FaGithub size={18} />, label: "GitHub", href: PERSONAL_INFO.github, color: "#fff" },
  { icon: <FaLinkedin size={18} />, label: "LinkedIn", href: PERSONAL_INFO.linkedin, color: "#0a66c2" },
];

function InputField({ label, type = "text", name, value, onChange, multiline = false, placeholder = "" }) {
  const [focused, setFocused] = useState(false);
  const Tag = multiline ? "textarea" : "input";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.7rem",
          color: focused ? "var(--accent)" : "var(--text-muted)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          transition: "color 0.2s ease",
        }}
      >
        {label}
      </label>
      <Tag
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        rows={multiline ? 5 : undefined}
        style={{
          padding: "0.875rem 1.125rem",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${focused ? "rgba(0,212,255,0.4)" : "rgba(255,255,255,0.08)"}`,
          color: "var(--text-primary)",
          fontFamily: "DM Sans, sans-serif",
          fontSize: "0.925rem",
          outline: "none",
          resize: multiline ? "vertical" : undefined,
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          boxShadow: focused ? "0 0 0 3px rgba(0,212,255,0.07)" : "none",
          lineHeight: 1.6,
        }}
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=Portfolio Contact — ${form.name}&body=${encodeURIComponent(`Từ: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailtoLink);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" style={{ padding: "5rem 1.5rem", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "-5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTitle subtitle="// 05 — contact" align="center">
          Liên hệ
        </SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left: Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Reveal variant="fadeLeft">
              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.75 }}>
                Tôi đang tìm kiếm cơ hội <span style={{ color: "var(--accent)" }}>Frontend Developer Intern</span>. Nếu bạn nghĩ tôi phù hợp với team của bạn, đừng ngần ngại nhắn tin nhé! 🚀
              </p>
            </Reveal>

            {/* Contact items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {contactItems.map((item, i) => (
                <Reveal key={item.label} variant="fadeLeft" delay={i * 0.08}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem 1.25rem",
                      borderRadius: "12px",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      transition: "border-color 0.3s ease",
                      textDecoration: "none",
                    }}
                    as={item.href ? "a" : "div"}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${item.color}35`)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--glass-border)")}
                  >
                    <span
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: `${item.color}12`,
                        border: `1px solid ${item.color}25`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: item.color,
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <div
                        style={{ fontSize: "0.7rem", color: "var(--text-subtle)", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}
                      >
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: "0.9rem", color: "var(--text-primary)", textDecoration: "none", fontWeight: 500 }}>
                          {item.value}
                        </a>
                      ) : (
                        <span style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500 }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Socials */}
            <Reveal variant="fadeLeft" delay={0.3}>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {socialItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--accent)";
                      e.currentTarget.style.borderColor = "rgba(0,212,255,0.35)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,212,255,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.borderColor = "var(--glass-border)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal variant="fadeRight">
            <div
              style={{
                padding: "2.5rem",
                borderRadius: "20px",
                background: "var(--glass-bg)",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--glass-border)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.5rem" }}>
                <InputField label="Tên của bạn" name="name" value={form.name} onChange={handleChange} placeholder="Nguyen Van A" />
                <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@company.com" />
                <InputField label="Lời nhắn" name="message" value={form.message} onChange={handleChange} multiline placeholder="Xin chào Duy, tôi muốn nói về..." />
              </div>

              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "12px",
                  border: "none",
                  background: sent ? "linear-gradient(135deg, #34d399, #059669)" : "linear-gradient(135deg, var(--accent), var(--purple))",
                  color: sent ? "#fff" : "#0a0a0f",
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  transition: "background 0.4s ease, box-shadow 0.3s ease",
                  boxShadow: "0 8px 32px rgba(0,212,255,0.2)",
                }}
              >
                {sent ? (
                  <>
                    <FaCheckCircle size={18} /> Đã gửi!
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={16} />{" "}
                  </>
                )}
              </motion.button>

              <p
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  fontSize: "0.75rem",
                  color: "var(--text-subtle)",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                * Sẽ mở mailto client của bạn
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
