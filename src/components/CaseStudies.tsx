import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="cases" className="relative bg-background section-padding overflow-hidden" ref={containerRef}>
      {/* Parallax background shapes */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-0 left-1/4 w-72 h-72 bg-accent/3 rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-3 block"
            >
              Case Files
            </motion.span>
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

        {/* Cases with staggered scroll reveal */}
        <div className="space-y-3 md:space-y-4">
          {cases.map((item, index) => (
            <CaseItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
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

const CaseItem = ({ item, index }: { item: typeof cases[0]; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      whileHover={{ x: 8, transition: { duration: 0.2 } }}
      className="group modern-card p-5 md:p-6 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        {/* ID & Industry */}
        <div className="flex items-center gap-3 md:w-40">
          <span className="text-xs font-mono text-foreground-muted">
            {item.id}
          </span>
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
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

        {/* Arrow with rotation on hover */}
        <motion.div 
          whileHover={{ rotate: 45 }}
          className="hidden md:flex w-10 h-10 rounded-full border border-border items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all duration-300"
        >
          <ArrowUpRight className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudies;
