import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Clock, Video, Shield, Sparkles } from "lucide-react";
import iconCalendar from "@/assets/icon-calendar.png";

const GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1J8LB-Qt3tzOmUygFk9PqamtOzvM1qo1PxXQxiodbMZBa41kcDQfFBhXAH0YwOoR_0uWt4tmpe";

const benefits = [
  { icon: Clock, text: "30 Min. Strategiegespräch" },
  { icon: Video, text: "Per Video-Call" },
  { icon: Shield, text: "100% Vertraulich" },
  { icon: Sparkles, text: "Sofort umsetzbare Insights" },
];

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="kontakt" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="section-label mb-4 block">Kostenlos & Unverbindlich</span>
          <h2 className="text-headline text-white">
            Strategiegespräch{" "}
            <em className="font-serif not-italic text-white/40">buchen.</em>
          </h2>
          <p className="text-body-lg text-white/40 max-w-2xl mt-4">
            In 30 Minuten analysieren wir gemeinsam, wo dein größtes Wachstumspotenzial liegt — und ob wir zusammenpassen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {/* What to expect */}
            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-7 md:p-9">
              <h3 className="text-lg font-medium text-white mb-6">Was dich erwartet</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      <b.icon className="w-4 h-4 text-white/50" />
                    </div>
                    <span className="text-sm text-white/60">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-7 md:p-9">
              <h3 className="text-lg font-medium text-white mb-6">So funktioniert's</h3>
              <div className="space-y-5">
                {[
                  { num: "01", title: "Termin wählen", desc: "Wähle einen passenden Zeitslot" },
                  { num: "02", title: "Details angeben", desc: "Kurz dein Anliegen beschreiben" },
                  { num: "03", title: "Gespräch führen", desc: "Wir analysieren deine Situation" },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <span className="text-xs font-mono text-white/20 mt-1">{step.num}</span>
                    <div>
                      <h4 className="text-sm font-medium text-white mb-0.5">{step.title}</h4>
                      <p className="text-xs text-white/40">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Booking card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-28"
          >
            <div className="noise-card rounded-2xl border border-white/10 bg-[#0a0a0a] p-7 md:p-9 relative overflow-hidden">
              <div className="absolute inset-0 dot-pattern opacity-20" />

              <div className="relative z-10">
                <img src={iconCalendar} alt="" className="w-14 h-14 mb-6" loading="lazy" />

                <h3 className="text-2xl font-light text-white tracking-tight mb-2">
                  Termin vereinbaren
                </h3>
                <p className="text-sm text-white/40 mb-8">
                  Wähle einen Zeitslot, der für dich passt. Ich melde mich pünktlich per Video-Call.
                </p>

                {/* Availability */}
                <div className="flex items-center gap-2 mb-6 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                    <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                  </div>
                  <span className="text-xs font-medium text-emerald-400/80">Termine diese Woche verfügbar</span>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <a
                    href={GOOGLE_CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-white text-black rounded-full px-6 py-4 font-medium text-sm hover:bg-white/90 transition-all group"
                  >
                    Jetzt Termin buchen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="mailto:kontakt@skalator.de"
                    className="flex items-center justify-center gap-2 w-full border border-white/15 text-white/70 rounded-full px-6 py-3.5 text-sm hover:bg-white/5 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    E-Mail schreiben
                  </a>
                </div>

                {/* Trust */}
                <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/30">
                  <span>Kostenfrei</span>
                  <span>30 Minuten</span>
                  <span>Unverbindlich</span>
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
