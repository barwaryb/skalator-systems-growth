import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Wachstum & Umsatzsysteme",
    description: "Mehr qualifizierte Anfragen. Klare Vertriebsstrukturen. Planbare Umsätze statt Zufallstreffer.",
  },
  {
    title: "Recruiting & Teamaufbau",
    description: "Planbare Mitarbeitergewinnung. Saubere Prozesse. Weniger Zeit in Bewerbungsgesprächen mit den falschen Menschen.",
  },
  {
    title: "Automatisierung & Abläufe",
    description: "Weniger manuelle Arbeit. Klare Verantwortlichkeiten. Prozesse, die auch ohne Sie funktionieren.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leistungen" className="bg-background section-padding" ref={ref}>
      <div className="section-container">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm text-foreground/40 uppercase tracking-widest mb-8 block font-body"
        >
          Leistungen
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-headline text-foreground mb-16 max-w-xl"
        >
          Wobei ich konkret helfe
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="border-t border-border pt-6">
                <h3 className="font-heading text-xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
