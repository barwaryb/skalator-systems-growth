import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-heading text-lg tracking-tight text-foreground">
            Skalator
          </a>
          
          <a
            href="#kontakt"
            className="text-sm font-body text-foreground/80 hover:text-foreground transition-colors"
          >
            Gespräch vereinbaren
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
