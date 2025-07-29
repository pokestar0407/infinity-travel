import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ConfidentialitePage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-8 text-gradient">
              Politique de Confidentialité
            </h1>
            
            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Collecte des données personnelles</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Infinity Travel collecte vos données personnelles dans le cadre de :</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>La réservation de voyages et séjours</li>
                    <li>La gestion de votre compte client</li>
                    <li>L'envoi de newsletters et offres commerciales</li>
                    <li>L'amélioration de nos services</li>
                  </ul>
                  <p className="mt-4">Les données collectées peuvent inclure : nom, prénom, adresse, téléphone, email, date de naissance, informations de paiement.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Base légale du traitement</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Le traitement de vos données personnelles repose sur :</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>L'exécution du contrat :</strong> pour la réservation et la gestion de votre voyage</li>
                    <li><strong>L'intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité</li>
                    <li><strong>Le consentement :</strong> pour l'envoi de communications marketing</li>
                    <li><strong>L'obligation légale :</strong> pour la facturation et la comptabilité</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Finalités du traitement</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Vos données personnelles sont utilisées pour :</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Traiter vos réservations et commandes</li>
                    <li>Gérer la relation client et le service après-vente</li>
                    <li>Respecter nos obligations légales et réglementaires</li>
                    <li>Vous envoyer des informations commerciales (avec votre accord)</li>
                    <li>Améliorer notre site web et nos services</li>
                    <li>Prévenir la fraude et assurer la sécurité</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Destinataires des données</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Vos données peuvent être transmises à :</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Nos partenaires :</strong> compagnies aériennes, hôtels, transporteurs pour l'exécution de votre voyage</li>
                    <li><strong>Nos prestataires :</strong> services de paiement, plateforme d'emailing, hébergement</li>
                    <li><strong>Autorités compétentes :</strong> en cas d'obligation légale</li>
                  </ul>
                  <p className="mt-4">Aucune donnée n'est vendue à des tiers à des fins commerciales.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Transferts internationaux</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Dans le cadre de l'organisation de voyages, vos données peuvent être transférées vers des pays situés en dehors de l'Union européenne.</p>
                  <p>Ces transferts sont encadrés par des garanties appropriées conformément au RGPD (clauses contractuelles types, décisions d'adéquation).</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Durée de conservation</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Vos données sont conservées pendant :</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Données clients :</strong> 3 ans après la fin de la relation commerciale</li>
                    <li><strong>Données de facturation :</strong> 10 ans conformément aux obligations comptables</li>
                    <li><strong>Données de prospection :</strong> 3 ans après le dernier contact</li>
                    <li><strong>Cookies :</strong> 13 mois maximum</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Vos droits</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><strong>Droit d'accès :</strong> connaître les données que nous détenons sur vous</li>
                    <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                    <li><strong>Droit d'effacement :</strong> demander la suppression de vos données</li>
                    <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                    <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                    <li><strong>Droit d'opposition :</strong> vous opposer au traitement pour motif légitime</li>
                  </ul>
                  <p className="mt-4">Pour exercer ces droits, contactez-nous à : contact@infinitytravel.fr</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Cookies et technologies similaires</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Notre site utilise des cookies pour :</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Assurer le bon fonctionnement du site</li>
                    <li>Mémoriser vos préférences</li>
                    <li>Analyser l'audience (Google Analytics)</li>
                    <li>Personnaliser les contenus et publicités</li>
                  </ul>
                  <p className="mt-4">Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, certaines fonctionnalités du site pourraient être limitées.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Sécurité des données</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Infinity Travel met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Chiffrement des données sensibles</li>
                    <li>Contrôle d'accès strict</li>
                    <li>Sauvegarde régulière</li>
                    <li>Formation du personnel</li>
                    <li>Audit de sécurité</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">10. Contact et réclamations</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p><strong>Délégué à la Protection des Données :</strong></p>
                  <p>Email : dpo@infinitytravel.fr</p>
                  <p>Adresse : 123 Avenue des Voyages, 75001 Paris, France</p>
                  
                  <p className="mt-4">Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :</p>
                  <p>Commission Nationale de l'Informatique et des Libertés</p>
                  <p>3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</p>
                  <p>Téléphone : 01 53 73 22 22</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">11. Modifications</h2>
                <div className="bg-card p-6 rounded-lg border">
                  <p>Cette politique de confidentialité peut être mise à jour pour refléter les changements de nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.</p>
                  <p>Nous vous notifierons tout changement important par email ou via notre site web.</p>
                  <p><strong>Dernière mise à jour :</strong> Janvier 2024</p>
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

export default ConfidentialitePage;