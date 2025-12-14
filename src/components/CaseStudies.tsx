import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const caseStudies = [
  {
    industry: "Immobilien",
    situation: "Unregelmäßige Anfragen, keine Struktur im Vertrieb.",
    implementation: "Ads-System, automatisierte Lead-Qualifizierung, CRM-Prozess.",
    result: "Planbare Anfragen. Deutlich weniger Zeitverlust.",
  },
  {
    industry: "Inkasso",
    situation: "Manuelle Abläufe, unklare Zuständigkeiten.",
    implementation: "Prozessautomatisierung, klare Workflows, Reporting.",
    result: "Mehr Fälle mit weniger Aufwand. Bessere Übersicht.",
  },
  {
    industry: "Dubai-Immobilien",
    situation: "Fehlende Online-Präsenz, keine Lead-Generierung.",
    implementation: "Website, Ads-Kampagnen, Lead-Funnel.",
    result: "Kontinuierlicher Strom qualifizierter Anfragen.",
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="referenzen" className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-background-pure" />
      
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/50 to-transparent opacity-50" />

      <div className="section-container section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            variants={itemVariants}
            className="text-xs text-foreground/40 uppercase tracking-[0.2em] mb-6 block font-body"
          >
            Referenzen
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="font-heading text-[clamp(2rem,4vw,3.5rem)] text-foreground mb-20 max-w-2xl leading-[1.1]"
          >
            Konkrete Ergebnisse
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.industry}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative"
              >
                <div className="h-full p-8 md:p-10 rounded-2xl bg-background border border-border/50 hover:border-border hover:shadow-xl hover:shadow-foreground/5 transition-all duration-500">
                  {/* Industry label */}
                  <div className="mb-8">
                    <span className="text-xs text-foreground/40 uppercase tracking-[0.15em] font-body">
                      Branche
                    </span>
                    <p className="font-heading text-2xl text-foreground mt-2">
                      {study.industry}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <span className="text-xs text-foreground/40 uppercase tracking-[0.15em] font-body block mb-2">
                        Ausgangslage
                      </span>
                      <p className="text-foreground/60 leading-relaxed">
                        {study.situation}
                      </p>
                    </div>
                    
                    <div>
                      <span className="text-xs text-foreground/40 uppercase tracking-[0.15em] font-body block mb-2">
                        Umsetzung
                      </span>
                      <p className="text-foreground/60 leading-relaxed">
                        {study.implementation}
                      </p>
                    </div>
                    
                    <div className="pt-6 border-t border-border/50">
                      <span className="text-xs text-foreground/40 uppercase tracking-[0.15em] font-body block mb-2">
                        Ergebnis
                      </span>
                      <p className="text-foreground/80 font-medium leading-relaxed">
                        {study.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
