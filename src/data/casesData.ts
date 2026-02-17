export interface CaseData {
  slug: string;
  branche: string;
  brancheFilter: string;
  headline: string;
  problem: string;
  loesung: string;
  module: string[];
  ergebnisse: { label: string; value: string }[];
  zeitraum: string;
  metaTitle: string;
  metaDescription: string;
  keyMetrik: string;
}

export const casesData: CaseData[] = [
  {
    slug: "immobilien-leadgenerierung",
    branche: "Immobilien",
    brancheFilter: "Immobilien",
    headline: "Von unregelmäßigen Anfragen zu planbaren Leads. Jeden Tag.",
    problem: "Ein Immobilienunternehmen hatte keine systematische Leadgenerierung. Anfragen kamen sporadisch über Empfehlungen – kein planbares Wachstum möglich.",
    loesung: "Aufbau eines kompletten Lead-Funnels: Positionierung geschärft, Landing Pages erstellt, Meta Ads aufgesetzt, automatisierte Lead-Qualifizierung über CRM implementiert.",
    module: ["Marketing & Leadgenerierung", "Operations & Automatisierung"],
    ergebnisse: [
      { label: "Anfragen", value: "Planbar jeden Tag" },
      { label: "CPL", value: "-60%" },
      { label: "ROI positiv", value: "Ab Monat 2" },
    ],
    zeitraum: "8 Wochen Setup, laufende Optimierung",
    metaTitle: "Immobilien-Leadgenerierung – Planbare Anfragen jeden Tag | Skalator",
    metaDescription: "Wie ein Immobilienunternehmen durch systematische Leadgenerierung planbare Anfragen generiert – CPL um 60% gesenkt, ROI positiv ab Monat 2.",
    keyMetrik: "CPL -60%",
  },
  {
    slug: "inkasso-automatisierung",
    branche: "Dienstleistung / Finance",
    brancheFilter: "Dienstleistung",
    headline: "+40% Effizienz. Gleiches Team. Null neue Mitarbeiter.",
    problem: "Ein Inkasso-Dienstleister arbeitete mit manuellen Prozessen. Hohe Fehlerquote, Team am Limit, keine Skalierbarkeit.",
    loesung: "End-to-End Workflow-Automatisierung aller Kernprozesse. Datenflüsse zwischen Systemen synchronisiert, manuelle Schritte eliminiert, Reporting automatisiert.",
    module: ["Operations & Automatisierung"],
    ergebnisse: [
      { label: "Effizienz", value: "+40%" },
      { label: "Fehlerquote", value: "-80%" },
      { label: "Team", value: "Gleiches Team, mehr Output" },
    ],
    zeitraum: "12 Wochen Implementierung",
    metaTitle: "Inkasso-Automatisierung – +40% Effizienz durch Workflow-Automatisierung | Skalator",
    metaDescription: "Wie ein Inkasso-Dienstleister durch End-to-End Automatisierung 40% effizienter wurde – gleiches Team, 80% weniger Fehler.",
    keyMetrik: "+40% Effizienz",
  },
  {
    slug: "dubai-real-estate",
    branche: "Immobilien / International",
    brancheFilter: "Immobilien",
    headline: "Von Null auf kontinuierlichen Lead-Strom. In 6 Wochen.",
    problem: "Ein Dubai-Immobilienunternehmen wollte Investoren aus dem DACH-Raum gewinnen. Keine Online-Präsenz, keine Ads, kein Funnel – komplett bei Null.",
    loesung: "Kompletter Aufbau von Grund auf: Website, Brand-Positionierung für den DACH-Markt, Meta Ads Strategie, Lead-Funnel mit automatisierter Qualifizierung und CRM-Anbindung.",
    module: ["Marketing & Leadgenerierung", "Sales & Vertriebsprozesse", "Operations & Automatisierung"],
    ergebnisse: [
      { label: "Lead-Strom", value: "Kontinuierlich" },
      { label: "Go-Live", value: "6 Wochen" },
      { label: "Ads-Struktur", value: "Skalierbar" },
    ],
    zeitraum: "6 Wochen von Null auf Live",
    metaTitle: "Dubai Real Estate – Von Null auf Lead-Strom in 6 Wochen | Skalator",
    metaDescription: "Kompletter Marktaufbau für ein Dubai-Immobilienunternehmen: Website, Ads, Funnel – in 6 Wochen von Null auf kontinuierlichen Lead-Strom.",
    keyMetrik: "6 Wochen Live",
  },
  {
    slug: "handwerk-recruiting",
    branche: "Handwerk",
    brancheFilter: "Handwerk",
    headline: "15+ qualifizierte Bewerbungen pro Monat. Statt null.",
    problem: "Ein Handwerksbetrieb fand keine Fachkräfte. Indeed-Anzeigen brachten nur unqualifizierte Bewerbungen. Das Wachstum war blockiert.",
    loesung: "Social Recruiting Funnel über Meta Ads aufgebaut. Automatisierte Bewerber-Qualifizierung, Follow-up Sequenzen und Karriereseite erstellt.",
    module: ["Recruiting & Teamaufbau", "Marketing & Leadgenerierung"],
    ergebnisse: [
      { label: "Bewerbungen", value: "15+/Monat" },
      { label: "Einstellungen", value: "3 in 6 Wochen" },
      { label: "Cost-per-Application", value: "Unter 30€" },
    ],
    zeitraum: "4 Wochen Setup",
    metaTitle: "Handwerk Recruiting – 15+ qualifizierte Bewerbungen pro Monat | Skalator",
    metaDescription: "Wie ein Handwerksbetrieb durch Social Recruiting 15+ qualifizierte Bewerbungen pro Monat generiert – statt null.",
    keyMetrik: "15+ Bewerbungen/Monat",
  },
  {
    slug: "coaching-skalierung",
    branche: "Coaching",
    brancheFilter: "Coaching",
    headline: "Umsatz verdreifacht. Arbeitsstunden halbiert.",
    problem: "Ein Coaching-Business stagnierte bei 10k/Monat. Alles war manuell, kein CRM, keine Ads, kein Vertriebsprozess. Der Coach war überarbeitet und am Limit.",
    loesung: "Positionierung geschärft, Verkaufsprozess systematisiert, CRM aufgebaut, Follow-up automatisiert, Meta Ads gestartet. Alles Schritt für Schritt.",
    module: ["Marketing & Leadgenerierung", "Sales & Vertriebsprozesse", "Operations & Automatisierung", "Recruiting & Teamaufbau"],
    ergebnisse: [
      { label: "Umsatz", value: "3x in 4 Monaten" },
      { label: "Arbeitszeit", value: "Halbiert" },
      { label: "Neukundengewinnung", value: "Planbar" },
    ],
    zeitraum: "16 Wochen Begleitung",
    metaTitle: "Coaching-Skalierung – Umsatz verdreifacht, Arbeitsstunden halbiert | Skalator",
    metaDescription: "Wie ein Coaching-Business den Umsatz verdreifacht und die Arbeitszeit halbiert hat – durch Systeme statt Hustle.",
    keyMetrik: "3x Umsatz",
  },
  {
    slug: "gartenbau-voice-ai",
    branche: "Handwerk / Dienstleistung",
    brancheFilter: "Handwerk",
    headline: "24/7 erreichbar. Kein verpasster Auftrag mehr.",
    problem: "Ein Gartenbau-Unternehmen verpasste ständig Anrufe während der Arbeit auf Baustellen. Aufträge gingen verloren, Kunden sprangen ab.",
    loesung: "Voice-AI Telefonassistent implementiert, der Anrufe entgegennimmt, qualifiziert und Termine automatisch ins CRM einträgt. Zusätzlich automatisierte Termin-Bestätigungen per SMS.",
    module: ["Operations & Automatisierung"],
    ergebnisse: [
      { label: "Erreichbarkeit", value: "24/7" },
      { label: "Verpasste Leads", value: "Null" },
      { label: "Terminbuchung", value: "Vollautomatisch" },
    ],
    zeitraum: "3 Wochen Implementierung",
    metaTitle: "Gartenbau Voice AI – 24/7 erreichbar, kein verpasster Auftrag | Skalator",
    metaDescription: "Wie ein Gartenbau-Unternehmen durch Voice-AI 24/7 erreichbar wurde und keinen Auftrag mehr verpasst.",
    keyMetrik: "24/7 Erreichbar",
  },
];

export const filterCategories = ["Alle", "Immobilien", "Dienstleistung", "Handwerk", "Coaching"];
