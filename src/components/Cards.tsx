import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const Cards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="probleme" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        {/* Ansatz header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <span className="section-label">Unser Ansatz</span>
          <h2 className="text-headline text-white mt-4">
            Zwei Wege zum{" "}
            <em className="font-serif not-italic text-white/40">systematischen Wachstum.</em>
          </h2>
          <p className="text-body-lg text-white/50 mt-4 max-w-3xl">
            Kein Gruppenformat. Keine Standardlösung. Jedes Unternehmen wird individuell aufgestellt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {[
            {
              num: "01",
              title: "Done-With-You",
              description: "Wir entwickeln gemeinsam Strategien, Prozesse und Strukturen — und begleiten die Implementierung bis die Systeme stehen und messbar funktionieren.",
            },
            {
              num: "02",
              title: "Done-For-You",
              description: "Wir übernehmen operative Leistungen direkt: CRM-Setups, Funnel-Aufbau, Automatisierungen und Pipeline-Aufbau. Damit in den ersten 30 Tagen Ergebnisse entstehen.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="noise-card group relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 md:p-10 h-full hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 dot-pattern opacity-30 rounded-2xl" />
                <div className="relative z-10">
                  <span className="text-xs font-mono text-white/30 tracking-widest">{card.num}</span>
                  <h3 className="text-2xl md:text-3xl font-light text-white mt-4 mb-4 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed mb-8">
                    {card.description}
                  </p>
                  <a href="#kontakt" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white group/link transition-colors">
                    Erstgespräch buchen
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
