import { useState, type FormEvent, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { BUSINESS_BENEFITS, EXTRAS, WORKFLOW } from '../content/features';
import { IMPRESSUM } from '../content/impressum';
import { fadeUp, springSoft, springSnappy, staggerContainer } from '../lib/motion';
import { FeatureTiles } from './FeatureTiles';
import { BlitzLoader } from './BlitzLoader';
import { useLoading } from '../loading/useLoading';

const CONTACT_EMAIL = 'demo@volt-erp.de';
const viewport = { once: true, amount: 0.15, margin: '0px 0px -6% 0px' } as const;

export function ProductSection() {
  return (
    <section id="produkt" className="relative overflow-hidden border-b border-border bg-card" aria-labelledby="produkt-heading">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-8 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 14, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.h2
          id="produkt-heading"
          className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl"
          variants={fadeUp}
        >
          Weniger Chaos.
          <span className="font-normal text-muted-foreground"> Mehr Marge.</span>
        </motion.h2>
        <motion.ul
          className="mt-10 grid gap-6 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
        >
          {BUSINESS_BENEFITS.map((item, index) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={springSnappy}
              className="relative space-y-2 pl-4"
            >
              <motion.span
                aria-hidden="true"
                className="absolute bottom-1 left-0 top-1 w-0.5 origin-top rounded-full bg-primary"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
              />
              <p className="text-[11px] font-bold tabular-nums tracking-[0.14em] text-primary/80">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-sm font-semibold tracking-tight text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
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
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(rgb(45 212 191 / 0.09) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-2xl space-y-3"
        >
          <motion.h2
            id="module-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            variants={fadeUp}
          >
            Funktionen
            <span className="font-normal text-muted-foreground">
              {' '}
              — antippen für Alltag und Kostenvorteil
            </span>
          </motion.h2>
          <motion.p className="text-sm text-muted-foreground" variants={fadeUp}>
            Kachel öffnen — Nutzen und Ersparnis erscheinen mit.
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
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-10 h-44 w-44 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
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
              whileHover={{ y: -3, borderColor: 'rgb(45 212 191 / 0.45)' }}
              transition={springSnappy}
              className="flex items-start gap-3.5 rounded-xl border border-border bg-background p-4"
            >
              <motion.span
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground ring-1 ring-primary/15"
                whileHover={{ rotate: -6, scale: 1.06 }}
                transition={springSoft}
              >
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              </motion.span>
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
    <section id="ablauf" className="border-b border-border bg-card" aria-labelledby="ablauf-heading">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <motion.h2
          id="ablauf-heading"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          So erleichtert Volt die Arbeit
          <span className="font-normal text-muted-foreground">
            {' '}
            — ein typischer Auftrag von Anfang bis Ende
          </span>
        </motion.h2>

        <div className="relative mt-12">
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
                  className={`relative grid gap-3 sm:grid-cols-2 sm:gap-10 ${left ? '' : ''}`}
                  initial={{ opacity: 0.2, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div
                    className={`pl-12 sm:pl-0 ${left ? 'sm:pr-12 sm:text-right' : 'sm:col-start-2 sm:pl-12'}`}
                  >
                    <motion.div
                      className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-card text-xs font-bold text-primary sm:left-1/2 sm:-translate-x-1/2"
                      whileHover={{ scale: 1.12 }}
                      transition={springSnappy}
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    <p className="mt-3 text-sm font-medium text-foreground">
                      Entlastung:{' '}
                      <span className="font-normal text-muted-foreground">{item.relief}</span>
                    </p>
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
    <section id="betrieb" className="border-b border-border" aria-labelledby="betrieb-heading">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.h2
            id="betrieb-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            variants={fadeUp}
          >
            Betrieb ohne Source auf dem Kundenserver
            <span className="font-normal text-muted-foreground">
              {' '}
              — Updates per privater Registry
            </span>
          </motion.h2>
          <motion.p className="mt-4 text-muted-foreground leading-relaxed" variants={fadeUp}>
            Installation und Updates über vorgebaute Container-Images. Kein Git-Checkout, kein lokaler
            Build beim Kunden — passend zum Image-only-Deploy von Volt. IT bleibt schlank, Fachabteilung
            arbeitet weiter.
          </motion.p>
        </motion.div>
        <motion.div
          className="rounded-xl border border-border bg-background p-6 font-mono text-sm leading-7 text-foreground"
          initial={{ opacity: 0.2, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          whileHover={{ y: -4, borderColor: 'rgb(45 212 191 / 0.4)' }}
          transition={springSoft}
        >
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
      <motion.div
        className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.h2
          id="kontakt-heading"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
          variants={fadeUp}
        >
          Demo oder Einführung
          <span className="font-normal text-muted-foreground"> — wir zeigen Volt im Alltag</span>
        </motion.h2>
        <motion.p className="mt-4 max-w-xl text-muted-foreground" variants={fadeUp}>
          Schreib uns kurz, worum es geht — wir melden uns mit Terminvorschlag und gehen die Funktionen
          an euren Prozessen durch.
        </motion.p>
        <motion.form className="mt-8 grid max-w-xl gap-3" onSubmit={submitContact} variants={fadeUp}>
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
                className="h-10 rounded-lg border border-input bg-card px-3 font-normal outline-none ring-ring disabled:opacity-60"
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
              className="rounded-lg border border-input bg-card px-3 py-2 font-normal outline-none ring-ring disabled:opacity-60"
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgb(45 212 191 / 0.4)' }}
              transition={springSnappy}
            />
          </label>
          <motion.button
            type="submit"
            disabled={sending}
            className="mt-1 inline-flex h-11 w-fit items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground disabled:opacity-80"
            whileHover={sending ? undefined : { scale: 1.04, y: -2 }}
            whileTap={sending ? undefined : { scale: 0.97 }}
            transition={springSoft}
          >
            {sending ? (
              <>
                <BlitzLoader size="xs" label="Senden" color="#0f172a" />
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
      className="border-t border-border bg-card"
      aria-labelledby="impressum-heading"
    >
      <motion.div
        className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.h2
          id="impressum-heading"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
          variants={fadeUp}
        >
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
      className="border-t border-border bg-background"
      initial={{ opacity: 0.35 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          <span className="font-semibold text-foreground">Volt</span> — ERP für Elektrohandwerk
        </p>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Rechtliches">
          <a href="#impressum" className="font-medium text-foreground underline-offset-2 hover:underline">
            Impressum
          </a>
          <a href="#kontakt" className="underline-offset-2 hover:underline">
            Demo anfragen
          </a>
        </nav>
      </div>
    </motion.footer>
  );
}
