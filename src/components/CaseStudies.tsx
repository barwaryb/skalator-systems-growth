import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import casesVisual from "@/assets/cases-visual.png";

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
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="cases" className="relative bg-background section-padding overflow-hidden" ref={containerRef}>
      {/* Parallax background shapes */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-tl from-accent/3 to-transparent rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        {/* Header with Visual */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-3 px-3 py-1 bg-accent/10 rounded-full"
            >
              Case Files
            </motion.span>
            <h2 className="text-headline font-bold text-foreground mb-4">
              Resultate. <span className="font-serif italic text-foreground/50">Keine Stories.</span>
            </h2>
            <p className="text-foreground-muted max-w-lg">
              Echte Unternehmen. Echte Probleme. Echte Lösungen.
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block w-64 h-48 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl blur-xl" />
            <img 
              src={casesVisual} 
              alt="Case Studies" 
              className="relative w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Cases with staggered scroll reveal */}
        <div className="space-y-4 md:space-y-5 mb-12 md:mb-16">
          {cases.map((item, index) => (
            <CaseItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="modern-card p-8 md:p-12 bg-gradient-to-br from-background to-background-soft">
            <p className="text-foreground-muted mb-2 text-sm uppercase tracking-wide">Ihr Unternehmen könnte der nächste Case sein.</p>
            <p className="text-title font-bold text-foreground mb-6">
              Bereit für echte Resultate?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" asChild className="group">
                <a href="#kontakt" className="flex items-center gap-2">
                  Jetzt starten
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline-accent" size="lg" asChild>
                <a href="#kontakt" className="flex items-center gap-2">
                  Ähnliche Resultate
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
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
      className="group modern-card p-6 md:p-8 cursor-pointer hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        {/* ID & Industry */}
        <div className="flex items-center gap-4 md:w-44">
          <span className="text-xs font-mono text-foreground-muted bg-background-soft px-2 py-1 rounded">
            {item.id}
          </span>
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {item.industry}
          </h3>
        </div>

        {/* Details */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm">
          <div className="p-3 rounded-lg bg-background-soft/50">
            <span className="text-xs text-foreground-muted uppercase tracking-wide block mb-1">Problem</span>
            <p className="text-foreground">{item.problem}</p>
          </div>
          <div className="p-3 rounded-lg bg-background-soft/50">
            <span className="text-xs text-foreground-muted uppercase tracking-wide block mb-1">Lösung</span>
            <p className="text-foreground">{item.solution}</p>
          </div>
          <div className="p-3 rounded-lg bg-accent/5">
            <span className="text-xs text-accent uppercase tracking-wide block mb-1">Ergebnis</span>
            <p className="text-foreground font-semibold">{item.result}</p>
          </div>
        </div>

        {/* Arrow with rotation on hover */}
        <motion.div 
          whileHover={{ rotate: 45, scale: 1.1 }}
          className="hidden md:flex w-12 h-12 rounded-full border-2 border-border items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all duration-300"
        >
          <ArrowUpRight className="w-5 h-5" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudies;