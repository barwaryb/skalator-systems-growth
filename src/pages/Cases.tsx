import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import { casesData, filterCategories } from "@/data/casesData";

const Cases = () => {
  const [activeFilter, setActiveFilter] = useState("Alle");

  useEffect(() => {
    document.title = "Fallstudien – Echte Resultate durch Skalierung & Automatisierung | Skalator";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Echte Unternehmen. Echte Probleme. Echte Lösungen. Entdecke wie Skalator Unternehmen hilft, planbar zu wachsen und Kosten zu senken.");
  }, []);

  const filteredCases = activeFilter === "Alle"
    ? casesData
    : casesData.filter(c => c.brancheFilter === activeFilter);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHero
        label="Case Files"
        headline="Resultate. Keine Stories."
        highlightWord="Stories."
        subline="Echte Unternehmen. Echte Probleme. Echte Lösungen."
        breadcrumbs={[{ label: "Cases" }]}
      />

      <section className="section-padding bg-[#0a0a0a] relative overflow-hidden -mt-8">
        <div className="section-container relative z-10">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-white/5 text-white/60 border border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
            {filteredCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={`/cases/${caseItem.slug}`}
                  className="group block bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:p-8 hover:border-accent/30 hover:bg-white/[0.05] transition-all duration-300 h-full overflow-hidden"
                >
                  <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-4">
                    {caseItem.branche}
                  </span>
                  <h3 className="text-base md:text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors leading-tight break-words">
                    {caseItem.headline}
                  </h3>
                  <p className="text-sm text-white/50 mb-6 line-clamp-2">{caseItem.problem}</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-auto">
                    <span className="text-xl md:text-2xl font-bold text-accent">{caseItem.keyMetrik}</span>
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 group-hover:border-accent group-hover:text-accent whitespace-nowrap text-xs">
                      Case ansehen
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        headline="Ihr Unternehmen könnte der nächste Case sein."
        subline="Lass uns in einem kostenlosen Strategiegespräch herausfinden, wie wir ähnliche Resultate für dich erzielen."
      />
    </div>
  );
};

export default Cases;
