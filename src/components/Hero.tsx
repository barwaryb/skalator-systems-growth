import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern" />
      
      <div className="section-container relative z-10">
        <div className="min-h-screen grid lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-24 pb-16">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 text-sm text-foreground-muted font-body tracking-wide">
                <span className="w-12 h-px bg-accent" />
                Growth Operator
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-display font-semibold text-foreground mb-8"
            >
              Ich baue
              <br />
              <span className="relative">
                Systeme
                <span className="absolute bottom-[0.1em] left-0 right-0 h-[0.12em] bg-accent -z-10" />
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-subheadline text-foreground-muted mb-4 max-w-lg leading-relaxed"
            >
              Die Unternehmen wachsen lassen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-2 text-lg text-foreground-muted/80 mb-12"
            >
              <p>Ohne Chaos.</p>
              <p>Ohne Agentur-Abhängigkeit.</p>
              <p>Ohne Rätselraten.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="accent" size="premium" asChild>
                <a href="#kontakt" className="flex items-center gap-3">
                  Gespräch vereinbaren
                  <span className="text-xl">→</span>
                </a>
              </Button>
              <Button variant="premium-outline" size="premium" asChild>
                <a href="#leistungen">Wie ich arbeite</a>
              </Button>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-foreground/10">
              <img
                src={heroImage}
                alt="Premium business environment"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-16 h-16 border-2 border-accent rounded-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2"
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
