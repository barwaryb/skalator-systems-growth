import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import StatCard from "@/components/StatCard";
import CaseTeaser from "@/components/CaseTeaser";
import ModuleTag from "@/components/ModuleTag";
import { seoPages } from "@/data/seoPageData";
import { casesData } from "@/data/casesData";

const SeoLandingPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/", "");
  const page = seoPages.find(p => p.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (page) {
      document.title = page.metaTitle;
      document.querySelector('meta[name="description"]')?.setAttribute("content", page.metaDescription);

      // JSON-LD Structured Data
      const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
      existingScripts.forEach(s => s.remove());

      const breadcrumbLD = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skalator.de/" },
          { "@type": "ListItem", "position": 2, "name": page.label, "item": `https://skalator.de/${page.slug}` },
        ]
      };

      const faqLD = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": page.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.frage,
          "acceptedAnswer": { "@type": "Answer", "text": faq.antwort }
        }))
      };

      const serviceLD = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": page.label,
        "description": page.metaDescription,
        "provider": {
          "@type": "Person",
          "name": "Botan Barwary",
          "url": "https://skalator.de/ueber-mich"
        },
        "areaServed": { "@type": "Place", "name": "DACH" },
        "url": `https://skalator.de/${page.slug}`
      };

      [breadcrumbLD, faqLD, serviceLD].forEach(data => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-jsonld', 'true');
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });

      return () => {
        document.querySelectorAll('script[data-seo-jsonld]').forEach(s => s.remove());
      };
    }
  }, [page]);

  if (!page) return <Navigate to="/" replace />;

  const relatedCases = casesData.filter(c => page.relevanteCases.includes(c.slug));

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHero
        label={page.label}
        headline={page.headline}
        highlightWord={page.highlightWord}
        subline={page.subline}
        breadcrumbs={[{ label: page.label }]}
      />

      <section className="bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="section-container relative z-10 space-y-20 md:space-y-28 py-8 md:py-16">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-headline font-bold text-white mb-6">
              {page.introHeadline}
            </h2>
            <p className="text-white/60 text-body-lg leading-relaxed">
              {page.introText}
            </p>
          </motion.div>

          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
              </div>
              <h2 className="text-title font-bold text-white">{page.problemHeadline}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {page.problems.map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-5"
                >
                  <span className="w-2 h-2 rounded-full bg-orange-400 inline-block mr-3" />
                  <span className="text-white/70 text-sm">{problem}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lösung */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-title font-bold text-white">{page.loesungHeadline}</h2>
                <p className="text-white/50 mt-1">{page.loesungText}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {page.loesungPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-accent/20 transition-colors"
                >
                  <h3 className="text-white font-bold mb-2">{point.title}</h3>
                  <p className="text-white/50 text-sm">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {page.stats.map((s, i) => (
              <StatCard key={s.label} label={s.label} value={s.value} index={i} />
            ))}
          </div>

          {/* Ansatz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-headline font-bold text-white mb-4">
              {page.ansatzHeadline}
            </h2>
            <p className="text-white/60 text-body-lg leading-relaxed">
              {page.ansatzText}
            </p>
          </motion.div>

          {/* Relevante Leistungen */}
          {page.relevanteLeistungen.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wide mb-4">Passende Leistungen</h3>
              <div className="flex flex-wrap gap-2">
                {page.relevanteLeistungen.map(slug => {
                  const moduleMap: Record<string, string> = {
                    "marketing-leadgenerierung": "Marketing & Leadgenerierung",
                    "sales-vertriebsprozesse": "Sales & Vertriebsprozesse",
                    "operations-automatisierung": "Operations & Automatisierung",
                    "recruiting-teamaufbau": "Recruiting & Teamaufbau",
                  };
                  return <ModuleTag key={slug} module={moduleMap[slug] || slug} />;
                })}
              </div>
            </div>
          )}

          {/* Relevante Cases */}
          {relatedCases.length > 0 && (
            <div>
              <h2 className="text-title font-bold text-white mb-8">Das haben wir bereits umgesetzt</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedCases.map((c, i) => (
                  <CaseTeaser key={c.slug} caseItem={c} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-headline font-bold text-white mb-8"
            >
              Häufige <span className="font-serif italic text-white/50">Fragen</span>
            </motion.h2>
            <div className="space-y-3">
              {page.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-white font-semibold pr-4">{faq.frage}</span>
                    <ChevronDown className={`w-5 h-5 text-white/40 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 -mt-1">
                      <p className="text-white/60 text-sm leading-relaxed">{faq.antwort}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA headline={page.ctaHeadline} subline={page.ctaSubline} />
    </div>
  );
};

export default SeoLandingPage;
