import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollY, useActiveSection } from "../../hooks/useScroll";
import { NAV_LINKS } from "../../utils/constants";

export default function Navbar() {
  const scrollY = useScrollY();
  const sectionIds = NAV_LINKS.map((l) => l.id);
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrolled = scrollY > 50;

  const handleNavClick = useCallback((id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s ease",
          padding: scrolled ? "0.75rem 0" : "1.25rem 0",
          background: scrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "1.25rem",
              color: "var(--accent)",
              letterSpacing: "-0.02em",
              background: "none",
              border: "none",
              cursor: "none",
            }}
          >
            NKD
            <span style={{ color: "var(--purple)" }}>.</span>
          </button>

          {/* Desktop Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    position: "relative",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    background: "none",
                    border: "none",
                    cursor: "none",
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: isActive ? "var(--accent)" : "var(--text-muted)",
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: "absolute",
                        bottom: "4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "20px",
                        height: "2px",
                        background: "linear-gradient(90deg, var(--accent), var(--purple))",
                        borderRadius: "1px",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "none",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "var(--accent)",
                  borderRadius: "1px",
                  transition: "all 0.3s ease",
                  transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px, 5px)" : i === 1 ? "scaleX(0)" : "rotate(-45deg) translate(5px, -5px)") : "none",
                }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(320px, 80vw)",
              background: "rgba(12, 12, 20, 0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              zIndex: 999,
              padding: "5rem 2rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "none",
                  textAlign: "left",
                  padding: "1rem",
                  borderRadius: "12px",
                  fontFamily: "Syne, sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: active === link.id ? "var(--accent)" : "var(--text-primary)",
                  background: active === link.id ? "rgba(0,212,255,0.06)" : "transparent",
                  transition: "all 0.2s",
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 998,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
