import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CaseData } from "@/data/casesData";

const CaseTeaser = ({ caseItem, index = 0 }: { caseItem: CaseData; index?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/cases/${caseItem.slug}`}
        className="group block bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-accent/30 hover:bg-white/[0.05] transition-all duration-300"
      >
        <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-3">
          {caseItem.branche}
        </span>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {caseItem.headline}
        </h3>
        <p className="text-sm text-white/50 mb-4 line-clamp-2">{caseItem.problem}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-accent">{caseItem.keyMetrik}</span>
          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    </motion.div>
  );
};

export default CaseTeaser;
