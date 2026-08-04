import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FEATURED_FEATURE_COUNT, FEATURES } from '../content/features';
import { easeOut, springSoft, springSnappy, staggerContainer, fadeUp } from '../lib/motion';

const viewport = { once: true, amount: 0.12, margin: '0px 0px -6% 0px' } as const;

/**
 * Aufklappbare Feature-Kacheln — zuerst Top-Module, Rest auf Wunsch.
 * Solide Panels (keine Glass-Kacheln).
 */
export function FeatureTiles() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? FEATURES : FEATURES.slice(0, FEATURED_FEATURE_COUNT);
  const hiddenCount = FEATURES.length - FEATURED_FEATURE_COUNT;

  function toggle(title: string) {
    setOpen((prev) => ({ ...prev, [title]: !prev[title] }));
  }

  return (
    <div className="mt-12">
      <motion.ul
        className="grid gap-2 lg:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {visible.map(({ icon: Icon, title, does, helps, saves, points }, index) => {
          const isOpen = Boolean(open[title]);
          const n = String(index + 1).padStart(2, '0');

          return (
            <motion.li
              key={title}
              variants={fadeUp}
              layout
              transition={springSnappy}
              className="volt-panel relative overflow-hidden rounded-md"
              animate={{
                borderColor: isOpen ? 'rgb(45 212 191 / 0.55)' : 'rgb(58 68 62)',
              }}
            >
              <motion.button
                type="button"
                className="relative flex w-full items-start gap-3.5 p-5 text-left sm:p-5"
                onClick={() => toggle(title)}
                aria-expanded={isOpen}
              >
                <div className="relative shrink-0">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="absolute -bottom-1 -right-1 rounded-sm bg-background px-1 font-mono text-[10px] font-semibold tabular-nums text-brass ring-1 ring-border">
                    {n}
                  </span>
                </div>

                <span className="min-w-0 flex-1">
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-base font-semibold tracking-tight">{title}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={springSnappy}
                      className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border ${
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
                    transition={{ duration: 0.28, ease: easeOut }}
                    className="overflow-hidden"
                  >
                    <div className="relative space-y-4 border-t border-border px-5 pb-5 pt-4 sm:px-5">
                      <div className="space-y-3 text-sm leading-relaxed">
                        <p>
                          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-brass">
                            Alltag ·{' '}
                          </span>
                          <span className="text-foreground/90">{helps}</span>
                        </p>
                        <p>
                          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-primary">
                            Kostenvorteil ·{' '}
                          </span>
                          <span className="text-foreground/90">{saves}</span>
                        </p>
                      </div>

                      <ul className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-3">
                        {points.map((point, i) => (
                          <motion.li
                            key={point}
                            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                            initial={{ y: 6, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.08 + i * 0.04 }}
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

      {!showAll && hiddenCount > 0 ? (
        <div className="mt-8 flex justify-center">
          <motion.button
            type="button"
            className="group inline-flex h-11 items-center gap-2 rounded-md border border-border bg-secondary px-5 text-sm font-semibold text-foreground hover:border-primary/40"
            onClick={() => setShowAll(true)}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={springSoft}
          >
            Alle Module anzeigen
            <span className="rounded-sm border border-border bg-background px-1.5 py-0.5 font-mono text-xs tabular-nums text-muted-foreground">
              +{hiddenCount}
            </span>
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </motion.button>
        </div>
      ) : null}
    </div>
  );
}
