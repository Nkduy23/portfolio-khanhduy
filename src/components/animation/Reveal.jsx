import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VARIANTS = {
  fadeUp: {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  fadeDown: {
    hidden: { y: -40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  fadeLeft: {
    hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  fadeRight: {
    hidden: { x: 60, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  zoom: {
    hidden: { scale: 0.85, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function Reveal({ children, variant = "fadeUp", delay = 0, duration = 0.6, className = "", threshold = 0.1 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={VARIANTS[variant]}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
