import { motion, useInView } from "framer-motion";
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

  return (
    <section id="referenzen" className="bg-background-pure section-padding" ref={ref}>
      <div className="section-container">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm text-foreground/40 uppercase tracking-widest mb-8 block font-body"
        >
          Referenzen
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-headline text-foreground mb-16 max-w-xl"
        >
          Konkrete Ergebnisse
        </motion.h2>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.industry}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="border-t border-border pt-8"
            >
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <span className="text-sm text-foreground/40 uppercase tracking-widest font-body">
                    Branche
                  </span>
                  <p className="font-heading text-lg text-foreground mt-2">
                    {study.industry}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-foreground/40 uppercase tracking-widest font-body">
                    Ausgangslage
                  </span>
                  <p className="text-foreground/70 mt-2 leading-relaxed">
                    {study.situation}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-foreground/40 uppercase tracking-widest font-body">
                    Umsetzung
                  </span>
                  <p className="text-foreground/70 mt-2 leading-relaxed">
                    {study.implementation}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-foreground/40 uppercase tracking-widest font-body">
                    Ergebnis
                  </span>
                  <p className="text-foreground/70 mt-2 leading-relaxed">
                    {study.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
