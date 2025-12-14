import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "001",
    titlePart1: "Marketing &",
    titlePart2: "Leadgenerierung",
    description: "Von der Positionierung bis zum qualifizierten Lead – Systeme, die planbare Anfragen generieren.",
    gradient: "from-cyan-900/40 via-cyan-800/20 to-background",
  },
  {
    id: "002",
    titlePart1: "Sales &",
    titlePart2: "Vertriebsprozesse",
    description: "Strukturen, die Leads in Kunden verwandeln. Kürzere Zyklen, höhere Abschlussquoten.",
    gradient: "from-emerald-900/40 via-emerald-800/20 to-background",
  },
  {
    id: "003",
    titlePart1: "Operations &",
    titlePart2: "Automatisierung",
    description: "Prozesse, die Wachstum tragen. Weniger Kosten, mehr Output mit dem gleichen Team.",
    gradient: "from-violet-900/40 via-violet-800/20 to-background",
  },
  {
    id: "004",
    titlePart1: "Recruiting &",
    titlePart2: "Teamaufbau",
    description: "Die richtigen Menschen finden und halten. Systeme für nachhaltiges Teamwachstum.",
    gradient: "from-amber-900/40 via-amber-800/20 to-background",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="leistungen" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            Leistungen
          </motion.span>
          <h2 className="text-display font-bold text-foreground">
            Der komplette Aufbau für{" "}
            <span className="font-serif italic text-foreground-muted">messbares Wachstum</span>
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="space-y-4 md:space-y-6 mb-16">
          {services.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} isInView={isInView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="accent" size="xl" asChild className="group">
            <a href="#kontakt" className="flex items-center gap-2">
              Leistungen besprechen
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceItem = ({ 
  service, 
  index, 
  isInView 
}: { 
  service: typeof services[0]; 
  index: number; 
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-r ${service.gradient} p-8 md:p-10 transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5`}>
        {/* Large background number */}
        <div className="absolute -top-8 -left-4 text-[12rem] md:text-[16rem] font-bold text-foreground/[0.03] leading-none select-none pointer-events-none font-display">
          {service.id.slice(-2)}
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          {/* Number */}
          <span className="text-sm font-mono text-foreground-muted">
            {service.id}
          </span>
          
          {/* Title */}
          <h3 className="flex-1 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            {service.titlePart1}{" "}
            <span className="font-serif italic text-foreground-muted">{service.titlePart2}</span>
          </h3>
          
          {/* Description */}
          <p className="md:w-80 lg:w-96 text-foreground-muted text-sm md:text-base">
            {service.description}
          </p>
          
          {/* Arrow */}
          <div className="hidden md:flex w-12 h-12 rounded-xl border border-border/50 items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
            <ArrowRight className="w-5 h-5 text-foreground-muted group-hover:text-accent-foreground transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
