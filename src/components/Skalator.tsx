import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import scalingVisual from "@/assets/scaling-visual.png";
import automationVisual from "@/assets/automation-visual.png";

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
      className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-background-soft/50 to-background"
    >
      {/* Background elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-accent/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-4"
          >
            Das Konzept
          </motion.span>
          <h2 className="text-display font-display font-bold text-foreground">
            Skalator{" "}
            <span className="text-accent inline-block animate-pulse-glow">
              =
            </span>{" "}
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
            className="modern-card p-8 md:p-10 group hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
          >
            {/* Visual */}
            <motion.div 
              className="relative mb-8 overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              <img 
                src={scalingVisual} 
                alt="Skalierung Visualisierung" 
                className="w-full h-48 object-cover"
              />
            </motion.div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-title font-display font-bold text-foreground">
                Skalierung
              </h3>
            </div>
            <p className="text-foreground-muted mb-6 text-sm font-medium">
              Was Skalierung wirklich bedeutet:
            </p>
            <ul className="space-y-4">
              {skalierungPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 group/item cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-accent to-accent/60 mt-2.5 group-hover/item:scale-150 transition-transform shadow-sm shadow-accent/50" />
                  <span className="text-foreground font-medium group-hover/item:text-accent transition-colors">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Automatisierung Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="modern-card p-8 md:p-10 group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
          >
            {/* Visual */}
            <motion.div 
              className="relative mb-8 overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <img 
                src={automationVisual} 
                alt="Automatisierung Visualisierung" 
                className="w-full h-48 object-cover"
              />
            </motion.div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-foreground/15 to-foreground/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-title font-display font-bold text-foreground">
                Automatisierung
              </h3>
            </div>
            <p className="text-foreground-muted mb-6 text-sm font-medium">
              Was Automatisierung wirklich bedeutet:
            </p>
            <ul className="space-y-4">
              {automatisierungPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: -8, transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 group/item cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-foreground to-foreground/60 mt-2.5 group-hover/item:scale-150 transition-transform" />
                  <span className="text-foreground font-medium group-hover/item:text-foreground-muted transition-colors">{point}</span>
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
          <div className="relative inline-block">
            {/* Glow behind text */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent blur-2xl scale-150" />
            <p className="relative text-headline font-display font-bold text-foreground mb-8 max-w-3xl mx-auto">
              Mit mir skalierst du wirklich deinen <span className="text-emerald-500 text-[1.15em] underline underline-offset-4 decoration-2">Umsatz</span> – und senkst automatisiert deine <span className="text-red-500 text-[1.15em] underline underline-offset-4 decoration-2">Kosten</span>.
            </p>
          </div>
          <Button variant="accent" size="xl" className="group" asChild>
            <a href="#kontakt">
              Jetzt starten
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skalator;