import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MentionsLegalesPage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-8 text-gradient">
              Mentions Légales
            </h1>
            
            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Éditeur du site</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p><strong>Raison sociale :</strong> Infinity Travel</p>
                  <p><strong>Forme juridique :</strong> SARL</p>
                  <p><strong>Capital social :</strong> 10 000 euros</p>
                  <p><strong>RCS :</strong> Paris B 123 456 789</p>
                  <p><strong>SIRET :</strong> 123 456 789 00012</p>
                  <p><strong>Numéro de TVA intracommunautaire :</strong> FR12345678901</p>
                  <p><strong>Adresse :</strong> 123 Avenue des Voyages, 75001 Paris, France</p>
                  <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                  <p><strong>Email :</strong> contact@infinitytravel.fr</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Directeur de la publication</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p><strong>Nom :</strong> [Nom du directeur]</p>
                  <p><strong>Qualité :</strong> Gérant</p>
                </div>
              </section>

              {/* <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Hébergement</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p><strong>Hébergeur :</strong> Lovable</p>
                  <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
                </div>
              </section> */}

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Immatriculation Atout France</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p><strong>Numéro d'immatriculation :</strong> IM075123456</p>
                  <p>Infinity Travel est immatricué au registre des opérateurs de voyages et de séjours tenu par Atout France.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Assurance Responsabilité Civile Professionnelle</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p><strong>Assureur :</strong> Hiscox</p>
                  <p><strong>Adresse :</strong> 19 rue Louis Le Grand, 75002 Paris</p>
                  <p><strong>Numéro de police :</strong> [Numéro de police]</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Garantie Financière</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p><strong>Organisme garant :</strong> Société Générale</p>
                  <p><strong>Adresse :</strong> 29 boulevard Haussmann, 75009 Paris</p>
                  <p><strong>Montant de la garantie :</strong> 100 000 euros</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Propriété intellectuelle</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                  <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Conditions d'utilisation</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>L'utilisation du présent site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation de responsabilité</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.</p>
                  <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MentionsLegalesPage;