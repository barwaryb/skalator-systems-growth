import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    id: "01",
    industry: "Immobilien",
    problem: "Unregelmäßige Anfragen. Kein System.",
    solution: "Lead-Funnel mit automatisierter Qualifizierung.",
    result: "Planbare Anfragen. Jeden Tag.",
  },
  {
    id: "02",
    industry: "Inkasso",
    problem: "Manuelle Prozesse. Hohe Fehlerquote.",
    solution: "End-to-End Workflow-Automatisierung.",
    result: "+40% Effizienz. Gleiches Team.",
  },
  {
    id: "03",
    industry: "Dubai Real Estate",
    problem: "Keine Präsenz. Null Leads.",
    solution: "Kompletter Aufbau: Ads, Website, Funnel.",
    result: "Kontinuierlicher Lead-Strom.",
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="cases" className="bg-background section-padding" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14"
        >
          <div>
            <span className="text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-3 block">
              Case Files
            </span>
            <h2 className="text-headline font-bold text-foreground">
              Resultate. Keine Stories.
            </h2>
          </div>
          <Button variant="outline-accent" size="default" asChild className="w-fit">
            <a href="#kontakt" className="flex items-center gap-2">
              Ähnliche Resultate
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        {/* Cases */}
        <div className="space-y-3 md:space-y-4">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 4 }}
              className="group modern-card p-5 md:p-6 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                {/* ID & Industry */}
                <div className="flex items-center gap-3 md:w-40">
                  <span className="text-xs font-mono text-foreground-muted">
                    {item.id}
                  </span>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {item.industry}
                  </h3>
                </div>

                {/* Details */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 text-sm">
                  <div>
                    <span className="text-xs text-foreground-muted uppercase tracking-wide block mb-1">Problem</span>
                    <p className="text-foreground">{item.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs text-foreground-muted uppercase tracking-wide block mb-1">Lösung</span>
                    <p className="text-foreground">{item.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs text-accent uppercase tracking-wide block mb-1">Ergebnis</span>
                    <p className="text-foreground font-semibold">{item.result}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex w-10 h-10 rounded-full border border-border items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 md:mt-14 text-center"
        >
          <p className="text-foreground-muted mb-4">Ihr Unternehmen könnte der nächste Case sein.</p>
          <Button variant="accent" size="lg" asChild>
            <a href="#kontakt" className="flex items-center gap-2">
              Jetzt starten
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
