import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import Services from "@/components/Services";
import Skalator from "@/components/Skalator";
import WhySkalator from "@/components/WhySkalator";
import CaseStudies from "@/components/CaseStudies";
import Philosophy from "@/components/Philosophy";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Cards />
        <Services />
        <Skalator />
        <WhySkalator />
        <CaseStudies />
        <Philosophy />
        <Booking />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
