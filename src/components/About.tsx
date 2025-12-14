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
    <section id="ueber" className="relative overflow-hidden bg-background section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left - Visual element */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 via-background-card to-accent/5 p-1">
              <div className="w-full h-full rounded-3xl bg-background-card flex items-center justify-center relative overflow-hidden">
                {/* Abstract visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-48 h-48 rounded-full bg-accent/20 blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
                <span className="font-heading text-[12rem] font-bold text-foreground/5 select-none">
                  BB
                </span>
              </div>
            </div>
            
            {/* Floating accent */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.span
              variants={itemVariants}
              className="text-sm text-accent font-semibold uppercase tracking-[0.2em] mb-6 block"
            >
              Über mich
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="font-heading text-title text-foreground mb-6"
            >
              Botan Barwary
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground-muted mb-8"
            >
              Growth Operator · Systemarchitekt · Sparringspartner
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="space-y-6 text-foreground-muted leading-relaxed"
            >
              <motion.p variants={itemVariants}>
                Ich bin kein Berater, der Strategien schreibt und dann geht.
              </motion.p>
              <motion.p variants={itemVariants} className="text-foreground text-xl font-medium">
                Ich baue Systeme. Und ich setze sie um.
              </motion.p>
              <motion.p variants={itemVariants}>
                Immobilienunternehmen. Inkasso. Dubai-Immobilien. 
                Überall dasselbe Prinzip: Klare Strukturen schaffen, die ohne mich funktionieren.
              </motion.p>
              <motion.p variants={itemVariants}>
                Was mich unterscheidet?{" "}
                <span className="text-accent font-medium">Verantwortung für Ergebnisse.</span>{" "}
                Nicht für Präsentationen.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
