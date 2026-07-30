import {
  CalendarDays,
  ClipboardList,
  FileText,
  HardHat,
  ShieldCheck,
  Users,
} from 'lucide-react';
import type { FormEvent } from 'react';
import type { LucideIcon } from 'lucide-react';

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

export function ProductSection() {
  return (
    <section id="produkt" className="border-b border-border bg-card" aria-labelledby="produkt-heading">
      <div className="mx-auto max-w-6xl space-y-4 px-6 py-16 sm:px-8 sm:py-20">
        <h2 id="produkt-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Eine Oberfläche für den Betrieb
          <span className="font-normal text-muted-foreground">
            {' '}
            — Büro und Baustelle im selben System
          </span>
        </h2>
        <p className="max-w-2xl text-muted-foreground leading-relaxed">
          Volt bündelt Projekte, Planung, Belege und Kunden — ohne parallele Tools und ohne
          doppelte Pflege. Hell, flach und schnell erfassbar, wie im ERP selbst.
        </p>
      </div>
    </section>
  );
}

export function ModulesSection() {
  return (
    <section id="module" className="border-b border-border" aria-labelledby="module-heading">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <h2 id="module-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Module für den Tagesbetrieb
          <span className="font-normal text-muted-foreground"> — was Teams wirklich brauchen</span>
        </h2>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-xl border border-border bg-card p-5 shadow-none transition-colors hover:border-primary/30"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold tracking-tight">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function OperationsSection() {
  return (
    <section id="betrieb" className="border-b border-border bg-card" aria-labelledby="betrieb-heading">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 id="betrieb-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Betrieb ohne Source auf dem Kundenserver
            <span className="font-normal text-muted-foreground">
              {' '}
              — Updates per privater Registry
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Installation und Updates über vorgebaute Container-Images. Kein Git-Checkout, kein lokaler
            Build beim Kunden — passend zum Image-only-Deploy von Volt.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-background p-6 font-mono text-sm leading-7 text-foreground">
          <div className="text-muted-foreground"># Kundenserver</div>
          <div>
            <span className="text-primary">docker compose</span> pull && up -d
          </div>
          <div className="mt-3 text-muted-foreground"># Registry</div>
          <div>harbor…/volt/volt-backend:x.y.z</div>
        </div>
      </div>
    </section>
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
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <h2 id="kontakt-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Demo oder Einführung
          <span className="font-normal text-muted-foreground"> — wir zeigen Volt im Alltag</span>
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Schreib uns kurz, worum es geht — wir melden uns mit Terminvorschlag.
        </p>
        <form className="mt-8 grid max-w-xl gap-3" onSubmit={submitContact}>
          <label className="grid gap-1.5 text-sm font-medium">
            Name
            <input
              name="name"
              required
              autoComplete="name"
              className="h-10 rounded-lg border border-input bg-card px-3 font-normal outline-none ring-ring focus:ring-2"
            />
          </label>
          <label className="grid gap-1.5 text-sm font-medium">
            E-Mail
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="h-10 rounded-lg border border-input bg-card px-3 font-normal outline-none ring-ring focus:ring-2"
            />
          </label>
          <label className="grid gap-1.5 text-sm font-medium">
            Nachricht
            <textarea
              name="message"
              rows={4}
              required
              className="rounded-lg border border-input bg-card px-3 py-2 font-normal outline-none ring-ring focus:ring-2"
            />
          </label>
          <button
            type="submit"
            className="mt-1 inline-flex h-11 w-fit items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Anfrage senden
          </button>
          <p className="text-xs text-muted-foreground">
            Öffnet dein Mailprogramm an{' '}
            <a className="font-medium text-foreground underline-offset-2 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          <span className="font-semibold text-foreground">Volt</span> — ERP für Elektrohandwerk
        </p>
        <p>Design-Tokens aus dem Volt-ERP · Hosting DE</p>
      </div>
    </footer>
  );
}
