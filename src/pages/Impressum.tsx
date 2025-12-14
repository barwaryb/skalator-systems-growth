import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-16 md:py-24">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-display mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none text-foreground/80">
          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">Angaben gemäß §5 TMG</h2>
            <p className="text-body-lg">
              <strong>Skalator</strong><br />
              Beratung für KI, Automatisierung & digitales Wachstum<br /><br />
              Botan Barwary Consulting<br />
              Wilhelmstraße 17<br />
              76275 Ettlingen<br />
              Deutschland
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">Kontakt</h2>
            <p className="text-body-lg">
              📧 E-Mail: <a href="mailto:info@skalator.de" className="text-accent hover:underline">info@skalator.de</a><br />
              🌐 Website: <a href="https://www.skalator.de" className="text-accent hover:underline">www.skalator.de</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">Umsatzsteuer-ID</h2>
            <p className="text-body-lg">
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              → Wird nachgereicht
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-body-lg">
              Botan Barwary<br />
              Wilhelmstraße 17<br />
              76275 Ettlingen
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">Haftung für Inhalte</h2>
            <p className="text-body-lg">
              Als Diensteanbieter sind wir gemäß §7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">Streitschlichtung</h2>
            <p className="text-body-lg">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a 
                href="https://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              <br /><br />
              Unsere E-Mail-Adresse findest du oben im Impressum.<br />
              Wir sind nicht verpflichtet, an einem Streitbeilegungsverfahren teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
