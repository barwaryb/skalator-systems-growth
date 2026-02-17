import { motion } from "framer-motion";
import Breadcrumbs from "./Breadcrumbs";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeroProps {
  label?: string;
  headline: string;
  highlightWord?: string;
  subline?: string;
  breadcrumbs: BreadcrumbItem[];
}

const PageHero = ({ label, headline, highlightWord, subline, breadcrumbs }: PageHeroProps) => {
  const renderHeadline = () => {
    if (!highlightWord) return headline;
    const parts = headline.split(highlightWord);
    return (
      <>
        {parts[0]}<span className="font-serif italic text-white/50">{highlightWord}</span>{parts[1] || ""}
      </>
    );
  };

  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="section-container relative z-10">
        <Breadcrumbs items={breadcrumbs} />
        
        {label && (
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {label}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-display font-bold text-white mb-6"
        >
          {renderHeadline()}
        </motion.h1>

        {subline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg text-white/60 max-w-2xl"
          >
            {subline}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
