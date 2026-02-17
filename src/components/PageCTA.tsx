import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1J8LB-Qt3tzOmUygFk9PqamtOzvM1qo1PxXQxiodbMZBa41kcDQfFBhXAH0YwOoR_0uWt4tmpe";

interface PageCTAProps {
  headline?: string;
  subline?: string;
}

const PageCTA = ({ 
  headline = "Bereit für echte Resultate?", 
  subline = "Lass uns in einem kostenlosen Strategiegespräch herausfinden, wie wir dein Unternehmen skalieren." 
}: PageCTAProps) => {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden section-padding">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-gradient-to-tr from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-headline font-bold text-white mb-4">{headline}</h2>
          <p className="text-white/60 mb-8 text-body-lg">{subline}</p>
          <Button variant="accent" size="xl" asChild className="group">
            <a
              href={GOOGLE_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Strategiegespräch buchen
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PageCTA;
