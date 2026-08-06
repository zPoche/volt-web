import { useState, type FormEvent, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { BUSINESS_BENEFITS, EXTRAS, OUTCOMES, TRUST_POINTS, WORKFLOW } from '../content/features';
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
      className="volt-section-reveal relative overflow-hidden border-b border-border"
      aria-labelledby="produkt-heading"
    >
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
          className="relative mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
        >
          {BUSINESS_BENEFITS.map((item, index) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              transition={springSnappy}
              className="relative space-y-2 bg-background p-5 sm:p-6"
            >
              <span
                aria-hidden="true"
                className="mb-3 inline-block font-mono text-[11px] font-semibold tabular-nums text-brass"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
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
    <section className="relative border-b border-border bg-card" aria-label="Volt auf einen Blick">
      <div aria-hidden="true" className="volt-live-line" />
      <div className="mx-auto max-w-6xl px-6 py-6 sm:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST_POINTS.map((point, index) => (
            <motion.li
              key={point}
              className="inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.08em] text-muted-foreground"
              initial={{ opacity: 0.25, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: index * 0.05, duration: 0.35 }}
            >
              <span className="size-1.5 rotate-45 bg-brass" aria-hidden="true" />
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
      className="volt-section-reveal relative overflow-hidden border-b border-border bg-card"
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
            <motion.ul className="mt-10 space-y-0" variants={staggerContainer}>
              {OUTCOMES.map((item, index) => (
                <motion.li
                  key={item.title}
                  variants={fadeUp}
                  className="relative border-l-2 border-brass/50 py-4 pl-5"
                >
                  <p className="font-mono text-[11px] font-semibold tabular-nums tracking-[0.14em] text-brass">
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
            className="volt-panel-inset relative overflow-hidden rounded-md p-5 sm:p-7"
            initial={{ opacity: 0.25, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brass">
              Typischer Tag
            </p>
            <ol className="relative mt-6 space-y-0">
              <span
                aria-hidden="true"
                className="absolute bottom-3 left-[2.15rem] top-3 w-px bg-border"
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
                    className={`relative z-[1] grid h-9 w-14 shrink-0 place-items-center rounded-md border font-mono text-[11px] font-semibold ${
                      row.accent
                        ? 'border-brass/60 bg-brass/15 text-brass'
                        : 'border-border bg-background text-primary'
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
      className="volt-section-reveal relative overflow-hidden border-b border-border"
      aria-labelledby="module-heading"
    >
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

export function ExtrasSection() {
  return (
    <section
      id="mehr"
      className="relative overflow-hidden border-b border-border bg-card"
      aria-labelledby="mehr-heading"
    >
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-2xl space-y-3"
        >
          <motion.h2
            id="mehr-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            variants={fadeUp}
          >
            Auch an Bord
            <span className="font-normal text-muted-foreground">
              {' '}
              — zuschaltbar, wenn ihr soweit seid
            </span>
          </motion.h2>
          <motion.p className="text-sm text-muted-foreground" variants={fadeUp}>
            Weitere Module aus dem Volt-Baukasten — gleiche Oberfläche, gleiche Daten, kein
            Insel-Tool.
          </motion.p>
        </motion.div>

        <motion.ul
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {EXTRAS.map(({ icon: Icon, title, text }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              whileHover={{ borderColor: 'rgb(45 212 191 / 0.45)' }}
              transition={springSnappy}
              className="flex items-start gap-3.5 rounded-md border border-border bg-background p-4"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold tracking-tight">{title}</span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  {text}
                </span>
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export function WorkflowSection() {
  return (
    <section
      id="ablauf"
      className="volt-section-reveal border-b border-border bg-card/40"
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
                    <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card font-mono text-xs font-bold text-primary sm:left-1/2 sm:-translate-x-1/2">
                      {item.step}
                    </div>
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
          className="volt-panel-inset overflow-hidden rounded-md"
          initial={{ opacity: 0.2, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={springSoft}
        >
          <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-brass">
              kundenserver
            </span>
            <span className="ml-auto font-mono text-[11px] text-muted-foreground">~</span>
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

/** Demo-Band mit dunkler ERP-Preview + CTA — kein heller Kontrastband mehr. */
export function LightCtaSection() {
  return (
    <section
      id="demo-band"
      className="relative overflow-hidden border-b border-border bg-card"
      aria-labelledby="demo-band-heading"
    >
      <div aria-hidden="true" className="volt-ruled pointer-events-none absolute inset-0 opacity-45" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,rgb(45_212_191_/_0.06),transparent_55%)]"
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
              className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-brass"
              variants={fadeUp}
            >
              Arbeitsfläche · Field Terminal
            </motion.p>
            <motion.h2
              id="demo-band-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              variants={fadeUp}
            >
              So sieht Volt im Arbeitsalltag aus.
            </motion.h2>
            <motion.p
              className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
              variants={fadeUp}
            >
              Dunkle, ruhige Oberfläche für den Alltag — dicht, lesbar, ohne blendendes Weiß.
            </motion.p>
          </motion.div>
          <motion.a
            href="#kontakt"
            className="inline-flex h-12 shrink-0 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={springSoft}
            initial={{ opacity: 0.3, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
          >
            Demo anfragen
          </motion.a>
        </div>

        <motion.div
          className="volt-panel relative mt-10 overflow-hidden rounded-md"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-brass">
              Terminal · Live
            </span>
            <span className="ml-2 truncate font-mono text-[11px] text-muted-foreground">
              app.volt-erp.de · KPI &amp; Controlling
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 border border-primary/35 bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
              Live
            </span>
          </div>

          <ProductVisual theme="dark" layoutIdPrefix="demo-product" className="relative" />
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
    <section id="kontakt" className="relative border-t border-border bg-background" aria-labelledby="kontakt-heading">
      <div aria-hidden="true" className="volt-ruled pointer-events-none absolute inset-0 opacity-40" />
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
                className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-brass"
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
          className="volt-panel grid gap-3 rounded-md p-6 sm:p-7"
          onSubmit={submitContact}
          variants={fadeUp}
        >
          {[
            { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
            { name: 'email', label: 'E-Mail', type: 'email', autoComplete: 'email' },
          ].map((field) => (
            <label key={field.name} className="grid gap-1.5 text-sm font-medium">
              {field.label}
              <input
                name={field.name}
                type={field.type}
                required
                disabled={sending}
                autoComplete={field.autoComplete}
                className="h-11 rounded-md border border-border bg-background px-3 font-normal outline-none ring-ring focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
              />
            </label>
          ))}
          <label className="grid gap-1.5 text-sm font-medium">
            Nachricht
            <textarea
              name="message"
              rows={4}
              required
              disabled={sending}
              className="rounded-md border border-border bg-background px-3 py-2 font-normal outline-none ring-ring focus:ring-2 focus:ring-primary/40 disabled:opacity-60"
            />
          </label>
          <motion.button
            type="submit"
            disabled={sending}
            className="mt-1 inline-flex h-11 w-fit items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground disabled:opacity-80"
            whileHover={sending ? undefined : { y: -2 }}
            whileTap={sending ? undefined : { scale: 0.98 }}
            transition={springSoft}
          >
            {sending ? (
              <>
                <BlitzLoader size="xs" label="Senden" color="#0a0e0c" />
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
      className="relative overflow-hidden border-t border-border"
      aria-labelledby="impressum-heading"
    >
      <motion.div
        className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
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
          className="mt-8 grid max-w-3xl gap-8 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2"
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
          <div className="sm:col-span-2">
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
      <div className="relative mx-auto flex max-w-6xl flex-col gap-5 px-6 py-12 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="space-y-1.5">
          <p className="text-base">
            <span className="font-semibold text-primary">Volt</span>
            <span className="text-foreground"> — ERP für Elektrohandwerk</span>
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground/80">
            Modular · deutsch · Hosting in DE
          </p>
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
            className="inline-flex h-9 items-center rounded-md bg-primary px-3.5 text-xs font-semibold text-primary-foreground"
          >
            Demo anfragen
          </a>
        </nav>
      </div>
    </motion.footer>
  );
}
