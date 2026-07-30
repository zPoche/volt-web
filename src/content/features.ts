import {
  CalendarDays,
  ClipboardList,
  FileText,
  HardHat,
  Package,
  ShieldCheck,
  Users,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Feature = {
  icon: LucideIcon;
  title: string;
  /** Was die Funktion kann */
  does: string;
  /** Wie sie die Arbeit erleichtert */
  helps: string;
  points: string[];
};

/** Alle Kernfunktionen von Volt — jeweils mit Nutzen im Alltag. */
export const FEATURES: Feature[] = [
  {
    icon: HardHat,
    title: 'Projekte & Baustellen',
    does: 'Aufträge, Baustellenstatus, Dokumente und Zuständigkeiten laufen in einem Projekt zusammen.',
    helps: 'Büro und Monteur sehen denselben Stand — kein Nachtelefonieren, keine verstreuten Ordner.',
    points: [
      'Status vom Auftrag bis zur Abnahme',
      'Dokumente und Fotos am Projekt',
      'Team und Verantwortlichkeiten klar',
    ],
  },
  {
    icon: CalendarDays,
    title: 'Plantafel & Einsätze',
    does: 'Personal, Termine und Abwesenheiten planst du auf einer gemeinsamen Tafel — optional mit Outlook-Sync.',
    helps: 'Weniger Doppelbuchungen, weniger Chaos am Morgen — wer wo ist, steht sofort fest.',
    points: [
      'Einsätze und Kapazitäten im Blick',
      'Abwesenheiten direkt einplanen',
      'Outlook-Sync wenn gewünscht',
    ],
  },
  {
    icon: FileText,
    title: 'Angebote & Belege',
    does: 'Angebote, Aufträge und operative Belege entstehen in Volt — Lexware kannst du optional anbinden.',
    helps: 'Vom Angebot zur Ausführung ohne Medienbruch; Buchhaltung bleibt flexibel, nicht erzwungen.',
    points: [
      'Angebote direkt aus dem Projekt',
      'Operative Belege im System',
      'Lexware optional, nicht Pflicht',
    ],
  },
  {
    icon: Users,
    title: 'Kunden & Service',
    does: 'Kundendaten, Anlagen und Wartungspflege sitzen im Kundencenter — mit Rechten für Büro und Monteure.',
    helps: 'Service-Historie und Ansprechpartner sind sofort da — auch unterwegs auf der Baustelle.',
    points: [
      'Kunden und Anlagen an einem Ort',
      'Wartung und Historie nachvollziehbar',
      'Rollen für Büro und Monteure',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Zeiten & Rückmeldungen',
    does: 'Arbeitszeiten und Baustellen-Rückmeldungen kommen direkt aus dem Alltag ins System.',
    helps: 'Keine Excel-Listen hinterher — Abrechnung und Nachkalkulation starten mit echten Daten.',
    points: [
      'Zeiten ohne Umweg erfassen',
      'Rückmeldungen vom Einsatz',
      'Grundlage für Abrechnung',
    ],
  },
  {
    icon: Package,
    title: 'Material & Lager',
    does: 'Materialverbrauch und Bestände hängen am Projekt — statt Zettelwirtschaft und Nachkäufen aus dem Bauch.',
    helps: 'Du weißt, was verbaut wurde und was fehlt — Nachbestellung und Nachkalkulation werden einfacher.',
    points: [
      'Material am Projekt verbuchen',
      'Bestände und Bewegungen',
      'Weniger Fehlkäufe und Sucherei',
    ],
  },
  {
    icon: Wrench,
    title: 'Wartung & Anlagen',
    does: 'Anlagen, Wartungsintervalle und Serviceeinsätze planst und dokumentierst du durchgängig.',
    helps: 'Wiederkehrende Aufträge rutschen nicht unter — Kundenbindung und Auslastung bleiben planbar.',
    points: [
      'Intervalle und Termine steuern',
      'Servicehistorie je Anlage',
      'Planbare Folgeaufträge',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Rechte, Audit & Hosting',
    does: 'Rollen, Audit-Spuren und Hosting in Deutschland — gebaut für den Mittelstand.',
    helps: 'Jeder sieht nur, was er braucht; Nachweisbarkeit und Datenschutz sind mitgedacht, nicht angeklebt.',
    points: [
      'Rollen statt Alles-oder-Nichts',
      'Audit für sensible Änderungen',
      'Hosting in DE',
    ],
  },
];

export type WorkflowStep = {
  step: string;
  title: string;
  text: string;
  relief: string;
};

/** Typischer Ablauf — zeigt, wie Volt die Arbeit erleichtert. */
export const WORKFLOW: WorkflowStep[] = [
  {
    step: '01',
    title: 'Anfrage wird zum Projekt',
    text: 'Kunde, Adresse und Auftrag landen direkt als Projekt — nicht in Chat, Excel und E-Mail verteilt.',
    relief: 'Alles startet an einem Ort; nichts geht zwischen Posteingang und Baustelle verloren.',
  },
  {
    step: '02',
    title: 'Einsatz planen',
    text: 'Plantafel zeigt Kapazitäten, Abwesenheiten und Termine. Monteure wissen, wohin sie fahren.',
    relief: 'Morgens steht der Tag — ohne Telefonkette und Doppelbuchungen.',
  },
  {
    step: '03',
    title: 'Auf der Baustelle arbeiten',
    text: 'Zeiten, Material und Rückmeldungen fließen zurück ins Projekt. Dokumente und Fotos bleiben am Auftrag.',
    relief: 'Büro muss nichts nachtragen; der Stand ist aktuell, wenn der Monteur Feierabend macht.',
  },
  {
    step: '04',
    title: 'Abrechnen & abschließen',
    text: 'Aus erfassten Zeiten, Material und Belegen wird die Abrechnung vorbereitet — optional mit Lexware.',
    relief: 'Weniger Nachkalkulation aus dem Gedächtnis, schnellerer Abschluss, klarere Zahlen.',
  },
];
