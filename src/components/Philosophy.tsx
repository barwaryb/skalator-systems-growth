import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const statements = [
  {
    text: "Skalierung deckt",
    highlight: "Schwächen",
    suffix: "auf.",
    color: "from-red-400 via-rose-500 to-red-400",
  },
  {
    text: "Struktur schlägt",
    highlight: "Motivation.",
    suffix: "",
    color: "from-cyan-400 via-blue-500 to-cyan-400",
  },
  {
    text: "Was nicht skaliert, ist kein",
    highlight: "System.",
    suffix: "",
    color: "from-emerald-400 via-green-500 to-emerald-400",
  },
];

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden section-padding" ref={ref}>
      {/* Elegant dark background with subtle gradients */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-full blur-3xl" 
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-violet-500/8 to-transparent rounded-full blur-3xl" 
        />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Animated accent line at top */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent origin-center" 
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-accent tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Manifest
            </span>
          </motion.div>

          {/* Statements */}
          <div className="space-y-6 md:space-y-8 mb-14 md:mb-16">
            {statements.map((statement, index) => (
              <StatementItem key={index} statement={statement} index={index} isInView={isInView} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button 
              variant="accent" 
              size="xl" 
              asChild 
              className="group"
            >
              <a href="#kontakt" className="flex items-center gap-2">
                Bereit für Systeme?
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const StatementItem = ({ 
  statement, 
  index, 
  isInView 
}: { 
  statement: typeof statements[0]; 
  index: number; 
  isInView: boolean;
}) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className="group cursor-default"
    >
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
        {statement.text}{" "}
        <span className="relative inline-block">
          {/* Glow effect behind the highlight */}
          <span className={`absolute -inset-2 bg-gradient-to-r ${statement.color} rounded-lg blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
          
          {/* The highlighted word */}
          <span className="relative font-serif italic text-white/50 group-hover:text-white transition-colors duration-300">
            {statement.highlight}
          </span>
          
          {/* Animated underline */}
          <motion.span 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
            className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${statement.color} origin-left`}
          />
        </span>
        {statement.suffix && ` ${statement.suffix}`}
      </h2>
    </motion.div>
  );
};

export default Philosophy;
