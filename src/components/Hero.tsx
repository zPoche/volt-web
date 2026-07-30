import { useRef, type PointerEvent } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { VoltLogo } from './VoltLogo';
import { ProductVisual } from './ProductVisual';
import { easeOut, springSoft } from '../lib/motion';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const rawX = useMotionValue(72);
  const rawY = useMotionValue(40);
  const pointerX = useSpring(rawX, { stiffness: 140, damping: 22 });
  const pointerY = useSpring(rawY, { stiffness: 140, damping: 22 });
  const visualX = useTransform(pointerX, [0, 100], [-12, 12]);
  const visualY = useTransform(pointerY, [0, 100], [-8, 8]);
  const glow = useMotionTemplate`radial-gradient(520px circle at ${pointerX}% ${pointerY}%, rgb(20 184 166 / 0.18), transparent 55%)`;

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(((event.clientX - rect.left) / rect.width) * 100);
    rawY.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      ref={sectionRef}
      id="top"
      className="volt-atmosphere relative overflow-hidden border-b border-border"
      aria-labelledby="hero-heading"
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        rawX.set(72);
        rawY.set(40);
      }}
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />
      <div className="relative mx-auto grid max-w-6xl lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-stretch">
        <div className="relative z-10 flex max-w-xl flex-col justify-end px-6 pb-16 pt-14 sm:px-8 lg:pb-20 lg:pt-20">
          <motion.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <VoltLogo size="hero" />
          </motion.div>
          <motion.h1
            id="hero-heading"
            className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
          >
            ERP fürs Elektrohandwerk — klar, modular, alltagstauglich.
          </motion.h1>
          <motion.p
            className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: easeOut }}
          >
            Projekte, Einsatzplanung, Angebote und Abrechnung in einem System.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: easeOut }}
          >
            <motion.a
              href="#kontakt"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={springSoft}
            >
              Demo anfragen
              <motion.span
                aria-hidden="true"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.2 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.a>
            <motion.a
              href="#produkt"
              className="inline-flex h-11 items-center rounded-lg border border-border bg-card px-5 text-sm font-semibold text-foreground"
              whileHover={{ scale: 1.03, y: -2, backgroundColor: 'rgb(243 244 246)' }}
              whileTap={{ scale: 0.97 }}
              transition={springSoft}
            >
              Produkt ansehen
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="relative min-h-[280px] border-t border-border lg:min-h-[420px] lg:border-t-0"
          initial={{ y: 16, scale: 1.02 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1, ease: easeOut }}
          style={{ x: visualX, y: visualY }}
        >
          <ProductVisual />
        </motion.div>
      </div>
    </section>
  );
}
