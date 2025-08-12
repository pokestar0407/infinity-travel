
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-site.jpg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "DESTINATIONS", href: "/destinations" },
    { label: "GROUPES", href: "/groupes" },
    { label: "TRANSPORT", href: "/transport" },
    { label: "À PROPOS", href: "/about" }
  ];

  return (
    // <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border/50">

     <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center ">
              <img src={logo} alt="Infinity Travel logo" className="object-contain w-full h-full" />
            </div>
            {/* <span className="text-2xl font-black">INFINITY TRAVEL</span> */}
          </Link>

          {/* Menu desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={index}
                  to={item.href}
                  className={`text-sm font-bold tracking-wide transition-colors relative group ${
                    isActive 
                      ? 'text-gradient' 
                      : 'hover:text-primary'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-hero transition-all duration-300 ${
                    isActive 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Boutons d'action desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/devis">
              <Button variant="outline" size="sm">
                DEVIS GRATUIT
              </Button>
            </Link>
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
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={index}
                    to={item.href}
                    className={`block text-lg font-bold tracking-wide transition-colors ${
                      isActive 
                        ? 'text-gradient' 
                        : 'hover:text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border/50 space-y-3">
                <Link to="/devis">
                  <Button variant="outline" className="w-full font-bold">
                    DEVIS GRATUIT
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
