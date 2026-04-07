import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail } from "lucide-react";
import skalatorLogo from "@/assets/skalator-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img src={skalatorLogo} alt="Skalator" className="h-8 w-auto" />
              <span className="text-lg font-medium text-white tracking-tight">Skalator</span>
            </Link>
            <p className="text-xs text-white/30 mb-4">Growth Operator</p>
            <div className="flex items-center gap-2">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
                { icon: Mail, href: "mailto:info@skalator.de", label: "E-Mail" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-xs font-medium text-white/60 uppercase tracking-widest mb-4">Leistungen</h4>
            <ul className="space-y-2.5">
              <li><Link to="/leistungen/marketing-leadgenerierung" className="text-sm text-white/30 hover:text-white transition-colors">Marketing & Leads</Link></li>
              <li><Link to="/leistungen/sales-vertriebsprozesse" className="text-sm text-white/30 hover:text-white transition-colors">Sales & Vertrieb</Link></li>
              <li><Link to="/leistungen/operations-automatisierung" className="text-sm text-white/30 hover:text-white transition-colors">Operations & Automation</Link></li>
              <li><Link to="/leistungen/recruiting-teamaufbau" className="text-sm text-white/30 hover:text-white transition-colors">Recruiting & Team</Link></li>
            </ul>
          </div>

          {/* Seiten */}
          <div>
            <h4 className="text-xs font-medium text-white/60 uppercase tracking-widest mb-4">Seiten</h4>
            <ul className="space-y-2.5">
              <li><Link to="/leistungen" className="text-sm text-white/30 hover:text-white transition-colors">Leistungen</Link></li>
              <li><Link to="/cases" className="text-sm text-white/30 hover:text-white transition-colors">Cases</Link></li>
              <li><Link to="/ueber-mich" className="text-sm text-white/30 hover:text-white transition-colors">Über mich</Link></li>
            </ul>
            <h4 className="text-xs font-medium text-white/60 uppercase tracking-widest mb-4 mt-8">Themen</h4>
            <ul className="space-y-2.5">
              <li><Link to="/marketing-automatisierung" className="text-sm text-white/30 hover:text-white transition-colors">Marketing Automatisierung</Link></li>
              <li><Link to="/neukunden-gewinnung" className="text-sm text-white/30 hover:text-white transition-colors">Neukundengewinnung</Link></li>
              <li><Link to="/leadgenerierung-b2b" className="text-sm text-white/30 hover:text-white transition-colors">Leadgenerierung B2B</Link></li>
              <li><Link to="/vertrieb-automatisieren" className="text-sm text-white/30 hover:text-white transition-colors">Vertrieb automatisieren</Link></li>
              <li><Link to="/ki-automatisierung-unternehmen" className="text-sm text-white/30 hover:text-white transition-colors">KI-Automatisierung</Link></li>
              <li><Link to="/business-skalierung" className="text-sm text-white/30 hover:text-white transition-colors">Business Skalierung</Link></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-xs font-medium text-white/60 uppercase tracking-widest mb-4">Rechtliches</h4>
            <ul className="space-y-2.5">
              <li><Link to="/impressum" className="text-sm text-white/30 hover:text-white transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-sm text-white/30 hover:text-white transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-white/20">
            © 2025 · Botan Barwary · <em className="font-serif not-italic">Skalator</em> · DACH
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
