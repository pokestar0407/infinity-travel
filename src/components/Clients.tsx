
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building, GraduationCap, Briefcase } from "lucide-react";

const clientTypes = [
  {
    icon: Users,
    title: "Association",
    description: "Voyages de groupe personnalisés pour associations et clubs",
    image: "photo-1519389950473-47ba0277781c",
    color: "secondary"
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
    color: "secondary"
  },
  {
    icon: Building,
    title: "Entreprises",
    description: "Solutions voyage sur-mesure pour entreprises",
    image: "photo-1487058792275-0ad4aaf24ca7",
    color: "secondary"
  }
];

const Clients = () => {
  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-secondary w-20"></div>
            <Users className="w-8 h-8 text-secondary" />
            <div className="h-px bg-gradient-secondary w-20"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-outline">ILS ONT VOYAGÉ</span>{" "}
            <span className="text-gradient-secondary">AVEC NOUS</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Vivez l'expérience StudiMove
          </h3>
          
          <div className="text-center mb-12 space-y-4">
            <div className="flex items-center justify-center gap-3 text-lg">
              <span className="text-2xl">💎</span>
              <span>Des voyages conçus pour les étudiants</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <span className="text-2xl">💰</span>
              <span>Des prix accessibles, tout compris</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <span className="text-2xl">🎉</span>
              <span>Une ambiance fun et des rencontres inoubliables</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
