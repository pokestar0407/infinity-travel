import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Plane, Car, Bus, Truck, Users, Clock, MapPin, ArrowLeft, CheckCircle, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const transportServices = [
  {
    title: "JET PRIVÉ & AVION",
    icon: Plane,
    description: "Réservez ton billet d'avion en toute sérénité",
    details: "Vol privé, première classe ou économique selon vos besoins",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    color: "primary",
    features: ["Vol privé disponible", "Réservation flexible", "Service VIP"],
    backContent: {
      title: "Services Aériens Premium",
      description: "Voyagez avec style et confort dans nos jets privés ou en première classe.",
      detailedFeatures: [
        { icon: CheckCircle, text: "Jets privés de luxe avec équipage professionnel" },
        { icon: CheckCircle, text: "Réservation last-minute disponible 24h/24" },
        { icon: CheckCircle, text: "Service de conciergerie personnalisé" },
        { icon: CheckCircle, text: "Accès aux lounges VIP dans le monde entier" }
      ],
      pricing: "À partir de 2500€ par vol",
      contact: "Appelez-nous pour un devis personnalisé"
    }
  },
  {
    title: "LOCATION DE VOITURE", 
    icon: Car,
    description: "Louez la voiture pour des trajets sans soucis",
    details: "Large gamme de véhicules pour tous vos déplacements",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    color: "secondary",
    features: ["Assurance incluse", "Véhicules récents", "Livraison possible"],
    backContent: {
      title: "Location de Véhicules",
      description: "Des citadines aux SUV de luxe, trouvez le véhicule parfait pour votre voyage.",
      detailedFeatures: [
        { icon: CheckCircle, text: "Flotte moderne et entretenue régulièrement" },
        { icon: CheckCircle, text: "Assurance tous risques incluse" },
        { icon: CheckCircle, text: "Livraison et récupération à domicile" },
        { icon: CheckCircle, text: "GPS et équipements de sécurité fournis" }
      ],
      pricing: "À partir de 35€ par jour",
      contact: "Réservation en ligne ou par téléphone"
    }
  },
  {
    title: "BUS & TRAIN",
    icon: Bus,
    description: "Tout bus ou taxi train réservé selon tes disponibilités",
    details: "Transport confortable pour vos groupes",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    color: "accent",
    features: ["Transport de groupe", "Itinéraires personnalisés", "Confort optimal"],
    backContent: {
      title: "Transport Collectif",
      description: "Solutions de transport économiques et écologiques pour tous vos déplacements.",
      detailedFeatures: [
        { icon: CheckCircle, text: "Bus grand confort avec wifi et climatisation" },
        { icon: CheckCircle, text: "Itinéraires sur mesure pour votre groupe" },
        { icon: CheckCircle, text: "Conducteurs expérimentés et multilingues" },
        { icon: CheckCircle, text: "Tarifs dégressifs selon la taille du groupe" }
      ],
      pricing: "À partir de 15€ par personne",
      contact: "Devis gratuit sous 24h"
    }
  },
  {
    title: "VAN",
    icon: Truck,
    description: "Pour tes trajets en groupe ou en famille quoi de mieux qu'un van ?",
    details: "Solution idéale pour les petits groupes",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    color: "primary",
    features: ["8-15 places", "Équipé et moderne", "Conducteur professionnel"],
    backContent: {
      title: "Transport en Van",
      description: "L'intimité d'un véhicule privé avec la convivialité du voyage en groupe.",
      detailedFeatures: [
        { icon: CheckCircle, text: "Vans 8 à 15 places ultra-confortables" },
        { icon: CheckCircle, text: "Équipés de prises USB et wifi" },
        { icon: CheckCircle, text: "Conducteur guide parlant plusieurs langues" },
        { icon: CheckCircle, text: "Arrêts personnalisés selon vos envies" }
      ],
      pricing: "À partir de 120€ par jour",
      contact: "Réservation avec chauffeur inclus"
    }
  }
];

const TransportPage = () => {
  useScrollAnimation();
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-6">
              <span className="text-gradient">SERVICE DE RÉSERVATION</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black mb-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {transportServices.map((service, index) => {
              const IconComponent = service.icon;
              const isFlipped = flippedCards[index];
              
              return (
                <div key={service.title} className={`flip-card ${isFlipped ? 'flipped' : ''} stagger-child`}>
                  <div className="flip-card-inner">
                    {/* Face avant */}
                    <Card className="flip-card-front hover-lift interactive-card border-2">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={`${service.image}?w=400&h=300&fit=crop&auto=format,compress&q=75`}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          style={{
                            background: 'linear-gradient(45deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1))',
                          }}
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
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full group"
                          onClick={() => toggleCard(index)}
                        >
                          En savoir plus
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Face arrière */}
                    <Card className="flip-card-back border-2 bg-gradient-to-br from-background to-muted/20">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div className={`w-12 h-12 bg-${service.color}/10 rounded-xl flex items-center justify-center`}>
                            <IconComponent className={`w-6 h-6 text-${service.color}`} />
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => toggleCard(index)}
                            className="h-8 w-8 p-0"
                          >
                            <ArrowLeft className="w-4 h-4" />
                          </Button>
                        </div>
                        <CardTitle className={`text-lg font-black text-gradient${service.color === 'secondary' ? '-secondary' : service.color === 'accent' ? '-accent' : ''}`}>
                          {service.backContent.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="space-y-4 overflow-y-auto">
                        <p className="text-sm text-muted-foreground">
                          {service.backContent.description}
                        </p>
                        
                        <div className="space-y-3">
                          {service.backContent.detailedFeatures.map((feature, idx) => {
                            const FeatureIcon = feature.icon;
                            return (
                              <div key={idx} className="flex items-start gap-2 text-xs">
                                <FeatureIcon className={`w-4 h-4 text-${service.color} flex-shrink-0 mt-0.5`} />
                                <span className="text-muted-foreground">{feature.text}</span>
                              </div>
                            );
                          })}
                        </div>
                        
                        <div className="border-t pt-4 space-y-2">
                          <div className="flex items-center gap-2">
                            <Star className={`w-4 h-4 text-${service.color}`} />
                            <span className="text-sm font-semibold">{service.backContent.pricing}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className={`w-4 h-4 text-${service.color}`} />
                            <span className="text-xs text-muted-foreground">{service.backContent.contact}</span>
                          </div>
                        </div>
                        
                        <Button 
                          variant="gradient" 
                          size="sm" 
                          className="w-full mt-4"
                        >
                          Réserver maintenant
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
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
      <section className="py-8 pb-16">
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
      <Footer />
    </div>
  );
};

export default TransportPage;