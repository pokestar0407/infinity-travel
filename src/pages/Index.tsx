// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Destinations from "@/components/Destinations";
// import Clients from "@/components/Clients";
// import Services from "@/components/Services";
// import Partners from "@/components/Partners";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// const Index = () => {
//   useScrollAnimation();
  
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <main>
//         <Hero />
//         <Destinations />
//         <Clients />
//         <Services />
//         <Partners />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;
import { useEffect, useState } from "react";
import maintenanceHero from "@/assets/maintenance-hero.jpg";

const Index = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: "6s", animationDelay: "1s" }} />
      </div>

      <main className="relative z-10 max-w-4xl w-full">
        <div className="bg-card/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-border/50">
          {/* Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            {/* <img 
              src={maintenanceHero} 
              alt="Site en maintenance" 
              className="w-full h-64 object-cover"
            /> */}
          </div>

          {/* Content */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Maintenance en cours
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
              Site en Maintenance
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nous améliorons votre expérience. Notre équipe travaille dur pour vous offrir 
              quelque chose d'encore meilleur. Nous serons de retour très bientôt!
            </p>

            {/* Progress bar */}
            <div className="max-w-md mx-auto space-y-3 pt-4">
              <div className="h-3 bg-secondary rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ease-out relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" 
                       style={{ 
                         backgroundSize: "200% 100%",
                         animation: "shimmer 2s infinite"
                       }} />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Progression de la mise à jour 
              </p>
            </div>

            {/* Contact */}
            {/* <div className="pt-8 border-t border-border/50">
              <p className="text-muted-foreground mb-3">
                Besoin d'aide ? Contactez-nous
              </p>

              <a 
                href="mailto:contact@exemple.fr" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@exemple.fr
              </a>
            </div> */}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground mt-6 opacity-70">
          Merci pour votre patience et votre compréhension
        </p>
      </main>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Index;
