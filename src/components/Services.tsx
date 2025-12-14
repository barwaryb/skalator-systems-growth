import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Wachstum & Umsatzsysteme",
    description: "Mehr qualifizierte Anfragen. Klare Vertriebsstrukturen. Planbare Umsätze statt Zufallstreffer.",
    tags: ["Lead-Generierung", "Funnels", "Ads"],
  },
  {
    number: "02",
    title: "Recruiting & Teamaufbau",
    description: "Planbare Mitarbeitergewinnung. Saubere Prozesse. Weniger Zeit in Bewerbungsgesprächen mit den falschen Menschen.",
    tags: ["Employer Branding", "Prozesse", "Automatisierung"],
  },
  {
    number: "03",
    title: "Automatisierung & Abläufe",
    description: "Weniger manuelle Arbeit. Klare Verantwortlichkeiten. Prozesse, die auch ohne Sie funktionieren.",
    tags: ["Workflows", "Tools", "Integration"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="leistungen" className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="section-container section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            variants={itemVariants}
            className="text-xs text-foreground/40 uppercase tracking-[0.2em] mb-6 block font-body"
          >
            Leistungen
          </motion.span>
          
          <motion.h2
            variants={itemVariants}
            className="font-heading text-[clamp(2rem,4vw,3.5rem)] text-foreground mb-20 max-w-2xl leading-[1.1]"
          >
            Wobei ich konkret helfe
          </motion.h2>

          <div className="space-y-0">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
              >
                <div className="border-t border-border/70 py-12 md:py-16 grid md:grid-cols-12 gap-6 md:gap-8 items-start hover:bg-background-pure/50 transition-colors duration-500 -mx-6 px-6 md:-mx-8 md:px-8">
                  <div className="md:col-span-1">
                    <span className="text-sm text-foreground/30 font-body">
                      {service.number}
                    </span>
                  </div>
                  
                  <div className="md:col-span-4">
                    <h3 className="font-heading text-2xl md:text-3xl text-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="md:col-span-5">
                    <p className="text-foreground/50 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="md:col-span-2 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-foreground/40 px-3 py-1.5 rounded-full border border-border/50 bg-background-pure/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-border/70" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
