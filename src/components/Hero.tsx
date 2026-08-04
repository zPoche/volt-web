import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { VoltLogo } from './VoltLogo';
import { ProductVisual } from './ProductVisual';
import { easeOut, springSoft } from '../lib/motion';

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden border-b border-border bg-background"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden="true" className="volt-ruled pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_70%_40%,rgb(45_212_191_/_0.07),transparent_60%)]"
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-stretch lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
        <div className="relative z-10 flex max-w-xl flex-col justify-center px-6 pb-12 pt-[calc(var(--nav-h)+2rem)] sm:px-8 lg:pb-20 lg:pt-24">
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <VoltLogo size="hero" />
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="volt-live-line mt-8 max-w-[12rem]"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
            style={{ transformOrigin: 'left' }}
          />

          <h1 id="hero-heading" className="text-display mt-7 text-foreground">
            <motion.span
              className="block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.2, ease: easeOut }}
            >
              Weniger Chaos.
            </motion.span>
            <motion.span
              className="mt-1 block text-primary"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.28, ease: easeOut }}
            >
              Mehr Marge.
            </motion.span>
          </h1>

          <motion.p
            className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.36, ease: easeOut }}
          >
            Projekte, Plantafel, MonteurHub und Kostenüberblick — modular, deutsch, Lexware nur wenn
            ihr wollt.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.44, ease: easeOut }}
          >
            <motion.a
              href="#kontakt"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={springSoft}
            >
              Demo anfragen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="#module"
              className="inline-flex h-12 items-center rounded-md border border-border bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-secondary/60"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={springSoft}
            >
              Funktionen ansehen
            </motion.a>
          </motion.div>

          <motion.p
            className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            ERP für Elektrohandwerk
          </motion.p>
        </div>

        <motion.div
          className="relative flex min-h-[280px] items-end lg:min-h-full"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
        >
          <div className="volt-panel relative h-[min(70svh,560px)] w-full overflow-hidden border-x-0 border-b-0 sm:border-x lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[calc(100%+2rem)] lg:rounded-none lg:border-y-0 lg:border-l lg:border-r-0">
            <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-2.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brass">
                Terminal · Live
              </span>
              <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                app.volt-erp.de
              </span>
            </div>
            <ProductVisual className="absolute inset-x-0 bottom-0 top-10" layoutIdPrefix="hero-product" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
