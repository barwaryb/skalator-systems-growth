import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section id="kontakt" className="relative bg-background section-padding overflow-hidden" ref={ref}>
      {/* Animated gradient line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent origin-center" 
      />

      {/* Parallax background glow */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        <motion.div
          style={{ scale }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-6 block"
          >
            Nächster Schritt
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-headline font-bold text-foreground mb-4"
          >
            Wenn Sie es ernst meinen
            <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-accent"
            >
              mit Wachstum.
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-foreground-muted mb-3"
          >
            Nicht geeignet für Neugierige.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg font-semibold text-foreground mb-8"
          >
            Geeignet für Entscheider.
          </motion.p>
          
          {/* CTAs with staggered animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
          >
            <Button variant="accent" size="xl" asChild>
              <a href="mailto:kontakt@skalator.de" className="flex items-center gap-2">
                Gespräch anfragen
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button variant="outline-accent" size="lg" asChild>
              <a href="mailto:kontakt@skalator.de" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                E-Mail schreiben
              </a>
            </Button>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-foreground-muted"
          >
            Antwort innerhalb von 24 Stunden
          </motion.p>

          {/* Trust indicators with stagger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-border/50"
          >
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { value: "24h", label: "Antwortzeit" },
                { value: "0€", label: "Erstgespräch" },
                { value: "100%", label: "Vertraulich" },
              ].map((item, index) => (
                <motion.div 
                  key={item.label} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <span className="block text-xl md:text-2xl font-bold text-foreground mb-0.5">
                    {item.value}
                  </span>
                  <span className="text-xs text-foreground-muted uppercase tracking-wide">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
