import { useEffect } from "react";
import { motion } from "framer-motion";
import { User, Target, Wrench, Cpu, Headphones, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import StatCard from "@/components/StatCard";
import heroBotan from "@/assets/hero-botan.png";

const stats = [
  { label: "Jahre Erfahrung", value: "5+" },
  { label: "Prozesse automatisiert", value: "150+" },
  { label: "Kundenumsatz generiert", value: "30M+ €" },
  { label: "Podcast-Folgen", value: "500+" },
];

const timeline = [
  { year: "", title: "B.Sc. International IT Business", desc: "Hochschule Karlsruhe" },
  { year: "", title: "Data Analyst", desc: "EnBW Energie" },
  { year: "", title: "Sales Development Engineer", desc: "Cognex Corporation" },
  { year: "", title: "Gründung Skalator", desc: "Business Skalierung & Automatisierung" },
];

const differentiators = [
  { icon: User, title: "Solo-Operator", desc: "Direkte Kommunikation. Keine Overhead-Kosten. Schnelle Entscheidungen." },
  { icon: Target, title: "Ergebnisorientiert", desc: "Keine Folien und Konzepte. Funktionierende Systeme." },
  { icon: Wrench, title: "Praxis statt Theorie", desc: "Alles was ich empfehle, habe ich selbst gebaut und getestet." },
  { icon: Cpu, title: "Tech + Strategie", desc: "Ich verstehe beides – die Geschäftsstrategie und die technische Umsetzung." },
];

const UeberMich = () => {
  useEffect(() => {
    document.title = "Über Botan Barwary – Growth Operator & Gründer von Skalator";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "5+ Jahre Erfahrung. 150+ automatisierte Prozesse. 30M+ € Kundenumsatz generiert. Der Mensch hinter Skalator.");
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <PageHero
        label="Über mich"
        headline="Growth Operator. Kein Berater der berät – einer der baut."
        highlightWord="baut."
        breadcrumbs={[{ label: "Über mich" }]}
      />

      <section className="bg-[#0a0a0a] relative overflow-hidden">
        <div className="section-container relative z-10 space-y-20 md:space-y-28 py-8 md:py-16">
          {/* Intro + Photo */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-body-lg text-white/70 leading-relaxed">
                Ich bin <strong className="text-white">Botan Barwary</strong>, Gründer von Skalator. Ich helfe Unternehmen dabei, Wachstum nicht dem Zufall zu überlassen – sondern Systeme zu bauen, die es tragen.
              </p>
              <p className="text-body-lg text-white/70 leading-relaxed mt-4">
                Keine PowerPoints. Keine 6-Monats-Konzepte. Sondern funktionierende Strukturen, die Resultate liefern.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/5]">
                <img 
                  src={heroBotan} 
                  alt="Botan Barwary – Gründer von Skalator" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} label={s.label} value={s.value} index={i} />
            ))}
          </div>

          {/* Timeline */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-headline font-bold text-white mb-8"
            >
              Mein <span className="font-serif italic text-white/50">Weg</span>
            </motion.h2>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-5"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{item.title}</h3>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Differentiators */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-headline font-bold text-white mb-8"
            >
              Was mich <span className="font-serif italic text-white/50">unterscheidet</span>
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {differentiators.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-accent/20 transition-colors"
                >
                  <d.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{d.title}</h3>
                  <p className="text-white/50 text-sm">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Podcast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Headphones className="w-8 h-8 text-accent" />
              <h2 className="text-title font-bold text-white">Einfach Machen – Der Podcast</h2>
            </div>
            <p className="text-white/60 mb-6 max-w-2xl">
              500+ Folgen über Unternehmertum, Automatisierung und den Weg vom Machen zum Skalieren. Zusammen mit Daniel Mastakov.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" asChild className="border-white/20 text-white hover:bg-white/10">
                <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Spotify <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="border-white/20 text-white hover:bg-white/10">
                <a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Apple Podcasts <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <PageCTA headline="Lass uns sprechen." />
    </div>
  );
};

export default UeberMich;
