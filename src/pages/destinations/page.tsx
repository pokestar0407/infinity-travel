import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Star, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

// Import des images de destinations
import lloretImage from "@/assets/destinations/lloret-del-mar.jpg";
import barceloneImage from "@/assets/destinations/barcelone.jpg";
import dubaiImage from "@/assets/destinations/dubai.jpg";
import amsterdamImage from "@/assets/destinations/amsterdam.jpg";

const destinations = [
  {
    name: "Lloret del Mar",
    country: "Espagne",
    image: lloretImage,
    description: "Plages de rêve et fêtes légendaires",
    price: "À partir de 299€",
    duration: "3-7 jours",
    participants: "8-50 personnes"
  },
  {
    name: "Barcelone", 
    country: "Espagne",
    image: barceloneImage,
    description: "Culture, architecture et vie nocturne",
    price: "À partir de 399€",
    duration: "3-5 jours", 
    participants: "10-40 personnes"
  },
  {
    name: "Dubai",
    country: "Émirats Arabes Unis",
    image: dubaiImage,
    description: "Luxe et expériences extraordinaires",
    price: "À partir de 899€",
    duration: "4-7 jours",
    participants: "6-30 personnes"
  },
  {
    name: "Amsterdam",
    country: "Pays-Bas", 
    image: amsterdamImage,
    description: "Canaux, culture et liberté",
    price: "À partir de 449€",
    duration: "2-5 jours",
    participants: "8-35 personnes"
  }
];

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-gradient">DÉCOUVREZ</span>{" "}
              <span className="text-outline">NOS MAGNIFIQUES</span>{" "}
              <span className="text-gradient-secondary">DESTINATIONS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des expériences <span className="text-gradient font-bold">inoubliables</span> dans les plus belles destinations du monde.
              Chaque voyage est une <span className="text-gradient-accent font-bold">aventure unique</span> !
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <Card key={destination.name} className="group hover:shadow-primary transition-all duration-300 overflow-hidden border-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-black">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.country}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary/20 backdrop-blur-sm rounded-full p-2">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{destination.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-secondary" />
                      <span>{destination.participants}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gradient">{destination.price}</span>
                    <Button variant="outline" size="sm" className="group">
                      Découvrir
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offres Special */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-gradient-accent">DES OFFRES</span>{" "}
              <span className="text-outline">À NE PAS RATER !</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <h3 className="text-3xl font-black mb-6 text-gradient">
                Family Oriented
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Ne cherchez plus, vous y êtes ! Infinity Travel est l'agence de 
                voyage idéale pour dénicher le voyage pas cher de rêve qui, 
                en plus de ne pas agresser votre porte-monnaie, se révélera 
                absolument idéal pour trouver exactement l'ambiance dont 
                vous avez besoin pour vous remettre sur pied.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Aimez au calme, au confort simple ou luxueux, la recherche 
                avancée de notre moteur vous permet d'affiner vos choix 
                jusqu'à trouver le lieu idéal.
              </p>
              <Button variant="gradient" size="lg" className="group">
                EXPLORER NOS OFFRES FAMILIALES
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3" 
                alt="Famille sur la plage"
                className="rounded-2xl shadow-accent w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-hero p-12 rounded-3xl text-center text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              RÉSERVEZ DÈS MAINTENANT
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Totally customizable multi-city trips & instant price and book
            </p>
            <Link to="/contact">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-background">
                NOUS CONTACTER
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;