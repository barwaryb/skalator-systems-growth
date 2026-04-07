import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const words = [
  "Wir", "arbeiten", "selektiv", "—", "ausschließlich", "mit", "Unternehmen,",
  "die", "bereit", "sind,", "echte", "Strukturen", "aufzubauen.", "Unser",
  "Ziel", "ist", "nicht", "mehr", "Umsatz", "allein.", "Unser", "Ziel", "ist",
  "ein", "Unternehmen,", "das", "profitabler,", "stabiler", "und", "strukturell",
  "so", "aufgestellt", "ist,", "dass", "du", "jederzeit", "die", "Optionalität",
  "hast", "—", "ob", "du", "hältst,", "skalierst", "oder", "verkaufst.",
];

const LogoMarquee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-12 md:py-16 bg-background overflow-hidden border-y border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="overflow-hidden">
          <div className="text-scroll-track">
            {[...words, ...words].map((word, index) => (
              <span
                key={index}
                className="text-sm md:text-base text-white/30 whitespace-nowrap font-light tracking-wide"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LogoMarquee;
