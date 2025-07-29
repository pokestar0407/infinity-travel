import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Award, Phone, Mail, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const teamValues = [
  {
    icon: Heart,
    title: "Passion",
    description: "Notre équipe vit et respire le voyage. Chaque destination nous inspire.",
    color: "accent"
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Nous créons des liens durables avec nos voyageurs et entre eux.",
    color: "secondary"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nous nous engageons à offrir des expériences d'exception.",
    color: "primary"
  }
];

const stats = [
  { number: "500+", label: "Événements organisés", color: "primary" },
  { number: "50K+", label: "Voyageurs satisfaits", color: "secondary" },
  { number: "95%", label: "Taux de satisfaction", color: "accent" },
  { number: "24/7", label: "Support client", color: "primary" }
];

const AboutPage = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-10 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6">
              <span className="text-gradient-accent">UNE ÉQUIPE</span>{" "}
              <span className="text-outline">À VOTRE</span>{" "}
              <span className="text-gradient">ÉCOUTE</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez l'équipe passionnée qui <span className="text-gradient font-bold">transforme vos rêves</span> en aventures extraordinaires !
            </p>
          </div>
        </div>
      </section>

      {/* Team Image & Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="relative scroll-slide-left">
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2" 
                alt="Équipe Infinity Travel en réunion"
                className="rounded-2xl shadow-primary w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-black">Notre équipe</h3>
                <p className="opacity-90">Passionnés et dévoués</p>
              </div>
            </div>

            <div className="space-y-6 scroll-slide-right">
              <h2 className="text-4xl md:text-5xl font-black">
                <span className="text-gradient">NOTRE</span>{" "}
                <span className="text-outline">HISTOIRE</span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Infinity Travel est née d'une passion commune : <span className="text-gradient font-bold">créer des expériences inoubliables</span> pour les jeunes aventuriers.
                </p>
                <p>
                  Notre équipe de passionnés travaille sans relâche pour vous offrir des voyages qui marquent une vie. Nous croyons que chaque destination cache des trésors à découvrir.
                </p>
                <p>
                  Avec plus de <span className="text-gradient-secondary font-bold">500 événements organisés</span> et <span className="text-gradient-accent font-bold">50 000 voyageurs</span> accompagnés, nous continuons d'innover pour vous offrir l'extraordinaire.
                </p>
              </div>

              <Button variant="gradient" size="lg" className="group">
                DÉCOUVRIR NOS SERVICES
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient-secondary">NOS</span>{" "}
              <span className="text-outline">VALEURS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ce qui nous guide dans chaque projet et chaque aventure
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {teamValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="border-2 bg-card/80 backdrop-blur-sm text-center group hover:shadow-lg transition-all duration-300 stagger-child">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-${value.color}/10 rounded-2xl mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-8 h-8 text-${value.color}`} />
                    </div>
                    <CardTitle className={`text-gradient${value.color === 'secondary' ? '-secondary' : value.color === 'accent' ? '-accent' : ''}`}>
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center stagger-child">
                <div className={`text-4xl md:text-5xl font-black mb-2 text-gradient${stat.color === 'secondary' ? '-secondary' : stat.color === 'accent' ? '-accent' : ''}`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-accent opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 bg-card/90 backdrop-blur-sm scroll-slide-left">
              <CardHeader>
                <CardTitle className="text-3xl font-black text-gradient">
                  NOTRE MISSION
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Nous rendons le voyage accessible à tous les jeunes en créant des expériences sur mesure qui marquent une vie.
                </p>
                <p className="text-muted-foreground">
                  Chaque aventure que nous organisons est pensée pour créer des souvenirs inoubliables et tisser des liens durables entre les participants.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-card/90 backdrop-blur-sm scroll-slide-right">
              <CardHeader>
                <CardTitle className="text-3xl font-black text-gradient-secondary">
                  NOTRE VISION
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Devenir la référence européenne du voyage événementiel pour les jeunes générations.
                </p>
                <p className="text-muted-foreground">
                  Nous voulons inspirer une communauté mondiale de voyageurs qui découvrent le monde ensemble et créent des liens qui durent toute une vie.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-hero p-12 rounded-3xl text-center text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              REJOIGNEZ L'AVENTURE
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Prêt à vivre des expériences extraordinaires avec notre équipe ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-background">
                  NOUS CONTACTER
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

export default AboutPage;