import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Clients />
        <Services />
        <Partners />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
