import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import CaseTeaser from "@/components/CaseTeaser";
import { servicesData } from "@/data/servicesData";
import { casesData } from "@/data/casesData";

const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1J8LB-Qt3tzOmUygFk9PqamtOzvM1qo1PxXQxiodbMZBa41kcDQfFBhXAH0YwOoR_0uWt4tmpe";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle;
      document.querySelector('meta[name="description"]')?.setAttribute("content", service.metaDescription);
    }
  }, [service]);

  if (!service) return <Navigate to="/leistungen" replace />;

  const relatedCases = casesData.filter(c => service.relevanteCases.includes(c.slug));

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHero
        label={`Modul ${service.id}`}
        headline={service.title}
        subline={service.subline}
        breadcrumbs={[
          { label: "Leistungen", to: "/leistungen" },
          { label: service.title },
        ]}
      />

      <section className="bg-[#0a0a0a] relative overflow-hidden">
        <div className="section-container relative z-10 space-y-20 md:space-y-28 py-8 md:py-16">
          {/* Deliverables */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-title font-bold text-white mb-8"
            >
              Was wir machen
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {service.deliverables.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-accent/20 transition-colors"
                >
                  <span className={`w-2 h-2 rounded-full ${service.dotColor} inline-block mr-3`} />
                  <span className="text-white/80 text-sm">{d}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Für wen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-title font-bold text-white mb-4">Für wen</h2>
            <p className="text-white/60 text-body-lg max-w-2xl">{service.fuerWen}</p>
          </motion.div>

          {/* Ablauf Timeline */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-title font-bold text-white mb-8"
            >
              Ablauf
            </motion.h2>
            <div className="space-y-4">
              {service.ablauf.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-5"
                >
                  <span className={`text-sm font-mono ${service.accentColor} font-bold min-w-[2rem]`}>{step.step}</span>
                  <div>
                    <h3 className="text-white font-bold mb-1">{step.title}</h3>
                    <p className="text-white/50 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ergebnis-Versprechen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`absolute -inset-1 bg-gradient-to-r ${service.glowColor} rounded-2xl blur-lg opacity-30`} />
            <div className="relative bg-white/[0.05] border border-white/10 rounded-2xl p-8 md:p-10 text-center">
              <span className={`text-xs font-bold ${service.accentColor} uppercase tracking-widest mb-3 block`}>Ergebnis</span>
              <p className="text-2xl md:text-3xl font-bold text-white">{service.ergebnis}</p>
            </div>
          </motion.div>

          {/* Relevante Cases */}
          {relatedCases.length > 0 && (
            <div>
              <h2 className="text-title font-bold text-white mb-8">Relevante Cases</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedCases.map((c, i) => (
                  <CaseTeaser key={c.slug} caseItem={c} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <PageCTA />
    </div>
  );
};

export default ServiceDetail;
