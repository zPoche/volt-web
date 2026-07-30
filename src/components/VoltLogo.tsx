import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

type VoltLogoProps = {
  className?: string;
  /** Größere Wordmark für Hero / Marketing */
  size?: 'nav' | 'hero';
};

/** Entspricht dem ERP-`VoltLogo`: Lucide Zap + „Volt“. */
export function VoltLogo({ className = '', size = 'nav' }: VoltLogoProps) {
  const isHero = size === 'hero';
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-bold tracking-tight text-primary ${
        isHero ? 'text-5xl sm:text-6xl md:text-7xl' : 'text-xl'
      } ${className}`}
      aria-label="Volt"
    >
      <motion.span
        className="inline-flex"
        animate={
          isHero
            ? { rotate: [0, -12, 0], scale: [1, 1.08, 1] }
            : undefined
        }
        transition={
          isHero
            ? { duration: 1.8, repeat: Infinity, repeatDelay: 2.4, ease: 'easeInOut' }
            : undefined
        }
      >
        <Zap
          className={`shrink-0 fill-current ${isHero ? 'h-[0.95em] w-[0.95em]' : 'h-[1em] w-[1em]'}`}
          aria-hidden="true"
        />
      </motion.span>
      Volt
    </span>
  );
}
