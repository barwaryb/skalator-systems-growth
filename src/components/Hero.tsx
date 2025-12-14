import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="min-h-[100svh] relative overflow-hidden bg-background flex flex-col">
      {/* Animated gradient bg with parallax */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" 
      />

      {/* Floating shapes with parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]), opacity }}
        className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]), opacity }}
        className="absolute bottom-40 left-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl"
      />

      <motion.div 
        style={{ y, opacity, scale }}
        className="section-container relative z-10 flex-1 flex flex-col justify-center pt-24 md:pt-32 pb-12"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-accent tracking-wide uppercase">
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
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
            animate={{ opacity: 0.4 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-foreground/40"
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
            initial={{ backgroundSize: "0% 3px" }}
            animate={{ backgroundSize: "100% 3px" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-accent bg-gradient-to-r from-accent to-accent bg-no-repeat bg-bottom"
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
          Ich baue Strukturen, die Wachstum aushalten. Marketing. Recruiting. Prozesse.
        </motion.p>
        
        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Button variant="accent" size="lg" asChild>
            <a href="#kontakt" className="flex items-center gap-2">
              Zusammenarbeiten
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
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
              >
                <span className="block text-2xl md:text-3xl font-bold text-foreground mb-0.5">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-foreground-muted">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-foreground-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
