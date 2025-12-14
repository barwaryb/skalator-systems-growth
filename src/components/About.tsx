import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="ueber" className="relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-background-pure" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Decorative element */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />

      <div className="section-container section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Left column */}
          <div>
            <motion.span
              variants={itemVariants}
              className="text-xs text-foreground/40 uppercase tracking-[0.2em] mb-6 block font-body"
            >
              Über mich
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="font-heading text-[clamp(2rem,4vw,3.5rem)] text-foreground mb-4 leading-[1.1]"
            >
              Botan Barwary
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/50 font-light"
            >
              Growth Operator · Systemarchitekt · Sparringspartner
            </motion.p>
          </div>

          {/* Right column */}
          <motion.div
            variants={containerVariants}
            className="space-y-6 text-lg text-foreground/60 leading-relaxed"
          >
            <motion.p variants={itemVariants}>
              Ich bin kein Berater, der Strategien schreibt und dann geht.
            </motion.p>
            <motion.p variants={itemVariants} className="text-foreground/80 font-medium">
              Ich baue Systeme. Und ich setze sie um.
            </motion.p>
            <motion.p variants={itemVariants}>
              Meine Erfahrung: Marketing und Prozessautomatisierung in einem Immobilienunternehmen. 
              Recruiting-Systeme. Wachstumsstrukturen. End-to-End-Systeme für ein Inkasso-Unternehmen. 
              Ads, Websites und Lead-Systeme für Dubai-Immobilien.
            </motion.p>
            <motion.p variants={itemVariants}>
              Was mich unterscheidet: Ich übernehme Verantwortung.
              <br />
              Nicht für Präsentationen. Sondern für Ergebnisse.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
