import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-secondary to-transparent opacity-30 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-accent to-transparent opacity-30 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />

      <div className="section-container relative z-10">
        <div className="py-32 md:py-48">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <span className="text-xs text-foreground/40 uppercase tracking-[0.2em] mb-8 block font-body">
                Philosophie
              </span>
              
              <blockquote className="font-heading text-[clamp(1.75rem,5vw,4rem)] text-foreground leading-[1.15] tracking-tight">
                Skalierung entsteht nicht
                <br />
                durch mehr Arbeit.
              </blockquote>
              
              <p className="font-heading text-[clamp(1.75rem,5vw,4rem)] text-foreground/35 leading-[1.15] tracking-tight mt-2">
                Sondern durch bessere Systeme.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
