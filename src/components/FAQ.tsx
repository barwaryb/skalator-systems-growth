import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Für wen ist die Zusammenarbeit geeignet?",
    answer: "Für Unternehmer und Geschäftsführer, die bereits ein funktionierendes Geschäft haben, aber an Kapazitätsgrenzen stoßen. Wenn du merkst, dass Wachstum ohne Strukturen nicht mehr möglich ist – dann bist du richtig."
  },
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer: "Wir starten mit einem kostenlosen Erstgespräch, um deine Situation zu verstehen. Danach entwickeln wir gemeinsam ein maßgeschneidertes System für dein Unternehmen. Die Umsetzung erfolgt Schritt für Schritt mit regelmäßigen Check-ins."
  },
  {
    question: "Wie schnell sehe ich Ergebnisse?",
    answer: "Die ersten Verbesserungen sind oft schon in den ersten 2-4 Wochen sichtbar. Nachhaltige Systemveränderungen brauchen typischerweise 3-6 Monate, um ihr volles Potenzial zu entfalten."
  },
  {
    question: "Was unterscheidet dich von anderen Beratern?",
    answer: "Ich liefere keine PowerPoint-Präsentationen, sondern funktionierende Systeme. Ich arbeite nur mit wenigen Kunden gleichzeitig, um echte Tiefe zu garantieren. Und ich sage dir, was du hören musst – nicht, was du hören willst."
  },
  {
    question: "Was kostet die Zusammenarbeit?",
    answer: "Die Investition hängt vom Umfang und der Komplexität deiner Situation ab. Im Erstgespräch besprechen wir deine Ziele und ich mache dir ein transparentes Angebot. Das Erstgespräch selbst ist kostenlos."
  },
  {
    question: "Arbeitest du remote oder vor Ort?",
    answer: "Beides ist möglich. Die meisten Projekte laufen hybrid – strategische Workshops vor Ort, regelmäßige Abstimmungen remote. So kombinieren wir Effizienz mit persönlichem Kontakt."
  }
];

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-medium tracking-wide uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-headline text-foreground mb-4">
            Häufige Fragen
          </h2>
          <p className="text-body-lg text-foreground-muted max-w-2xl mx-auto">
            Antworten auf die wichtigsten Fragen zur Zusammenarbeit.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="modern-card border-none px-6 data-[state=open]:bg-background-soft"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:text-accent hover:no-underline py-5 gap-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-muted text-base leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
