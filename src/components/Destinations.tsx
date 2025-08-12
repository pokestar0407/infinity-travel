
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import lloretDelMar from "@/assets/destinations/lloret-del-mar.jpg";
import barcelone from "@/assets/destinations/barcelone.jpg";
import dubai from "@/assets/destinations/dubai.jpg";
import amsterdam from "@/assets/destinations/amsterdam.jpg";

const destinations = [
  {
    name: "Lloret del Mar",
    image: lloretDelMar,
    description: "Soleil, plage et fiesta Partez Avec Infinity Travel pour un séjour tout compris à Lloret del Mar : transport, hébergement, pool party, boat party, soirées exclusives et détente sur les plus belles plages de la Costa Brava. Le spot idéal pour faire la fête entre amis !"
  },
  {
    name: "Barcelone", 
    image: barcelone,
    description: "Entre culture, soleil et ambiance unique Avec Infinity Travel, explorez Barcelone comme jamais : flânez dans ses ruelles animées, détendez-vous sur les plages urbaines, vivez l’énergie de la ville entre tapas, rooftop et soirées vibrantes. Un city trip mêlant découvertes, moments chill et ambiance festive, votre rythme."
  },
  {
    name: "Dubai",
    image: dubai,
    description: "Dubaï — Luxe, dépaysement et sensations fortes  Avec Infinity Travel, découvrez Dubaï sous son plus beau jour : entre plages, désert, buildings futuristes et soirées raffinées, vivez une expérience unique mêlant aventure",
  },
  {
    name: "Amsterdam",
    image: amsterdam,
    description: "Amsterdam — Liberté, charme et ambiance unique  Avec Infinity Travel, partez à la découverte d’Amsterdam : ses canaux romantiques, ses quartiers vibrants, ses musées incontournables et ses soirées conviviales. Une escapade idéale entre culture, détente et une touche de fête dans l’une des capitales les plus branchées d’Europe.",
  }
];

const Destinations = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-hero w-20"></div>
            <Plane className="w-8 h-8 text-primary" />
            <div className="h-px bg-gradient-hero w-20"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {destinations.map((destination, index) => (
            <Card 
              key={index}
              className="group transition-all duration-300 hover:scale-[1.02] hover:shadow-md border border-border/50 stagger-child overflow-hidden bg-card/90 backdrop-blur-sm"
            >
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
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
                <Link to="/devis">
                  <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    Découvrir
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/destinations">
            <Button variant="gradient" size="lg" className="group text-sm sm:text-lg px-6 sm:px-10 w-full sm:w-auto max-w-xs sm:max-w-none">
              VOIR TOUTES NOS DESTINATIONS
              <Plane className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
