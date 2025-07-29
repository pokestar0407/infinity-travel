import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
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

  {/* Deux colonnes */}
  <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
    {/* Colonne 1 : Contact */}
    <Card className="border-2 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-black text-gradient-secondary">
          CONTACTEZ-NOUS DIRECTEMENT
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold">Téléphone</p>
            <p className="text-muted-foreground">+33 1 23 45 67 89</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
            <Mail className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-muted-foreground">hello@infinity-travel.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
            <MapPin className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="font-semibold">Adresse</p>
            <p className="text-muted-foreground">123 Boulevard de l'Infini<br />75001 Paris, France</p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Colonne 2 : Devis */}
    <div className="bg-gradient-hero p-8 rounded-2xl text-white text-center flex flex-col justify-center">
  <h3 className="text-2xl font-black mb-4">DEVIS GRATUIT</h3>
  <p className="mb-4">Obtenez une estimation personnalisée en 24h</p>

  <Link href="/devis">
    <Button
      variant="outline"
      className="border-white text-white hover:bg-white hover:text-background"
    >
      DEMANDER UN DEVIS
    </Button>
  </Link>
</div>
  </div>

  {/* Ligne en dessous, pleine largeur */}
  <div className="mt-12 max-w-6xl mx-auto">
    <Card className="border-2 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-black text-gradient-accent">
          SUIVEZ-NOUS
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
            <Instagram className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="hover:bg-secondary hover:text-secondary-foreground">
            <Twitter className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
            <Youtube className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Restez connectés pour ne rien manquer de nos prochains événements !
        </p>
      </CardContent>
    </Card>
  </div>
</div>

      {/* <div className="container mx-auto px-6 relative z-10">
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          <div className="space-y-8">
            <Card className="border-2 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-gradient-secondary">
                  CONTACTEZ-NOUS DIRECTEMENT
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">hello@infinity-travel.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-muted-foreground">123 Boulevard de l'Infini<br />75001 Paris, France</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-gradient-accent">
                  SUIVEZ-NOUS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-secondary hover:text-secondary-foreground">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Youtube className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Restez connectés pour ne rien manquer de nos prochains événements !
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-hero p-8 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-black mb-4">DEVIS GRATUIT</h3>
              <p className="mb-4">Obtenez une estimation personnalisée en 24h</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-background">
                DEMANDER UN DEVIS
              </Button>
            </div>
          </div>
        </div>
      </div> */}
      
    </section>
  );
};

export default Contact;