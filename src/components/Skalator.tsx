import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import scalingVisual from "@/assets/scaling-visual.png";
import automationVisual from "@/assets/automation-visual.png";

const skalierungPoints = [
  "Mehr Umsatz mit denselben Kosten.",
  "Bessere Leads durch gezielte Maßnahmen.",
  "Kürzere Sales Cycles durch saubere Systeme.",
  "Mehr Abschlüsse ohne mehr Aufwand.",
];

const automatisierungPoints = [
  "30–40% weniger operative Kosten.",
  "50% mehr Produktivität pro Mitarbeiter.",
  "Weniger Fehler, weniger Nacharbeit.",
  "Mehr Output mit dem bestehenden Team.",
];

const Skalator = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden bg-background">
      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="section-label mb-4 block">Das Konzept</span>
          <h2 className="text-headline text-white">
            <em className="font-serif not-italic text-white/40">Skalator</em>{" = "}
            <em className="font-serif not-italic text-white/40">Skalierung</em>
            {" + "}
            <em className="font-serif not-italic text-white/40">Automatisierung</em>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-20">
          {/* Skalierung */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="noise-card rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden h-full">
              <div className="relative h-48 overflow-hidden">
                <img src={scalingVisual} alt="Skalierung" loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
              </div>
              <div className="p-7 md:p-9 relative z-10">
                <h3 className="text-2xl font-light text-white tracking-tight mb-2">Skalierung</h3>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-6">Was es wirklich bedeutet</p>
                <ul className="space-y-3">
                  {skalierungPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                      <span className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Automatisierung */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="noise-card rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden h-full">
              <div className="relative h-48 overflow-hidden">
                <img src={automationVisual} alt="Automatisierung" loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
              </div>
              <div className="p-7 md:p-9 relative z-10">
                <h3 className="text-2xl font-light text-white tracking-tight mb-2">Automatisierung</h3>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-6">Was es wirklich bedeutet</p>
                <ul className="space-y-3">
                  {automatisierungPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                      <span className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Punch statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-tight mb-10 max-w-4xl mx-auto">
            Mit mir skalierst du wirklich deinen{" "}
            <em className="font-serif not-italic text-white/40">Umsatz</em> — und senkst
            automatisiert deine{" "}
            <em className="font-serif not-italic text-white/40">Kosten.</em>
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-white text-black rounded-full px-8 py-4 font-medium text-sm hover:bg-white/90 transition-all group"
          >
            Jetzt starten
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skalator;
