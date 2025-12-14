import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import About from "@/components/About";
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
        <About />
        <CaseStudies />
        <Philosophy />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
