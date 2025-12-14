import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-background border-t border-border/50">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="section-container py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-lg text-foreground block mb-2">Skalator</span>
            <p className="text-sm text-foreground/40">
              © 2024 · Botan Barwary
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:items-end gap-2"
          >
            <p className="text-sm text-foreground/40">
              DACH Region
            </p>
            <a 
              href="mailto:kontakt@skalator.de"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-300"
            >
              kontakt@skalator.de
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
