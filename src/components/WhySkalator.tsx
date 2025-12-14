import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Target, Zap, User, ArrowLeft, ArrowRight } from "lucide-react";

import whySolo from "@/assets/why-solo.png";
import whyResults from "@/assets/why-results.png";
import whyFocus from "@/assets/why-focus.png";
import whyPractice from "@/assets/why-practice.png";

const reasons = [
  {
    icon: User,
    title: "Solo-Operator",
    description: "Kein Team, keine Overhead-Kosten. Direkte Kommunikation, schnelle Entscheidungen.",
    image: whySolo,
  },
  {
    icon: Target,
    title: "Ergebnisorientiert",
    description: "Keine Folien und Konzepte, sondern funktionierende Systeme, die Resultate liefern.",
    image: whyResults,
  },
  {
    icon: Zap,
    title: "1:1-Fokus",
    description: "Keine Massenprogramme, sondern individuelle Strategien und direkte Begleitung.",
    image: whyFocus,
  },
  {
    icon: Users,
    title: "Praxis statt Theorie",
    description: "Alles, was ich empfehle, habe ich selbst gebaut und getestet.",
    image: whyPractice,
  },
];

const WhySkalator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 360;
    const newScrollLeft = direction === "left" 
      ? scrollRef.current.scrollLeft - scrollAmount 
      : scrollRef.current.scrollLeft + scrollAmount;
    
    scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      {/* Elegant dark background with subtle gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-violet-500/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
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
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Für deinen Erfolg
          </motion.span>
          <h2 className="text-display font-bold text-white">
            Warum <span className="font-serif italic text-white/50">Skalator?</span>
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
            className="flex items-center justify-end mt-8 gap-2"
          >
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
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
      <div className="group relative h-[450px] rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-500">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={reason.image} 
            alt={reason.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {reason.title}
            </h3>
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
              <reason.icon className="w-5 h-5 text-white/80" />
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Divider line */}
          <div className="w-full h-px bg-gradient-to-r from-white/30 via-white/20 to-transparent mb-4" />

          {/* Description */}
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            {reason.description}
          </p>
        </div>

        {/* Hover shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </motion.div>
  );
};

export default WhySkalator;
