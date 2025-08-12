// import { Button } from "@/components/ui/button";
// import { ArrowRight, Play, Star } from "lucide-react";
// import heroBg from "@/assets/hero-bg.jpg";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background avec overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${heroBg})` }}
//       />
//     <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
      
//       {/* Contenu principal */}
//       <div className="relative z-10 container mx-auto px-6 text-center pt-24 md:pt-32">
//         <div className="max-w-6xl mx-auto">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8 animate-slideInDown">
//             <Star className="w-4 h-4 text-primary" />
//             <span className="text-sm font-medium text-primary">Infinity Travel - L'agence événementielle #1 des jeunes</span>
//           </div>

//           {/* Titre principal avec effet outline */}
//           <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-6 animate-fadeInUp">
//             <span className="block text-outline">LE VOYAGE</span>
//             <span className="block text-gradient">A VOTRE</span>
//             <span className="block text-outline">PORTEÉ AVEC NOUS</span>
//           </h1>

//           {/* Sous-titre */}
//           <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
//             Une communauté créée par <span className="text-gradient-secondary font-bold">VOUS</span> pour <span className="text-gradient-accent font-bold">VOUS</span> et avec <span className="text-gradient font-bold">NOUS</span>
//           </p>

//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
//             Embarquez pour un voyage infini d'événements extraordinaires. 
//             Infinity Travel transforme vos rêves en réalité et crée des expériences qui marquent à vie !
//           </p>

//           {/* Boutons d'action */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
//             <Button variant="gradient" size="xl" className="group">
//               VOIR NOS ÉVÉNEMENTS
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Button>
            
//             <Button variant="outline" size="xl" className="group">
//               <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
//               DÉCOUVRIR NOTRE UNIVERS
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto pb-12">
//             <div className="text-center stagger-child">
//               <div className="text-3xl md:text-4xl font-black text-gradient mb-2">500+</div>
//               <div className="text-sm text-muted-foreground uppercase tracking-wide">Événements créés</div>
//             </div>
//             <div className="text-center stagger-child">
//               <div className="text-3xl md:text-4xl font-black text-gradient-secondary mb-2">50K+</div>
//               <div className="text-sm text-muted-foreground uppercase tracking-wide">Participants</div>
//             </div>
//             <div className="text-center stagger-child">
//               <div className="text-3xl md:text-4xl font-black text-gradient-accent mb-2">95%</div>
//               <div className="text-sm text-muted-foreground uppercase tracking-wide">Satisfaction</div>
//             </div>
//             <div className="text-center stagger-child">
//               <div className="text-3xl md:text-4xl font-black text-gradient mb-2">24/7</div>
//               <div className="text-sm text-muted-foreground uppercase tracking-wide">Support</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Éléments décoratifs flottants */}
//       <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
//       <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
//       <div className="absolute top-1/2 left-5 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
//     </section>
//   );
// };

// export default Hero;

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec overlay sombre amélioré */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8 animate-slideInDown">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Infinity Travel - L'agence événementielle #1 des jeunes
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-6 animate-fadeInUp">
            <span className="block text-outline-white">LE VOYAGE</span>
            <span className="block text-gradient">A VOTRE</span>
            <span className="block text-outline-white">PORTÉE AVEC NOUS</span>
          </h1>

          {/* Sous-titres */}
          <p
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Une communauté créée par{" "}
            <span className="text-gradient-secondary font-bold">VOUS</span> pour{" "}
            <span className="text-gradient-accent font-bold">VOUS</span> et avec{" "}
            <span className="text-gradient font-bold">NOUS</span>
          </p>

          <p
            className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-12 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Embarquez pour un voyage infini d'événements extraordinaires.
            Infinity Travel transforme vos rêves en réalité et crée des
            expériences qui marquent à vie !
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="gradient" size="lg" className="group text-sm sm:text-lg px-6 sm:px-10 w-full sm:w-auto max-w-xs sm:max-w-none">
              VOIR NOS ÉVÉNEMENTS
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button variant="outline" size="lg" className="group text-sm sm:text-lg px-6 sm:px-10 w-full sm:w-auto max-w-xs sm:max-w-none">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              DÉCOUVRIR NOTRE UNIVERS
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto pb-12">
            <div className="text-center stagger-child">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2">150+</div>
              <div className="text-sm text-white uppercase tracking-wide">Événements créés</div>
            </div>
            <div className="text-center stagger-child">
              <div className="text-3xl md:text-4xl font-black text-gradient-secondary mb-2">12k+</div>
              <div className="text-sm text-white uppercase tracking-wide">Participants</div>
            </div>
            <div className="text-center stagger-child">
              <div className="text-3xl md:text-4xl font-black text-gradient-accent mb-2">95%</div>
              <div className="text-sm text-white uppercase tracking-wide">Satisfaction</div>
            </div>
            <div className="text-center stagger-child">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2">24/7</div>
              <div className="text-sm text-white uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Déco flottante */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div
        className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-5 w-12 h-12 bg-accent/20 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      />
    </section>
  );
};

export default Hero;
