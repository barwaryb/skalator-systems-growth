import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-background section-padding" ref={ref}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center py-12 md:py-20">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-heading text-headline md:text-display text-foreground"
          >
            Skalierung entsteht nicht durch mehr Arbeit.
            <br />
            <span className="text-foreground/50">Sondern durch bessere Systeme.</span>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
