import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Zap } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Wachstum",
    subtitle: "Marketing & Umsatz",
    description: "Qualifizierte Anfragen. Klare Strukturen. Planbare Umsätze.",
    accent: true,
  },
  {
    icon: Users,
    title: "Recruiting",
    subtitle: "Team & Kultur",
    description: "Die richtigen Menschen. Zur richtigen Zeit. Mit System.",
    accent: false,
  },
  {
    icon: Zap,
    title: "Automatisierung",
    subtitle: "Prozesse & Tools",
    description: "Weniger manuelle Arbeit. Mehr Zeit für das Wesentliche.",
    accent: false,
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
    <section id="leistungen" className="relative bg-background-soft section-padding noise" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-24">
            <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              Was ich mache
            </span>
            <h2 className="font-heading text-headline text-foreground max-w-4xl">
              Drei Hebel.
              <span className="text-foreground/30"> Ein Ziel.</span>
            </h2>
          </motion.div>

          {/* Bento grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative ${index === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}
              >
                <div className={`gradient-border h-full p-8 md:p-10 transition-all duration-500 ${
                  index === 0 ? 'lg:p-12' : ''
                }`}>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    service.accent 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-secondary group-hover:bg-accent group-hover:text-accent-foreground'
                  }`}>
                    <service.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <span className="text-xs text-foreground-muted uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                    <h3 className={`font-heading text-foreground ${
                      index === 0 ? 'text-4xl lg:text-5xl' : 'text-3xl'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-foreground-muted leading-relaxed ${
                      index === 0 ? 'text-lg' : ''
                    }`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
