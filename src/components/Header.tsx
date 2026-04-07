import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import skalatorLogo from "@/assets/skalator-logo.png";

const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1J8LB-Qt3tzOmUygFk9PqamtOzvM1qo1PxXQxiodbMZBa41kcDQfFBhXAH0YwOoR_0uWt4tmpe";

const leistungenLinks = [
  { label: "Marketing & Leadgenerierung", to: "/leistungen/marketing-leadgenerierung" },
  { label: "Sales & Vertriebsprozesse", to: "/leistungen/sales-vertriebsprozesse" },
  { label: "Operations & Automatisierung", to: "/leistungen/operations-automatisierung" },
  { label: "Recruiting & Teamaufbau", to: "/leistungen/recruiting-teamaufbau" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="section-container">
        <nav className="flex items-center justify-between border-b border-white/10 py-5 md:py-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={skalatorLogo} alt="Skalator Logo" className="h-8 md:h-10 w-auto" loading="eager" />
            <span className="font-display text-xl md:text-2xl tracking-tight text-white font-medium">
              Skalator
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/leistungen"
                className="flex items-center gap-1 px-6 py-3 text-sm text-white/50 hover:text-white transition-opacity"
              >
                Leistungen
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </Link>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-72 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden"
                  >
                    {leistungenLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block px-5 py-3.5 text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/cases" className="px-6 py-3 text-sm text-white/50 hover:text-white transition-opacity">
              Cases
            </Link>
            <Link to="/ueber-mich" className="px-6 py-3 text-sm text-white/50 hover:text-white transition-opacity">
              Über mich
            </Link>
          </div>

          {/* CTA */}
          <a
            href={GOOGLE_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-3 bg-white text-black rounded-full px-6 py-2.5 text-sm font-medium hover:bg-white/90 transition-all group"
          >
            <span>Erstgespräch buchen</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
            aria-label="Menü"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
          >
            <div className="section-container py-6 space-y-1">
              <button
                onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
                className="w-full flex items-center justify-between px-3 py-3 text-white/70 hover:text-white"
              >
                Leistungen
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileLeistungenOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileLeistungenOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    {leistungenLinks.map((link) => (
                      <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2.5 text-sm text-white/40 hover:text-white">
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <Link to="/cases" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-white/70 hover:text-white">Cases</Link>
              <Link to="/ueber-mich" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-white/70 hover:text-white">Über mich</Link>
              <div className="pt-4">
                <a href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-black rounded-full px-6 py-3 text-sm font-medium w-full">
                  Erstgespräch buchen <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
