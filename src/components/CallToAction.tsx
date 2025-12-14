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
    <section id="kontakt" className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-background-pure" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/30 to-transparent opacity-50" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-foreground/5 to-transparent" />

      <div className="section-container section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs text-foreground/40 uppercase tracking-[0.2em] mb-6 block font-body"
          >
            Kontakt
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-heading text-[clamp(2rem,4vw,3.5rem)] text-foreground mb-8 leading-[1.1]"
          >
            Wenn Sie wachsen wollen,
            <br />
            <span className="text-foreground/40">lassen Sie uns sprechen.</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="text-xl text-foreground/50 mb-12 space-y-1 font-light"
          >
            <p>Kein Sales-Gespräch.</p>
            <p>Keine Verpflichtung.</p>
            <p>Nur Klarheit.</p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 items-start"
          >
            <Button variant="premium" size="premium-lg" asChild className="group">
              <a href="mailto:kontakt@skalator.de" className="flex items-center gap-3">
                Gespräch vereinbaren
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-border/50"
          >
            <p className="text-sm text-foreground/40 mb-2">Oder schreiben Sie direkt an</p>
            <a
              href="mailto:kontakt@skalator.de"
              className="text-lg text-foreground hover:text-foreground/70 transition-colors duration-300 underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/40"
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
