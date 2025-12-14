import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-accent to-transparent opacity-60 blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-[25%] w-96 h-96 rounded-full bg-gradient-to-tl from-secondary to-transparent opacity-40 blur-3xl"
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-1/2 right-0 w-px h-40 bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
      <div className="absolute top-1/3 right-[20%] w-px h-24 bg-gradient-to-b from-transparent via-foreground/5 to-transparent" />

      <div className="section-container section-padding relative z-10 pt-32">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 text-sm text-foreground/50 font-body">
              <span className="w-8 h-px bg-foreground/30" />
              Growth Operator · Systemarchitekt
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-normal text-foreground mb-8 leading-[1.05] tracking-tight"
          >
            Ich helfe Unternehmen,
            <br />
            <span className="text-foreground/40">planbar zu wachsen.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-foreground/50 mb-4 max-w-2xl font-light leading-relaxed"
          >
            Durch klare Systeme für Marketing, Recruiting und Prozesse.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-foreground/40 mb-12"
          >
            Automatisiert. Strukturiert. Skalierbar.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="premium" size="premium-lg" asChild className="group">
              <a href="#kontakt" className="flex items-center gap-3">
                Gespräch vereinbaren
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </a>
            </Button>
            <Button variant="premium-outline" size="premium-lg" asChild>
              <a href="#leistungen">Mehr erfahren</a>
            </Button>
          </motion.div>

          {/* Stats or trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 pt-10 border-t border-border/50"
          >
            <div className="flex flex-wrap gap-12 text-sm text-foreground/40">
              <div>
                <span className="block text-2xl font-heading text-foreground mb-1">5+</span>
                Jahre Erfahrung
              </div>
              <div>
                <span className="block text-2xl font-heading text-foreground mb-1">20+</span>
                Systeme aufgebaut
              </div>
              <div>
                <span className="block text-2xl font-heading text-foreground mb-1">DACH</span>
                Region
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-foreground/20 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ height: ["20%", "40%", "20%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 bg-foreground/30 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
