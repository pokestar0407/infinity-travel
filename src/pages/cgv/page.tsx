import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CGVPage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-8 text-gradient">
              Conditions Générales de Vente
            </h1>
            
            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Article 1 - Objet</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Les présentes conditions générales de vente s'appliquent à tous les voyages et séjours organisés par Infinity Travel, immatriculée au registre des opérateurs de voyages et de séjours tenu par Atout France sous le numéro IM075123456.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Article 2 - Prix</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Les prix de nos prestations sont indiqués en euros toutes taxes comprises. Ils comprennent les prestations mentionnées dans le descriptif de chaque voyage.</p>
                  <p>Les prix peuvent être révisés à la hausse ou à la baisse dans les conditions prévues à l'article L.211-12 du Code du tourisme.</p>
                  <p>Aucune révision des prix ne peut intervenir moins de 20 jours avant la date de départ.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Article 3 - Inscription et modalités de paiement</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p><strong>Inscription :</strong> L'inscription devient définitive dès versement de l'acompte prévu (généralement 25% du montant total du voyage).</p>
                  <p><strong>Solde :</strong> Le solde doit être versé au plus tard 30 jours avant la date de départ. À défaut, la réservation pourra être annulée.</p>
                  <p><strong>Paiement de dernière minute :</strong> Toute réservation effectuée moins de 30 jours avant le départ doit être réglée intégralement lors de l'inscription.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Article 4 - Annulation par le client</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Toute annulation doit être notifiée par écrit. Les frais d'annulation sont calculés selon le barème suivant :</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Plus de 30 jours avant le départ : 25% du prix total</li>
                    <li>De 30 à 21 jours avant le départ : 50% du prix total</li>
                    <li>De 20 à 8 jours avant le départ : 75% du prix total</li>
                    <li>Moins de 8 jours avant le départ : 100% du prix total</li>
                  </ul>
                  <p className="mt-4">Ces frais d'annulation peuvent être couverts par votre assurance annulation si vous en avez souscrit une.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Article 5 - Annulation par l'organisateur</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Infinity Travel se réserve le droit d'annuler un voyage si le nombre minimum de participants n'est pas atteint.</p>
                  <p>L'annulation doit être notifiée au client :</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Au plus tard 20 jours avant le départ pour un voyage d'une durée supérieure à 6 jours</li>
                    <li>Au plus tard 7 jours avant le départ pour un voyage d'une durée de 2 à 6 jours</li>
                    <li>Au plus tard 48 heures avant le départ pour un voyage d'une durée de 1 jour</li>
                  </ul>
                  <p className="mt-4">En cas d'annulation par nos soins, les sommes versées seront intégralement remboursées.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Article 6 - Modification du voyage</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Infinity Travel se réserve le droit de modifier certains éléments du voyage pour des raisons techniques ou de sécurité.</p>
                  <p>Si les modifications sont importantes, le client sera informé dès que possible et pourra :</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Accepter la modification</li>
                    <li>Accepter un voyage de substitution</li>
                    <li>Annuler son voyage avec remboursement intégral</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Article 7 - Assurances</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Nous vous recommandons vivement de souscrire une assurance voyage comprenant :</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>L'assurance annulation</li>
                    <li>L'assurance rapatriement</li>
                    <li>L'assurance bagages</li>
                    <li>L'assurance responsabilité civile</li>
                  </ul>
                  <p className="mt-4">Nos conseillers peuvent vous proposer différentes formules d'assurance adaptées à votre voyage.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Article 8 - Responsabilité</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>La responsabilité d'Infinity Travel est limitée dans les conditions prévues par la convention internationale applicable (Convention de Montréal pour le transport aérien, Convention d'Athènes pour le transport maritime, etc.).</p>
                  <p>Infinity Travel ne peut être tenue responsable des conséquences des événements suivants :</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Force majeure</li>
                    <li>Fait d'un tiers étranger à la fourniture des prestations</li>
                    <li>Grèves, intempéries</li>
                    <li>Modification d'horaires de transport décidée par les compagnies</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Article 9 - Réclamations</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Toute réclamation relative à l'inexécution ou à la mauvaise exécution du contrat doit être adressée dans les meilleurs délais par lettre recommandée avec accusé de réception à :</p>
                  <p className="mt-4">
                    <strong>Infinity Travel</strong><br />
                    123 Avenue des Voyages<br />
                    75001 Paris, France
                  </p>
                  <p className="mt-4">En cas de litige, et à défaut de solution amiable, le tribunal compétent sera celui de Paris.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Article 10 - Formalités</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Il appartient au client de s'assurer qu'il est en possession des documents de voyage requis (passeport, visa, carnet de vaccinations, etc.).</p>
                  <p>Infinity Travel ne saurait être tenue responsable des conséquences du non-respect de ces formalités par le client.</p>
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

export default CGVPage;