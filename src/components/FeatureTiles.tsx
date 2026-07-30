import { useState } from 'react';
import { Check, ChevronDown, Clock3, Coins } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FEATURES } from '../content/features';
import { easeOut, springSoft, springSnappy, staggerContainer, fadeUp } from '../lib/motion';

const viewport = { once: true, amount: 0.12, margin: '0px 0px -6% 0px' } as const;

/**
 * Aufklappbare Feature-Kacheln mit leichter Motion und klarer Lesehierarchie.
 */
export function FeatureTiles() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  function toggle(title: string) {
    setOpen((prev) => ({ ...prev, [title]: !prev[title] }));
  }

  return (
    <motion.ul
      className="mt-10 grid gap-3 lg:grid-cols-2"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {FEATURES.map(({ icon: Icon, title, does, helps, saves, points }, index) => {
        const isOpen = Boolean(open[title]);
        const n = String(index + 1).padStart(2, '0');

        return (
          <motion.li
            key={title}
            variants={fadeUp}
            layout
            whileHover={{ y: -3 }}
            transition={springSnappy}
            className="feature-tile relative overflow-hidden rounded-xl border border-border bg-card"
            animate={{
              borderColor: isOpen ? 'rgb(45 212 191 / 0.5)' : 'rgb(51 65 85)',
            }}
          >
            {/* Dezenter Hintergrund-Akzent */}
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
              animate={{ opacity: isOpen ? 1 : 0.35, scale: isOpen ? 1.15 : 1 }}
              transition={{ duration: 0.4 }}
            />

            <AnimatePresence>
              {isOpen && (
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-primary via-primary to-primary/20"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.35, ease: easeOut }}
                />
              )}
            </AnimatePresence>

            <motion.button
              type="button"
              className="relative flex w-full items-start gap-3.5 p-5 text-left"
              onClick={() => toggle(title)}
              whileHover={{ backgroundColor: 'rgb(51 65 85 / 0.35)' }}
              aria-expanded={isOpen}
            >
              <div className="relative shrink-0">
                <motion.span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground ring-1 ring-primary/15"
                  animate={{
                    scale: isOpen ? 1.06 : 1,
                    rotate: isOpen ? -8 : 0,
                  }}
                  whileHover={{ rotate: -4, scale: 1.04 }}
                  transition={springSoft}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </motion.span>
                <span className="absolute -bottom-1 -right-1 rounded-md bg-background/90 px-1 text-[10px] font-bold tabular-nums text-primary ring-1 ring-border">
                  {n}
                </span>
              </div>

              <span className="min-w-0 flex-1">
                <span className="flex items-start justify-between gap-3">
                  <span className="text-base font-semibold tracking-tight">{title}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={springSnappy}
                    className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                      isOpen ? 'bg-primary/15 text-primary' : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </motion.span>
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                  {does}
                </span>
              </span>
            </motion.button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: easeOut }}
                  className="overflow-hidden"
                >
                  <div className="relative space-y-4 border-t border-border/80 px-5 pb-5 pt-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <motion.div
                        className="rounded-lg bg-secondary/60 px-3.5 py-3"
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.04 }}
                      >
                        <p className="mb-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                          <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                          Alltag
                        </p>
                        <p className="text-sm leading-relaxed text-foreground/90">{helps}</p>
                      </motion.div>
                      <motion.div
                        className="rounded-lg bg-primary/10 px-3.5 py-3 ring-1 ring-primary/20"
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <p className="mb-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                          <Coins className="h-3.5 w-3.5" aria-hidden="true" />
                          Kostenvorteil
                        </p>
                        <p className="text-sm leading-relaxed text-foreground/90">{saves}</p>
                      </motion.div>
                    </div>

                    <ul className="flex flex-wrap gap-2">
                      {points.map((point, i) => (
                        <motion.li
                          key={point}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/40 px-2.5 py-1.5 text-xs text-muted-foreground"
                          initial={{ y: 6, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.12 + i * 0.05 }}
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
