import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Plane, Car, Bus, Truck, Users, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const transportServices = [
  {
    title: "JET PRIVÉ & AVION",
    icon: Plane,
    description: "Réservez ton billet d'avion en toute sérénité",
    details: "Vol privé, première classe ou économique selon vos besoins",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    color: "primary",
    features: ["Vol privé disponible", "Réservation flexible", "Service VIP"]
  },
  {
    title: "LOCATION DE VOITURE", 
    icon: Car,
    description: "Louez la voiture pour des trajets sans soucis",
    details: "Large gamme de véhicules pour tous vos déplacements",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    color: "secondary",
    features: ["Assurance incluse", "Véhicules récents", "Livraison possible"]
  },
  {
    title: "BUS & TRAIN",
    icon: Bus,
    description: "Tout bus ou taxi train réservé selon tes disponibilités",
    details: "Transport confortable pour vos groupes",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    color: "accent",
    features: ["Transport de groupe", "Itinéraires personnalisés", "Confort optimal"]
  },
  {
    title: "VAN",
    icon: Truck,
    description: "Pour tes trajets en groupe ou en famille quoi de mieux qu'un van ?",
    details: "Solution idéale pour les petits groupes",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    color: "primary",
    features: ["8-15 places", "Équipé et moderne", "Conducteur professionnel"]
  }
];

const TransportPage = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-fade-in">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-gradient">SERVICE DE RÉSERVATION</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-black mb-8">
              <span className="text-outline">POUR TOUTES LOCATIONS</span>{" "}
              <span className="text-gradient-secondary">DE TRANSPORT</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Du jet privé au van familial, nous organisons tous vos <span className="text-gradient font-bold">déplacements</span> pour que votre voyage soit parfait !
            </p>
          </div>
        </div>
      </section>

      {/* Services Transport Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="group hover-lift interactive-card border-2 stagger-child">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className={`bg-${service.color}/20 backdrop-blur-sm rounded-full p-3`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className={`text-lg font-black text-gradient${service.color === 'secondary' ? '-secondary' : service.color === 'accent' ? '-accent' : ''}`}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                    <p className="text-sm font-medium">
                      {service.details}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <div className={`w-2 h-2 rounded-full bg-${service.color}`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full group">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient-accent">POURQUOI CHOISIR</span>{" "}
              <span className="text-outline">NOS SERVICES ?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 bg-card/80 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-gradient">Réservation 24h/24</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Service de réservation disponible à tout moment pour vos urgences
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-card/80 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-gradient-secondary">Transport de groupe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Solutions adaptées pour tous les types et tailles de groupes
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-card/80 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-gradient-accent">Partout en Europe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Réseau étendu de partenaires dans toute l'Europe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-light italic text-muted-foreground mb-8">
              "Je n'ai pas encore été partout, mais c'est sur ma liste."
            </blockquote>
            <cite className="text-lg text-gradient font-semibold">- Susan Sontag</cite>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-hero p-12 rounded-3xl text-center text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              LET'S GO !
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Réservez dès maintenant votre transport pour votre prochain voyage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-background">
                  RÉSERVER MAINTENANT
                </Button>
              </Link>
              <Link to="/destinations">
                <Button variant="secondary" size="xl">
                  VOIR NOS DESTINATIONS
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportPage;