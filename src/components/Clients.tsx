import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building, GraduationCap, Briefcase } from "lucide-react";

const clientTypes = [
  {
    icon: Users,
    title: "Association",
    description: "Voyages de groupe personnalisés pour associations et clubs",
    image: "photo-1519389950473-47ba0277781c",
    color: "primary"
  },
  {
    icon: Briefcase,
    title: "Comité d'entreprise",
    description: "Séjours et incentives pour comités d'entreprise",
    image: "photo-1488590528505-98d2b5aba04b",
    color: "secondary"
  },
  {
    icon: GraduationCap,
    title: "BDE",
    description: "Événements et voyages étudiants inoubliables",
    image: "photo-1605810230434-7631ac76ec81",
    color: "accent"
  },
  {
    icon: Building,
    title: "Entreprises",
    description: "Solutions voyage sur-mesure pour entreprises",
    image: "photo-1487058792275-0ad4aaf24ca7",
    color: "primary"
  }
];

const Clients = () => {
  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-secondary w-20"></div>
            <Users className="w-8 h-8 text-secondary" />
            <div className="h-px bg-gradient-secondary w-20"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-outline">NOS</span>{" "}
            <span className="text-gradient-secondary">CLIENTS</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed">
            Depuis sa création, notre équipe, passionnée de voyages et attachée aux valeurs humaines de partage, 
            met son expertise, sa créativité et son professionnalisme au service des organisateurs de voyage de 
            groupe (entreprises, BDE, associations, comité d'entreprise). Nous concrétisons votre projet en 
            élaborant des <span className="text-gradient-accent font-bold">voyages clés en main inoubliables</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clientTypes.map((client, index) => {
            const Icon = client.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-2 hover:border-secondary/50 transition-smooth hover:scale-105 bg-card/80 backdrop-blur-sm"
              >
                {/* Background avec image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <img 
                    src={`https://images.unsplash.com/${client.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                    alt={client.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  
                  {/* Badge avec titre */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className={`inline-flex items-center gap-2 bg-${client.color}/90 text-${client.color}-foreground px-4 py-2 rounded-full backdrop-blur-sm`}>
                      <Icon className="w-5 h-5" />
                      <span className="font-bold text-sm">{client.title}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center">
                    {client.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="xl" className="group">
            DÉCOUVRIR NOS SERVICES
            <Building className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clients;