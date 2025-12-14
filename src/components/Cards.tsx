import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    number: "01",
    headline: "Wachstum",
    statement: "Mehr Leads lösen nichts, wenn dein System sie nicht tragen kann.",
  },
  {
    number: "02",
    headline: "Recruiting",
    statement: "Wenn du keine Leute findest, liegt das selten am Markt.",
  },
  {
    number: "03",
    headline: "Automatisierung",
    statement: "Manuelle Arbeit ist ein Symptom. Kein Zustand.",
  },
];

const Cards = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-background-soft section-padding" ref={containerRef}>
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-foreground" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4 block">
            Realität
          </span>
          <h2 className="font-display text-large text-foreground">
            Was niemand
            <br />
            <span className="text-foreground/30">hören will.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {cards.map((card, index) => (
            <CardItem key={card.number} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CardItem = ({ card, index }: { card: typeof cards[0]; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-1, 0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, rotateZ: rotate }}
      className="relative"
    >
      <div className="hard-card p-8 md:p-12 lg:p-16 group hover:bg-foreground hover:text-primary-foreground transition-all duration-500">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          {/* Number */}
          <div className="flex-shrink-0">
            <span className="text-6xl md:text-8xl font-display text-foreground/10 group-hover:text-primary-foreground/20 transition-colors">
              {card.number}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-display text-3xl md:text-5xl text-foreground group-hover:text-primary-foreground mb-4 transition-colors">
              {card.headline}
            </h3>
            <p className="text-xl md:text-2xl text-foreground-muted group-hover:text-primary-foreground/70 font-medium transition-colors">
              {card.statement}
            </p>
          </div>

          {/* Accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
