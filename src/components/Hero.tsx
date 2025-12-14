import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-background pt-20">
      <div className="section-container section-padding">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-display font-normal text-foreground mb-6"
          >
            Ich helfe Unternehmen, planbar zu wachsen.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-subheadline text-foreground/60 mb-4 max-w-xl"
          >
            Durch klare Systeme für Marketing, Recruiting und Prozesse.
            <br />
            Automatisiert. Strukturiert. Skalierbar.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-foreground/50 mb-10"
          >
            Für Unternehmer, die auch 2026 und darüber hinaus wachsen wollen.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="premium" size="premium" asChild>
              <a href="#kontakt">Gespräch vereinbaren</a>
            </Button>
            <Button variant="premium-outline" size="premium" asChild>
              <a href="#leistungen">Mehr erfahren</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
