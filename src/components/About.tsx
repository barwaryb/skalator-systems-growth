import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ueber" className="bg-background-pure section-padding" ref={ref}>
      <div className="section-container">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm text-foreground/40 uppercase tracking-widest mb-8 block font-body"
          >
            Über mich
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-headline text-foreground mb-8"
          >
            Botan Barwary
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-body-lg text-foreground/70"
          >
            <p>
              Ich bin kein Berater, der Strategien schreibt und dann geht.
            </p>
            <p>
              Ich baue Systeme. Und ich setze sie um.
            </p>
            <p>
              Meine Erfahrung: Marketing und Prozessautomatisierung in einem Immobilienunternehmen. 
              Recruiting-Systeme. Wachstumsstrukturen. End-to-End-Systeme für ein Inkasso-Unternehmen. 
              Ads, Websites und Lead-Systeme für Dubai-Immobilien.
            </p>
            <p>
              Was mich unterscheidet: Ich übernehme Verantwortung.
              Nicht für Präsentationen. Sondern für Ergebnisse.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
