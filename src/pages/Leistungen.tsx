import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import { servicesData } from "@/data/servicesData";

const steps = [
  { num: "01", title: "Analyse", desc: "Wir analysieren deine aktuelle Situation, Engpässe und Potenziale." },
  { num: "02", title: "Strategie", desc: "Maßgeschneiderter Plan mit klaren Prioritäten und Milestones." },
  { num: "03", title: "Umsetzung", desc: "Gemeinsame Implementierung – schnell, pragmatisch, ergebnisorientiert." },
  { num: "04", title: "Optimierung", desc: "Laufende Verbesserung basierend auf echten Daten und Feedback." },
];

const Leistungen = () => {
  useEffect(() => {
    document.title = "Leistungen – Marketing, Sales, Automatisierung & Recruiting | Skalator";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Vom Lead bis zur Einstellung. Skalator baut Systeme für planbare Kundengewinnung, effiziente Vertriebsprozesse und automatisierte Operations.");
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHero
        label="Leistungsmodule"
        headline="Der komplette Aufbau für messbares Wachstum."
        highlightWord="messbares Wachstum."
        subline="Vier Module. Ein Ziel: Dein Unternehmen soll Wachstum aushalten."
        breadcrumbs={[{ label: "Leistungen" }]}
      />

      <section className="bg-[#0a0a0a] relative overflow-hidden section-padding -mt-8">
        <div className="section-container relative z-10">
          {/* Module Cards */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-24">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/leistungen/${service.slug}`}
                  className="group block relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10 hover:border-accent/30 hover:bg-white/[0.05] transition-all duration-300 h-full overflow-hidden"
                >
                  {/* Background number */}
                  <div className="absolute -top-8 -right-4 text-[10rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none font-display">
                    {service.id.slice(-2)}
                  </div>
                  
                  <span className="text-sm font-mono text-white/40 mb-4 block">{service.id}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {service.titlePart1}{" "}
                    <span className="font-serif italic text-white/50">{service.titlePart2}</span>
                  </h3>
                  <p className="text-white/60 mb-6">{service.subline}</p>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 group-hover:border-accent group-hover:text-accent">
                    Mehr erfahren
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Zusammenarbeit Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-headline font-bold text-white mb-4 text-center">
              So läuft die <span className="font-serif italic text-white/50">Zusammenarbeit</span> ab
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-lg mx-auto">Kein endloses Konzeptieren. Schnelle Ergebnisse durch klare Strukturen.</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative overflow-hidden"
                >
                  <span className="text-5xl font-bold text-white/[0.05] absolute -top-2 -right-1 font-display">{step.num}</span>
                  <span className="text-xs font-mono text-accent mb-2 block">{step.num}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/50">{step.desc}</p>
                </motion.div>
              ))}
            </div>
        </motion.div>

          {/* Themen-Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wide mb-4">Relevante Themen</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { slug: "marketing-automatisierung", label: "Marketing Automatisierung" },
                { slug: "neukunden-gewinnung", label: "Neukundengewinnung" },
                { slug: "leadgenerierung-b2b", label: "Leadgenerierung B2B" },
                { slug: "vertrieb-automatisieren", label: "Vertrieb automatisieren" },
                { slug: "ki-automatisierung-unternehmen", label: "KI-Automatisierung" },
                { slug: "business-skalierung", label: "Business Skalierung" },
              ].map(t => (
                <Link
                  key={t.slug}
                  to={`/${t.slug}`}
                  className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-sm text-white/60 hover:text-white hover:border-accent/30 transition-colors"
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <PageCTA />
    </div>
  );
};

export default Leistungen;
