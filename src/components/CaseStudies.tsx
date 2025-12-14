import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    number: "01",
    industry: "Immobilien",
    result: "Planbare Anfragen",
    description: "Von unregelmäßigen Leads zu einem System, das täglich qualifizierte Anfragen liefert.",
  },
  {
    number: "02",
    industry: "Inkasso",
    result: "+40% Effizienz",
    description: "Automatisierte Workflows. Klare Zuständigkeiten. Mehr Fälle, weniger Aufwand.",
  },
  {
    number: "03",
    industry: "Dubai Real Estate",
    result: "Kontinuierliche Leads",
    description: "Vom Null-Präsenz zum funktionierenden Lead-Funnel in 8 Wochen.",
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
    <section id="referenzen" className="relative overflow-hidden bg-background-soft section-padding noise" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-16 md:mb-24">
            <span className="text-sm text-accent font-semibold uppercase tracking-[0.2em] mb-4 block">
              Resultate
            </span>
            <h2 className="font-heading text-headline text-foreground">
              Konkret.
              <span className="text-foreground/30"> Messbar.</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {caseStudies.map((study) => (
              <motion.div
                key={study.number}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group"
              >
                <div className="gradient-border p-8 md:p-10 transition-all duration-500 cursor-pointer">
                  <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
                    {/* Number */}
                    <div className="md:col-span-1">
                      <span className="text-sm text-foreground-muted font-mono">
                        {study.number}
                      </span>
                    </div>
                    
                    {/* Industry */}
                    <div className="md:col-span-3">
                      <h3 className="font-heading text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors duration-300">
                        {study.industry}
                      </h3>
                    </div>
                    
                    {/* Result */}
                    <div className="md:col-span-3">
                      <span className="text-xl text-accent font-semibold">
                        {study.result}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <div className="md:col-span-4">
                      <p className="text-foreground-muted leading-relaxed">
                        {study.description}
                      </p>
                    </div>
                    
                    {/* Arrow */}
                    <div className="md:col-span-1 flex justify-end">
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-foreground-muted group-hover:text-accent-foreground transition-colors" />
                      </div>
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
