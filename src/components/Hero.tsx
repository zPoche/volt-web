import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HERO_TICKER } from '../content/features';
import { easeOut, springSoft } from '../lib/motion';
import { VoltLogo } from './VoltLogo';
import { ProductVisual } from './ProductVisual';

function HeroTicker() {
  const loop = [...HERO_TICKER, ...HERO_TICKER];

  return (
    <div className="volt-marquee shrink-0" aria-label="Module und Eigenschaften">
      <div className="volt-marquee-track py-3.5" aria-hidden="true">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="volt-marquee-item">
            {item}
          </span>
        ))}
      </div>
      <p className="sr-only">{HERO_TICKER.join(', ')}</p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] flex-col overflow-x-clip border-b border-border bg-background"
      aria-labelledby="hero-heading"
    >
      <div aria-hidden="true" className="volt-ruled pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_70%_40%,rgb(45_212_191_/_0.07),transparent_60%)]"
      />

      <div className="relative mx-auto grid min-h-0 w-full max-w-6xl flex-1 items-stretch lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
        <div className="relative z-10 flex max-w-xl flex-col justify-center px-6 pb-8 pt-[calc(var(--nav-h)+1.25rem)] sm:px-8 lg:pb-10 lg:pt-20">
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <VoltLogo size="hero" />
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="volt-live-line mt-6 max-w-[12rem] sm:mt-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
            style={{ transformOrigin: 'left' }}
          />

          <h1 id="hero-heading" className="text-display mt-5 overflow-visible text-foreground sm:mt-7">
            <motion.span
              className="block overflow-visible"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.2, ease: easeOut }}
            >
              Weniger Chaos.
            </motion.span>
            <motion.span
              className="mt-1 block overflow-visible pb-[0.08em] text-primary"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.28, ease: easeOut }}
            >
              Mehr Marge.
            </motion.span>
          </h1>

          <motion.p
            className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg"
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.36, ease: easeOut }}
          >
            Projekte, Plantafel, MonteurHub und Kostenüberblick — modular, deutsch, Lexware nur wenn
            ihr wollt.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9"
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
            className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            ERP für Elektrohandwerk
          </motion.p>
        </div>

        <motion.div
          className="relative hidden min-h-0 px-0 pb-3 pt-[calc(var(--nav-h)+0.75rem)] lg:block"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
        >
          <div className="volt-panel relative h-full w-full overflow-hidden rounded-none border-y border-l border-r-0">
            <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-2.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brass">
                Terminal · Live
              </span>
              <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                app.volt-erp.de
              </span>
            </div>
            <ProductVisual
              className="absolute inset-x-0 bottom-0 top-10"
              layoutIdPrefix="hero-product"
            />
          </div>
        </motion.div>
      </div>

      <HeroTicker />
    </section>
  );
}
