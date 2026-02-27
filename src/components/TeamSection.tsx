import { motion } from "framer-motion";
import { Users } from "lucide-react";
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

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Fondateur */}
          <ScrollAnimationWrapper>
            <div className="text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                AGRE Stéphane KOUASSI
              </h3>
              <p className="text-primary font-medium text-sm">Fondateur & Directeur Général</p>
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
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
