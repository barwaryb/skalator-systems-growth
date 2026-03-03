

# Kunden-Websites in Case Studies verlinken

## Was wird gemacht

Die Case Studies erhalten ein neues optionales Feld fuer die Kunden-Website, damit Besucher die Referenz direkt aufrufen koennen. Das staerkt die Glaubwuerdigkeit und verbessert SEO durch ausgehende Links.

## Aenderungen

### 1. CaseData Interface erweitern (`src/data/casesData.ts`)
- Neues optionales Feld `kundenWebsite?: string` zum Interface hinzufuegen
- Dubai-Case aktualisieren: `kundenWebsite: "https://bertlein-partners.com"` setzen
- Optional: Weitere Cases mit Websites ergaenzen, sobald du mir sagst welche dazugehoeren

### 2. Case-Detailseite anpassen (`src/pages/CaseDetail.tsx`)
- Unterhalb der Loesung oder im Zeitraum-Bereich einen Link zur Kunden-Website anzeigen (nur wenn vorhanden)
- Darstellung: dezenter Link mit externem-Link-Icon, oeffnet in neuem Tab
- `rel="noopener noreferrer"` fuer Sicherheit, kein `nofollow` (bewusst Link-Juice weitergeben)

### 3. Case-Teaser optional erweitern (`src/components/CaseTeaser.tsx`)
- Optional den Kundennamen anzeigen (z.B. "Bertlein Partners" statt nur "Immobilien / International")

## Konkrete Zuordnung bisher

| Case | Kunden-Website |
|------|---------------|
| Dubai Real Estate | bertlein-partners.com |
| (weitere?) | elenas-service.de -- Zuordnung noch offen |

## Technische Details

- Das Feld ist optional (`?`), sodass bestehende Cases ohne Website weiterhin funktionieren
- Der Link wird nur auf der Detailseite angezeigt, nicht in der Uebersicht
- Externe Links bekommen `target="_blank"` und `rel="noopener noreferrer"`

