import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="kontakt" className="relative bg-background section-padding overflow-hidden" ref={ref}>
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Accent glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px]"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            variants={itemVariants}
            className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-8 block"
          >
            Nächster Schritt
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-display text-huge text-foreground mb-6"
          >
            Wenn Sie es ernst meinen
          </motion.h2>
          
          <motion.h2
            variants={itemVariants}
            className="font-display text-huge text-accent mb-12"
          >
            mit Wachstum.
          </motion.h2>
          
          <motion.div variants={itemVariants} className="space-y-2 mb-12">
            <p className="text-xl text-foreground-muted">
              Nicht geeignet für Neugierige.
            </p>
            <p className="text-2xl text-foreground font-semibold">
              Geeignet für Entscheider.
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button variant="accent" size="2xl" asChild>
              <a href="mailto:kontakt@skalator.de" className="flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                Gespräch anfragen
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hard" size="xl" asChild>
              <a href="mailto:kontakt@skalator.de" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                E-Mail schreiben
              </a>
            </Button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm text-foreground-muted"
          >
            Antwort innerhalb von 24h · Kein Pitch · Nur Klarheit
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-foreground/10"
          >
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { value: "24h", label: "Antwortzeit" },
                { value: "100%", label: "Fokus" },
                { value: "0€", label: "Erstgespräch" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <span className="block text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                    {item.value}
                  </span>
                  <span className="text-xs text-foreground-muted uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
