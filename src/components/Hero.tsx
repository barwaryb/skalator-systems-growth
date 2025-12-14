import { motion } from "framer-motion";
import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroVisual from "@/assets/hero-visual.png";

const Hero = memo(() => {
  return (
    <section className="min-h-[100svh] relative overflow-hidden bg-background flex flex-col" aria-label="Hero Bereich">
      {/* Static gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-background will-change-auto" />

      {/* Static gradient orbs - using CSS instead of JS */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-accent/10 to-accent/5 rounded-full blur-3xl will-change-auto" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl will-change-auto" />

      <div className="section-container relative z-10 flex-1 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pt-24 md:pt-32 pb-12">
        {/* Left Content */}
        <div className="flex-1">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 md:mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-xs md:text-sm font-semibold text-accent tracking-wide uppercase">
              <motion.span 
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-accent rounded-full" 
              />
              Growth Operator
            </span>
          </motion.div>

          {/* Headline with stagger */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-display font-bold text-foreground mb-4 md:mb-6 max-w-4xl"
          >
            Die meisten Unternehmen haben kein{" "}
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-serif italic text-foreground-muted"
            >
              Wachstumsproblem.
            </motion.span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-display font-bold mb-6 md:mb-8"
          >
            Sie haben ein{" "}
            <motion.span 
              initial={{ backgroundSize: "0% 4px" }}
              animate={{ backgroundSize: "100% 4px" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-serif italic text-foreground-muted"
            >
              Systemproblem.
            </motion.span>
          </motion.h2>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-body-lg text-foreground-muted max-w-xl mb-8 md:mb-10"
          >
            Ich baue Strukturen, die Wachstum aushalten. Neue Kunden. Bessere Mitarbeiter. Weniger Kosten.
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button variant="accent" size="lg" asChild className="group">
              <a href="#kontakt" className="flex items-center gap-2">
                Zusammenarbeiten
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline-accent" size="lg" asChild>
              <a href="#cases">Cases ansehen</a>
            </Button>
          </motion.div>

          {/* Stats with counter animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 md:mt-16 pt-8 border-t border-border/50"
          >
            <div className="flex flex-wrap gap-8 md:gap-12">
              {[
                { value: "5+", label: "Jahre Erfahrung" },
                { value: "20+", label: "Systeme gebaut" },
                { value: "100%", label: "Fokus auf Resultate" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="group"
                >
                  <span className="block text-2xl md:text-3xl font-bold text-foreground mb-0.5 group-hover:text-accent transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-foreground-muted">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block flex-1 max-w-xl xl:max-w-2xl"
        >
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-2xl scale-110" />
            <img 
              src={heroVisual} 
              alt="Wachstum und Skalierung Visualisierung - 3D Grafik mit aufsteigenden Balken" 
              className="relative w-full h-auto rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              width="600"
              height="400"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-foreground-muted uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-5 h-5 text-foreground-muted" />
        </div>
      </motion.div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;