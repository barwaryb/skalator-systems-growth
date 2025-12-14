import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background-pure/80 backdrop-blur-xl border-b border-border/50 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          <a href="#" className="font-heading text-xl tracking-tight text-foreground">
            Skalator
          </a>
          
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-sm font-body text-foreground/70 hover:text-foreground transition-colors duration-300 px-4 py-2 rounded-full border border-transparent hover:border-border hover:bg-background-pure/50"
          >
            Gespräch vereinbaren
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
