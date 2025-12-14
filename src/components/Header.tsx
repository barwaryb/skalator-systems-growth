import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-foreground/10"
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-display text-xl md:text-2xl tracking-tight text-foreground uppercase">
            Skalator
          </a>
          
          <a
            href="#kontakt"
            className="text-sm font-bold text-foreground uppercase tracking-wider hover:text-accent transition-colors duration-300"
          >
            Zusammenarbeiten
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
