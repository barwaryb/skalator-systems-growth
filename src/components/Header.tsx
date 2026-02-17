import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50"
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3" aria-label="Skalator - Zur Startseite">
            <img
              src={skalatorLogo}
              alt="Skalator Logo"
              className="h-8 sm:h-10 md:h-12 w-auto"
              width="48"
              height="48"
              loading="eager"
              decoding="async"
            />
            <span className="font-display text-lg sm:text-xl md:text-2xl tracking-tight text-foreground font-bold uppercase">Skalator</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Leistungen Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/leistungen"
                className="flex items-center gap-1 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors duration-300"
              >
                Leistungen
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </Link>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50"
                  >
                    {leistungenLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block px-4 py-3 text-sm text-foreground-muted hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/cases" className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors duration-300">
              Cases
            </Link>
            <Link to="/ueber-mich" className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors duration-300">
              Über mich
            </Link>

            <Button variant="accent" size="sm" asChild className="group">
              <a href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Termin buchen
              </a>
            </Button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="accent" size="sm" asChild>
              <a href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Termin</span>
              </a>
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border text-foreground"
              aria-label="Menü öffnen"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border bg-card overflow-hidden"
          >
            <div className="section-container py-4 space-y-1">
              {/* Leistungen expandable */}
              <button
                onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
                className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-muted transition-colors"
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
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2.5 text-sm text-foreground-muted hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      to="/leistungen"
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-sm text-accent font-medium"
                    >
                      Alle Leistungen →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                to="/cases"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-muted transition-colors"
              >
                Cases
              </Link>
              <Link
                to="/ueber-mich"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-muted transition-colors"
              >
                Über mich
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
