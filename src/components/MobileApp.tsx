import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";

const MobileApp = () => {
  return (
    <section className="py-24 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-primary w-20"></div>
            <Smartphone className="w-8 h-8 text-primary" />
            <div className="h-px bg-gradient-primary w-20"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gradient">APPLICATION MOBILE</span><br />
            <span className="text-outline">ESPACE PERSO</span>
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Gérez tout depuis votre téléphone
          </h3>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Réservez vos voyages, gérez vos paiements et recevez vos infos pratiques en temps réel.
          </p>
          
          <div className="bg-card rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
            <h4 className="text-xl font-bold mb-6">
              Devenir la référence européenne du voyage événementiel pour les jeunes générations.
            </h4>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nous voulons inspirer une communauté mondiale de voyageurs qui découvrent le monde 
              ensemble et créent des liens qui durent toute une vie.
            </p>
            
            <Button variant="gradient" size="lg" className="group">
              <Download className="w-5 h-5 mr-2" />
              TÉLÉCHARGER L'APP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;