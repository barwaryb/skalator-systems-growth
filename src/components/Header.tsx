import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import skalatorLogo from "@/assets/skalator-logo.png";

const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1J8LB-Qt3tzOmUygFk9PqamtOzvM1qo1PxXQxiodbMZBa41kcDQfFBhXAH0YwOoR_0uWt4tmpe";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50"
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img src={skalatorLogo} alt="Skalator Logo" className="h-10 md:h-12 w-auto" />
          </a>
          
          <div className="flex items-center gap-4">
            <a
              href="#cases"
              className="hidden sm:block text-sm font-medium text-foreground-muted hover:text-foreground transition-colors duration-300"
            >
              Cases
            </a>
            <Button variant="accent" size="sm" asChild className="group">
              <a 
                href={GOOGLE_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Termin buchen</span>
                <span className="sm:hidden">Termin</span>
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
