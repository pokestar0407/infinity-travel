import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground/95 to-foreground text-white">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo et description */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src={logoWhite} alt="Infinity Travel" className="h-12 w-auto" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Infinity Travel transforme vos rêves en réalité. Nous créons des expériences 
              de voyage uniques et mémorables pour la communauté jeune.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white/60 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-gradient">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-primary transition-colors duration-300 text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-white/80 hover:text-primary transition-colors duration-300 text-sm">
                  Nos Destinations
                </Link>
              </li>
              <li>
                <Link to="/groupes" className="text-white/80 hover:text-primary transition-colors duration-300 text-sm">
                  Voyages Groupes
                </Link>
              </li>
              <li>
                <Link to="/transport" className="text-white/80 hover:text-primary transition-colors duration-300 text-sm">
                  Location de Transport
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-primary transition-colors duration-300 text-sm">
                  À Propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-gradient-secondary">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors duration-300 text-sm">
                  Voyages sur mesure
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors duration-300 text-sm">
                  Événements d'entreprise
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors duration-300 text-sm">
                  Séjours tout compris
                </a>
              </li>
              <li>
                <Link to="/devis" className="text-white/80 hover:text-primary transition-colors duration-300 text-sm">
                  Devis gratuit
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors duration-300 text-sm">
                  Assurance voyage
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-gradient-accent">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span className="text-white/80 text-sm">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span className="text-white/80 text-sm">contact@infinitytravel.fr</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1" />
                <span className="text-white/80 text-sm">
                  123 Avenue des Voyages<br />
                  75001 Paris, France
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-white/20 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Infinity Travel. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="/mentions-legales" className="text-white/60 hover:text-primary transition-colors duration-300 text-sm">
                Mentions légales
              </Link>
              <Link to="/cgv" className="text-white/60 hover:text-primary transition-colors duration-300 text-sm">
                CGV
              </Link>
              <Link to="/confidentialite" className="text-white/60 hover:text-primary transition-colors duration-300 text-sm">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;