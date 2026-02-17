import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import Services from "@/components/Services";
import Skalator from "@/components/Skalator";
import WhySkalator from "@/components/WhySkalator";
import CaseStudies from "@/components/CaseStudies";
import Philosophy from "@/components/Philosophy";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Cards />
        <Services />
        <Skalator />
        <WhySkalator />
        <CaseStudies />
        <Philosophy />
        <FAQ />
        <CallToAction />
      </main>
      <CookieBanner />
    </div>
  );
};

export default Index;
