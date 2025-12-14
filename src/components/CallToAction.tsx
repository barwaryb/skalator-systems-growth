import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle, ArrowRight, Video, Shield, Zap, Mail } from "lucide-react";

const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1J8LB-Qt3tzOmUygFk9PqamtOzvM1qo1PxXQxiodbMZBa41kcDQfFBhXAH0YwOoR_0uWt4tmpe";

const benefits = [
  { icon: Clock, text: "30 Min. Strategiegespräch" },
  { icon: Video, text: "Per Video-Call" },
  { icon: Shield, text: "100% Vertraulich" },
  { icon: Zap, text: "Sofort umsetzbare Insights" },
];

const steps = [
  { number: "01", title: "Termin wählen", description: "Wähle einen passenden Zeitslot" },
  { number: "02", title: "Details angeben", description: "Kurz dein Anliegen beschreiben" },
  { number: "03", title: "Gespräch führen", description: "Wir analysieren deine Situation" },
];

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="kontakt" className="section-padding bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      {/* Elegant dark background with subtle gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-violet-500/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-accent tracking-wide uppercase mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Kostenlos & Unverbindlich
          </motion.span>
          <h2 className="text-display font-bold text-white">
            Strategiegespräch <span className="font-serif italic text-white/50">buchen</span>
          </h2>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto mt-4">
            In 30 Minuten analysieren wir gemeinsam, wo dein größtes Wachstumspotenzial liegt – und ob wir zusammenpassen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Benefits & Steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Benefits */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Was dich erwartet
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-white/80">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                So funktioniert's
              </h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
                      <span className="text-sm font-bold text-black">{step.number}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                      <p className="text-sm text-white/50">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="sticky top-8"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 relative overflow-hidden group hover:border-accent/30 transition-all duration-500">
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5"
                animate={{ opacity: isHovered ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Glow effect */}
              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
                animate={{ scale: isHovered ? 1.2 : 1, opacity: isHovered ? 0.8 : 0.4 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">
                {/* Calendar Icon */}
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-6 shadow-lg shadow-accent/30"
                  animate={{ rotate: isHovered ? [0, -5, 5, 0] : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Calendar className="w-8 h-8 text-black" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Termin vereinbaren
                </h3>
                <p className="text-white/60 mb-8">
                  Wähle einen Zeitslot, der für dich passt. Ich melde mich pünktlich per Video-Call.
                </p>

                {/* Availability indicator */}
                <div className="flex items-center gap-2 mb-6 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <span className="text-sm font-medium text-green-400">Termine diese Woche verfügbar</span>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button 
                    variant="accent" 
                    size="xl" 
                    className="w-full group shadow-glow text-lg" 
                    asChild
                  >
                    <a 
                      href={GOOGLE_CALENDAR_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Jetzt Termin buchen
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-white/20 text-white hover:bg-white/10 hover:border-white/30" 
                    asChild
                  >
                    <a 
                      href="mailto:kontakt@skalator.de"
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      E-Mail schreiben
                    </a>
                  </Button>
                </div>

                {/* Trust badges */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center gap-6 text-sm text-white/50">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Kostenfrei</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>30 Minuten</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Unverbindlich</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
