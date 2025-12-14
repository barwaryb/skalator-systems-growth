import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontakt" className="bg-background-pure section-padding" ref={ref}>
      <div className="section-container">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-headline text-foreground mb-6"
          >
            Wenn Sie wachsen wollen, lassen Sie uns sprechen.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body-lg text-foreground/60 mb-10 space-y-1"
          >
            <p>Kein Sales-Gespräch.</p>
            <p>Keine Verpflichtung.</p>
            <p>Nur Klarheit.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button variant="premium" size="premium" asChild>
              <a href="mailto:kontakt@skalator.de">Gespräch vereinbaren</a>
            </Button>
            <span className="text-foreground/40 self-center hidden sm:block">oder</span>
            <a
              href="mailto:kontakt@skalator.de"
              className="text-foreground/60 hover:text-foreground transition-colors underline underline-offset-4"
            >
              kontakt@skalator.de
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
