import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
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
    <section id="kontakt" className="relative overflow-hidden bg-background-soft section-padding noise" ref={ref}>
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/20 blur-[120px] rounded-full" />
      
      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            variants={itemVariants}
            className="text-sm text-accent font-semibold uppercase tracking-[0.2em] mb-6 block"
          >
            Nächster Schritt
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-heading text-headline text-foreground mb-6"
          >
            Bereit zu wachsen?
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-foreground-muted mb-4"
          >
            Kein Pitch. Kein Druck.
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl text-foreground font-medium mb-12"
          >
            Nur Klarheit.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="accent" size="2xl" asChild className="glow-accent">
              <a href="mailto:kontakt@skalator.de" className="flex items-center gap-3">
                Gespräch vereinbaren
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <a
              href="mailto:kontakt@skalator.de"
              className="text-foreground-muted hover:text-accent transition-colors duration-300 text-lg"
            >
              kontakt@skalator.de
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
