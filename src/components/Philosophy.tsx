import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const statements = [
  "Skalierung deckt Schwächen auf.",
  "Struktur schlägt Motivation.",
  "Was nicht skaliert, ist kein System.",
];

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-foreground text-primary-foreground overflow-hidden" ref={ref}>
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      <div className="section-container section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-accent uppercase tracking-[0.2em]">
            Überzeugungen
          </span>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="text-center"
            >
              <h3 className="font-display text-huge text-primary-foreground">
                {statement}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Decorative accent */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-4 h-4 bg-accent mx-auto mt-16"
        />
      </div>
    </section>
  );
};

export default Philosophy;
