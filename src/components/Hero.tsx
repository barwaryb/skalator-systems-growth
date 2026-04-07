import { motion } from "framer-motion";
import { memo } from "react";
import { ArrowRight } from "lucide-react";
import heroBotan from "@/assets/hero-botan.png";

const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1J8LB-Qt3tzOmUygFk9PqamtOzvM1qo1PxXQxiodbMZBa41kcDQfFBhXAH0YwOoR_0uWt4tmpe";

const Hero = memo(() => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden" aria-label="Hero">
      <div className="section-container flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28 min-h-screen">
        {/* Left: Text */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-display text-white mb-8"
          >
            Von Stillstand zu{" "}
            <em className="font-serif not-italic text-white/40">
              skalierbarem Wachstum.
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-body-lg text-white/50 max-w-xl mb-10"
          >
            Skalator baut Systeme für den Mittelstand — mit Strukturen im Vertrieb, Marketing und Operations,
            die Wachstum tragen. Keine Theorie. Funktionierende Systeme.
          </motion.p>

          {/* 3D Layered Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-14"
          >
            <a
              href={GOOGLE_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <div className="relative">
                {/* Layer 4 - deepest shadow */}
                <div className="absolute inset-0 translate-y-3 translate-x-1 rounded-full bg-white/5 blur-sm" />
                {/* Layer 3 - mid shadow */}
                <div className="absolute inset-0 translate-y-2 rounded-full bg-white/10" />
                {/* Layer 2 - close shadow */}
                <div className="absolute inset-0 translate-y-1 rounded-full bg-white/20" />
                {/* Layer 1 - main button */}
                <div className="relative flex items-center gap-4 bg-white text-black rounded-full px-8 py-4 md:px-10 md:py-5 font-medium text-sm md:text-base transition-all duration-200 group-hover:translate-y-[2px] group-hover:shadow-none group-active:translate-y-[3px]"
                  style={{ boxShadow: '0 4px 0 rgba(255,255,255,0.3), 0 8px 0 rgba(255,255,255,0.15), 0 12px 0 rgba(255,255,255,0.05), 0 16px 30px rgba(0,0,0,0.4)' }}
                >
                  <span>Jetzt Erstgespräch buchen</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-12 md:gap-16 border-t border-white/10 pt-8"
          >
            {[
              { value: "5+", label: "Jahre Erfahrung" },
              { value: "20+", label: "Systeme installiert" },
              { value: "100%", label: "Fokus auf Resultate" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              >
                <span className="block text-3xl md:text-4xl font-light text-white tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-white/40 tracking-wide">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: Image - vertically centered */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-full lg:w-[42%] shrink-0 self-center"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] max-h-[550px]">
            <img
              src={heroBotan}
              alt="Botan Barwary - Growth Operator und Gründer von Skalator"
              className="w-full h-full object-cover object-top"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
