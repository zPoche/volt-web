import {
  Bot,
  CalendarDays,
  ClipboardList,
  FileText,
  Gauge,
  HardHat,
  Headset,
  Package,
  Plug,
  ShieldCheck,
  Smartphone,
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

/**
 * Kernfunktionen aus dem Volt-ERP (M01–M12 / Nav & Module).
 * Formulierung an echte UI-Begriffe angelehnt — ohne Overclaim auf Flags default-aus.
 */
export const FEATURES: Feature[] = [
  {
    icon: HardHat,
    title: 'Projekte & Aufträge',
    does: 'Die Projektakte bündelt LV/GAEB, Material, Lohn, Nachträge, Rechnungen, Messprotokolle, Bautagebuch, Aufmaß und Dokumente unter einer Nummer (PRJ-YYYY-NNN).',
    helps: 'Büro, Bauleitung und Monteur arbeiten an derselben Akte — kein Suchen zwischen Ordner, Chat und Excel.',
    points: [
      'LV, Angebote, Material und Lohn im Projekt',
      'Nachträge, Rechnungen und Nachunternehmer',
      'Messprotokolle, Elektroplan, Checklisten, Fotos',
    ],
  },
  {
    icon: FileText,
    title: 'Angebote & Belege',
    does: 'Angebots-Builder mit Positionen, Paketen, Vorlagen, PDF-Import und Lieferanten-Punch-Out (OCI/IDS). Operative Belege führt Volt selbst — Lexware bleibt optional.',
    helps: 'Vom Angebot zur Ausführung ohne Medienbruch; Buchhaltung wird angebunden, nicht erzwungen.',
    points: [
      'Vorlagen, Pakete und PDF-Import',
      'Öffentlicher Angebotslink für Kunden',
      'Volt führt Belege; Lexware nur wenn gewünscht',
    ],
  },
  {
    icon: CalendarDays,
    title: 'Plantafel & Einsatzplanung',
    does: 'Digitale Plantafel (Tag/Woche) mit Drag & Drop, Einsätzen, Abwesenheiten und planbaren Nachunternehmer-Kräften — optional mit Outlook-/M365-Kalender-Sync.',
    helps: 'Morgens steht der Tag: wer wo ist, ohne Telefonkette und Doppelbuchungen.',
    points: [
      'Plantafel, Einsätze und Projektplanung',
      'Abwesenheiten und Kapazitäten sichtbar',
      'Subunternehmer (NU-…) mitplanen',
    ],
  },
  {
    icon: Smartphone,
    title: 'MonteurHub & Zeiten',
    does: 'Monteur-PWA mit Einsätzen, Stempeluhr, Checklisten, Fotos, Navigation und Offline-Sync. Zeiten fließen in Stundenübersicht und Nachkalkulation.',
    helps: 'Rückmeldungen kommen von der Baustelle — das Büro tippt nichts nach Feierabend nach.',
    points: [
      'Stempeluhr, Meine Stunden, Abwesenheit',
      'Checklisten und Fotos am Einsatz',
      'Offline-fähig für die Baustelle',
    ],
  },
  {
    icon: Users,
    title: 'Kundencenter & CRM',
    does: 'Kunden, Kontakte, Anfragen/Leads, Kommunikation, Bewertungen und Aktivitäten-Timeline im Kundencenter — plus Terminbuchung und Energie-Konfigurator.',
    helps: 'Historie und Ansprechpartner sind sofort da, bevor jemand zum Kunden fährt oder anruft.',
    points: [
      'Kundenstammdaten und Aktivitäten-Timeline',
      'Anfragen, Kommunikation, Bewertungen',
      'Öffentliche Terminbuchung möglich',
    ],
  },
  {
    icon: Package,
    title: 'Lager, Material & Einkauf',
    does: 'Materialkatalog, Wareneingang, Lagerbuch, Inventur, Bestellungen, Werkzeuge und Fahrzeuge — Material hängt am Projekt und im Lager.',
    helps: 'Weniger Fehlkäufe und Zettelwirtschaft; Verbrauch und Bestand sind nachvollziehbar.',
    points: [
      'Katalog, Lagerbuch, Inventur, Wareneingang',
      'Bestellungen und Lieferanten',
      'DATANORM / IDS / Punch-Out anbindbar',
    ],
  },
  {
    icon: Wrench,
    title: 'Service, Wartung & E-Check',
    does: 'Serviceaufträge, Wartungsverträge, Anlagenverwaltung und E-Check/Messprotokolle — modular zuschaltbar, wenn der Betrieb Service mitführt.',
    helps: 'Wiederkehrende Wartung und Prüfungen rutschen nicht unter; Historie bleibt an der Anlage.',
    points: [
      'Serviceaufträge und Wartungsverträge',
      'E-Check / VDE-Protokolle, EMA-Nachweise',
      'Anlagen (z. B. PV) mit Historie',
    ],
  },
  {
    icon: Gauge,
    title: 'KPI & Controlling',
    does: 'KPI-Dashboard mit Projekt-Ampeln, Wochen-Standup, Nachkalkulation und Team-Displays (Wallboard / Standup / Plantafel).',
    helps: 'Margen und Baustellenstatus ohne Excel-Jagd — Standup und Ampeln für die Leitung.',
    points: [
      'Projekt-Ampeln und Rolling-Overview',
      'Wochen-Standup und Nachkalkulation',
      'Displays fürs Büro und die Werkstatt',
    ],
  },
  {
    icon: Headset,
    title: 'Kundenportal & Vertrieb',
    does: 'Kunden-Login mit Cockpit zu Angeboten, Rechnungen, Bautagebuch und Wartung — plus öffentliche Links für Angebote, Termine und Energie-Konfigurator.',
    helps: 'Kunden sehen den Stand selbst; weniger Status-Mails und Rückfragen im Büro.',
    points: [
      'Portal: Angebote, Rechnungen, Bautagebuch',
      'Öffentliche Angebots- und Terminlinks',
      'Kundencenter fürs Büro-Team',
    ],
  },
  {
    icon: Plug,
    title: 'Schnittstellen',
    does: 'Lexware Office, Microsoft 365/Outlook, GAEB, IDS/OCI, DATEV-Exporte, CTI/Telefonie und weitere Lieferanten-Anbindungen — modular und rollenbasiert.',
    helps: 'Bestehende Tools bleiben nutzbar, ohne dass Volt von einer Fremdsoftware abhängt.',
    points: [
      'Lexware optional, Outlook/M365-Kalender',
      'GAEB und Lieferanten-Punch-Out',
      'DATEV-Exporte und Telefonie/CTI',
    ],
  },
  {
    icon: Bot,
    title: 'Assistent & Automatisierung',
    does: 'Volt-Assistent (lokale KI/Ollama) mit Tool-Calling und Bestätigung vor Schreibaktionen; Workflows und n8n für wiederkehrende Abläufe.',
    helps: 'Routinefragen und Vorbereitung laufen schneller — kritische Änderungen bleiben unter Kontrolle.',
    points: [
      'Assistent für Kunden- und Projektfragen',
      'Bestätigungspflicht bei Schreibaktionen',
      'Workflows für wiederkehrende Prozesse',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Admin, Rechte & Betrieb',
    does: 'Benutzer, RBAC-Matrix, Feature-Module, Firmendaten, Backup/Updates und Audit — Image-only-Deploy ohne Source auf dem Kundenserver.',
    helps: 'Jeder sieht nur, was er braucht; Betrieb und Datenschutz sind mitgedacht, nicht angeklebt.',
    points: [
      'Rollen, Module und Feature-Flags',
      'Audit-Spuren und Hosting in DE',
      'Updates per privater Registry',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Personal & Betrieb',
    does: 'Mitarbeiter, Subunternehmer, Stundenübersicht, Abwesenheitsanträge, Betriebsmitteilungen mit digitaler Unterschrift — und optional Bewerbungen/Onboarding.',
    helps: 'Personal und Kapazität sitzen neben der Plantafel, nicht in einer zweiten Tabelle.',
    points: [
      'Mitarbeiter und Subunternehmer',
      'Stundenübersicht und Abwesenheiten',
      'Mitteilungen mit digitaler Bestätigung',
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
    text: 'Lead oder Anfrage landet im Kundencenter und wird zum Auftrag PRJ-YYYY-NNN — mit LV, Dokumenten und Zuständigkeiten.',
    relief: 'Alles startet an einem Ort; nichts geht zwischen Posteingang und Baustelle verloren.',
  },
  {
    step: '02',
    title: 'Anbieten & disponieren',
    text: 'Angebot aus Vorlagen oder Punch-Out, dann Plantafel: Monteure, Nachunternehmer und Abwesenheiten stehen fest — optional mit Outlook.',
    relief: 'Verkauf und Disposition greifen ineinander, ohne doppelte Datenpflege.',
  },
  {
    step: '03',
    title: 'Auf der Baustelle arbeiten',
    text: 'MonteurHub: Stempeluhr, Checklisten, Fotos und Material fließen zurück. Offline geht auch.',
    relief: 'Büro muss nichts nachtragen; der Stand ist aktuell, wenn der Monteur Feierabend macht.',
  },
  {
    step: '04',
    title: 'Abrechnen & steuern',
    text: 'Zeiten, Material und Belege fließen in Abrechnung und Nachkalkulation — KPI-Ampeln und Standup zeigen, wo es hakt.',
    relief: 'Weniger Nachkalkulation aus dem Gedächtnis, klarere Margen, schnellerer Abschluss.',
  },
];
