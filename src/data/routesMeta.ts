import { casesData } from "./casesData";
import { servicesData } from "./servicesData";
import { seoPages } from "./seoPageData";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  canonical: string;
}

const BASE_URL = "https://skalator.de";

const manualRoutes: RouteMeta[] = [
  {
    path: "/cases",
    title: "Cases – Echte Ergebnisse aus echten Projekten | Skalator",
    description: "Ergebnisse statt Versprechen. Echte Case Studies aus Marketing, Sales, Operations und Recruiting.",
    ogTitle: "Cases – Echte Ergebnisse aus echten Projekten | Skalator",
    ogDescription: "Ergebnisse statt Versprechen. Echte Case Studies aus Marketing, Sales, Operations und Recruiting.",
    ogUrl: `${BASE_URL}/cases`,
    canonical: `${BASE_URL}/cases`,
  },
  {
    path: "/leistungen",
    title: "Leistungen – Marketing, Sales, Operations & Recruiting | Skalator",
    description: "Vier Module für planbares Wachstum: Marketing & Leadgenerierung, Sales & Vertriebsprozesse, Operations & Automatisierung, Recruiting & Teamaufbau.",
    ogTitle: "Leistungen – Marketing, Sales, Operations & Recruiting | Skalator",
    ogDescription: "Vier Module für planbares Wachstum: Marketing, Sales, Operations und Recruiting.",
    ogUrl: `${BASE_URL}/leistungen`,
    canonical: `${BASE_URL}/leistungen`,
  },
  {
    path: "/ueber-mich",
    title: "Über mich – Botan Barwary | Skalator",
    description: "Growth Operator mit 5+ Jahren Erfahrung. 20+ Systeme gebaut. Ich helfe Unternehmen planbar zu wachsen – ohne Chaos, ohne Agentur-Abhängigkeit.",
    ogTitle: "Über mich – Botan Barwary | Skalator",
    ogDescription: "Growth Operator mit 5+ Jahren Erfahrung. Ich helfe Unternehmen planbar zu wachsen.",
    ogUrl: `${BASE_URL}/ueber-mich`,
    canonical: `${BASE_URL}/ueber-mich`,
  },
  {
    path: "/impressum",
    title: "Impressum | Skalator",
    description: "Impressum und rechtliche Angaben der Skalator Business Consulting – Botan Barwary, Ettlingen.",
    ogTitle: "Impressum | Skalator",
    ogDescription: "Impressum und rechtliche Angaben der Skalator Business Consulting.",
    ogUrl: `${BASE_URL}/impressum`,
    canonical: `${BASE_URL}/impressum`,
  },
  {
    path: "/datenschutz",
    title: "Datenschutzerklärung | Skalator",
    description: "Datenschutzerklärung der Skalator Business Consulting – Informationen zum Umgang mit personenbezogenen Daten.",
    ogTitle: "Datenschutzerklärung | Skalator",
    ogDescription: "Datenschutzerklärung der Skalator Business Consulting.",
    ogUrl: `${BASE_URL}/datenschutz`,
    canonical: `${BASE_URL}/datenschutz`,
  },
];

const caseRoutes: RouteMeta[] = casesData.map((c) => ({
  path: `/cases/${c.slug}`,
  title: c.metaTitle,
  description: c.metaDescription,
  ogTitle: c.metaTitle,
  ogDescription: c.metaDescription,
  ogUrl: `${BASE_URL}/cases/${c.slug}`,
  canonical: `${BASE_URL}/cases/${c.slug}`,
}));

const serviceRoutes: RouteMeta[] = servicesData.map((s) => ({
  path: `/leistungen/${s.slug}`,
  title: s.metaTitle,
  description: s.metaDescription,
  ogTitle: s.metaTitle,
  ogDescription: s.metaDescription,
  ogUrl: `${BASE_URL}/leistungen/${s.slug}`,
  canonical: `${BASE_URL}/leistungen/${s.slug}`,
}));

const seoRoutes: RouteMeta[] = seoPages.map((p) => ({
  path: `/${p.slug}`,
  title: p.metaTitle,
  description: p.metaDescription,
  ogTitle: p.metaTitle,
  ogDescription: p.metaDescription,
  ogUrl: `${BASE_URL}/${p.slug}`,
  canonical: `${BASE_URL}/${p.slug}`,
}));

export const routesMeta: RouteMeta[] = [
  ...manualRoutes,
  ...caseRoutes,
  ...serviceRoutes,
  ...seoRoutes,
];
