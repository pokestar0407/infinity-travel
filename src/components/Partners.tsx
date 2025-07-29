import { Card, CardContent } from "@/components/ui/card";
import { Handshake } from "lucide-react";
import sg from "@/assets/partenaires/sg.png";
import hiscox from "@/assets/partenaires/hiscox.png";
import  atoutFrance from "@/assets/partenaires/atout-france.png";
import entreprisesVoyage from "@/assets/partenaires/entreprises-voyage.png";

const partners = [
  {
    name: "Société Générale",
    logo: sg,
  },
  {
    name: "Hiscox",
    logo: hiscox,
  },
  {
    name: "Atout France",
    logo: atoutFrance,
  },
  {
    name: "Les Entreprises du Voyage",
    logo: entreprisesVoyage,
  }
];

const Partners = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-accent w-20"></div>
            <Handshake className="w-8 h-8 text-accent" />
            <div className="h-px bg-gradient-accent w-20"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="text-gradient-accent">NOS</span>{" "}
            <span className="text-outline">PARTENAIRES</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des partenaires de confiance qui nous accompagnent pour vous offrir 
            les <span className="text-gradient font-bold">meilleures expériences de voyage</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <Card 
              key={index}
              className="group hover-lift interactive-card border-2 stagger-child"
            >
              <CardContent className="p-8 flex items-center justify-center h-24">
                <img 
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Vous souhaitez devenir partenaire ? 
            <span className="text-gradient-accent font-bold"> Contactez-nous !</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-sm font-semibold text-primary">Assurance voyage</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full">
              <span className="text-sm font-semibold text-secondary">Hébergement</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
              <span className="text-sm font-semibold text-accent">Transport</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-sm font-semibold text-primary">Activités</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;