export interface ServiceData {
  slug: string;
  id: string;
  title: string;
  titlePart1: string;
  titlePart2: string;
  subline: string;
  description: string;
  deliverables: string[];
  fuerWen: string;
  ablauf: { step: string; title: string; description: string }[];
  ergebnis: string;
  relevanteCases: string[];
  glowColor: string;
  accentColor: string;
  dotColor: string;
  metaTitle: string;
  metaDescription: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "marketing-leadgenerierung",
    id: "001",
    title: "Marketing & Leadgenerierung",
    titlePart1: "Marketing &",
    titlePart2: "Leadgenerierung",
    subline: "Von der Positionierung bis zum qualifizierten Lead – Systeme, die planbare Anfragen generieren.",
    description: "Von der Positionierung bis zum qualifizierten Lead – Systeme, die planbare Anfragen generieren.",
    deliverables: [
      "Positionierung & Message-Market-Fit",
      "Ad Creative Entwicklung",
      "Meta Ads & Google Ads Setup",
      "Landing Pages & Funnel-Aufbau",
      "Lead-Magnete",
      "Tracking & Analytics",
      "Laufende Optimierung",
    ],
    fuerWen: "Unternehmen die wachsen wollen aber kein planbares System für Neukundengewinnung haben. Die genug von Empfehlungen und Zufall haben.",
    ablauf: [
      { step: "01", title: "Analyse", description: "Analyse der Ist-Situation und Zielgruppe" },
      { step: "02", title: "Positionierung", description: "Positionierung & Strategie entwickeln" },
      { step: "03", title: "Setup", description: "Funnel & Ads aufsetzen" },
      { step: "04", title: "Launch", description: "Launch & Testing" },
      { step: "05", title: "Skalierung", description: "Skalierung & laufende Optimierung" },
    ],
    ergebnis: "Planbare Anfragen. Messbarer ROI. Kein Rätselraten mehr.",
    relevanteCases: ["immobilien-leadgenerierung", "dubai-real-estate"],
    glowColor: "from-cyan-400 via-blue-500 to-cyan-400",
    accentColor: "text-cyan-400",
    dotColor: "bg-cyan-400",
    metaTitle: "Marketing & Leadgenerierung – Planbare Kundengewinnung | Skalator",
    metaDescription: "Von der Positionierung bis zum qualifizierten Lead. Systeme die planbare Anfragen generieren – kein Rätselraten.",
  },
  {
    slug: "sales-vertriebsprozesse",
    id: "002",
    title: "Sales & Vertriebsprozesse",
    titlePart1: "Sales &",
    titlePart2: "Vertriebsprozesse",
    subline: "Strukturen, die Leads in Kunden verwandeln. Kürzere Zyklen, höhere Abschlussquoten.",
    description: "Strukturen, die Leads in Kunden verwandeln. Kürzere Zyklen, höhere Abschlussquoten.",
    deliverables: [
      "Sales-Prozess-Design",
      "CRM-Setup & Konfiguration",
      "Pipeline-Management",
      "Automatisierte Follow-up Sequenzen",
      "Verkaufsskript-Entwicklung",
      "Sales-Reporting & KPIs",
    ],
    fuerWen: "Unternehmen die Leads haben aber zu wenige abschließen. Die kein CRM nutzen oder es falsch nutzen. Die keinen klaren Vertriebsprozess haben.",
    ablauf: [
      { step: "01", title: "Sales-Audit", description: "Bestehende Prozesse analysieren" },
      { step: "02", title: "Prozess-Design", description: "Optimalen Vertriebsprozess designen" },
      { step: "03", title: "CRM-Setup", description: "CRM konfigurieren und anpassen" },
      { step: "04", title: "Automatisierung", description: "Follow-ups und Workflows automatisieren" },
      { step: "05", title: "Go-Live", description: "Training & Go-Live" },
    ],
    ergebnis: "Kürzere Sales Cycles. Höhere Abschlussquoten. Kein Lead fällt mehr durchs Raster.",
    relevanteCases: ["coaching-skalierung", "dubai-real-estate"],
    glowColor: "from-emerald-400 via-green-500 to-emerald-400",
    accentColor: "text-emerald-400",
    dotColor: "bg-emerald-400",
    metaTitle: "Sales & Vertriebsprozesse – Mehr Abschlüsse, kürzere Cycles | Skalator",
    metaDescription: "Strukturen die Leads in Kunden verwandeln. CRM, Pipeline-Management, Follow-ups – alles systematisiert.",
  },
  {
    slug: "operations-automatisierung",
    id: "003",
    title: "Operations & Automatisierung",
    titlePart1: "Operations &",
    titlePart2: "Automatisierung",
    subline: "Prozesse, die Wachstum tragen. Weniger Kosten, mehr Output mit dem gleichen Team.",
    description: "Prozesse, die Wachstum tragen. Weniger Kosten, mehr Output mit dem gleichen Team.",
    deliverables: [
      "Prozess-Audit & Mapping",
      "Workflow-Automatisierung (n8n, Make.com)",
      "KI-Integration (ChatGPT API, Voice AI, Chatbots)",
      "System-Synchronisation & API-Anbindungen",
      "Reporting-Dashboards",
      "Dokumentation & SOPs",
    ],
    fuerWen: "Unternehmen die mit manuellen Prozessen am Limit sind. Die wachsen aber das Team nicht proportional mitwachsen soll. Die Fehler und Nacharbeit reduzieren wollen.",
    ablauf: [
      { step: "01", title: "Prozess-Audit", description: "Bestehende Workflows analysieren" },
      { step: "02", title: "Priorisierung", description: "Quick Wins identifizieren" },
      { step: "03", title: "Build", description: "Automatisierungen bauen und konfigurieren" },
      { step: "04", title: "Testing", description: "Testen und iterieren" },
      { step: "05", title: "Go-Live", description: "Go-Live, Support & Iteration" },
    ],
    ergebnis: "30-40% weniger operative Kosten. 50% mehr Produktivität. Weniger Fehler, weniger Nacharbeit.",
    relevanteCases: ["inkasso-automatisierung", "gartenbau-voice-ai"],
    glowColor: "from-violet-400 via-purple-500 to-violet-400",
    accentColor: "text-violet-400",
    dotColor: "bg-violet-400",
    metaTitle: "Operations & Automatisierung – Prozesse die Wachstum tragen | Skalator",
    metaDescription: "30-40% weniger operative Kosten. Workflow-Automatisierung mit n8n, Make.com und KI. Mehr Output mit dem gleichen Team.",
  },
  {
    slug: "recruiting-teamaufbau",
    id: "004",
    title: "Recruiting & Teamaufbau",
    titlePart1: "Recruiting &",
    titlePart2: "Teamaufbau",
    subline: "Die richtigen Menschen finden und halten. Systeme für nachhaltiges Teamwachstum.",
    description: "Die richtigen Menschen finden und halten. Systeme für nachhaltiges Teamwachstum.",
    deliverables: [
      "Employer Branding & Arbeitgeber-Positionierung",
      "Social Recruiting Ads (Meta)",
      "Bewerber-Funnel & Karriereseite",
      "Automatisierte Qualifizierung",
      "Follow-up Sequenzen & Nurturing",
      "Bewerbermanagement-Setup",
    ],
    fuerWen: "Unternehmen die keine Bewerbungen bekommen. Die nur unqualifizierte Bewerbungen erhalten. Die vom Fachkräftemangel betroffen sind aber wissen, dass es an ihrer Sichtbarkeit liegt.",
    ablauf: [
      { step: "01", title: "Analyse", description: "Analyse & Arbeitgeber-Positionierung" },
      { step: "02", title: "Funnel", description: "Karriereseite & Funnel aufbauen" },
      { step: "03", title: "Creatives", description: "Ad Creatives & Kampagnen erstellen" },
      { step: "04", title: "Launch", description: "Kampagnen starten" },
      { step: "05", title: "Optimierung", description: "Optimierung & Skalierung" },
    ],
    ergebnis: "Qualifizierte Bewerbungen. Systematisch. Planbar. Ohne Headhunter-Gebühren.",
    relevanteCases: ["handwerk-recruiting"],
    glowColor: "from-amber-400 via-orange-500 to-amber-400",
    accentColor: "text-amber-400",
    dotColor: "bg-amber-400",
    metaTitle: "Recruiting & Teamaufbau – Qualifizierte Bewerbungen auf Knopfdruck | Skalator",
    metaDescription: "Social Recruiting, Bewerber-Funnel und automatisierte Qualifizierung. Die richtigen Menschen finden und halten.",
  },
];
