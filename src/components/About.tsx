import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-image.jpg";

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
    <section id="ueber" className="relative overflow-hidden bg-background section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Botan Barwary"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 rounded-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              variants={itemVariants}
              className="text-sm text-accent font-semibold uppercase tracking-[0.2em] mb-6 block"
            >
              Über mich
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="font-heading text-headline text-foreground mb-6"
            >
              Botan Barwary
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-foreground-muted mb-8"
            >
              Growth Operator · Systemarchitekt · Sparringspartner
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="space-y-6 text-lg text-foreground-muted leading-relaxed"
            >
              <motion.p variants={itemVariants}>
                Ich bin kein Berater, der Strategien schreibt und dann geht.
              </motion.p>
              <motion.p variants={itemVariants} className="text-foreground font-medium">
                Ich baue Systeme. Und ich setze sie um.
              </motion.p>
              <motion.p variants={itemVariants}>
                Meine Erfahrung: Marketing und Prozessautomatisierung in einem Immobilienunternehmen. 
                Recruiting-Systeme. End-to-End-Systeme für ein Inkasso-Unternehmen. 
                Ads, Websites und Lead-Systeme für Dubai-Immobilien.
              </motion.p>
              <motion.p variants={itemVariants}>
                Was mich unterscheidet: Ich übernehme Verantwortung.
                Nicht für Präsentationen. Sondern für Ergebnisse.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
