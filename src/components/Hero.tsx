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
import { Magnetic } from './Magnetic';
import { easeOut, springSoft } from '../lib/motion';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const rawX = useMotionValue(72);
  const rawY = useMotionValue(40);
  const pointerX = useSpring(rawX, { stiffness: 140, damping: 22 });
  const pointerY = useSpring(rawY, { stiffness: 140, damping: 22 });
  const visualX = useTransform(pointerX, [0, 100], [-10, 10]);
  const visualY = useTransform(pointerY, [0, 100], [-8, 8]);
  const glow = useMotionTemplate`radial-gradient(640px circle at ${pointerX}% ${pointerY}%, rgb(45 212 191 / 0.2), transparent 55%)`;

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
      className="volt-atmosphere relative min-h-[100svh] overflow-hidden border-b border-border"
      aria-labelledby="hero-heading"
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        rawX.set(72);
        rawY.set(40);
      }}
    >
      <div aria-hidden="true" className="volt-grid pointer-events-none absolute inset-0 opacity-60" />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-24 h-48 w-48 rounded-full bg-primary/15 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, -12, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="relative z-10 flex max-w-xl flex-col justify-center px-6 pb-14 pt-[calc(var(--nav-h)+2rem)] sm:px-8 lg:pb-20 lg:pt-24">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <VoltLogo size="hero" />
          </motion.div>

          <motion.p
            className="eyebrow mt-8"
            initial={{ y: 12, opacity: 0.4 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.12, ease: easeOut }}
          >
            ERP für Elektrohandwerk
          </motion.p>

          <h1 id="hero-heading" className="text-display mt-4 text-foreground">
            <motion.span
              className="block"
              initial={{ y: 18 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: easeOut }}
            >
              Weniger Chaos.
            </motion.span>
            <motion.span
              className="text-highlight mt-1 block"
              initial={{ y: 18 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.55, delay: 0.26, ease: easeOut }}
            >
              Mehr Marge.
            </motion.span>
          </h1>

          <motion.p
            className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease: easeOut }}
          >
            Projekte, Plantafel, MonteurHub und Kostenüberblick — modular, deutsch, Lexware nur wenn
            ihr wollt.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: easeOut }}
          >
            <Magnetic>
              <motion.a
                href="#kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_0_32px_rgb(45_212_191_/_0.28)]"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={springSoft}
              >
                Demo anfragen
                <motion.span
                  aria-hidden="true"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.3, repeat: Infinity, repeatDelay: 1 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <motion.a
                href="#module"
                className="volt-glass inline-flex h-12 items-center rounded-xl px-6 text-sm font-semibold text-foreground"
                whileHover={{ scale: 1.03, borderColor: 'rgb(45 212 191 / 0.4)' }}
                whileTap={{ scale: 0.97 }}
                transition={springSoft}
              >
                Funktionen ansehen
              </motion.a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="relative min-h-[300px] px-4 pb-12 sm:px-6 lg:min-h-[480px] lg:px-0 lg:pb-16 lg:pr-8 lg:pt-24"
          initial={{ y: 24, scale: 1.02 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1, ease: easeOut }}
          style={{ x: visualX, y: visualY }}
        >
          <div className="volt-glass relative h-full min-h-[280px] overflow-hidden rounded-2xl lg:min-h-[420px]">
            <ProductVisual className="absolute inset-0" layoutIdPrefix="hero-product" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
