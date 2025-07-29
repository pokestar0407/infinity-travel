import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Heart, Gift, Star, Phone, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GroupesPage = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-10 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6">
              <span className="text-gradient-secondary">PROFITEZ</span>{" "}
              <span className="text-outline">DE NOS SUPERBES</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-8">
              <span className="text-gradient-accent">OFFRES DE GROUPES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              En famille ou entre amis, découvrez nos <span className="text-gradient font-bold">offres exceptionnelles</span> pour des moments partagés inoubliables !
            </p>
          </div>
        </div>
      </section>

      {/* Service Groupe Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="scroll-slide-left">
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="text-gradient">QU'EST CE QUE LE</span>{" "}
                <span className="text-outline">SERVICE GROUPE ?</span>
              </h2>
              
              <div className="space-y-6">
                <Card className="border-2 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <UserCheck className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Staff de qualité</h3>
                        <p className="text-muted-foreground">
                          Un staff de qualité qui saura répondre au vos besoins et pour finir un service client irréprochable.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Prise en charge totale</h3>
                        <p className="text-muted-foreground">
                          Une prise en charge totale du groupe, un guide à disposition avec des activités au choix...
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6 scroll-slide-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                  alt="Service client"
                  className="rounded-2xl shadow-secondary w-full h-64 object-cover"
                />
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Groupe d'amis"
                  className="rounded-2xl shadow-accent w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offres Exceptionnelles */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-accent opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
              Des offres exceptionnelles
            </h2>
            <h3 className="text-5xl md:text-7xl font-black">
              <span className="text-outline">ÉCONOMISER</span>
            </h3>
            <h4 className="text-4xl md:text-6xl font-black mb-8">
              <span className="text-gradient">JUSQU'À 50% SUR UN</span>
            </h4>
            <h5 className="text-4xl md:text-6xl font-black mb-8">
              <span className="text-gradient-secondary">VOYAGE DE GROUPE</span>
            </h5>
          </div>

          <div className="max-w-4xl mx-auto scroll-scale-up">
            <Card className="border-2 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-muted-foreground mb-8">
                  Everybody knows that Snow Mountain is more than mountains! 
                  Consectetur adipiscing elit. Curabitur quis pellentesque quam, 
                  quis convallis neque. Sed ullamcorper mauris justo, vitae tempus 
                  purus viverra at. Nullam sit amet nec quis elit. Nulla vitae tellus 
                  in diam ornare tincidunt ut sed dolor. Nullam non justo ac felis 
                  cursus imperdiet.
                </p>
                <Button variant="gradient" size="xl" className="group">
                  J'EN PROFITE !
                  <Gift className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Avantages Groupes */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">POURQUOI CHOISIR</span>{" "}
              <span className="text-outline">NOS GROUPES ?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="border-2 bg-card/80 backdrop-blur-sm text-center stagger-child">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-gradient">Groupes sur mesure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Adaptez votre voyage selon la taille et les envies de votre groupe
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-card/80 backdrop-blur-sm text-center stagger-child">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-gradient-secondary">Service premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un accompagnement personnalisé pour une expérience d'exception
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-card/80 backdrop-blur-sm text-center stagger-child">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-gradient-accent">Support 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Une équipe disponible à tout moment pendant votre voyage
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-hero p-12 rounded-3xl text-center text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              LE VOYAGE À VOTRE PORTÉE
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous dès maintenant pour organiser votre voyage de groupe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-background">
                  DEMANDER UN DEVIS GROUPE
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

export default GroupesPage;