import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const statements = [
  { text: "Skalierung deckt", highlight: "Schwächen", suffix: "auf." },
  { text: "Struktur schlägt", highlight: "Motivation.", suffix: "" },
  { text: "Was nicht skaliert, ist kein", highlight: "System.", suffix: "" },
];

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative bg-background overflow-hidden section-padding" ref={ref}>
      {/* Accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-center"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-12 md:mb-16 block"
          >
            Manifest
          </motion.span>

          <div className="space-y-4 md:space-y-6 mb-16 md:mb-20">
            {statements.map((statement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
              >
                <h2 className="text-3xl md:text-5xl lg:text-[4.5rem] font-light text-white leading-[1.1] tracking-tight">
                  {statement.text}{" "}
                  <em className="font-serif not-italic text-white/30">
                    {statement.highlight}
                  </em>
                  {statement.suffix && ` ${statement.suffix}`}
                </h2>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 bg-white text-black rounded-full px-8 py-4 font-medium text-sm hover:bg-white/90 transition-all group"
            >
              Bereit für Systeme?
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
