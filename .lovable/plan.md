
# Neue Unterseiten und Navigation fuer skalator.de

## Uebersicht

Erstellung von 3 Hauptseiten (Cases, Leistungen, Ueber mich) mit insgesamt 10 Detailseiten sowie ein komplettes Navigations-Update mit Dropdown-Menu.

---

## 1. Navigation Update

**Header.tsx komplett ueberarbeiten:**
- Desktop: Links fuer "Leistungen" (mit Dropdown fuer die 4 Module), "Cases", "Ueber mich"
- Dropdown bei Hover/Klick zeigt die 4 Leistungs-Unterseiten
- Mobile: Hamburger-Menu mit allen Links und ausklappbarem Leistungen-Bereich
- CTA-Button "Termin buchen" bleibt bestehen
- Verwendung von React Router `Link`-Komponenten statt Anchor-Tags

**Footer.tsx erweitern:**
- Neue Navigationsspalten: Leistungen (4 Links), Seiten (Cases, Ueber mich), Rechtliches (Impressum, Datenschutz)

---

## 2. Wiederverwendbare Komponenten

Folgende neue Komponenten werden erstellt:

- **`PageHero.tsx`** - Wiederverwendbarer Hero fuer alle Unterseiten (Label, Headline, Subline, Breadcrumbs)
- **`Breadcrumbs.tsx`** - Breadcrumb-Navigation (Startseite > Sektion > Unterseite)
- **`StatCard.tsx`** - Stat-Karten fuer Metriken (z.B. "+40% Effizienz")
- **`CaseTeaser.tsx`** - Case-Preview-Card fuer "Weitere Cases" und Verlinkungen
- **`PageCTA.tsx`** - Wiederverwendbare CTA-Sektion mit Calendly-Link
- **`ModuleTag.tsx`** - Styled Tags fuer Module (Marketing, Sales, etc.)
- **`ScrollToTop.tsx`** - Automatischer Scroll-to-Top bei Seitenwechsel

---

## 3. Cases-Bereich (/cases)

### Uebersichtsseite `/cases`
- `src/pages/Cases.tsx`
- Filterkategorien als Tabs: Alle | Immobilien | Dienstleistung | Handwerk | Coaching
- Case-Cards im Grid (2-3 Spalten Desktop, 1 Spalte Mobil)
- Jede Card: Branche-Tag, Headline, Problem-Satz, Key-Metrik, Button "Case ansehen"
- CTA-Section am Ende
- Eigener Meta-Title/Description per `document.title` + `useEffect`

### 6 Case-Detailseiten
Alle folgen dem gleichen Template (`CaseDetailPage.tsx`):

| Route | Branche | Headline |
|-------|---------|----------|
| `/cases/immobilien-leadgenerierung` | Immobilien | Von unregelmaessigen Anfragen zu planbaren Leads |
| `/cases/inkasso-automatisierung` | Dienstleistung | +40% Effizienz. Gleiches Team. |
| `/cases/dubai-real-estate` | Immobilien | Von Null auf Lead-Strom in 6 Wochen |
| `/cases/handwerk-recruiting` | Handwerk | 15+ qualifizierte Bewerbungen pro Monat |
| `/cases/coaching-skalierung` | Coaching | Umsatz verdreifacht. Arbeitsstunden halbiert. |
| `/cases/gartenbau-voice-ai` | Handwerk | 24/7 erreichbar. Kein verpasster Auftrag mehr. |

Jede Detailseite enthalt:
- Hero mit Branche-Tag + Headline
- Problem-Section (mit orangem/rotem Akzent-Icon)
- Loesung + Modul-Tags
- Ergebnis-Metriken als grosse Stat-Cards
- Zeitraum
- CTA
- 3 weitere Cases als Teaser-Cards

**Technisch:** Ein zentrales Daten-Objekt `casesData.ts` mit allen Case-Daten. Eine wiederverwendbare `CaseDetail.tsx`-Komponente rendert basierend auf dem URL-Parameter.

---

## 4. Leistungen-Bereich (/leistungen)

### Uebersichtsseite `/leistungen`
- `src/pages/Leistungen.tsx`
- 4 grosse Module-Cards mit Nummer, Titel, Kurzbeschreibung, Button "Mehr erfahren"
- Section "So laeuft die Zusammenarbeit ab" (4 Schritte: Analyse, Strategie, Umsetzung, Optimierung)
- CTA am Ende

### 4 Leistungs-Detailseiten
Alle folgen dem gleichen Template (`ServiceDetailPage.tsx`):

| Route | Modul |
|-------|-------|
| `/leistungen/marketing-leadgenerierung` | 001 Marketing & Leadgenerierung |
| `/leistungen/sales-vertriebsprozesse` | 002 Sales & Vertriebsprozesse |
| `/leistungen/operations-automatisierung` | 003 Operations & Automatisierung |
| `/leistungen/recruiting-teamaufbau` | 004 Recruiting & Teamaufbau |

