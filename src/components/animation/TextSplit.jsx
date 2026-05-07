import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TextSplit({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  by = "word", // 'word' | 'char'
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const items = by === "char" ? text.split("") : text.split(" ");

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`} aria-label={text}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={by === "word" ? { marginRight: "0.25em" } : {}}
          initial={{ y: "110%", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * staggerDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-hidden="true"
        >
          {item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
    </span>
  );
}
