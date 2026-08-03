import { useState, type FormEvent, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { BUSINESS_BENEFITS, OUTCOMES, TRUST_POINTS, WORKFLOW } from '../content/features';
import { IMPRESSUM } from '../content/impressum';
import { fadeUp, springSoft, springSnappy, staggerContainer } from '../lib/motion';
import { FeatureTiles } from './FeatureTiles';
import { BlitzLoader } from './BlitzLoader';
import { ProductVisual } from './ProductVisual';
import { useLoading } from '../loading/useLoading';

const CONTACT_EMAIL = 'demo@volt-erp.de';
const viewport = { once: true, amount: 0.15, margin: '0px 0px -6% 0px' } as const;

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function ProductSection() {
  return (
    <section
      id="produkt"
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="produkt-heading"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-8 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 14, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.div variants={fadeUp}>
          <SectionEyebrow>Warum Volt</SectionEyebrow>
        </motion.div>
        <motion.h2 id="produkt-heading" className="text-section mt-4 max-w-2xl" variants={fadeUp}>
          Wo Marge heute <span className="text-highlight">verloren geht</span>
        </motion.h2>
        <motion.p
          className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
          variants={fadeUp}
        >
          Suchen, Nachtelefonieren, Nachtragen, Gegensteuern — Volt schließt die Lücken zwischen Büro und
          Baustelle.
        </motion.p>
        <motion.ul
          className="relative mt-12 grid gap-8 border-t border-white/8 pt-12 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[8%] right-[8%] top-[calc(3rem+0.7rem)] hidden h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent lg:block"
          />
          {BUSINESS_BENEFITS.map((item, index) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={springSnappy}
              className="relative space-y-2"
            >
              <motion.span
                aria-hidden="true"
                className="mb-3 grid h-7 w-7 place-items-center rounded-full border border-primary/40 bg-[rgb(8_12_20_/_0.7)] text-[11px] font-bold tabular-nums text-primary"
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={viewport}
                transition={{ delay: 0.08 * index, ...springSnappy }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.span>
              <h3 className="text-sm font-semibold tracking-tight text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="relative border-b border-border" aria-label="Volt auf einen Blick">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6 py-7 sm:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {TRUST_POINTS.map((point, index) => (
            <motion.li
              key={point}
              className="inline-flex items-center gap-2.5 text-sm text-muted-foreground"
              initial={{ opacity: 0.25, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: index * 0.05, duration: 0.35 }}
            >
              <span
                className="grid size-4 place-items-center rounded-full border border-primary/35 bg-primary/10"
                aria-hidden="true"
              >
                <span className="size-1.5 rounded-full bg-primary" />
              </span>
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function OutcomeSection() {
  return (
    <section
      id="ergebnis"
      className="relative overflow-hidden border-b border-border bg-card/30"
      aria-labelledby="ergebnis-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <SectionEyebrow>Ergebnis</SectionEyebrow>
            </motion.div>
            <motion.h2 id="ergebnis-heading" className="text-section mt-4" variants={fadeUp}>
              Was sich im Betrieb <span className="text-highlight">ändert</span>
            </motion.h2>
            <motion.p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground" variants={fadeUp}>
              Nicht mehr Module um der Module willen — sondern ein klarer Arbeitsfluss von der Anfrage
              bis zur Abrechnung.
            </motion.p>
            <motion.ul className="mt-10 space-y-6" variants={staggerContainer}>
              {OUTCOMES.map((item, index) => (
                <motion.li
                  key={item.title}
                  variants={fadeUp}
                  className="relative border-l border-primary/40 pl-5"
                >
                  <p className="text-[11px] font-bold tabular-nums tracking-[0.14em] text-primary/80">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="volt-glass relative overflow-hidden rounded-2xl p-5 sm:p-7"
            initial={{ opacity: 0.25, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              Typischer Tag
            </p>
            <ol className="relative mt-6 space-y-0">
              <span
                aria-hidden="true"
                className="absolute bottom-3 left-[2.15rem] top-3 w-px bg-gradient-to-b from-primary/50 via-primary/25 to-amber-300/40"
              />
              {[
                { when: '07:45', what: 'Plantafel steht — Team und NU sind disponiert.', accent: false },
                { when: '10:20', what: 'MonteurHub meldet Stempel, Fotos und Checkliste.', accent: false },
                { when: '15:40', what: 'Nachtrag landet in der Akte — Büro sieht denselben Stand.', accent: false },
                {
                  when: '17:10',
                  what: 'Ampel zeigt: Material frisst Marge — rechtzeitig gegengesteuert.',
                  accent: true,
                },
              ].map((row, index) => (
                <motion.li
                  key={row.when}
                  className="relative flex gap-4 py-3.5 pl-1"
                  initial={{ opacity: 0.2, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ delay: 0.08 * index, duration: 0.4 }}
                >
                  <span
                    className={`relative z-[1] grid h-9 w-14 shrink-0 place-items-center rounded-full border font-mono text-[11px] font-semibold ${
                      row.accent
                        ? 'border-amber-300/50 bg-amber-400/15 text-amber-100 shadow-[0_0_24px_rgb(251_191_36_/_0.22)]'
                        : 'border-primary/35 bg-[rgb(8_12_20_/_0.65)] text-primary'
                    }`}
                  >
                    {row.when}
                  </span>
                  <span
                    className={`pt-2 text-sm leading-relaxed ${
                      row.accent ? 'text-foreground' : 'text-foreground/85'
                    }`}
                  >
                    {row.what}
                  </span>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ModulesSection() {
  return (
    <section
      id="module"
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="module-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(rgb(45 212 191 / 0.08) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow>Module</SectionEyebrow>
          </motion.div>
          <motion.h2 id="module-heading" className="text-section mt-4" variants={fadeUp}>
            Funktionen, die den <span className="text-highlight">Alltag</span> tragen
          </motion.h2>
          <motion.p className="mt-4 text-base text-muted-foreground" variants={fadeUp}>
            Kachel öffnen — Nutzen und Kostenvorteil erscheinen mit.
          </motion.p>
        </motion.div>
        <FeatureTiles />
      </div>
    </section>
  );
}

export function WorkflowSection() {
  return (
    <section
      id="ablauf"
      className="border-b border-border bg-card/40"
      aria-labelledby="ablauf-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer}
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow>Ablauf</SectionEyebrow>
          </motion.div>
          <motion.h2 id="ablauf-heading" className="text-section mt-4" variants={fadeUp}>
            So erleichtert Volt die <span className="text-highlight">Arbeit</span>
          </motion.h2>
          <motion.p className="mt-4 text-base text-muted-foreground" variants={fadeUp}>
            Ein typischer Auftrag von der Anfrage bis zur Abrechnung.
          </motion.p>
        </motion.div>

        <div className="relative mt-14">
          <motion.div
            className="absolute bottom-3 left-[1.15rem] top-3 w-px origin-top bg-border sm:left-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute bottom-3 left-[1.15rem] top-3 w-px origin-top bg-primary sm:left-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewport}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />

          <ol className="relative grid gap-10">
            {WORKFLOW.map((item, index) => {
              const left = index % 2 === 0;
              return (
                <motion.li
                  key={item.step}
                  className="relative grid gap-3 sm:grid-cols-2 sm:gap-10"
                  initial={{ opacity: 0.2, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div
                    className={`pl-12 sm:pl-0 ${left ? 'sm:pr-12 sm:text-right' : 'sm:col-start-2 sm:pl-12'}`}
                  >
                    <motion.div
                      className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-[rgb(8_12_20_/_0.85)] text-xs font-bold text-primary shadow-[0_0_24px_rgb(45_212_191_/_0.18)] sm:left-1/2 sm:-translate-x-1/2"
                      whileHover={{ scale: 1.12 }}
                      transition={springSnappy}
                    >
                      {item.step}
                    </motion.div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-primary/90">Entlastung · </span>
                        {item.relief}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function OperationsSection() {
  return (
    <section
      id="betrieb"
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="betrieb-heading"
    >
      <div aria-hidden="true" className="volt-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow>Betrieb</SectionEyebrow>
          </motion.div>
          <motion.h2 id="betrieb-heading" className="text-section mt-4" variants={fadeUp}>
            Updates ohne Source auf dem <span className="text-highlight">Kundenserver</span>
          </motion.h2>
          <motion.p className="mt-4 text-base leading-relaxed text-muted-foreground" variants={fadeUp}>
            Installation und Updates über vorgebaute Container-Images. Kein Git-Checkout, kein lokaler
            Build beim Kunden — IT bleibt schlank, Fachabteilung arbeitet weiter.
          </motion.p>
        </motion.div>
        <motion.div
          className="volt-glass overflow-hidden rounded-2xl"
          initial={{ opacity: 0.2, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          whileHover={{ y: -4, borderColor: 'rgb(45 212 191 / 0.4)' }}
          transition={springSoft}
        >
          <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-rose-400/80" />
            <span className="h-2 w-2 rounded-full bg-amber-400/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            <span className="ml-2 font-mono text-[11px] text-muted-foreground">kundenserver ~</span>
          </div>
          <div className="p-5 font-mono text-sm leading-7 text-foreground sm:p-6">
            <TypeLine prefix="# Kundenserver" delay={0.1} />
            <TypeLine
              delay={0.35}
              content={
                <>
                  <span className="text-primary">docker compose</span> pull && up -d
                </>
              }
            />
            <TypeLine prefix="# Registry" delay={0.65} className="mt-3" />
            <TypeLine delay={0.85} content="harbor…/volt/volt-backend:x.y.z" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TypeLine({
  prefix,
  content,
  delay = 0,
  className = '',
}: {
  prefix?: string;
  content?: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.2, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ delay, duration: 0.35 }}
    >
      {prefix ? <span className="text-muted-foreground">{prefix}</span> : content}
    </motion.div>
  );
}

/** Heller Kontrastband — Light-Mode ERP-Preview als Screenshot-Ersatz + Demo-CTA. */
export function LightCtaSection() {
  return (
    <section
      id="demo-band"
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="demo-band-heading"
      style={{ colorScheme: 'light' }}
    >
      {/* Dark→Light Übergang, damit der helle Band bewusst wirkt */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[rgb(8_12_20)] to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgb(20 184 166 / 0.14), transparent 65%), linear-gradient(180deg, #f1f5f9 0%, #eef2f7 45%, #e8eef5 100%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            className="max-w-xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700"
              variants={fadeUp}
            >
              Im Büro hell · auf Wunsch dunkel
            </motion.p>
            <motion.h2
              id="demo-band-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
              variants={fadeUp}
            >
              So sieht Volt im Arbeitsalltag aus.
            </motion.h2>
            <motion.p
              className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base"
              variants={fadeUp}
            >
              Light-first Oberfläche fürs Büro — dichter, ruhig, ohne Marketing-Dunkelheit.
            </motion.p>
          </motion.div>
          <motion.a
            href="#kontakt"
            className="inline-flex h-12 shrink-0 items-center rounded-xl bg-teal-600 px-6 text-sm font-semibold text-white shadow-[0_12px_32px_rgb(13_148_136_/_0.28)]"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={springSoft}
            initial={{ opacity: 0.3, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
          >
            Demo anfragen
          </motion.a>
        </div>

        <motion.div
          className="relative mt-10 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_28px_70px_rgb(15_23_42_/_0.12)]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/95 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" />
            <span className="ml-2 truncate text-[11px] font-medium text-slate-500">
              app.volt-erp.de · KPI &amp; Controlling
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-teal-200 bg-teal-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-teal-700">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              Live Preview
            </span>
          </div>

          <ProductVisual theme="light" layoutIdPrefix="light-product" className="relative" />
        </motion.div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const { withLoading } = useLoading();
  const [sending, setSending] = useState(false);

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const subject = encodeURIComponent(`Volt Demo-Anfrage${name ? ` — ${name}` : ''}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `E-Mail: ${email}`, '', message].join('\n'),
    );

    setSending(true);
    await withLoading(async () => {
      await new Promise((r) => window.setTimeout(r, 650));
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    }, 'Anfrage wird vorbereitet…');
    setSending(false);
  }

  return (
    <section id="kontakt" className="volt-atmosphere relative" aria-labelledby="kontakt-heading">
      <div aria-hidden="true" className="volt-grid pointer-events-none absolute inset-0 opacity-40" />
      <motion.div
        className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div>
        <motion.div variants={fadeUp}>
          <SectionEyebrow>Kontakt</SectionEyebrow>
        </motion.div>
        <motion.h2 id="kontakt-heading" className="text-section mt-4" variants={fadeUp}>
          Demo oder <span className="text-highlight">Einführung</span>
        </motion.h2>
        <motion.p className="mt-4 max-w-xl text-base text-muted-foreground" variants={fadeUp}>
          Schreib uns kurz, worum es geht — wir melden uns mit Terminvorschlag und gehen die Funktionen
          an euren Prozessen durch.
        </motion.p>
        <motion.ul className="mt-8 space-y-3 text-sm text-muted-foreground" variants={staggerContainer}>
          {[
            'Kurze Demo an euren Prozessen',
            'Antwort typischerweise innerhalb eines Werktags',
            'Hosting in Deutschland · modular erweiterbar',
          ].map((line) => (
            <motion.li key={line} className="flex items-start gap-3" variants={fadeUp}>
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              {line}
            </motion.li>
          ))}
        </motion.ul>
        <motion.p className="mt-6 text-sm" variants={fadeUp}>
          <a
            className="font-medium text-foreground underline-offset-2 hover:underline"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
        </motion.p>
        </div>
        <motion.form
          className="volt-glass grid gap-3 rounded-2xl p-6 sm:p-7"
          onSubmit={submitContact}
          variants={fadeUp}
        >
          {[
            { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
            { name: 'email', label: 'E-Mail', type: 'email', autoComplete: 'email' },
          ].map((field) => (
            <label key={field.name} className="grid gap-1.5 text-sm font-medium">
              {field.label}
              <motion.input
                name={field.name}
                type={field.type}
                required
                disabled={sending}
                autoComplete={field.autoComplete}
                className="h-11 rounded-xl border border-white/10 bg-white/[0.04] px-3 font-normal outline-none ring-ring disabled:opacity-60"
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgb(45 212 191 / 0.4)' }}
                transition={springSnappy}
              />
            </label>
          ))}
          <label className="grid gap-1.5 text-sm font-medium">
            Nachricht
            <motion.textarea
              name="message"
              rows={4}
              required
              disabled={sending}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 font-normal outline-none ring-ring disabled:opacity-60"
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgb(45 212 191 / 0.4)' }}
              transition={springSnappy}
            />
          </label>
          <motion.button
            type="submit"
            disabled={sending}
            className="mt-1 inline-flex h-11 w-fit items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_rgb(45_212_191_/_0.25)] disabled:opacity-80"
            whileHover={sending ? undefined : { scale: 1.04, y: -2 }}
            whileTap={sending ? undefined : { scale: 0.97 }}
            transition={springSoft}
          >
            {sending ? (
              <>
                <BlitzLoader size="xs" label="Senden" color="#080c14" />
                Senden…
              </>
            ) : (
              'Anfrage senden'
            )}
          </motion.button>
          <p className="text-xs text-muted-foreground">
            Öffnet dein Mailprogramm an{' '}
            <a
              className="font-medium text-foreground underline-offset-2 hover:underline"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </motion.form>
      </motion.div>
    </section>
  );
}

export function ImpressumSection() {
  return (
    <section
      id="impressum"
      className="border-t border-border bg-card/30"
      aria-labelledby="impressum-heading"
    >
      <motion.div
        className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.div variants={fadeUp}>
          <SectionEyebrow>Rechtliches</SectionEyebrow>
        </motion.div>
        <motion.h2 id="impressum-heading" className="text-section mt-4" variants={fadeUp}>
          Impressum
        </motion.h2>
        <motion.div
          className="mt-8 max-w-xl space-y-6 text-sm leading-relaxed text-muted-foreground"
          variants={fadeUp}
        >
          <div>
            <p className="font-semibold text-foreground">{IMPRESSUM.legalTitle}</p>
            <p className="mt-2 text-foreground">{IMPRESSUM.name}</p>
            {IMPRESSUM.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div>
            <p className="font-semibold text-foreground">{IMPRESSUM.responsibleTitle}</p>
            <p className="mt-2 text-foreground">{IMPRESSUM.name}</p>
            {IMPRESSUM.addressLines.map((line) => (
              <p key={`r-${line}`}>{line}</p>
            ))}
          </div>
          <div>
            <p className="font-semibold text-foreground">Kontakt</p>
            <p className="mt-2">
              E-Mail:{' '}
              <a
                className="font-medium text-foreground underline-offset-2 hover:underline"
                href={`mailto:${IMPRESSUM.email}`}
              >
                {IMPRESSUM.email}
              </a>
            </p>
            <p>
              Web:{' '}
              <a
                className="font-medium text-foreground underline-offset-2 hover:underline"
                href={IMPRESSUM.website}
              >
                {IMPRESSUM.website.replace(/^https?:\/\//, '')}
              </a>
            </p>
            <p className="mt-2">{IMPRESSUM.product}</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <motion.footer
      className="relative overflow-hidden border-t border-border"
      initial={{ opacity: 0.35 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_120%,rgb(45_212_191_/_0.12),transparent_60%)]"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-5 px-6 py-12 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="space-y-1.5">
          <p className="text-base">
            <span className="font-semibold text-primary">Volt</span>
            <span className="text-foreground"> — ERP für Elektrohandwerk</span>
          </p>
          <p className="text-xs text-muted-foreground/80">Modular · deutsch · Hosting in DE</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Rechtliches">
          <a href="#ergebnis" className="underline-offset-2 hover:text-foreground hover:underline">
            Ergebnis
          </a>
          <a href="#module" className="underline-offset-2 hover:text-foreground hover:underline">
            Funktionen
          </a>
          <a
            href="#impressum"
            className="font-medium text-foreground underline-offset-2 hover:underline"
          >
            Impressum
          </a>
          <a
            href="#kontakt"
            className="inline-flex h-9 items-center rounded-lg bg-primary px-3.5 text-xs font-semibold text-primary-foreground"
          >
            Demo anfragen
          </a>
        </nav>
      </div>
    </motion.footer>
  );
}
