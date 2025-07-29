import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Youtube } from "lucide-react";

const Devis = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-gradient">REJOIGNEZ</span>{" "}
            <span className="text-outline">LA COMMUNAUTÉ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à vivre des expériences <span className="text-gradient-secondary font-bold">inoubliables</span> ? 
            Contactez-nous et faisons de vos événements des <span className="text-gradient-accent font-bold">moments légendaires</span>
          </p>
        </div>

        <div className="flex justify-center">
        {/* Formulaire de contact */}
          <Card className="border-2 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-black text-gradient">
                PARLEZ-NOUS DE VOTRE PROJET
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                    Prénom
                  </label>
                  <Input placeholder="Votre prénom" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                    Nom
                  </label>
                  <Input placeholder="Votre nom" className="h-12" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="votre.email@exemple.com" className="h-12" />
              </div>
              
              <div>
                <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                  Type d'événement
                </label>
                <Input placeholder="Soirée, concert, festival..." className="h-12" />
              </div>
              
              <div>
                <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                  Décrivez votre projet
                </label>
                <Textarea 
                  placeholder="Parlez-nous de votre vision, du nombre de participants, de la date souhaitée..."
                  className="min-h-32 resize-none"
                />
              </div>

              <Button variant="gradient" size="lg" className="w-full group">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                ENVOYER LE MESSAGE
              </Button>
            </CardContent>
          </Card>

        
        
        </div>
      </div>
    </section>
  );
};

export default Devis;