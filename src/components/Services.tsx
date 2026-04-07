import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "001",
    title: "Marketing &",
    titleAccent: "Leadgenerierung",
    description: "Von der Positionierung bis zum qualifizierten Lead — Systeme, die planbare Anfragen generieren.",
    slug: "marketing-leadgenerierung",
  },
  {
    id: "002",
    title: "Sales &",
    titleAccent: "Vertriebsprozesse",
    description: "Strukturen, die Leads in Kunden verwandeln. Kürzere Zyklen, höhere Abschlussquoten.",
    slug: "sales-vertriebsprozesse",
  },
  {
    id: "003",
    title: "Operations &",
    titleAccent: "Automatisierung",
    description: "Prozesse, die Wachstum tragen. Weniger Kosten, mehr Output mit dem gleichen Team.",
    slug: "operations-automatisierung",
  },
  {
    id: "004",
    title: "Recruiting &",
    titleAccent: "Teamaufbau",
    description: "Die richtigen Menschen finden und halten. Systeme für nachhaltiges Teamwachstum.",
    slug: "recruiting-teamaufbau",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="leistungen" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="section-label mb-4 block">Unsere Leistungen</span>
          <h2 className="text-headline text-white">
            Der komplette Aufbau für{" "}
            <em className="font-serif not-italic text-white/40">messbares Wachstum.</em>
          </h2>
        </motion.div>

        {/* Service cards - vertical list like saleshax */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Link to={`/leistungen/${service.slug}`}>
                <div className="group relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden hover:border-white/20 transition-all duration-500 cursor-pointer">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 p-6 md:p-8 lg:p-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    {/* Number */}
                    <span className="text-xs font-mono text-white/20 tracking-widest shrink-0 md:w-12">
                      {service.id}
                    </span>

                    {/* Title */}
                    <h3 className="flex-1 text-xl md:text-2xl lg:text-3xl font-light text-white tracking-tight">
                      <span className="font-medium">{service.title}</span>{" "}
                      <em className="font-serif not-italic text-white/40">{service.titleAccent}</em>
                    </h3>

                    {/* Description - desktop only */}
                    <p className="hidden lg:block text-sm text-white/40 max-w-xs leading-relaxed">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:border-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-black transition-colors" />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-white text-black rounded-full px-8 py-4 font-medium text-sm hover:bg-white/90 transition-all group"
          >
            Leistungen besprechen
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
