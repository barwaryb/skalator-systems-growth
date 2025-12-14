import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontakt" className="relative bg-background section-padding" ref={ref}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-8 block">
              Nächster Schritt
            </span>

            <h2 className="font-display text-large text-foreground mb-8">
              Wenn Sie es ernst meinen
              <br />
              <span className="text-accent">mit Wachstum.</span>
            </h2>
            
            <p className="text-xl text-foreground-muted mb-4 font-medium">
              Nicht geeignet für Neugierige.
            </p>
            
            <p className="text-2xl text-foreground font-bold mb-12">
              Geeignet für Entscheider.
            </p>
            
            <Button variant="accent" size="2xl" asChild>
              <a href="mailto:kontakt@skalator.de">
                Gespräch anfragen
              </a>
            </Button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12"
            >
              <a
                href="mailto:kontakt@skalator.de"
                className="text-foreground-muted hover:text-accent transition-colors duration-300"
              >
                kontakt@skalator.de
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-foreground" />
    </section>
  );
};

export default CallToAction;
