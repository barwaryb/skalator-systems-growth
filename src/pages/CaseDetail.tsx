import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Clock, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import StatCard from "@/components/StatCard";
import ModuleTag from "@/components/ModuleTag";
import CaseTeaser from "@/components/CaseTeaser";
import { casesData } from "@/data/casesData";

const CaseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseItem = casesData.find(c => c.slug === slug);

  useEffect(() => {
    if (caseItem) {
      document.title = caseItem.metaTitle;
      document.querySelector('meta[name="description"]')?.setAttribute("content", caseItem.metaDescription);
    }
  }, [caseItem]);

  if (!caseItem) return <Navigate to="/cases" replace />;

  const otherCases = casesData.filter(c => c.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHero
        label={caseItem.branche}
        headline={caseItem.headline}
        breadcrumbs={[
          { label: "Cases", to: "/cases" },
          { label: caseItem.branche },
        ]}
      />

      <section className="bg-[#0a0a0a] relative overflow-hidden">
        <div className="section-container relative z-10 space-y-16 md:space-y-24 py-8 md:py-16">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h2 className="text-title font-bold text-white mb-3">Problem</h2>
                <p className="text-white/60 text-body-lg max-w-2xl">{caseItem.problem}</p>
              </div>
            </div>
          </motion.div>

          {/* Lösung */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-title font-bold text-white mb-3">Lösung</h2>
                <p className="text-white/60 text-body-lg max-w-2xl mb-4">{caseItem.loesung}</p>
                <div className="flex flex-wrap gap-2">
                  {caseItem.module.map(m => <ModuleTag key={m} module={m} />)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ergebnisse */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-title font-bold text-white mb-8"
            >
              Ergebnisse
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseItem.ergebnisse.map((e, i) => (
                <StatCard key={i} label={e.label} value={e.value} index={i} />
              ))}
            </div>
          </div>

          {/* Zeitraum & Kunden-Website */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-5 flex-1"
            >
              <Clock className="w-5 h-5 text-accent" />
              <div>
                <span className="text-xs text-white/40 uppercase tracking-wide">Zeitraum</span>
                <p className="text-white font-semibold">{caseItem.zeitraum}</p>
              </div>
            </motion.div>

            {caseItem.kundenWebsite && (
              <motion.a
                href={caseItem.kundenWebsite}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-5 flex-1 hover:border-accent/30 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <ExternalLink className="w-5 h-5 text-accent" />
                <div>
                  <span className="text-xs text-white/40 uppercase tracking-wide">Kunden-Website</span>
                  <p className="text-white font-semibold group-hover:text-accent transition-colors">
                    {new URL(caseItem.kundenWebsite).hostname.replace("www.", "")}
                  </p>
                </div>
              </motion.a>
            )}
          </div>

          {/* Weitere Cases */}
          <div>
            <h2 className="text-title font-bold text-white mb-8">Weitere Cases</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {otherCases.map((c, i) => (
                <CaseTeaser key={c.slug} caseItem={c} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        headline="Ähnliches Ergebnis für Ihr Unternehmen?"
        subline="Lass uns in einem kostenlosen Strategiegespräch herausfinden, wie wir das auch für dich umsetzen."
      />
    </div>
  );
};

export default CaseDetail;
