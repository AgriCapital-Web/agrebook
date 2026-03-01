import { motion } from "framer-motion";
import { Users, Award } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const TeamSection = () => {
  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Users size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Notre Équipe</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Les visages derrière <span className="text-primary">AGREBOOK CI</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une équipe dévouée au service des entrepreneurs ivoiriens.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Fondateur */}
          <ScrollAnimationWrapper>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden border border-border shadow-lg"
              >
                <img
                  src="/images/fondateur.jpg"
                  alt="AGRE Stéphane KOUASSI - Fondateur & DG d'AGREBOOK CI"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </motion.div>
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  AGRE Stéphane KOUASSI
                </h3>
                <p className="text-primary font-semibold">Fondateur & Directeur Général</p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>AGREBOOK CI</strong> (Agence de Gestion Régionale des Entreprises et des Banques Outillées et Organiser en Kanban de Côte d'Ivoire) est une société à responsabilité limitée créée par Monsieur <strong>AGRE STÉPHANE KOUASSI</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Avec un capital social de 1.000.000 FCFA, au registre de commerce et du crédit mobilier (RCCM: <strong>CI-ABJ-03-2024-B13-11409</strong>), AGREBOOK CI compte désormais parmi les meilleures entreprises qui ont pour vocation de promouvoir les jeunes entrepreneurs.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Événement - Disque d'or */}
          <ScrollAnimationWrapper>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2">
                  <Award size={16} className="text-gold" />
                  <span className="text-sm font-medium text-gold">Événement</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Chandelier d'Or 2022 — 24ème Édition
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monsieur <strong>TAWÉ FÉLIX</strong> a remis le prix Nobel (Disque d'Or) à la Chantre Clara Blon sur le podium du Palais de la Culture de Treichville.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden border border-border shadow-lg order-1 md:order-2"
              >
                <img
                  src="/images/disque-or.jpg"
                  alt="Remise du Disque d'Or - Chandelier d'Or 2022"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </ScrollAnimationWrapper>

          {/* Photo d'équipe */}
          <ScrollAnimationWrapper>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden border border-border shadow-lg"
            >
              <img
                src="/images/team-photo.jpg"
                alt="L'équipe AGREBOOK CI"
                className="w-full h-auto object-cover"
              />
              <div className="bg-card p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  L'équipe AGREBOOK CI — Nous travaillons durement pour satisfaire la population
                </p>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          {/* Carte AGBCI */}
          <ScrollAnimationWrapper>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden border border-border shadow-lg"
              >
                <img
                  src="/images/agbci-carte.png"
                  alt="AGBCI - Ma carte identifie ma personne"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Ma carte identifie ma personne
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  La carte de travail est un document administratif et légal qui fournit des garanties financières, physiques et morales, régissant les relations interprofessionnelles. Elle fournit des renseignements complets sur les détails personnels ainsi que les statuts des personnes et entreprises.
                </p>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  Il s'agit avant tout d'un outil professionnel qui répond aux exigences pratiques et de sécurité.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
