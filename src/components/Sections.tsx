import { useState, type FormEvent, type ReactNode } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FEATURES, WORKFLOW } from '../content/features';
import { fadeUp, springSoft, springSnappy, staggerContainer } from '../lib/motion';

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
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <motion.button
                  type="button"
                  className="flex w-full items-start gap-3 p-5 text-left"
                  onClick={() => setOpenTitle(open ? null : title)}
                  whileHover={{ backgroundColor: 'rgb(249 250 251)' }}
                  aria-expanded={open}
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
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
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 border-t border-border px-5 pb-5 pt-4">
                        <p className="text-sm font-medium text-foreground">
                          So erleichtert das die Arbeit:{' '}
                          <span className="font-normal text-muted-foreground">{helps}</span>
                        </p>
                        <ul className="grid gap-2">
                          {points.map((point) => (
                            <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                              {point}
                            </li>
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
        <motion.ol
          className="mt-10 grid gap-6 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {WORKFLOW.map((item) => (
            <motion.li
              key={item.step}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={springSnappy}
              className="relative border-l-2 border-primary/40 pl-5"
            >
              <div className="text-xs font-semibold tracking-wider text-primary">{item.step}</div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              <p className="mt-3 text-sm font-medium text-foreground">
                Entlastung:{' '}
                <span className="font-normal text-muted-foreground">{item.relief}</span>
              </p>
            </motion.li>
          ))}
        </motion.ol>
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
          initial={{ opacity: 0, x: 28 }}
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
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ delay, duration: 0.35 }}
    >
      {prefix ? <span className="text-muted-foreground">{prefix}</span> : content}
    </motion.div>
  );
}

function submitContact(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get('name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const message = String(data.get('message') ?? '').trim();
  const subject = encodeURIComponent(`Volt Demo-Anfrage${name ? ` — ${name}` : ''}`);
  const body = encodeURIComponent(
    [`Name: ${name}`, `E-Mail: ${email}`, '', message].join('\n'),
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export function ContactSection() {
  return (
    <section id="kontakt" className="volt-atmosphere" aria-labelledby="kontakt-heading">
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
                autoComplete={field.autoComplete}
                className="h-10 rounded-lg border border-input bg-card px-3 font-normal outline-none ring-ring"
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
              className="rounded-lg border border-input bg-card px-3 py-2 font-normal outline-none ring-ring"
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgb(20 184 166 / 0.35)' }}
              transition={springSnappy}
            />
          </label>
          <motion.button
            type="submit"
            className="mt-1 inline-flex h-11 w-fit items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={springSoft}
          >
            Anfrage senden
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
      initial={{ opacity: 0 }}
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
