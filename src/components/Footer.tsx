import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";
import skalatorLogo from "@/assets/skalator-logo.png";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Mail, href: "mailto:info@skalator.de", label: "E-Mail" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Elegant dark background with subtle gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[300px] bg-gradient-to-tl from-violet-500/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-container py-12 md:py-16 relative z-10">
        <div className="flex flex-col gap-10">
          {/* Top: Logo + Nav Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-2 md:col-span-1"
            >
              <Link to="/" className="flex items-center gap-2 md:gap-3">
                <img src={skalatorLogo} alt="Skalator Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
                <span className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-white">Skalator</span>
              </Link>
              <p className="text-white/40 text-sm mt-2">Growth Operator</p>
              {/* Social */}
              <div className="flex items-center gap-2 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Leistungen */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Leistungen</h4>
              <ul className="space-y-2">
                <li><Link to="/leistungen/marketing-leadgenerierung" className="text-sm text-white/40 hover:text-white transition-colors">Marketing & Leads</Link></li>
                <li><Link to="/leistungen/sales-vertriebsprozesse" className="text-sm text-white/40 hover:text-white transition-colors">Sales & Vertrieb</Link></li>
                <li><Link to="/leistungen/operations-automatisierung" className="text-sm text-white/40 hover:text-white transition-colors">Operations & Automation</Link></li>
                <li><Link to="/leistungen/recruiting-teamaufbau" className="text-sm text-white/40 hover:text-white transition-colors">Recruiting & Team</Link></li>
              </ul>
            </div>

            {/* Seiten */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Seiten</h4>
              <ul className="space-y-2">
                <li><Link to="/leistungen" className="text-sm text-white/40 hover:text-white transition-colors">Leistungen</Link></li>
                <li><Link to="/cases" className="text-sm text-white/40 hover:text-white transition-colors">Cases</Link></li>
                <li><Link to="/ueber-mich" className="text-sm text-white/40 hover:text-white transition-colors">Über mich</Link></li>
              </ul>
            </div>

            {/* Rechtliches */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Rechtliches</h4>
              <ul className="space-y-2">
                <li><Link to="/impressum" className="text-sm text-white/40 hover:text-white transition-colors">Impressum</Link></li>
                <li><Link to="/datenschutz" className="text-sm text-white/40 hover:text-white transition-colors">Datenschutz</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-white/30">
              © 2025 · Botan Barwary · <span className="font-serif italic">Skalator</span> · DACH
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
