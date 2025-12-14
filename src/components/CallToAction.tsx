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
    <section id="kontakt" className="relative overflow-hidden bg-background section-padding" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            variants={itemVariants}
            className="text-sm text-accent font-semibold uppercase tracking-[0.2em] mb-6 block"
          >
            Kontakt
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-heading text-headline text-foreground mb-8"
          >
            Wenn Sie wachsen wollen,
            <br />
            <span className="text-foreground/40">lassen Sie uns sprechen.</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="text-xl text-foreground-muted mb-12 space-y-1"
          >
            <p>Kein Pitch.</p>
            <p>Kein Druck.</p>
            <p>Nur Klarheit.</p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="accent" size="premium-lg" asChild>
              <a href="mailto:kontakt@skalator.de" className="flex items-center gap-3">
                Gespräch vereinbaren
                <span className="text-xl">→</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <p className="text-sm text-foreground-muted mb-2">Oder schreiben Sie direkt an</p>
            <a
              href="mailto:kontakt@skalator.de"
              className="text-lg text-foreground hover:text-accent transition-colors duration-300 font-medium"
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
