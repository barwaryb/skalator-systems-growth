import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";

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
    <section id="kontakt" className="relative bg-gradient-to-b from-background to-background-soft section-padding overflow-hidden" ref={ref}>
      {/* Animated gradient lines */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent origin-center" 
      />

      {/* Parallax background glow */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        <motion.div
          style={{ scale }}
          className="max-w-3xl mx-auto"
        >
          {/* Premium Card Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="modern-card p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-6 px-4 py-2 bg-accent/10 rounded-full"
            >
              Nächster Schritt
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-headline font-bold text-foreground mb-6"
            >
              Wenn Sie es ernst meinen
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-accent"
              >
                mit Wachstum.
              </motion.span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 space-y-2"
            >
              <p className="text-body-lg text-foreground-muted">
                Nicht geeignet für Neugierige.
              </p>
              <p className="text-lg font-bold text-foreground">
                Geeignet für Entscheider.
              </p>
            </motion.div>
            
            {/* CTAs with staggered animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Button variant="accent" size="xl" asChild className="group shadow-glow">
                <a href="mailto:kontakt@skalator.de" className="flex items-center gap-2">
                  Gespräch anfragen
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline-accent" size="lg" asChild className="group">
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
              className="text-sm text-foreground-muted flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-4 h-4 text-accent" />
              Antwort innerhalb von 24 Stunden
            </motion.p>
          </motion.div>

          {/* Trust indicators with stagger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
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
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 min-w-[100px]"
                >
                  <span className="block text-2xl md:text-3xl font-bold text-foreground mb-1">
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