import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Cog, ArrowRight } from "lucide-react";

const skalierungPoints = [
  "Mehr Umsatz mit denselben Kosten.",
  "Bessere Leads durch gezielte Maßnahmen.",
  "Kürzere Sales Cycles durch saubere Systeme.",
  "Mehr Abschlüsse ohne mehr Aufwand.",
];

const automatisierungPoints = [
  "30–40% weniger operative Kosten.",
  "50% mehr Produktivität pro Mitarbeiter.",
  "Weniger Fehler, weniger Nacharbeit.",
  "Mehr Output mit dem bestehenden Team.",
];

const Skalator = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-display font-display font-bold text-foreground">
            Skalator{" "}
            <motion.span
              animate={isInView ? { 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1],
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="text-accent inline-block"
            >
              =
            </motion.span>{" "}
            Skalierung + Automatisierung
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20">
          {/* Skalierung Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="modern-card p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-title font-display font-semibold text-foreground">
                Skalierung
              </h3>
            </div>
            <p className="text-foreground-muted mb-6 text-sm">
              Was Skalierung wirklich bedeutet:
            </p>
            <ul className="space-y-4">
              {skalierungPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 group cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 group-hover:scale-150 transition-transform" />
                  <span className="text-foreground font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Automatisierung Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="modern-card p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Cog className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-title font-display font-semibold text-foreground">
                Automatisierung
              </h3>
            </div>
            <p className="text-foreground-muted mb-6 text-sm">
              Was Automatisierung wirklich bedeutet:
            </p>
            <ul className="space-y-4">
              {automatisierungPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: -5 }}
                  className="flex items-start gap-3 group cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 group-hover:scale-150 transition-transform" />
                  <span className="text-foreground font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Punch Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-headline font-display font-bold text-foreground mb-8 max-w-3xl mx-auto">
            Mit mir skalierst du wirklich deinen Umsatz – und senkst automatisiert deine Kosten.
          </p>
          <Button variant="accent" size="xl" className="group">
            Jetzt starten
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skalator;
