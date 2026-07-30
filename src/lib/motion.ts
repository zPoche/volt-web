import type { Transition, Variants } from 'motion/react';

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const springSoft: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 28,
};

export const springSnappy: Transition = {
  type: 'spring',
  stiffness: 420,
  damping: 32,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};
