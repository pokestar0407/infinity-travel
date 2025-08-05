import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import CallToAction from "@/components/CallToAction";
import MobileApp from "@/components/MobileApp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Clients />
        <Services />
        <CallToAction />
        <MobileApp />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
