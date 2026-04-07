import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1J8LB-Qt3tzOmUygFk9PqamtOzvM1qo1PxXQxiodbMZBa41kcDQfFBhXAH0YwOoR_0uWt4tmpe";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]"
        >
          <a
            href={GOOGLE_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative">
              {/* 3D layers */}
              <div className="absolute inset-0 translate-y-[3px] rounded-full bg-white/10" />
              <div className="absolute inset-0 translate-y-[6px] rounded-full bg-white/5" />
              <div
                className="relative flex items-center justify-center gap-3 bg-white text-black rounded-full px-6 py-4 font-semibold text-sm transition-all duration-200 active:translate-y-[2px]"
                style={{ boxShadow: '0 3px 0 rgba(255,255,255,0.25), 0 6px 0 rgba(255,255,255,0.1), 0 10px 25px rgba(0,0,0,0.5)' }}
              >
                <span>Jetzt Erstgespräch buchen</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
