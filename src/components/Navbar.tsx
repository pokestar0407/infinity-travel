import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "ACCUEIL", href: "#home" },
    { label: "SERVICES", href: "#services" },
    { label: "ÉVÉNEMENTS", href: "#events" },
    { label: "COMMUNAUTÉ", href: "#community" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center animate-pulse-glow">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-gradient">INFINITY TRAVEL</span>
          </div>

          {/* Menu desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-bold tracking-wide hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-hero group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Boutons d'action desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="font-bold">
              CONNEXION
            </Button>
            <Button variant="gradient" className="font-bold">
              REJOINDRE
            </Button>
          </div>

          {/* Menu mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50">
            <div className="p-6 space-y-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-lg font-bold tracking-wide hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border/50 space-y-3">
                <Button variant="ghost" className="w-full font-bold">
                  CONNEXION
                </Button>
                <Button variant="gradient" className="w-full font-bold">
                  REJOINDRE
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;