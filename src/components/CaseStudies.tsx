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
    result: "Mehr Fälle mit weniger Aufwand.",
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
    <section id="referenzen" className="relative overflow-hidden bg-background-soft section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <span className="text-sm text-accent font-semibold uppercase tracking-[0.2em] mb-4 block">
              Referenzen
            </span>
            <h2 className="font-heading text-headline text-foreground max-w-2xl">
              Konkrete Ergebnisse
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.industry}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="premium-card h-full transition-all duration-500 border border-transparent group-hover:border-accent/30">
                  {/* Industry header */}
                  <div className="mb-8 pb-6 border-b border-border">
                    <span className="text-xs text-foreground-muted uppercase tracking-[0.15em] block mb-2">
                      Branche
                    </span>
                    <p className="font-heading text-3xl text-foreground">
                      {study.industry}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <span className="text-xs text-foreground-muted uppercase tracking-[0.15em] block mb-2">
                        Ausgangslage
                      </span>
                      <p className="text-foreground-muted leading-relaxed">
                        {study.situation}
                      </p>
                    </div>
                    
                    <div>
                      <span className="text-xs text-foreground-muted uppercase tracking-[0.15em] block mb-2">
                        Umsetzung
                      </span>
                      <p className="text-foreground-muted leading-relaxed">
                        {study.implementation}
                      </p>
                    </div>
                    
                    <div className="pt-6 border-t border-border">
                      <span className="text-xs text-accent uppercase tracking-[0.15em] block mb-2 font-semibold">
                        Ergebnis
                      </span>
                      <p className="text-foreground font-medium leading-relaxed text-lg">
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
