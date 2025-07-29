import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Infinity Travel - L'agence événementielle #1 des jeunes </span>
          </div>

          {/* Titre principal avec effet outline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6">
            <span className="block text-outline">VOYAGEZ</span>
            <span className="block text-gradient">VERS L'INFINI</span>
            <span className="block text-outline">DES EXPÉRIENCES</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Une communauté créée par <span className="text-gradient-secondary font-bold">VOUS</span> pour <span className="text-gradient-accent font-bold">VOUS</span> et avec <span className="text-gradient font-bold">NOUS</span>
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Embarquez pour un voyage infini d'événements extraordinaires. 
            Infinity Travel transforme vos rêves en réalité et crée des expériences qui marquent à vie !
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="gradient" size="xl" className="group">
              VOIR NOS ÉVÉNEMENTS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="xl" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              DÉCOUVRIR NOTRE UNIVERS
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Événements créés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gradient-secondary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gradient-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs flottants */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;