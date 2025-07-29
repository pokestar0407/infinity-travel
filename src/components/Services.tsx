
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Users, Zap, Target, Sparkles, Heart } from "lucide-react";

const services = [
  {
    icon: Music,
    title: "SOIRÉES & CONCERTS",
    description: "Des événements musicaux inoubliables avec les meilleurs artistes de la scène jeune",
    color: "primary"
  },
  {
    icon: Users,
    title: "ÉVÉNEMENTS ÉTUDIANTS", 
    description: "Galas, afterworks et soirées spécialement conçus pour la communauté étudiante",
    color: "secondary"
  },
  {
    icon: Zap,
    title: "FESTIVALS URBAINS",
    description: "L'organisation complète de festivals modernes et tendance en milieu urbain",
    color: "accent"
  },
  {
    icon: Target,
    title: "EXPÉRIENCES IMMERSIVES",
    description: "Des événements uniques qui marquent les esprits et créent des souvenirs durables",
    color: "primary"
  },
  {
    icon: Sparkles,
    title: "ÉVÉNEMENTS DIGITAUX",
    description: "Stream parties, événements virtuels et expériences en ligne innovantes",
    color: "secondary"
  },
  {
    icon: Heart,
    title: "COMMUNAUTÉ & RÉSEAU",
    description: "Construire des liens authentiques et une communauté soudée autour de vos passions",
    color: "accent"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-outline">NOS</span>{" "}
            <span className="text-gradient">SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Votre prochain séjour commence ici... Découvrez notre gamme complète de services 
            pour créer des <span className="text-gradient-accent font-bold">expériences extraordinaires</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="hover-lift interactive-card border-2 stagger-child overflow-hidden"
              >
                {/* Gradient background effect */}
                <div className={`absolute inset-0 bg-gradient-${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-black tracking-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="gradient" size="xl" className="group">
            DÉCOUVRIR TOUS NOS SERVICES
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
