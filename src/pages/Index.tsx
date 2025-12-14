import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import Skalator from "@/components/Skalator";
import CaseStudies from "@/components/CaseStudies";
import Philosophy from "@/components/Philosophy";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Cards />
        <Skalator />
        <CaseStudies />
        <Philosophy />
        <Booking />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
