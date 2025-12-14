import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
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

        <h1 className="text-display mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-lg max-w-none text-foreground/80">
          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">1. Allgemeine Hinweise</h2>
            <p className="text-body-lg">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-body-lg mt-4">
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend „Daten") im Rahmen unserer Onlinepräsenz auf der Webseite www.skalator.de auf.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">2. Verantwortlicher</h2>
            <p className="text-body-lg">
              Skalator – Botan Barwary<br />
              Wilhelmstraße 17<br />
              76275 Ettlingen<br />
              E-Mail: <a href="mailto:info@skalator.de" className="text-accent hover:underline">info@skalator.de</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="text-body-lg">
              Beim Besuch dieser Website können folgende Daten automatisch erhoben und gespeichert werden:
            </p>
            <ul className="list-disc list-inside text-body-lg mt-4 space-y-2">
              <li>IP-Adresse</li>
              <li>Browsertyp und -version</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Datum und Uhrzeit der Serveranfrage</li>
            </ul>
            <p className="text-body-lg mt-4">
              Diese Daten dienen ausschließlich statistischen Zwecken und zur Verbesserung der Website. Rückschlüsse auf Ihre Person ziehen wir daraus nicht.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">4. Kontaktaufnahme</h2>
            <p className="text-body-lg">
              Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, speichern wir Ihre Angaben zur Bearbeitung der Anfrage sowie für eventuelle Anschlussfragen.
            </p>
            <p className="text-body-lg mt-4">
              <strong>Verarbeitete Daten:</strong>
            </p>
            <ul className="list-disc list-inside text-body-lg mt-2 space-y-2">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Anliegen / Nachricht</li>
            </ul>
            <p className="text-body-lg mt-4">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen)
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">5. Terminbuchung (z. B. via Calendly)</h2>
            <p className="text-body-lg">
              Wenn Sie einen Termin über ein eingebundenes Tool (z. B. Calendly) buchen, werden personenbezogene Daten wie Name, E-Mail und ggf. Telefonnummer verarbeitet. Die Daten werden dabei an den Dienstleister übertragen.
            </p>
            <p className="text-body-lg mt-4">
              Calendly wird betrieben von Calendly LLC, USA. Datenschutzerklärung:{" "}
              <a 
                href="https://calendly.com/de/pages/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://calendly.com/de/pages/privacy
              </a>
            </p>
            <p className="text-body-lg mt-4">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">6. Cookies</h2>
            <p className="text-body-lg">
              Diese Website verwendet möglicherweise Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und keine Viren enthalten. Sie dienen dazu, unser Angebot nutzerfreundlicher zu gestalten.
            </p>
            <p className="text-body-lg mt-4">
              Sie können Ihren Browser so einstellen, dass er Sie über das Setzen von Cookies informiert oder Cookies ganz deaktiviert. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">7. Webhosting über Framer</h2>
            <p className="text-body-lg">
              Unsere Website wird über Framer gehostet (Framer B.V., Niederlande). Es werden automatisch Server-Logfiles erstellt. Framer arbeitet DSGVO-konform.
            </p>
            <p className="text-body-lg mt-4">
              Weitere Informationen:{" "}
              <a 
                href="https://www.framer.com/legal/privacy-policy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://www.framer.com/legal/privacy-policy/
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">8. Ihre Rechte</h2>
            <p className="text-body-lg">
              Sie haben jederzeit das Recht auf:
            </p>
            <ul className="list-disc list-inside text-body-lg mt-4 space-y-2">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Beschwerde bei einer Aufsichtsbehörde (z. B. LfDI Baden-Württemberg)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-headline text-foreground mb-4">9. Änderung der Datenschutzerklärung</h2>
            <p className="text-body-lg">
              Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.
            </p>
            <p className="text-body-lg mt-4">
              <strong>Stand: Juli 2025</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
