import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if ("ontouchstart" in window) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = -100,
      ringY = -100;
    let targetX = -100,
      targetY = -100;
    let animId;

    const moveMouse = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`;
      if (!isVisible) setIsVisible(true);
    };

    const animate = () => {
      ringX += (targetX - ringX) * 0.12;
      ringY += (targetY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      animId = requestAnimationFrame(animate);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    // Add hover detection for interactive elements
    const interactives = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    window.addEventListener("mousemove", moveMouse);
    document.body.classList.add("custom-cursor");
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      cancelAnimationFrame(animId);
      document.body.classList.remove("custom-cursor");
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  // Don't render on touch devices
  if ("ontouchstart" in window) return null;

  return (
    <>
      {/* Dot — snaps immediately */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovering ? "8px" : "6px",
          height: isHovering ? "8px" : "6px",
          background: isHovering ? "var(--purple)" : "var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
          transition: "width 0.2s ease, height 0.2s ease, background 0.3s ease",
          willChange: "transform",
          mixBlendMode: "screen",
        }}
      />
      {/* Ring — lags behind */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovering ? "48px" : "36px",
          height: isHovering ? "48px" : "36px",
          border: `1.5px solid ${isHovering ? "rgba(167,139,250,0.6)" : "rgba(0,212,255,0.4)"}`,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: isVisible ? 1 : 0,
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
