import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Zap, ArrowRight, FileText, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

import cardSales from "@/assets/card-sales.png";
import cardDesign from "@/assets/card-design.png";
import cardKi from "@/assets/card-ki.png";
import cardGrowth from "@/assets/card-growth.png";
import cardRecruiting from "@/assets/card-recruiting.png";
import cardMarketing from "@/assets/card-marketing.png";

const cards = [
  {
    icon: FileText,
    label: "Sales",
    headline: "Dein neues Verkaufsskript",
    subline: "bringt dir nicht mehr Abschlüsse. Dein Prozess ist das Problem.",
    image: cardSales,
  },
  {
    icon: Sparkles,
    label: "Design",
    headline: "Canva Pro macht",
    subline: "deine Ads nicht besser. Deine Message ist schwach.",
    image: cardDesign,
  },
  {
    icon: Zap,
    label: "KI",
    headline: "ChatGPT schreibt",
    subline: "keine besseren Mails. Du weißt nicht, was du sagen willst.",
    image: cardKi,
  },
  {
    icon: TrendingUp,
    label: "Wachstum",
    headline: "Mehr Leads lösen nichts,",
    subline: "wenn dein System sie nicht tragen kann.",
    image: cardGrowth,
  },
  {
    icon: Users,
    label: "Recruiting",
    headline: "LinkedIn Premium",
    subline: "findet dir keine Talente. Dein Angebot lockt niemanden.",
    image: cardRecruiting,
  },
  {
    icon: Target,
    label: "Marketing",
    headline: "Mehr Budget bedeutet",
    subline: "mehr Verlust. Wenn die Grundlage nicht stimmt.",
    image: cardMarketing,
  },
];

const Cards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="leistungen" className="relative bg-background-soft section-padding overflow-hidden" ref={ref}>
      {/* Parallax background element */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-3 block"
          >
            Warum Wachstum scheitert
          </motion.span>
          <h2 className="text-headline font-bold text-foreground">
            Die echten Probleme.
          </h2>
        </motion.div>

        {/* Cards Grid with staggered reveal */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-14">
          {cards.map((card, index) => (
            <CardItem key={card.label} card={card} index={index} isInView={isInView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="accent" size="lg" asChild>
            <a href="#kontakt" className="flex items-center gap-2">
              Problem lösen
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const CardItem = ({ card, index, isInView }: { card: typeof cards[0]; index: number; isInView: boolean }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, rotateX, transformPerspective: 1000 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="modern-card overflow-hidden group cursor-pointer"
    >
      {/* Background Image */}
      <div className="relative h-32 overflow-hidden">
        <img 
          src={card.image} 
          alt={card.label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
        
        {/* Icon overlay */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-4 left-6 w-11 h-11 rounded-xl bg-accent/20 backdrop-blur-sm text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
        >
          <card.icon className="w-5 h-5" strokeWidth={2} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 pt-4">
        {/* Label */}
        <span className="text-xs font-semibold text-accent tracking-wide uppercase mb-3 block">
          {card.label}
        </span>

        {/* Content */}
        <h3 className="text-title font-bold text-foreground mb-1">
          {card.headline}
        </h3>
        <p className="text-body-lg text-foreground-muted">
          {card.subline}
        </p>

        {/* Hover reveal CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <span className="text-sm font-semibold text-accent flex items-center gap-1">
            Mehr erfahren
            <ArrowRight className="w-4 h-4" />
          </span>
        </motion.div>
      </div>

      {/* Animated border on hover */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Cards;
