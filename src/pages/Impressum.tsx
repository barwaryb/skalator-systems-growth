import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Globe, MapPin, User } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-violet-500/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="section-container pt-28 md:pt-36 pb-16 md:pb-24 relative z-10">
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

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display text-white mb-4"
        >
          Impressum
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/50 text-body-lg mb-12"
        >
          Angaben gemäß § 5 TMG
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl font-bold text-white">Anschrift</h2>
            </div>
            <div className="text-white/70 space-y-1">
              <p className="font-semibold text-white">Skalator</p>
              <p>Beratung für KI, Automatisierung & digitales Wachstum</p>
              <p className="pt-2">Botan Barwary Consulting</p>
              <p>Wilhelmstraße 17</p>
              <p>76275 Ettlingen</p>
              <p>Deutschland</p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl font-bold text-white">Kontakt</h2>
            </div>
            <div className="text-white/70 space-y-3">
              <a 
                href="mailto:info@skalator.de" 
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@skalator.de
              </a>
              <a 
                href="https://www.skalator.de" 
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Globe className="w-4 h-4" />
                www.skalator.de
              </a>
            </div>
          </motion.div>

          {/* Responsible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <User className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl font-bold text-white">Verantwortlich</h2>
            </div>
            <div className="text-white/70 space-y-1">
              <p className="text-sm text-white/50 mb-2">gemäß § 55 Abs. 2 RStV</p>
              <p className="font-semibold text-white">Botan Barwary</p>
              <p>Wilhelmstraße 17</p>
              <p>76275 Ettlingen</p>
            </div>
          </motion.div>

          {/* VAT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-bold">§</span>
              </div>
              <h2 className="text-xl font-bold text-white">Umsatzsteuer-ID</h2>
            </div>
            <div className="text-white/70 space-y-1">
              <p className="text-sm text-white/50 mb-2">gemäß § 27 a UStG</p>
              <p>Wird nachgereicht</p>
            </div>
          </motion.div>
        </div>

        {/* Legal sections */}
        <div className="mt-12 max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-white mb-4">Haftung für Inhalte</h2>
            <p className="text-white/70">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-white mb-4">Streitschlichtung</h2>
            <p className="text-white/70 mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            </p>
            <a 
              href="https://ec.europa.eu/consumers/odr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            <p className="text-white/70 mt-4">
              Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht verpflichtet, an einem Streitbeilegungsverfahren teilzunehmen.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
