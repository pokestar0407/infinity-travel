import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8">
            REJOIGNEZ L'AVENTURE
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Prêt à vivre des expériences extraordinaires avec notre équipe ?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-sm sm:text-lg px-8 sm:px-12 py-4 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto"
              >
                NOUS CONTACTER
              </Button>
            </Link>
            
            <Link to="/destinations">
              <Button 
                size="lg" 
                className="text-sm sm:text-lg px-8 sm:px-12 py-4 bg-white text-primary hover:bg-white/90 transition-all duration-300 w-full sm:w-auto"
              >
                VOIR NOS DESTINATIONS
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;