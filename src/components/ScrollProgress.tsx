import { motion, useScroll, useSpring } from 'motion/react';

/** Segmentierte Fortschrittsleiste — Workflow-Metapher statt Glow-Hairline. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1" aria-hidden="true">
      <div className="absolute inset-0 grid grid-cols-6 gap-px bg-border/40">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-background/80" />
        ))}
      </div>
      <motion.div
        className="absolute inset-y-0 left-0 origin-left bg-primary"
        style={{ scaleX, width: '100%' }}
      />
    </div>
  );
}