Jede Detailseite enthalt:
- Hero mit Modulnummer + Headline + Subline
- Deliverables als styled Grid-Cards (nicht Bullet-Points)
- "Fuer wen" - Klartext
- Ablauf als Timeline/Prozess-Visualisierung (4-5 Schritte)
- Ergebnis-Versprechen (bold)
- 2 relevante Case-Cards (verlinkt auf /cases/...)
- CTA

**Technisch:** Ein zentrales `servicesData.ts` mit allen Leistungs-Daten. Wiederverwendbare `ServiceDetail.tsx`-Komponente.

---

## 5. Ueber mich (/ueber-mich)

- `src/pages/UeberMich.tsx`
- Hero: Headline + grauer Platzhalter-Kasten fuer Foto (mit User-Icon)
- Intro-Text-Section
- Zahlen-Section: 4 Stat-Cards (5+ Jahre, 150+ Prozesse, 30M+ EUR, 500+ Podcast-Folgen)
- Timeline "Mein Weg" (4 Stationen)
- "Was mich unterscheidet" - 4 Cards (Solo-Operator, Ergebnisorientiert, Praxis statt Theorie, Tech + Strategie)
- Podcast-Section mit Spotify/Apple Platzhalter-Buttons
- CTA-Section

---

## 6. Routing und technische Details

### App.tsx - Neue Routes
```text
/cases                                    -> Cases.tsx
/cases/:slug                              -> CaseDetail.tsx (dynamisch)
/leistungen                               -> Leistungen.tsx
/leistungen/:slug                         -> ServiceDetail.tsx (dynamisch)
/ueber-mich                               -> UeberMich.tsx
```

### ScrollToTop
Eine `ScrollToTop`-Komponente wird in `App.tsx` eingebunden, die bei jedem Route-Wechsel `window.scrollTo(0, 0)` ausfuehrt.

### Meta-Tags
Jede Seite setzt per `useEffect` den `document.title` und die Meta-Description.

### Interne Verlinkung
- Case-Detailseiten verlinken auf passende Leistungs-Seiten (ueber Modul-Tags)
- Leistungs-Detailseiten verlinken auf relevante Cases
- Bestehende Services-Section auf der Startseite: "Mehr erfahren"-Buttons verlinken auf `/leistungen/...`
- Bestehende CaseStudies-Section: Case-Items verlinken auf `/cases/...`

### Sitemap und llms.txt
- `public/sitemap.xml` wird um alle 13 neuen URLs erweitert
- `public/llms.txt` wird um Verweise auf die neuen Seiten ergaenzt

---

## 7. Design-Konsistenz

Alle neuen Seiten uebernehmen:
- Dark-Mode-Aesthetic mit `bg-[#0a0a0a]`, subtile Gradients und Grid-Pattern
- Playfair Display italic fuer Highlight-Woerter
- Plus Jakarta Sans als Body-Font
- Bestehende Utility-Klassen (`.section-container`, `.section-padding`, `.modern-card`, `.text-display`)
- Framer Motion Animationen (fade-in, stagger)
- Accent-Color (Electric Blue) und die modul-spezifischen Glow-Colors
- Rounded-full Buttons mit Glow-Effekt
- Keine Stockfotos - geometrische Shapes/abstrakte Platzhalter wo Bilder fehlen

---

## Dateistruktur (neue Dateien)

```text
src/
  data/
    casesData.ts          -- Alle Case-Daten zentral
    servicesData.ts       -- Alle Leistungs-Daten zentral
  components/
    PageHero.tsx
    Breadcrumbs.tsx
    StatCard.tsx
    CaseTeaser.tsx
    PageCTA.tsx
    ModuleTag.tsx
    ScrollToTop.tsx
    MobileMenu.tsx        -- Mobile Hamburger-Menu
  pages/
    Cases.tsx             -- /cases Uebersicht
    CaseDetail.tsx        -- /cases/:slug
    Leistungen.tsx        -- /leistungen Uebersicht
    ServiceDetail.tsx     -- /leistungen/:slug
    UeberMich.tsx         -- /ueber-mich
```

Bestehende Dateien die geaendert werden:
- `src/App.tsx` - Neue Routes + ScrollToTop
- `src/components/Header.tsx` - Komplette Navigation mit Dropdown + Mobile Menu
- `src/components/Footer.tsx` - Erweiterte Navigation
- `src/components/Services.tsx` - "Mehr erfahren" verlinkt auf Detailseiten
- `src/components/CaseStudies.tsx` - Cases verlinken auf Detailseiten
- `public/sitemap.xml` - 13 neue URLs
- `public/llms.txt` - Neue Seiten-Referenzen
