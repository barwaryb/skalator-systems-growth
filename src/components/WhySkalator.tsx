import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Target, Zap, User, ArrowLeft, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: User,
    title: "Solo-Operator",
    description: "Kein Team, keine Overhead-Kosten. Direkte Kommunikation, schnelle Entscheidungen.",
  },
  {
    icon: Target,
    title: "Ergebnisorientiert",
    description: "Keine Folien und Konzepte, sondern funktionierende Systeme, die Resultate liefern.",
  },
  {
    icon: Zap,
    title: "1:1-Fokus",
    description: "Keine Massenprogramme, sondern individuelle Strategien und direkte Begleitung.",
  },
  {
    icon: Users,
    title: "Praxis statt Theorie",
    description: "Alles, was ich empfehle, habe ich selbst gebaut und getestet.",
  },
];

const WhySkalator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    const newScrollLeft = direction === "left" 
      ? scrollRef.current.scrollLeft - scrollAmount 
      : scrollRef.current.scrollLeft + scrollAmount;
    
    scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            Für deinen Erfolg
          </motion.span>
          <h2 className="text-display font-bold text-foreground">
            Warum <span className="font-serif italic text-foreground-muted">Skalator?</span>
          </h2>
        </motion.div>

        {/* Cards Carousel */}
        <div className="relative">
          <motion.div 
            ref={scrollRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reasons.map((reason, index) => (
              <ReasonCard key={reason.title} reason={reason} index={index} isInView={isInView} />
            ))}
          </motion.div>

          {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-between mt-8"
          >
            {/* Progress bar */}
            <div className="flex-1 max-w-md h-0.5 bg-border rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-foreground rounded-full"
                initial={{ width: "25%" }}
                style={{ width: `${((currentIndex + 1) / reasons.length) * 100}%` }}
              />
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-2 ml-8">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-foreground-muted hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-foreground-muted hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ReasonCard = ({ 
  reason, 
  index, 
  isInView 
}: { 
  reason: typeof reasons[0]; 
  index: number; 
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="flex-shrink-0 w-[300px] md:w-[340px] snap-start"
    >
      <div className="group relative h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 hover:border-accent/30 transition-all duration-500">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
        </div>

        {/* Large background number */}
        <div className="absolute -bottom-10 -right-4 text-[10rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none font-display">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {reason.title}
            </h3>
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <reason.icon className="w-5 h-5 text-white/70" />
            </div>
          </div>

          {/* Divider line */}
          <div className="w-full h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent my-6" />

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            {reason.description}
          </p>
        </div>

        {/* Hover shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </motion.div>
  );
};

export default WhySkalator;
