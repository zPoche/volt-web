import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Zap } from 'lucide-react';
import { springSoft, springSnappy } from '../lib/motion';

const NAV = ['Projekte', 'Plantafel', 'Angebote', 'Kundencenter', 'Monteur', 'Lager'] as const;

type PanelRow = { title: string; meta: string; status: string; tone: 'ok' | 'warn' | 'muted' };
type VisualTheme = 'dark' | 'light';

const PANELS: Record<
  (typeof NAV)[number],
  { label: string; kpis: { label: string; value: string }[]; rows: PanelRow[] }
> = {
  Projekte: {
    label: 'PRJ · LV · Rechnungen',
    kpis: [
      { label: 'Aktiv', value: '12' },
      { label: 'Ampel rot', value: '2' },
      { label: 'Marge Ø', value: '18%' },
    ],
    rows: [
      { title: 'PRJ-2026-014 · Villa Nord', meta: 'LV · Nachtrag offen', status: 'Gelb', tone: 'warn' },
      { title: 'PRJ-2026-011 · Gewerbepark', meta: 'Rechnung · Teilzahlung', status: 'Grün', tone: 'ok' },
      { title: 'PRJ-2026-008 · Schule Ost', meta: 'Montage läuft', status: 'Grün', tone: 'ok' },
    ],
  },
  Plantafel: {
    label: 'Einsätze diese Woche',
    kpis: [
      { label: 'Einsätze', value: '28' },
      { label: 'Auslastung', value: '86%' },
      { label: 'NU', value: '4' },
    ],
    rows: [
      { title: 'Mo · Team A · Villa Nord', meta: '08:00–16:00', status: 'Besetzt', tone: 'ok' },
      { title: 'Di · Team B · Gewerbepark', meta: 'NU Elektro Süd', status: 'Plan', tone: 'muted' },
      { title: 'Mi · Vorarbeiter · Schule', meta: 'Material checken', status: 'Hinweis', tone: 'warn' },
    ],
  },
  Angebote: {
    label: 'Offene Angebote',
    kpis: [
      { label: 'Offen', value: '9' },
      { label: 'Wert', value: '184k' },
      { label: 'Folge', value: '3' },
    ],
    rows: [
      { title: 'ANG-482 · Smart Home Paket', meta: 'Kunde Müller', status: 'Versendet', tone: 'muted' },
      { title: 'ANG-479 · UVV + E-Check', meta: 'Gewerbepark', status: 'Entwurf', tone: 'warn' },
      { title: 'ANG-471 · PV Nachtrag', meta: 'Villa Nord', status: 'Angenommen', tone: 'ok' },
    ],
  },
  Kundencenter: {
    label: 'Anfragen & Kommunikation',
    kpis: [
      { label: 'Neu', value: '5' },
      { label: 'Offen', value: '14' },
      { label: 'Heute', value: '3' },
    ],
    rows: [
      { title: 'Anfrage · Wallbox Garage', meta: 'vor 12 Min.', status: 'Neu', tone: 'warn' },
      { title: 'Anruf · Termin verschieben', meta: 'Kunde Berger', status: 'Offen', tone: 'muted' },
      { title: 'Portal · Freigabe Angebot', meta: 'Müller GmbH', status: 'Erledigt', tone: 'ok' },
    ],
  },
  Monteur: {
    label: 'Stempeluhr & Checklisten',
    kpis: [
      { label: 'Online', value: '7' },
      { label: 'Offline', value: '2' },
      { label: 'Fotos', value: '41' },
    ],
    rows: [
      { title: 'Stempel · Villa Nord', meta: 'seit 07:52', status: 'Aktiv', tone: 'ok' },
      { title: 'Checkliste · Endprüfung', meta: '3/8 erledigt', status: 'Läuft', tone: 'warn' },
      { title: 'Sync · Schule Ost', meta: '12 Fotos queued', status: 'Offline', tone: 'muted' },
    ],
  },
  Lager: {
    label: 'Katalog & Bestellungen',
    kpis: [
      { label: 'Offen', value: '6' },
      { label: 'Kritisch', value: '3' },
      { label: 'Punch-Out', value: '2' },
    ],
    rows: [
      { title: 'Bestellung · Kabel 5x2,5', meta: 'Lieferant A', status: 'Unterwegs', tone: 'muted' },
      { title: 'Bestand · FI 40A', meta: 'unter Minimum', status: 'Kritisch', tone: 'warn' },
      { title: 'Verbrauch · Villa Nord', meta: 'heute gebucht', status: 'OK', tone: 'ok' },
    ],
  },
};

const TONE_CLASS: Record<VisualTheme, Record<PanelRow['tone'], string>> = {
  dark: {
    ok: 'bg-primary/15 text-primary',
    warn: 'bg-amber-400/15 text-amber-200',
    muted: 'bg-white/8 text-muted-foreground',
  },
  light: {
    ok: 'bg-teal-50 text-teal-700',
    warn: 'bg-amber-50 text-amber-700',
    muted: 'bg-slate-100 text-slate-600',
  },
};

type ProductVisualProps = {
  /** `dark` = Hero/Marketing; `light` = ERP-Alltag / Screenshot-Ersatz */
  theme?: VisualTheme;
  className?: string;
  /** layoutId-Präfix, damit Dark+Light gleichzeitig auf der Seite leben können */
  layoutIdPrefix?: string;
};

/**
 * Interaktives App-Shell-Mock — Sidebar klickbar, Content mit echten Labeln.
 * Light-Theme wirkt wie ein ERP-Screenshot (helle Büro-Oberfläche).
 */
