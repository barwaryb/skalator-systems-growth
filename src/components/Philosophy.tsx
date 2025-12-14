import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      {/* Accent gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-accent/10" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="section-container relative z-10">
        <div className="py-32 md:py-48">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-accent font-semibold uppercase tracking-[0.2em] mb-8 block"
            >
              Philosophie
            </motion.span>
            
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-heading text-headline md:text-display text-foreground leading-[1.1]"
            >
              Skalierung entsteht nicht
              <br />
              durch mehr Arbeit.
            </motion.blockquote>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-heading text-headline md:text-display text-foreground/30 leading-[1.1] mt-2"
            >
              Sondern durch bessere{" "}
              <span className="relative inline-block text-foreground">
                Systeme
                <span className="absolute bottom-[0.05em] left-0 right-0 h-[0.1em] bg-accent -z-10" />
              </span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
