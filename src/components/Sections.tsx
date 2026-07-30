import {
  CalendarDays,
  ClipboardList,
  FileText,
  HardHat,
  ShieldCheck,
  Users,
} from 'lucide-react';
import type { FormEvent, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeUp, springSoft, springSnappy, staggerContainer } from '../lib/motion';

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const MODULES: Feature[] = [
  {
    icon: HardHat,
    title: 'Projekte & Baustellen',
    text: 'Vom Auftrag bis zur Abnahme — Status, Dokumente und Team an einem Ort.',
  },
  {
    icon: CalendarDays,
    title: 'Plantafel & Einsätze',
    text: 'Personal und Termine planen, Abwesenheiten im Blick, Outlook-Sync wenn gewünscht.',
  },
  {
    icon: FileText,
    title: 'Angebote & Belege',
    text: 'Operative Belege in Volt führen — Lexware optional anbinden, nicht erzwingen.',
  },
  {
    icon: Users,
    title: 'Kunden & Service',
    text: 'Kundencenter, Anlagen und Wartung mit klaren Rechten für Büro und Monteure.',
  },
  {
    icon: ClipboardList,
    title: 'Zeiten & Material',
    text: 'Rückmeldungen aus dem Alltag — ohne Excel-Umwege und Doppelpflege.',
  },
  {
    icon: ShieldCheck,
    title: 'Rechte & DSGVO',
    text: 'Rollen, Audit und Hosting in DE — gebaut für den Mittelstand, nicht für Spielzeug-SaaS.',
  },
];

const CONTACT_EMAIL = 'johannes@avtx.io';

const viewport = { once: true, amount: 0.25, margin: '0px 0px -8% 0px' } as const;

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
          Eine Oberfläche für den Betrieb
          <span className="font-normal text-muted-foreground">
            {' '}
            — Büro und Baustelle im selben System
          </span>
        </motion.h2>
        <motion.p className="max-w-2xl text-muted-foreground leading-relaxed" variants={fadeUp}>
          Volt bündelt Projekte, Planung, Belege und Kunden — ohne parallele Tools und ohne
          doppelte Pflege. Hell, flach und schnell erfassbar, wie im ERP selbst.
        </motion.p>
      </motion.div>
    </section>
  );
}

export function ModulesSection() {
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
          Module für den Tagesbetrieb
          <span className="font-normal text-muted-foreground"> — was Teams wirklich brauchen</span>
        </motion.h2>
        <motion.ul
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {MODULES.map(({ icon: Icon, title, text }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: 'rgb(20 184 166 / 0.4)' }}
              transition={springSnappy}
              className="rounded-xl border border-border bg-card p-5 shadow-none"
            >
              <motion.div
                className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground"
                whileHover={{ rotate: -8, scale: 1.08 }}
                transition={springSoft}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </motion.div>
              <h3 className="text-base font-semibold tracking-tight">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export function OperationsSection() {
  return (
    <section id="betrieb" className="border-b border-border bg-card" aria-labelledby="betrieb-heading">
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
            Build beim Kunden — passend zum Image-only-Deploy von Volt.
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
          Schreib uns kurz, worum es geht — wir melden uns mit Terminvorschlag.
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
        <p>Design-Tokens aus dem Volt-ERP · Hosting DE</p>
      </div>
    </motion.footer>
  );
}
