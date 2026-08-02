import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Zap } from 'lucide-react';
import { springSoft, springSnappy } from '../lib/motion';

const NAV = ['Projekte', 'Plantafel', 'Angebote', 'Kundencenter', 'Monteur', 'Lager'] as const;

const PANELS: Record<(typeof NAV)[number], { widths: number[]; label: string }> = {
  Projekte: { widths: [72, 54, 64], label: 'PRJ · LV · Rechnungen' },
  Plantafel: { widths: [80, 62, 70], label: 'Einsätze diese Woche' },
  Angebote: { widths: [60, 75, 52], label: 'Offene Angebote' },
  Kundencenter: { widths: [55, 66, 71], label: 'Anfragen & Kommunikation' },
  Monteur: { widths: [64, 48, 58], label: 'Stempeluhr & Checklisten' },
  Lager: { widths: [70, 52, 61], label: 'Katalog & Bestellungen' },
};

/**
 * Interaktives App-Shell-Mock — Sidebar klickbar, Content animiert mit.
 */
export function ProductVisual() {
  const [active, setActive] = useState<(typeof NAV)[number]>('Projekte');
  const [autoplay, setAutoplay] = useState(true);
  const panel = PANELS[active];

  useEffect(() => {
    if (!autoplay) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setActive((current) => {
        const index = NAV.indexOf(current);
        return NAV[(index + 1) % NAV.length];
      });
    }, 3200);
    return () => window.clearInterval(id);
  }, [autoplay]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="flex h-full min-h-[280px] flex-col bg-[rgb(8_12_20_/_0.55)] lg:min-h-[360px]">
        <div className="flex h-12 items-center gap-3 border-b border-white/8 bg-white/[0.03] px-4">
          <motion.span
            className="inline-flex items-center gap-1 text-sm font-bold text-primary"
            animate={{ rotate: [0, -4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 3 }}
          >
            <Zap className="h-3.5 w-3.5 fill-current" />
            Volt
          </motion.span>
          <motion.div
            className="ml-4 h-7 flex-1 origin-left rounded-lg bg-secondary"
            animate={{ scaleX: [0.92, 1, 0.96, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="h-7 w-7 rounded-full bg-accent"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        </div>
        <div className="flex min-h-0 flex-1">
          <aside className="hidden w-44 shrink-0 border-r border-border bg-card p-3 sm:block">
            {NAV.map((label) => {
              const isActive = label === active;
              return (
                <motion.button
                  key={label}
                  type="button"
                  onClick={() => {
                    setAutoplay(false);
                    setActive(label);
                  }}
                  className={`relative mb-1 flex w-full rounded-lg px-3 py-2 text-left text-xs font-medium ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    backgroundColor: isActive ? 'rgb(45 212 191 / 0.12)' : 'rgb(255 255 255 / 0)',
                  }}
                  transition={springSnappy}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-y-1 left-0 w-0.5 rounded-full bg-primary"
                      transition={springSnappy}
                    />
                  )}
                  {label}
                </motion.button>
              );
            })}
          </aside>
          <main className="flex-1 space-y-3 overflow-hidden p-4 sm:p-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
                className="space-y-3"
              >
                <div className="flex items-baseline gap-2">
                  <div className="h-5 w-28 rounded bg-foreground/80" />
                  <div className="text-xs text-muted-foreground">{panel.label}</div>
                </div>
                <div className="flex h-10 items-center gap-2 rounded-xl border border-border bg-card px-3">
                  <div className="h-6 flex-1 rounded-md bg-secondary" />
                  <motion.div
                    className="h-7 w-20 rounded-lg bg-primary"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.2 }}
                  />
                </div>
                <div className="grid gap-2">
                  {panel.widths.map((w, i) => (
                    <motion.div
                      key={`${active}-${i}`}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-3"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, ...springSoft }}
                      whileHover={{ y: -2, borderColor: 'rgb(45 212 191 / 0.45)' }}
                    >
                      <motion.div
                        className="h-8 w-8 rounded-lg bg-accent"
                        animate={{ rotate: [0, 3, 0] }}
                        transition={{ duration: 2.5, delay: i * 0.2, repeat: Infinity }}
                      />
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2.5 rounded bg-foreground/20" style={{ width: `${w}%` }} />
                        <div className="h-2 w-1/3 rounded bg-muted-foreground/25" />
                      </div>
                      <div className="h-6 w-14 rounded-md bg-primary/15" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
