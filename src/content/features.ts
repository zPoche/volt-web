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
  /** Unternehmerischer / Kosten-Vorteil */
  saves: string;
  points: string[];
};

/**
 * Kernfunktionen aus dem Volt-ERP (M01–M12 / Nav & Module).
 * Nutzen + Kostenargument je Modul — ohne Overclaim auf reine Roadmap-Themen.
 */
export const FEATURES: Feature[] = [
  {
    icon: HardHat,
    title: 'Projekte & Aufträge',
    does: 'Die Projektakte bündelt LV/GAEB, Material, Lohn, Nachträge, Rechnungen, Messprotokolle, Bautagebuch, Aufmaß, Elektroplan und Dokumente unter einer Nummer (PRJ-YYYY-NNN).',
    helps: 'Büro, Bauleitung und Monteur arbeiten an derselben Akte — kein Suchen zwischen Ordner, Chat und Excel.',
    saves: 'Weniger Suchzeit und Nacharbeit heißt weniger unproduktive Stunden pro Auftrag — und Nachträge gehen nicht unter.',
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
    saves: 'Schnellere Angebotserstellung und weniger Doppelpflege zwischen ERP und Buchhaltung — Lexware nur, wenn es sich lohnt.',
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
    saves: 'Leerlauf und Fehlfahrten sinken; Kapazität und Nachunternehmer werden planbar statt „aus dem Bauch“.',
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
    saves: 'Weniger Bürostunden für Nachpflege; echte Zeiten statt Schätzungen verbessern Abrechnung und Marge.',
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
    saves: 'Weniger verlorene Leads und doppelte Anfahrten — Folgeaufträge und Service bleiben im Blick.',
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
    saves: 'Kapital steckt weniger in Überbestand; Fehlkäufe und Not-Beschaffungen werden seltener.',
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
    saves: 'Planbare Wartungserlöse statt nur Neugeschäft; Nachweispflichten ohne Zettelchaos.',
    points: [
      'Serviceaufträge und Wartungsverträge',
      'E-Check / VDE-Protokolle, EMA-Nachweise',
      'Anlagen (z. B. PV) mit Historie',
    ],
  },
  {
    icon: Gauge,
    title: 'KPI, Kosten & Controlling',
    does: 'KPI-Dashboard mit Projekt-Ampeln, Wochen-Standup, Nachkalkulation (DB I/II) und Team-Displays — Margen und Baustellenstatus auf einen Blick.',
    helps: 'Du siehst früh, welche Baustelle Geld verbrennt — ohne Excel-Jagd am Sonntagabend.',
    saves: 'Kostenüberblick pro Projekt: Lohn, Material und Ergebnis statt „Bauchgefühl“. Rote Ampeln rechtzeitig stoppen.',
    points: [
      'Projekt-Ampeln und Rolling-Overview',
      'Nachkalkulation und Wochen-Standup',
      'Displays für Büro und Werkstatt',
    ],
  },
  {
    icon: Headset,
    title: 'Kundenportal & Vertrieb',
    does: 'Kunden-Login mit Cockpit zu Angeboten, Rechnungen, Bautagebuch und Wartung — plus öffentliche Links für Angebote, Termine und Energie-Konfigurator.',
    helps: 'Kunden sehen den Stand selbst; weniger Status-Mails und Rückfragen im Büro.',
    saves: 'Bürozeit für „Wo steht mein Auftrag?“ sinkt; Angebote und Termine laufen ohne Telefonkette.',
    points: [
      'Portal: Angebote, Rechnungen, Bautagebuch',
      'Öffentliche Angebots- und Terminlinks',
      'Kundencenter fürs Büro-Team',
    ],
  },
  {
    icon: Plug,
    title: 'Schnittstellen',
    does: 'Lexware Office, Microsoft 365/Outlook, GAEB, IDS/OCI, DATEV-Exporte, CTI/Telefonie und Lieferanten-Anbindungen — modular und rollenbasiert.',
    helps: 'Bestehende Tools bleiben nutzbar, ohne dass Volt von einer Fremdsoftware abhängt.',
    saves: 'Keine Zwangs-Migration und weniger Lizenz-Doppelungen — anbinden, was sich rechnet.',
    points: [
      'Lexware optional, Outlook/M365-Kalender',
      'GAEB und Lieferanten-Punch-Out',
      'DATEV-Exporte und Telefonie/CTI',
    ],
  },
  {
    icon: Bot,
    title: 'Eigene KI — ohne Token-Rechnung',
    does: 'Volt-Assistent läuft über lokales Ollama in eurer Instanz (DSGVO-freundlich): Kunden/Projekte abfragen, LV-Hilfe, CRM-Zusammenfassungen, Dateianalyse — Schreibaktionen nur mit Bestätigung.',
    helps: 'Routinefragen, Zusammenfassungen und Vorbereitung laufen schneller — ohne Daten an fremde Cloud-KI zu schicken.',
    saves: 'Keine teuren API-Tokens, Quotas oder Pay-per-Prompt-Rechnungen wie bei Cloud-KI. Die KI läuft bei euch — planbare Kosten statt Überraschungsrechnung.',
    points: [
      'Lokales Ollama — keine Cloud-Token-Abrechnung',
      'Assistent mit Tool-Calling und Bestätigungspflicht',
      'LV-, CRM- und Import-Hilfen optional zuschaltbar',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Admin, Rechte & Betrieb',
    does: 'Benutzer, RBAC-Matrix, Feature-Module, Firmendaten, Backup/Updates und Audit — Image-only-Deploy ohne Source auf dem Kundenserver.',
    helps: 'Jeder sieht nur, was er braucht; Betrieb und Datenschutz sind mitgedacht, nicht angeklebt.',
    saves: 'Weniger IT-Aufwand und Risiko: Module statt Wildwuchs, Updates per Registry, Hosting in DE.',
    points: [
      'Rollen, Module und Feature-Flags',
      'Audit-Spuren und Hosting in DE',
      'Updates per privater Registry',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Personal & Betrieb',
    does: 'Mitarbeiter, Subunternehmer, Stundenübersicht, Abwesenheitsanträge, Betriebsmitteilungen mit digitaler Unterschrift — optional Bewerbungen/Onboarding.',
    helps: 'Personal und Kapazität sitzen neben der Plantafel, nicht in einer zweiten Tabelle.',
    saves: 'Überstunden und Leerlauf werden sichtbar; Absenzen und Mitteilungen ohne Excel-Rundlauf.',
    points: [
      'Mitarbeiter und Subunternehmer',
      'Stundenübersicht und Abwesenheiten',
      'Mitteilungen mit digitaler Bestätigung',
    ],
  },
];

/** Kurzargumente für den unternehmerischen Überblick */
export const BUSINESS_BENEFITS = [
  {
    title: 'Weniger unproduktive Stunden',
    text: 'Suchen, Nachtelefonieren und Doppelpflege zwischen Excel, Chat und Ordnern kosten Marge — Volt hält den Stand an einem Ort.',
  },
  {
    title: 'Kostenüberblick pro Projekt',
    text: 'Lohn, Material und Ergebnis in Ampeln und Nachkalkulation — bevor die Baustelle ins Minus läuft.',
  },
  {
    title: 'KI ohne Token-Falle',
    text: 'Eigene lokale KI (Ollama) in der Volt-Instanz: keine Cloud-Quotas, keine Pay-per-Prompt-Rechnung, Daten bleiben im Betrieb.',
  },
  {
    title: 'Flexibel statt Zwang',
    text: 'Module und Rechte nach Bedarf. Lexware, Outlook und DATEV optional — nicht als teure Pflichtkette.',
  },
] as const;

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
    relief: 'Kostenüberblick statt Bauchgefühl: klarere Margen, schnellerer Abschluss, weniger Überraschungen.',
  },
];
