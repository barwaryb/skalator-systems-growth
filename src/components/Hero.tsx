import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background flex items-center">
      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="max-w-[1400px]">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <span className="inline-flex items-center gap-3 text-sm font-bold text-foreground-muted uppercase tracking-[0.2em]">
              <span className="w-8 h-0.5 bg-accent" />
              Growth Operator
            </span>
          </motion.div>

          {/* Headline 1 */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-massive text-foreground mb-2"
          >
            Die meisten
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-massive text-foreground mb-2"
          >
            Unternehmen
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-display text-massive text-foreground/30 mb-2"
          >
            haben kein
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-display text-massive text-foreground/30"
          >
            Wachstums
            <span className="text-accent">problem.</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="w-32 h-1 bg-foreground my-12 md:my-16 origin-left"
          />

          {/* Headline 2 */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="font-display text-huge text-foreground mb-8"
          >
            Sie haben ein{" "}
            <span className="text-accent">Systemproblem.</span>
          </motion.h2>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-xl md:text-2xl text-foreground-muted max-w-2xl mb-12 font-medium"
          >
            Ich baue Strukturen, die Wachstum aushalten.
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="accent" size="2xl" asChild>
              <a href="#kontakt">Zusammenarbeiten</a>
            </Button>
            <Button variant="hard" size="2xl" asChild>
              <a href="#cases">Beispiele ansehen</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground/10 origin-left"
      />
    </section>
  );
};

export default Hero;
