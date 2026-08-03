import { motion, useScroll, useSpring } from 'motion/react';

/** Dünner Primary-Fortschritt oben — modern, ohne Glow-Kitsch. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-primary via-teal-300 to-primary"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
