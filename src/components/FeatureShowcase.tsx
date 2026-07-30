import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check } from 'lucide-react';
import { FEATURES } from '../content/features';
import { easeOut, springSnappy } from '../lib/motion';

const ROTATE_MS = 4800;

/**
 * Feature-Bühne: kompakte Liste + ein Detail — kein Textwall aus Karten.
 */
export function FeatureShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const feature = FEATURES[active] ?? FEATURES[0];
  const Icon = feature.icon;

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % FEATURES.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <nav aria-label="Funktionen" className="min-w-0">
        <ul className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:pb-0">
          {FEATURES.map((item, index) => {
            const selected = index === active;
            return (
              <li key={item.title} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className={`relative w-full rounded-lg px-3 py-2 text-left text-sm transition-colors lg:rounded-none lg:px-0 lg:py-2 ${
                    selected
                      ? 'bg-secondary text-foreground lg:bg-transparent lg:text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="relative z-10 font-medium tracking-tight">{item.title}</span>
                  {selected && (
                    <motion.span
                      layoutId="feature-active-bar"
                      className="absolute inset-y-1 left-0 hidden w-0.5 rounded-full bg-primary lg:block"
                      transition={springSnappy}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="relative min-h-[18rem] border-t border-border pt-8 lg:min-h-[20rem] lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: easeOut }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                    {String(active + 1).padStart(2, '0')} / {String(FEATURES.length).padStart(2, '0')}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{feature.title}</h3>
                </div>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {feature.does}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Alltag
                </p>
                <p className="text-sm leading-relaxed text-foreground sm:text-base">{feature.helps}</p>
              </div>
              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Kostenvorteil
                </p>
                <p className="text-sm leading-relaxed text-foreground sm:text-base">{feature.saves}</p>
              </div>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {feature.points.map((point) => (
                <li key={point} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex gap-1.5" aria-hidden="true">
              {FEATURES.map((item, index) => (
                <span
                  key={item.title}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === active ? 'w-6 bg-primary' : 'w-1.5 bg-border'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
