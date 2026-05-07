import { useInView } from "react-intersection-observer";

/** Simple hook wrapping react-intersection-observer with sensible defaults */
export function useReveal(options = {}) {
  const { threshold = 0.15, triggerOnce = true, rootMargin = "0px" } = options;

  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  return { ref, inView };
}
