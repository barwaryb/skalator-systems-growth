import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import CaseStudies from "@/components/CaseStudies";
import Philosophy from "@/components/Philosophy";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Cards />
        <CaseStudies />
        <Philosophy />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
