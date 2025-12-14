import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "001",
    titlePart1: "Marketing &",
    titlePart2: "Leadgenerierung",
    description: "Von der Positionierung bis zum qualifizierten Lead – Systeme, die planbare Anfragen generieren.",
    details: [
      "Zielgruppenanalyse & Positionierung",
      "Funnel-Aufbau & Conversion-Optimierung",
      "Performance Marketing (Meta, Google, LinkedIn)",
      "Content-Strategie & Leadmagneten",
      "CRM-Integration & Lead-Scoring",
    ],
    result: "Mehr qualifizierte Anfragen, planbar und skalierbar.",
    glowColor: "from-cyan-400 via-blue-500 to-cyan-400",
    bgGradient: "from-cyan-500/20 via-cyan-500/10 to-blue-500/10",
    accentColor: "text-cyan-400",
    dotColor: "bg-cyan-400",
    borderColor: "border-cyan-400/40",
  },
  {
    id: "002",
    titlePart1: "Sales &",
    titlePart2: "Vertriebsprozesse",
    description: "Strukturen, die Leads in Kunden verwandeln. Kürzere Zyklen, höhere Abschlussquoten.",
    details: [
      "Vertriebsprozess-Design & Optimierung",
      "Sales-Skripte & Einwandbehandlung",
      "Pipeline-Management & Forecasting",
      "Team-Schulung & Coaching",
      "Closing-Strategien & Follow-up-Systeme",
    ],
    result: "Höhere Abschlussquoten, kürzere Sales Cycles.",
    glowColor: "from-emerald-400 via-green-500 to-emerald-400",
    bgGradient: "from-emerald-500/20 via-emerald-500/10 to-green-500/10",
    accentColor: "text-emerald-400",
    dotColor: "bg-emerald-400",
    borderColor: "border-emerald-400/40",
  },
  {
    id: "003",
    titlePart1: "Operations &",
    titlePart2: "Automatisierung",
    description: "Prozesse, die Wachstum tragen. Weniger Kosten, mehr Output mit dem gleichen Team.",
    details: [
      "Prozessanalyse & Optimierung",
      "Workflow-Automatisierung (Make, Zapier, n8n)",
      "Tool-Stack Aufbau & Integration",
      "KI-gestützte Automatisierungen",
      "SOPs & Dokumentation",
    ],
    result: "30-50% weniger operative Kosten, mehr Produktivität.",
    glowColor: "from-violet-400 via-purple-500 to-violet-400",
    bgGradient: "from-violet-500/20 via-violet-500/10 to-purple-500/10",
    accentColor: "text-violet-400",
    dotColor: "bg-violet-400",
    borderColor: "border-violet-400/40",
  },
  {
    id: "004",
    titlePart1: "Recruiting &",
    titlePart2: "Teamaufbau",
    description: "Die richtigen Menschen finden und halten. Systeme für nachhaltiges Teamwachstum.",
    details: [
      "Employer Branding & Positionierung",
      "Recruiting-Funnel & Kandidaten-Pipeline",
      "Interview-Prozesse & Bewertungssysteme",
      "Onboarding-Strukturen",
      "Retention & Mitarbeiterentwicklung",
    ],
    result: "Bessere Kandidaten, schnellere Besetzung, weniger Fluktuation.",
    glowColor: "from-amber-400 via-orange-500 to-amber-400",
    bgGradient: "from-amber-500/20 via-amber-500/10 to-orange-500/10",
    accentColor: "text-amber-400",
    dotColor: "bg-amber-400",
    borderColor: "border-amber-400/40",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="leistungen" className="section-padding bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      {/* Elegant dark background with subtle gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-500/5 to-transparent rounded-full blur-3xl" />
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
          className="mb-16 md:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Leistungsmodule
          </motion.span>
          <h2 className="text-display font-bold text-white">
            Der komplette Aufbau für{" "}
            <span className="font-serif italic text-white/50">messbares Wachstum</span>
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="space-y-3 md:space-y-4 mb-16">
          {services.map((service, index) => (
            <ServiceItem 
              key={service.id} 
              service={service} 
              index={index} 
              isInView={isInView}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
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
  isInView,
  isOpen,
  onToggle,
}: { 
  service: typeof services[0]; 
  index: number; 
  isInView: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div 
        onClick={onToggle}
        className={`relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer ${
          isOpen 
            ? 'border-accent/40 bg-white/[0.03]' 
            : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
        }`}
      >
        {/* Large background number */}
        <div className="absolute -top-10 -left-6 text-[14rem] md:text-[18rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none font-display">
          {service.id.slice(-2)}
        </div>
        
        {/* Main row - always visible */}
        <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          {/* Number */}
          <span className="text-sm font-mono text-white/40">
            {service.id}
          </span>
          
          {/* Title */}
          <h3 className="flex-1 text-xl md:text-2xl lg:text-3xl font-bold text-white">
            {service.titlePart1}{" "}
            <span className="font-serif italic text-white/50">{service.titlePart2}</span>
          </h3>
          
          {/* Description - hidden on mobile when closed */}
          <p className={`md:w-72 lg:w-80 text-white/60 text-sm ${isOpen ? 'hidden' : 'hidden md:block'}`}>
            {service.description}
          </p>
          
          {/* Toggle icon */}
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl border flex items-center justify-center transition-all duration-300 ${
            isOpen 
              ? 'bg-accent border-accent rotate-180' 
              : 'border-white/20 group-hover:border-white/40'
          }`}>
            <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-accent-foreground' : 'text-white/60'}`} />
          </div>
        </div>
        
        {/* Expandable content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-8 pt-2">
                <div className="border-t border-white/10 pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Description & Details */}
                    <div>
                      <p className="text-white/70 mb-6 text-base">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="flex items-start gap-3 text-white/60"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${service.dotColor} mt-2 flex-shrink-0`} />
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Right: Result - HERO ELEMENT */}
                    <div className="flex flex-col justify-between">
                      <motion.div 
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="relative group/nutzen"
                      >
                        {/* Glow effect behind */}
                        <div className={`absolute -inset-1 bg-gradient-to-r ${service.glowColor} rounded-2xl blur-lg opacity-40 group-hover/nutzen:opacity-60 transition-opacity animate-pulse`} />
                        
                        {/* Main card */}
                        <div className={`relative bg-gradient-to-br ${service.bgGradient} rounded-xl p-6 md:p-8 ${service.borderColor} border backdrop-blur-sm`}>
                          {/* Shine effect */}
                          <div className="absolute inset-0 rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/nutzen:translate-x-full transition-transform duration-1000" />
                          </div>
                          
                          <div className="relative">
                            <span className={`inline-flex items-center gap-2 text-xs font-bold ${service.accentColor} uppercase tracking-widest mb-3`}>
                              <span className={`w-2 h-2 rounded-full ${service.dotColor} animate-pulse`} />
                              Nutzen
                            </span>
                            <p className="text-white font-bold text-xl md:text-2xl leading-tight">
                              {service.result}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                      
                      <Button variant="outline" size="lg" asChild className="mt-6 border-white/20 text-white hover:bg-white/10 hover:border-white/30 group/btn">
                        <a href="#kontakt" className="flex items-center gap-2">
                          Mehr erfahren
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Services;
