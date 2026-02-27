import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";

const objectives = [
  "Développer un écosystème entrepreneurial innovant et compétitif",
  "Renforcer les capacités techniques et managériales des entrepreneurs",
  "Promouvoir l'émergence d'entreprises à haut potentiel",
  "Susciter et développer l'entrepreneuriat féminin et des jeunes",
  "Favoriser le développement de partenariats nationaux et régionaux",
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye size={20} className="text-primary" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-gold">
                Notre Vision
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Un partenaire incontournable de la croissance
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Être le principal levier de l'action économique du gouvernement en
              matière d'accompagnement, pour une économie ivoirienne innovante,
              inclusive et durable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <Target size={20} className="text-gold" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-gold">
                Notre Mission
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Accompagner l'entrepreneuriat ivoirien
            </h2>
            <ul className="space-y-3">
              {[
                "Favoriser la création formelle d'entreprises",
                "Améliorer le climat des affaires",
                "Développer la culture entrepreneuriale et l'innovation",
                "Promouvoir les projets d'innovation technologique et sociale",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-3xl p-8 lg:p-14 text-primary-foreground"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                À propos d'AGREBOOK CI
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-4">
                <strong>AGREBOOK CI</strong> (Agence de Gestion Régionale des
                Entreprises et des Banques Outillées et Organiser en Kanban de
                Côte d'Ivoire) est une société à responsabilité limitée créée
                par Monsieur <strong>AGRE STÉPHANE KOUASSI</strong>.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Avec un capital social de 1.000.000 FCFA, AGREBOOK CI a pour
                vocation de promouvoir les jeunes entrepreneurs, accompagner les
                PME et lutter contre la fraude visuelle grâce à des solutions
                sur mesure.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 rounded-xl px-5 py-3">
                  <p className="text-sm text-primary-foreground/60">RCCM</p>
                  <p className="font-semibold text-sm">CI-ABJ-03-2024-B13-11409</p>
                </div>
                <div className="bg-white/10 rounded-xl px-5 py-3">
                  <p className="text-sm text-primary-foreground/60">Capital</p>
                  <p className="font-semibold text-sm">1.000.000 FCFA</p>
                </div>
                <div className="bg-white/10 rounded-xl px-5 py-3">
                  <p className="text-sm text-primary-foreground/60">Siège</p>
                  <p className="font-semibold text-sm">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-5">
                Objectifs Globaux
              </h3>
              <ul className="space-y-3">
                {objectives.map((obj) => (
                  <li key={obj} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold mt-0.5 shrink-0" />
                    <span className="text-primary-foreground/80 text-sm">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
