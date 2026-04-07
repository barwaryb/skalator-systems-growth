import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cases = [
  {
    id: "01",
    slug: "immobilien-leadgenerierung",
    industry: "Immobilien",
    problem: "Unregelmäßige Anfragen. Kein System.",
    solution: "Lead-Funnel mit automatisierter Qualifizierung.",
    result: "Planbare Anfragen. Jeden Tag.",
    metric: "CPL -60%",
  },
  {
    id: "02",
    slug: "inkasso-automatisierung",
    industry: "Inkasso",
    problem: "Manuelle Prozesse. Hohe Fehlerquote.",
    solution: "End-to-End Workflow-Automatisierung.",
    result: "+40% Effizienz. Gleiches Team.",
    metric: "+40% Effizienz",
  },
  {
    id: "03",
    slug: "dubai-real-estate",
    industry: "Dubai Real Estate",
    problem: "Keine Präsenz. Null Leads.",
    solution: "Kompletter Aufbau: Ads, Website, Funnel.",
    result: "Kontinuierlicher Lead-Strom.",
    metric: "6 Wochen Live",
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="cases" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="section-label mb-4 block">Case Studies</span>
          <h2 className="text-headline text-white">
            Resultate.{" "}
            <em className="font-serif not-italic text-white/40">Keine Stories.</em>
          </h2>
          <p className="text-body-lg text-white/40 mt-4 max-w-2xl">
            Echte Unternehmen. Echte Probleme. Echte Lösungen.
          </p>
        </motion.div>

        {/* Cases */}
        <div className="space-y-3 mb-16">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Link to={`/cases/${item.slug}`}>
                <div className="group rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden">
                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                    {/* Number + Industry */}
                    <div className="flex items-center gap-4 md:w-48 shrink-0">
                      <span className="text-xs font-mono text-white/20">{item.id}</span>
                      <h3 className="text-lg font-medium text-white group-hover:text-white/80 transition-colors">
                        {item.industry}
                      </h3>
                    </div>

                    {/* Metric badge */}
                    <div className="shrink-0">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60">
                        {item.metric}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                      <div>
                        <span className="text-[10px] text-white/30 uppercase tracking-widest block mb-1">Problem</span>
                        <p className="text-white/50">{item.problem}</p>
                      </div>
                      <div>
                        <span className="text-[10px] text-white/30 uppercase tracking-widest block mb-1">Lösung</span>
                        <p className="text-white/50">{item.solution}</p>
                      </div>
                      <div>
                        <span className="text-[10px] text-white/30 uppercase tracking-widest block mb-1">Ergebnis</span>
                        <p className="text-white/70 font-medium">{item.result}</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex w-10 h-10 rounded-full border border-white/10 items-center justify-center shrink-0 group-hover:bg-white group-hover:border-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-black transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-10 md:p-14 text-center"
        >
          <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Ihr Unternehmen könnte der nächste Case sein.</p>
          <p className="text-2xl md:text-3xl font-light text-white tracking-tight mb-8">
            Bereit für echte <em className="font-serif not-italic text-white/40">Resultate?</em>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-white text-black rounded-full px-8 py-4 font-medium text-sm hover:bg-white/90 transition-all group">
              Jetzt starten <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#kontakt" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white rounded-full px-8 py-4 text-sm hover:bg-white/5 transition-all">
              Ähnliche Resultate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
