import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Plane } from "lucide-react";
import lloretDelMar from "@/assets/destinations/lloret-del-mar.jpg";
import barcelone from "@/assets/destinations/barcelone.jpg";
import dubai from "@/assets/destinations/dubai.jpg";
import amsterdam from "@/assets/destinations/amsterdam.jpg";

const destinations = [
  {
    name: "Lloret del Mar",
    image: lloretDelMar,
    description: "Plages paradisiaques et fêtes inoubliables sur la Costa Brava"
  },
  {
    name: "Barcelone", 
    image: barcelone,
    description: "Art, culture et vie nocturne dans la capitale catalane"
  },
  {
    name: "Dubai",
    image: dubai,
    description: "Luxe et modernité dans la perle du Moyen-Orient"
  },
  {
    name: "Amsterdam",
    image: amsterdam,
    description: "Canaux romantiques et ambiance unique européenne"
  }
];

const Destinations = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-hero w-20"></div>
            <Plane className="w-8 h-8 text-primary" />
            <div className="h-px bg-gradient-hero w-20"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-gradient">NOS</span>{" "}
            <span className="text-outline">DESTINATIONS</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Plage ou montagne, ville ou campagne, en France ou à l'étranger : une multitude de choix 
            de voyages s'offre à vous avec <span className="text-gradient-accent font-bold">Infinity Travel</span> !
            <br className="hidden md:block" />
            Découvrez notre sélection de séjours pour des souvenirs inoubliables et des moments de découverte uniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {destinations.map((destination, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-smooth hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-white mb-2 drop-shadow-lg">
                    {destination.name}
                  </h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <MapPin className="w-4 h-4 mr-2" />
                  Découvrir
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="gradient" size="xl" className="group">
            VOIR TOUTES NOS DESTINATIONS
            <Plane className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;