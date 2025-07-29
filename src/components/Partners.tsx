import { Card, CardContent } from "@/components/ui/card";
import { Handshake } from "lucide-react";

const partners = [
  {
    name: "Société Générale",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRTQwMjEzIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U09DSUVURSBHRU5FUkFMRTwvdGV4dD4KPHN2Zz4="
  },
  {
    name: "Hiscox",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDA0N0FCII8+Cjx0ZXh0IHg9IjYwIiB5PSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SELTQ09YPC90ZXh0Pgo8c3ZnPg=="
  },
  {
    name: "Atout France",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRTQwMjEzIi8+Cjx0ZXh0IHg9IjMwIiB5PSIxNiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSI+QVRPVVQ8L3RleHQ+Cjx0ZXh0IHg9IjMwIiB5PSIyOCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSI+RlJBTkNFPC90ZXh0Pgo8cmVjdCB4PSI3NSIgeT0iOCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMDA0N0FCIi8+CjxzdGc+"
  },
  {
    name: "Les Entreprises du Voyage",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDA3QkE3Ii8+Cjx0ZXh0IHg9IjYwIiB5PSIxNiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5MRVMgRU5UUkVQUklTRVM8L3RleHQ+Cjx0ZXh0IHg9IjYwIiB5PSIyOCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EVSBWT1lBR0U8L3RleHQ+CjxzdG1nPg=="
  }
];

const Partners = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-accent w-20"></div>
            <Handshake className="w-8 h-8 text-accent" />
            <div className="h-px bg-gradient-accent w-20"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="text-gradient-accent">NOS</span>{" "}
            <span className="text-outline">PARTENAIRES</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des partenaires de confiance qui nous accompagnent pour vous offrir 
            les <span className="text-gradient font-bold">meilleures expériences de voyage</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-smooth border-2 hover:border-accent/30 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 flex items-center justify-center h-24">
                <img 
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Vous souhaitez devenir partenaire ? 
            <span className="text-gradient-accent font-bold"> Contactez-nous !</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-sm font-semibold text-primary">Assurance voyage</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full">
              <span className="text-sm font-semibold text-secondary">Hébergement</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
              <span className="text-sm font-semibold text-accent">Transport</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-sm font-semibold text-primary">Activités</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;