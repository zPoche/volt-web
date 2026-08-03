import {
  Bot,
  CalendarCheck,
  CalendarDays,
  CarFront,
  ClipboardList,
  FileText,
  Gauge,
  GraduationCap,
  Hammer,
  HardHat,
  Headset,
  Landmark,
  MessageCircle,
  Monitor,
  Package,
  PenLine,
  PhoneCall,
  Plug,
  ReceiptText,
  Ruler,
  ScreenShare,
  ShieldCheck,
  Smartphone,
  Sun,
  TabletSmartphone,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Feature = {
  icon: LucideIcon;
  title: string;
  /** Kurze Funktionszeile */
  does: string;
  /** Alltag */
  helps: string;
  /** Kostenvorteil */
  saves: string;
  points: string[];
};

/** Kompakt formuliert — Kacheln auf-/zuklappbar. */
export const FEATURES: Feature[] = [
  {
    icon: HardHat,
    title: 'Projekte & Aufträge',
    does: 'Eine Akte für LV, Material, Lohn, Nachträge, Rechnungen und Protokolle.',
    helps: 'Büro und Baustelle sehen denselben Stand.',
    saves: 'Weniger Suchzeit, Nachträge gehen nicht unter.',
    points: ['LV & GAEB', 'Nachträge & Rechnungen', 'Messprotokolle & Fotos'],
  },
  {
    icon: FileText,
    title: 'Angebote & Belege',
    does: 'Vorlagen, Pakete, PDF-Import, Punch-Out — Belege in Volt, Lexware optional.',
    helps: 'Vom Angebot zur Ausführung ohne Medienbruch.',
    saves: 'Schneller anbieten, weniger Doppelpflege.',
    points: ['Vorlagen & Pakete', 'Kundenlink', 'Lexware nur bei Bedarf'],
  },
  {
    icon: CalendarDays,
    title: 'Plantafel',
    does: 'Einsätze, Abwesenheiten und Nachunternehmer per Drag & Drop — optional Outlook.',
    helps: 'Morgens steht der Tag, ohne Telefonkette.',
    saves: 'Weniger Leerlauf und Fehlfahrten.',
    points: ['Tag & Woche', 'Kapazitäten', 'NU-Kräfte mitplanen'],
  },
  {
    icon: Smartphone,
    title: 'MonteurHub',
    does: 'Stempeluhr, Checklisten, Fotos und Offline-Sync direkt vom Einsatz.',
    helps: 'Rückmeldungen kommen von der Baustelle.',
    saves: 'Büro tippt nichts nach Feierabend nach.',
    points: ['Stempeluhr', 'Checklisten & Fotos', 'Offline'],
  },
  {
    icon: Users,
    title: 'Kundencenter',
    does: 'Kunden, Anfragen, Kommunikation und Historie an einem Ort.',
    helps: 'Kontext vor dem Anruf oder der Fahrt.',
    saves: 'Weniger verlorene Leads und Doppelanfahrten.',
    points: ['Timeline', 'Anfragen', 'Terminbuchung'],
  },
  {
    icon: Package,
    title: 'Lager & Einkauf',
    does: 'Katalog, Bestand, Bestellungen — Material am Projekt und im Lager.',
    helps: 'Kein Zettelchaos mehr beim Verbrauch.',
    saves: 'Weniger Fehlkäufe und Überbestand.',
    points: ['Lagerbuch', 'Bestellungen', 'Punch-Out'],
  },
  {
    icon: Wrench,
    title: 'Service & E-Check',
    does: 'Wartung, Anlagen und Prüfprotokolle — modular zuschaltbar.',
    helps: 'Wiederkehrende Termine rutschen nicht unter.',
    saves: 'Planbare Serviceerlöse und saubere Nachweise.',
    points: ['Wartungsverträge', 'E-Check', 'Anlagenhistorie'],
  },
  {
    icon: Gauge,
    title: 'KPI & Kosten',
    does: 'Ampeln, Nachkalkulation und Standup — Marge pro Projekt.',
    helps: 'Du siehst früh, welche Baustelle Geld verbrennt.',
    saves: 'Kostenüberblick statt Bauchgefühl.',
    points: ['Projekt-Ampeln', 'Nachkalkulation', 'Wochen-Standup'],
  },
  {
    icon: Headset,
    title: 'Kundenportal',
    does: 'Kunden sehen Angebote, Rechnungen und Bautagebuch selbst.',
    helps: 'Weniger „Wo steht mein Auftrag?“-Anrufe.',
    saves: 'Bürozeit bleibt für echte Arbeit.',
    points: ['Portal-Login', 'Angebotslinks', 'Termine'],
  },
  {
    icon: Plug,
    title: 'Schnittstellen',
    does: 'Lexware, Outlook, GAEB, DATEV, Lieferanten — anbinden statt ersetzen.',
    helps: 'Bestehende Tools bleiben nutzbar.',
    saves: 'Keine Zwangs-Migration, weniger Doppel-Lizenzen.',
    points: ['Lexware optional', 'M365 / Outlook', 'DATEV & GAEB'],
  },
  {
    icon: Bot,
    title: 'Eigene KI',
    does: 'Lokales Ollama in eurer Instanz — Assistent ohne Cloud-Token-Rechnung.',
    helps: 'Fragen und Zusammenfassungen, Daten bleiben im Betrieb.',
    saves: 'Keine Quotas, keine Pay-per-Prompt-Überraschung.',
    points: ['Lokal / DSGVO', 'Tool-Calling', 'Bestätigung vor Schreiben'],
  },
  {
    icon: ShieldCheck,
    title: 'Admin & Rechte',
    does: 'Rollen, Module, Backup und Updates — Image-only-Betrieb.',
    helps: 'Jeder sieht nur, was er braucht.',
    saves: 'Weniger IT-Aufwand und Risiko.',
    points: ['RBAC', 'Feature-Module', 'Hosting in DE'],
  },
  {
    icon: ClipboardList,
    title: 'Personal',
    does: 'Mitarbeiter, Subunternehmer, Stunden und Abwesenheiten neben der Plantafel.',
    helps: 'Kapazität ohne zweite Excel-Liste.',
    saves: 'Überstunden und Leerlauf werden sichtbar.',
    points: ['Stundenübersicht', 'Abwesenheiten', 'Mitteilungen'],
  },
  {
    icon: Sun,
    title: 'PV & Wärmepumpe',
    does: 'Netzanmeldung, PV-Simulation und WP-Checklisten — Renewables als Prozess, nicht als Aktenordner.',
    helps: 'Von der Anmeldung bis zur Inbetriebnahme mit Checklisten direkt am Einsatz.',
    saves: 'Weniger Rückfragen bei Netzbetreibern und lückenlose Nachweise.',
    points: ['Netzanmeldung-Checklisten', 'PV-Simulation', 'Reonic-Sync'],
  },
  {
    icon: ReceiptText,
    title: 'eRechnung',
    does: 'ZUGFeRD- und XRechnung-fähig im Belegfluss — ohne Zusatztool dazwischen.',
    helps: 'Öffentliche Auftraggeber und Großkunden fordern es — Volt kann es.',
    saves: 'Kein separates eRechnungs-Tool, keine Medienbrüche beim Versand.',
    points: ['ZUGFeRD & XRechnung', 'Im Belegfluss integriert', 'DATEV-Export'],
  },
  {
    icon: CarFront,
    title: 'Fahrtenbuch & Fuhrpark',
    does: 'Fahrten pro Fahrzeug und Mitarbeiter — mit DATEV-Export und optionaler Telematik.',
    helps: 'Dienstwagen sauber dokumentiert, ohne Zettel im Handschuhfach.',
    saves: 'Weniger Nacharbeit bei Steuer und Abrechnung.',
    points: ['Fahrtenbuch pro Fahrzeug', 'DATEV-Export', 'Telematik optional'],
  },
  {
    icon: PhoneCall,
    title: 'Telefonie (CTI)',
    does: 'Anrufe mit Kundenkontext — eingehender Ruf, geöffnete Akte.',
    helps: 'Du weißt vor dem Abheben, wer anruft und was ansteht.',
    saves: 'Kürzere Gespräche, keine Suche nach der Kundenakte.',
    points: ['Incoming-Call-Banner', 'Anruf direkt am Vorgang', 'CTI-Gateway'],
  },
  {
    icon: PenLine,
    title: 'E-Signatur',
    does: 'Qualifizierte elektronische Signatur (QES) für Verträge und Protokolle.',
    helps: 'Wartungsverträge und Aufträge unterschreiben Kunden digital.',
    saves: 'Kein Scan-Ping-Pong, schnellere Vertragswege.',
    points: ['QES via Skribble/Yousign', 'Signatur-Links', 'Nachweis am Projekt'],
  },
  {
    icon: CalendarCheck,
    title: 'Online-Terminbuchung',
    does: 'Kunden buchen Service- und Beratungstermine selbst — Captcha-geschützt.',
    helps: 'Termine landen direkt in der Planung, nicht im Telefonstau.',
    saves: 'Weniger Telefonate für Standardtermine.',
    points: ['Öffentlicher Buchungslink', 'Slot-Verwaltung', 'Captcha-Schutz'],
  },
];

export const BUSINESS_BENEFITS = [
  {
    title: 'Weniger Leerlauf',
    text: 'Suchen und Nachtelefonieren kosten Marge — Volt hält den Stand an einem Ort.',
  },
  {
    title: 'Kostenüberblick',
    text: 'Lohn, Material und Ergebnis pro Projekt — bevor die Baustelle ins Minus läuft.',
  },
  {
    title: 'KI ohne Token-Falle',
    text: 'Eigene lokale KI: planbare Kosten, keine Cloud-Quota-Rechnung.',
  },
  {
    title: 'Modular statt Zwang',
    text: 'Nur die Module, die ihr braucht. Lexware & Co. optional.',
  },
] as const;

/** Ergebnis-Story vor dem Modul-Katalog — eine Idee pro Zeile. */
export const OUTCOMES = [
  {
    title: 'Ein System statt fünf Tools',
    text: 'Projekte, Disposition, Baustelle und Belege greifen ineinander — ohne Excel-Brücken.',
  },
  {
    title: 'Büro und Baustelle synchron',
    text: 'Was der Monteur erfasst, sieht das Büro sofort. Kein Nachtragen am Abend.',
  },
  {
    title: 'Marge sichtbar steuern',
    text: 'Ampeln und Nachkalkulation zeigen früh, welche Baustelle Geld verbrennt.',
  },
] as const;

/** Zuerst sichtbar im Katalog; Rest hinter „Alle Module“. */
export const FEATURED_FEATURE_COUNT = 6;

/** Kurzer Trust-Strip unter dem Hero-/Produktblock. */
export const TRUST_POINTS = [
  'Modular zuschaltbar',
  'Hosting in Deutschland',
  'Lexware optional',
  'Lokale KI ohne Token-Rechnung',
] as const;

export type ExtraModule = {
  icon: LucideIcon;
  title: string;
  text: string;
};

/** Zusatzmodule — kompakt, ohne Aufklapp-Kachel. */
export const EXTRAS: ExtraModule[] = [
  {
    icon: Hammer,
    title: 'Werkzeugverwaltung',
    text: 'Werkzeuge und Prüfmittel mit Standort und Historie.',
  },
  {
    icon: Workflow,
    title: 'Automatisierungen',
    text: 'Regeln statt Routineklicks — Abläufe laufen von selbst.',
  },
  {
    icon: GraduationCap,
    title: 'Bewerber & Onboarding',
    text: 'Von der Bewerbung bis zur Einarbeitungs-Checkliste.',
  },
  {
    icon: Ruler,
    title: 'Elektro-Installationsplaner',
    text: 'Pläne mit Symbolen belegen und als PDF sichern.',
  },
  {
    icon: Landmark,
    title: 'Fördermittel',
    text: 'Zuschüsse und Förderfälle pro Projekt im Blick.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Business',
    text: 'Kundenkommunikation direkt aus dem Vorgang heraus.',
  },
  {
    icon: TabletSmartphone,
    title: 'Native Android-App',
    text: 'Monteur-App mit Offline-Sync, Push und QR-Kopplung.',
  },
  {
    icon: Monitor,
    title: 'Wallboard',
    text: 'Tagesplan und Status auf dem Werkstatt-Fernseher.',
  },
  {
    icon: ScreenShare,
    title: 'Fernwartung',
    text: 'AnyDesk-Anbindung für schnellen Support am Arbeitsplatz.',
  },
];

export type WorkflowStep = {
  step: string;
  title: string;
  text: string;
  relief: string;
};

export const WORKFLOW: WorkflowStep[] = [
  {
    step: '01',
    title: 'Anfrage wird zum Projekt',
    text: 'Lead landet im Kundencenter und wird zum Auftrag — mit LV und Zuständigkeiten.',
    relief: 'Nichts geht zwischen Posteingang und Baustelle verloren.',
  },
  {
    step: '02',
    title: 'Anbieten & disponieren',
    text: 'Angebot aus Vorlagen, dann Plantafel für Team und Nachunternehmer.',
    relief: 'Verkauf und Disposition ohne Doppelpflege.',
  },
  {
    step: '03',
    title: 'Auf der Baustelle',
    text: 'MonteurHub: Stempeluhr, Checklisten, Fotos — auch offline.',
    relief: 'Büro muss nichts nachtragen.',
  },
  {
    step: '04',
    title: 'Abrechnen & steuern',
    text: 'Zeiten und Material fließen in Abrechnung und Nachkalkulation.',
    relief: 'Kostenüberblick statt Bauchgefühl.',
  },
];
