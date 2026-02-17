import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  index?: number;
}

const StatCard = ({ label, value, index = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:border-accent/30 transition-colors">
        <p className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</p>
        <p className="text-sm text-white/50">{label}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
