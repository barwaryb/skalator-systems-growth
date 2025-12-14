import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Cog } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Wachstumssysteme",
    description: "Mehr qualifizierte Anfragen. Klare Vertriebsstrukturen. Planbare Umsätze.",
  },
  {
    icon: Users,
    title: "Recruiting-Strukturen",
    description: "Planbare Mitarbeitergewinnung. Saubere Prozesse. Die richtigen Menschen.",
  },
  {
    icon: Cog,
    title: "Automatisierung",
    description: "Weniger manuelle Arbeit. Klare Abläufe. Prozesse, die ohne Sie laufen.",
  },
];

const Cards = () => {
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
    <section className="relative bg-background-soft section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm text-accent font-semibold uppercase tracking-[0.2em] mb-4 block">
              Leistungen
            </span>
            <h2 className="font-heading text-headline text-foreground">
              Drei Hebel für Wachstum
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="premium-card h-full transition-all duration-500 relative overflow-hidden">
                  {/* Accent corner */}
                  <div className="absolute top-0 left-0 w-1 h-16 bg-accent rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;
