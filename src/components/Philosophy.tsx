import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const statements = [
  "Skalierung deckt Schwächen auf.",
  "Struktur schlägt Motivation.",
  "Was nicht skaliert, ist kein System.",
];

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section className="relative bg-foreground text-background overflow-hidden" ref={ref}>
      {/* Parallax accent line */}
      <motion.div 
        style={{ scaleX: useTransform(scrollYProgress, [0, 0.3], [0, 1]) }}
        className="absolute top-0 left-0 right-0 h-1 bg-accent origin-left" 
      />

      {/* Floating background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
      />

      <div className="section-container section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-8 md:mb-10 block"
          >
            Manifest
          </motion.span>

          <motion.div style={{ y: textY }} className="space-y-4 md:space-y-6 mb-10 md:mb-12">
            {statements.map((statement, index) => (
              <StatementItem key={index} statement={statement} index={index} isInView={isInView} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-background/30 text-background hover:bg-background hover:text-foreground rounded-full"
            >
              <a href="#kontakt" className="flex items-center gap-2">
                Bereit für Systeme?
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const StatementItem = ({ statement, index, isInView }: { statement: string; index: number; isInView: boolean }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [4, 0]);

  return (
    <motion.h2
      ref={ref}
      style={{ opacity, scale, filter: useTransform(blur, (v) => `blur(${v}px)`) }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      whileHover={{ scale: 1.02, color: "hsl(var(--accent))" }}
      className="text-headline font-bold text-background/90 cursor-default transition-colors duration-300"
    >
      {statement}
    </motion.h2>
  );
};

export default Philosophy;
