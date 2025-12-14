import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="kontakt" className="bg-background section-padding" ref={ref}>
      {/* Gradient top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-6 block">
            Nächster Schritt
          </span>

          <h2 className="text-headline font-bold text-foreground mb-4">
            Wenn Sie es ernst meinen
            <br />
            <span className="text-accent">mit Wachstum.</span>
          </h2>
          
          <p className="text-body-lg text-foreground-muted mb-3">
            Nicht geeignet für Neugierige.
          </p>
          <p className="text-lg font-semibold text-foreground mb-8">
            Geeignet für Entscheider.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
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
          </div>

          <p className="text-sm text-foreground-muted">
            Antwort innerhalb von 24 Stunden
          </p>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-border/50"
          >
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { value: "24h", label: "Antwortzeit" },
                { value: "0€", label: "Erstgespräch" },
                { value: "100%", label: "Vertraulich" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <span className="block text-xl md:text-2xl font-bold text-foreground mb-0.5">
                    {item.value}
                  </span>
                  <span className="text-xs text-foreground-muted uppercase tracking-wide">
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
