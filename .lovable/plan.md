
# Pre-Rendering: Statische HTML-Dateien fuer alle Routen

## Warum ist das noetig?

Aktuell liefert der Server fuer **jede URL** dieselbe `index.html` mit den Homepage-Meta-Tags. Social-Media-Bots (LinkedIn, WhatsApp) und manche Suchmaschinen fuehren kein JavaScript aus und sehen daher immer nur den Homepage-Titel -- egal welche Seite geteilt wird. Die bisherige `useEffect`-basierte Meta-Tag-Aenderung funktioniert nur im Browser.

## Was wird gebaut?

Ein **Vite Build-Plugin**, das beim `vite build` automatisch fuer jede Route eine eigene `index.html` mit den korrekten Meta-Tags generiert. Keine externen Dienste, keine neue Infrastruktur.

## Neue Dateien

### 1. `src/data/routesMeta.ts` -- Zentrale Meta-Daten-Map

Sammelt alle Meta-Informationen fuer ca. 20 Routen in einem Array:

```text
Route                              | title, description, og:tags, canonical
-----------------------------------|----------------------------------------
/                                  | (Homepage-Defaults aus index.html)
/cases                             | Manuell definiert
/cases/immobilien-leadgenerierung  | Aus casesData.ts
/cases/dubai-real-estate           | Aus casesData.ts
/cases/inkasso-automatisierung     | Aus casesData.ts
/cases/handwerk-recruiting         | Aus casesData.ts
/cases/coaching-skalierung         | Aus casesData.ts
/cases/gartenbau-voice-ai          | Aus casesData.ts
/leistungen                        | Manuell definiert
/leistungen/marketing-...          | Aus servicesData.ts
/leistungen/sales-...              | Aus servicesData.ts
/leistungen/operations-...         | Aus servicesData.ts
/leistungen/recruiting-...         | Aus servicesData.ts
/ueber-mich                        | Manuell definiert
/marketing-automatisierung         | Aus seoPageData.ts
/neukunden-gewinnung               | Aus seoPageData.ts
/leadgenerierung-b2b               | Aus seoPageData.ts
/vertrieb-automatisieren           | Aus seoPageData.ts
/ki-automatisierung-unternehmen    | Aus seoPageData.ts
/business-skalierung               | Aus seoPageData.ts
/impressum                         | Manuell definiert
/datenschutz                       | Manuell definiert
```

Jeder Eintrag enthaelt: `path`, `title`, `description`, `ogTitle`, `ogDescription`, `ogUrl`, `canonical`.

### 2. `vite-plugin-static-meta.ts` -- Custom Vite Plugin

- Laeuft nur beim Build (nicht im Dev-Modus)
- Nutzt den `closeBundle` Hook
- Liest die gebaute `dist/index.html` als Template
- Fuer jede Route aus `routesMeta`:
  - Ersetzt `<title>` mit dem seitenspezifischen Titel
  - Ersetzt `<meta name="description">` 
  - Ersetzt `<meta property="og:title">`, `og:description`, `og:url`
  - Ersetzt `<link rel="canonical">`
  - Schreibt das Ergebnis nach `dist/{route}/index.html`
- Beispiel: Route `/cases/dubai-real-estate` erzeugt `dist/cases/dubai-real-estate/index.html`

## Geaenderte Dateien

### 3. `index.html` -- Platzhalter einfuegen

Die bestehenden Meta-Tags bleiben als Defaults (fuer die Homepage) erhalten. Das Plugin findet und ersetzt sie per String-Matching (z.B. den Inhalt von `<title>...</title>` und die `content`-Attribute der Meta-Tags).

Keine Platzhalter-Kommentare noetig -- das Plugin ersetzt direkt die vorhandenen Tag-Inhalte.

### 4. `vite.config.ts` -- Plugin registrieren

Das neue Plugin wird in die `plugins`-Liste aufgenommen, sodass es automatisch beim Build laeuft.

## Technischer Ablauf

```text
vite build
  |
  1. Normaler React-Build -> dist/index.html (SPA mit Homepage-Meta)
  |
  2. closeBundle Hook: Plugin startet
     |
     a. Liest dist/index.html als Template-String
     b. Iteriert ueber routesMeta-Array (ca. 20 Eintraege)
     c. Pro Route: String-Replace fuer title, description, og:*, canonical
     d. Schreibt dist/{route}/index.html mit angepasstem <head>
  |
  3. Ergebnis: 20+ HTML-Dateien mit korrekten Meta-Tags
```

## Was sich fuer Nutzer aendert

- **LinkedIn/WhatsApp/Twitter**: Beim Teilen von z.B. `skalator.de/cases/dubai-real-estate` wird sofort der richtige Titel "Dubai Real Estate -- Von Null auf Lead-Strom in 6 Wochen" und die korrekte Beschreibung angezeigt
- **Google**: Sieht die Meta-Tags sofort ohne JavaScript rendern zu muessen
- **SPA-Verhalten**: Bleibt komplett erhalten -- die statischen HTMLs laden nur die initiale Seite, danach uebernimmt React Router wie gewohnt
