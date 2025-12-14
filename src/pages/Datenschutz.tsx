import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, User, Cookie, Server, FileText, Scale } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    icon: FileText,
    title: "1. Allgemeine Hinweise",
    content: `Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.

Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten im Rahmen unserer Onlinepräsenz auf der Webseite www.skalator.de auf.`
  },
  {
    icon: User,
    title: "2. Verantwortlicher",
    content: `Skalator – Botan Barwary
Wilhelmstraße 17
76275 Ettlingen
E-Mail: info@skalator.de`
  },
  {
    icon: Server,
    title: "3. Erhebung und Speicherung personenbezogener Daten",
    content: `Beim Besuch dieser Website können folgende Daten automatisch erhoben und gespeichert werden:

• IP-Adresse
• Browsertyp und -version
• Verwendetes Betriebssystem
• Referrer-URL
• Datum und Uhrzeit der Serveranfrage

Diese Daten dienen ausschließlich statistischen Zwecken und zur Verbesserung der Website. Rückschlüsse auf Ihre Person ziehen wir daraus nicht.`
  },
  {
    icon: FileText,
    title: "4. Kontaktaufnahme",
    content: `Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, speichern wir Ihre Angaben zur Bearbeitung der Anfrage sowie für eventuelle Anschlussfragen.

Verarbeitete Daten:
• Name
• E-Mail-Adresse
• Anliegen / Nachricht

Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen)`
  },
  {
    icon: FileText,
    title: "5. Terminbuchung",
    content: `Wenn Sie einen Termin über ein eingebundenes Tool buchen, werden personenbezogene Daten wie Name, E-Mail und ggf. Telefonnummer verarbeitet. Die Daten werden dabei an den Dienstleister übertragen.

Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO`
  },
  {
    icon: Cookie,
    title: "6. Cookies",
    content: `Diese Website verwendet möglicherweise Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und keine Viren enthalten. Sie dienen dazu, unser Angebot nutzerfreundlicher zu gestalten.

Sie können Ihren Browser so einstellen, dass er Sie über das Setzen von Cookies informiert oder Cookies ganz deaktiviert. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.`
  },
  {
    icon: Server,
    title: "7. Webhosting",
    content: `Unsere Website wird über Lovable gehostet. Es werden automatisch Server-Logfiles erstellt. Der Dienst arbeitet DSGVO-konform.`
  },
  {
    icon: Scale,
    title: "8. Ihre Rechte",
    content: `Sie haben jederzeit das Recht auf:

• Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)
• Berichtigung unrichtiger Daten (Art. 16 DSGVO)
• Löschung Ihrer Daten (Art. 17 DSGVO)
• Einschränkung der Verarbeitung (Art. 18 DSGVO)
• Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)
• Datenübertragbarkeit (Art. 20 DSGVO)
• Beschwerde bei einer Aufsichtsbehörde (z. B. LfDI Baden-Württemberg)`
  },
  {
    icon: FileText,
    title: "9. Änderung der Datenschutzerklärung",
    content: `Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.

Stand: Juli 2025`
  }
];

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <Header />
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-violet-500/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="section-container py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-accent transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
            <Shield className="w-7 h-7 text-accent" />
          </div>
          <h1 className="text-display text-white">Datenschutz</h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/50 text-body-lg mb-12 max-w-2xl"
        >
          Informationen zur Erhebung und Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.
        </motion.p>

        <div className="max-w-4xl space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 hover:border-white/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                  <section.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                  <div className="text-white/70 whitespace-pre-line leading-relaxed">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz;
