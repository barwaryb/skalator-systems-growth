import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import whySolo from "@/assets/why-solo.png";
import whyResults from "@/assets/why-results.png";
import whyFocus from "@/assets/why-focus.png";
import whyPractice from "@/assets/why-practice.png";

const reasons = [
  {
    title: "Solo-Operator",
    description: "Kein Team, keine Overhead-Kosten. Direkte Kommunikation, schnelle Entscheidungen.",
    image: whySolo,
  },
  {
    title: "Ergebnisorientiert",
    description: "Keine Folien und Konzepte, sondern funktionierende Systeme, die Resultate liefern.",
    image: whyResults,
  },
  {
    title: "1:1-Fokus",
    description: "Keine Massenprogramme, sondern individuelle Strategien und direkte Begleitung.",
    image: whyFocus,
  },
  {
    title: "Praxis statt Theorie",
    description: "Alles, was ich empfehle, habe ich selbst gebaut und getestet.",
    image: whyPractice,
  },
];

const WhySkalator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="section-label mb-4 block">Für deinen Erfolg</span>
          <h2 className="text-headline text-white">
            Warum{" "}
            <em className="font-serif not-italic text-white/40">Skalator?</em>
          </h2>
        </motion.div>

        {/* Cards grid - saleshax image cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-7">
                  <h3 className="text-xl md:text-2xl font-light text-white tracking-tight mb-2">
                    {reason.title}
                  </h3>
                  <div className="w-8 h-px bg-white/30 mb-3" />
                  <p className="text-sm text-white/50 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySkalator;
