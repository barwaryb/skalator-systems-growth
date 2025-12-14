import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    id: "CASE-001",
    branche: "Immobilien",
    ausgangslage: "Unregelmäßige Anfragen. Kein Vertriebssystem. Umsatz hing am Zufall.",
    eingriff: "Lead-System. Automatisierte Qualifizierung. CRM-Struktur.",
    ergebnis: "Planbare Anfragen. Jede Woche. Ohne Abhängigkeit von Empfehlungen.",
  },
  {
    id: "CASE-002",
    branche: "Inkasso",
    ausgangslage: "Manuelle Abläufe. Unklare Zuständigkeiten. Fälle gingen verloren.",
    eingriff: "Prozessautomatisierung. Workflow-Design. Reporting.",
    ergebnis: "40% mehr Fälle mit derselben Teamgröße.",
  },
  {
    id: "CASE-003",
    branche: "Dubai Real Estate",
    ausgangslage: "Null digitale Präsenz. Null Lead-Generierung.",
    eingriff: "Website. Ads. Funnel. Vollständiges System.",
    ergebnis: "Kontinuierlicher Strom internationaler Anfragen.",
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cases" className="relative bg-background section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4 block">
            Akten
          </span>
          <h2 className="font-display text-large text-foreground">
            Case Files.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="border-2 border-foreground/20 hover:border-foreground transition-colors duration-300"
            >
              <div className="p-6 md:p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-foreground/10">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-foreground-muted">{item.id}</span>
                    <span className="w-2 h-2 bg-accent" />
                    <span className="font-display text-2xl md:text-3xl text-foreground uppercase">
                      {item.branche}
                    </span>
                  </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <span className="text-xs font-bold text-foreground-muted uppercase tracking-wider block mb-3">
                      Ausgangslage
                    </span>
                    <p className="text-foreground leading-relaxed">
                      {item.ausgangslage}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground-muted uppercase tracking-wider block mb-3">
                      Eingriff
                    </span>
                    <p className="text-foreground leading-relaxed">
                      {item.eingriff}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-3">
                      Ergebnis
                    </span>
                    <p className="text-foreground font-semibold leading-relaxed">
                      {item.ergebnis}
                    </p>
                  </div>
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