export function ProductVisual({
  theme = 'dark',
  className = '',
  layoutIdPrefix = 'product',
}: ProductVisualProps) {
  const [active, setActive] = useState<(typeof NAV)[number]>('Projekte');
  const [autoplay, setAutoplay] = useState(true);
  const panel = PANELS[active];
  const isLight = theme === 'light';

  useEffect(() => {
    if (!autoplay) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setActive((current) => {
        const index = NAV.indexOf(current);
        return NAV[(index + 1) % NAV.length];
      });
    }, 3400);
    return () => window.clearInterval(id);
  }, [autoplay]);

  const shell = isLight
    ? 'bg-white text-slate-900'
    : 'bg-[rgb(22_25_23)] text-foreground';
  const chromeBorder = isLight ? 'border-slate-200' : 'border-border';
  const chromeBg = isLight ? 'bg-slate-50/90' : 'bg-secondary/70';
  const asideBg = isLight ? 'bg-slate-50' : 'bg-background/80';
  const surface = isLight
    ? 'border border-slate-200 bg-white'
    : 'border border-border bg-card';
  const muted = isLight ? 'text-slate-500' : 'text-muted-foreground';
  const strong = isLight ? 'text-slate-900' : 'text-foreground';
  const searchBg = isLight
    ? 'border border-slate-200 bg-white text-slate-400'
    : 'border border-border bg-background text-muted-foreground';
  const filterBg = isLight ? 'bg-slate-100 text-slate-500' : 'bg-secondary text-muted-foreground';
  const brand = isLight ? 'text-teal-600' : 'text-primary';
  const activeNavBg = isLight ? 'rgb(20 184 166 / 0.1)' : 'rgb(45 212 191 / 0.12)';
  const hoverBorder = isLight ? 'rgb(13 148 136 / 0.45)' : 'rgb(45 212 191 / 0.45)';
  const navLayoutId = `${layoutIdPrefix}-nav-pill`;

  return (
    <div className={`overflow-hidden ${className}`.trim()}>
      <div
        className={`flex h-full min-h-[280px] flex-col lg:min-h-[360px] ${shell}`}
        style={isLight ? { colorScheme: 'light' } : undefined}
      >
        <div className={`flex h-12 items-center gap-3 border-b px-4 ${chromeBorder} ${chromeBg}`}>
          <span className={`inline-flex items-center gap-1 text-sm font-bold ${brand}`}>
            <Zap className="h-3.5 w-3.5 fill-current" />
            Volt
          </span>
          <div className="ml-2 hidden flex-1 items-center gap-2 sm:flex">
            <div className={`h-7 flex-1 rounded-lg px-3 text-[11px] leading-7 ${searchBg}`}>
              Suche Projekte, Kunden, Belege…
            </div>
          </div>
          <div
            className={`h-7 w-7 rounded-full ${
              isLight ? 'bg-teal-100 ring-1 ring-teal-200' : 'bg-primary/20 ring-1 ring-primary/30'
            }`}
          />
        </div>
        <div className="flex min-h-0 flex-1">
          <aside className={`hidden w-44 shrink-0 border-r p-3 sm:block ${chromeBorder} ${asideBg}`}>
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
                    isActive ? brand : muted
                  }`}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    backgroundColor: isActive ? activeNavBg : 'rgb(255 255 255 / 0)',
                  }}
                  transition={springSnappy}
                >
                  {isActive && (
                    <motion.span
                      layoutId={navLayoutId}
                      className={`absolute inset-y-1 left-0 w-0.5 rounded-full ${
                        isLight ? 'bg-teal-600' : 'bg-primary'
                      }`}
                      transition={springSnappy}
                    />
                  )}
                  {label}
                </motion.button>
              );
            })}
          </aside>
          <main className={`flex-1 space-y-3 overflow-hidden p-4 sm:p-5 ${isLight ? 'bg-[#f8fafc]' : ''}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
                className="space-y-3"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className={`text-sm font-semibold tracking-tight ${strong}`}>{active}</h3>
                  <p className={`text-[11px] ${muted}`}>{panel.label}</p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {panel.kpis.map((kpi, i) => (
                    <motion.div
                      key={kpi.label}
                      className={`rounded-xl px-2.5 py-2 ${surface}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <p
                        className={`text-[10px] uppercase tracking-[0.12em] ${muted}`}
                      >
                        {kpi.label}
                      </p>
                      <p className={`mt-0.5 text-sm font-semibold tabular-nums ${strong}`}>
                        {kpi.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className={`flex h-10 items-center gap-2 rounded-xl px-3 ${surface}`}>
                  <div className={`h-6 flex-1 rounded-md text-[11px] leading-6 ${filterBg}`}>
                    Filter · Status · Zeitraum
                  </div>
                  <motion.div
                    className={`h-7 rounded-lg px-2.5 text-[11px] font-semibold leading-7 ${
                      isLight
                        ? 'bg-teal-600 text-white'
                        : 'bg-primary text-primary-foreground'
                    }`}
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.2 }}
                  >
                    Neu
                  </motion.div>
                </div>

                <div className="grid gap-2">
                  {panel.rows.map((row, i) => (
                    <motion.div
                      key={`${active}-${row.title}`}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 ${surface}`}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, ...springSoft }}
                      whileHover={{ y: -2, borderColor: hoverBorder }}
                    >
                      <div className="min-w-0 flex-1">
                        <p className={`truncate text-xs font-semibold ${strong}`}>{row.title}</p>
                        <p className={`mt-0.5 truncate text-[11px] ${muted}`}>{row.meta}</p>
                      </div>
                      <span
                        className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold ${TONE_CLASS[theme][row.tone]}`}
                      >
                        {row.status}
                      </span>
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
