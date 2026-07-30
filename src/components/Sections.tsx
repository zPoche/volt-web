import { useState, type FormEvent, type ReactNode } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FEATURES, WORKFLOW } from '../content/features';
import { fadeUp, springSoft, springSnappy, staggerContainer } from '../lib/motion';
import { BlitzLoader } from './BlitzLoader';
import { useLoading } from '../loading/useLoading';

const CONTACT_EMAIL = 'johannes@avtx.io';
const viewport = { once: true, amount: 0.2, margin: '0px 0px -8% 0px' } as const;

export function ProductSection() {
  return (
    <section id="produkt" className="border-b border-border bg-card" aria-labelledby="produkt-heading">
      <motion.div
        className="mx-auto max-w-6xl space-y-4 px-6 py-16 sm:px-8 sm:py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.h2
          id="produkt-heading"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
          variants={fadeUp}
        >
          Alle Funktionen — und wie sie den Tag entlasten
          <span className="font-normal text-muted-foreground">
            {' '}
            — vom Angebot bis zur Abrechnung
          </span>
        </motion.h2>
        <motion.p className="max-w-2xl text-muted-foreground leading-relaxed" variants={fadeUp}>
          Volt ist das ERP für Elektrohandwerk: Projekte, Planung, Kunden, Zeiten, Material und Belege
          greifen ineinander. Unten siehst du jede Funktion — und welchen Umweg sie dir im Alltag spart.
        </motion.p>
      </motion.div>
    </section>
  );
}

export function ModulesSection() {
  const [openTitle, setOpenTitle] = useState<string | null>(FEATURES[0]?.title ?? null);

  return (
    <section id="module" className="border-b border-border" aria-labelledby="module-heading">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <motion.h2
          id="module-heading"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          Funktionen im Überblick
          <span className="font-normal text-muted-foreground">
            {' '}
            — aufklappen für den konkreten Nutzen
          </span>
        </motion.h2>
        <motion.ul
          className="mt-10 grid gap-3 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {FEATURES.map(({ icon: Icon, title, does, helps, points }) => {
            const open = openTitle === title;
            return (
              <motion.li
                key={title}
                variants={fadeUp}
                layout
                whileHover={{ y: -3 }}
                transition={springSnappy}
                className="relative overflow-hidden rounded-xl border border-border bg-card"
                animate={{
                  borderColor: open ? 'rgb(20 184 166 / 0.45)' : 'rgb(229 231 235)',
                }}
              >
                {open && (
                  <motion.span
                    layoutId="feature-glow"
                    className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-primary"
                    transition={springSnappy}
                  />
                )}
                <motion.button
                  type="button"
                  className="flex w-full items-start gap-3 p-5 text-left"
                  onClick={() => setOpenTitle(open ? null : title)}
                  whileHover={{ backgroundColor: 'rgb(249 250 251)' }}
                  aria-expanded={open}
                >
                  <motion.span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground"
                    animate={{ scale: open ? 1.08 : 1, rotate: open ? -6 : 0 }}
                    transition={springSoft}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </motion.span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-base font-semibold tracking-tight">{title}</span>
                      <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={springSnappy}
                        className="text-muted-foreground"
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
                  {open && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 border-t border-border px-5 pb-5 pt-4">
                        <motion.p
                          className="text-sm font-medium text-foreground"
                          initial={{ y: 8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.05 }}
                        >
                          So erleichtert das die Arbeit:{' '}
                          <span className="font-normal text-muted-foreground">{helps}</span>
                        </motion.p>
                        <ul className="grid gap-2">
                          {points.map((point, i) => (
                            <motion.li
                              key={point}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                              initial={{ x: -8, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.08 + i * 0.05 }}
                            >
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
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
          whileHover={{ y: -4, borderColor: 'rgb(20 184 166 / 0.35)' }}
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
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgb(20 184 166 / 0.35)' }}
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
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgb(20 184 166 / 0.35)' }}
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

export function SiteFooter() {
  return (
    <motion.footer
      className="border-t border-border bg-card"
      initial={{ opacity: 0.35 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          <span className="font-semibold text-foreground">Volt</span> — ERP für Elektrohandwerk
        </p>
        <p>Funktionen, Planung, Belege · Hosting DE</p>
      </div>
    </motion.footer>
  );
}
