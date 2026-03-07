import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "M. BLEOU",
    company: "DOZE INDUSTRIE",
    text: "Je voudrais dire infiniment merci à la société AGREBOOK CI pour sa confiance et son efficacité vis-à-vis de mon entreprise. Je suis satisfait pour la carte de travail.",
    title: "Forte recommandation !",
  },
  {
    name: "Client satisfait",
    company: "Construction métallique",
    text: "AGREBOOK CI, toujours au cœur de la population. Votre travail est impeccable.",
    title: "Service exceptionnel !",
  },
  {
    name: "Sara",
    company: "IMMO SARL",
    text: "Une référence et une image crédible. Service avec abnégation et courage.",
    title: "Rapidité !",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-14 sm:py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold">
            Témoignages
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mt-2 sm:mt-3">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-5 sm:p-6 lg:p-8 border border-border relative"
            >
              <Quote size={24} className="text-gold/30 absolute top-4 right-4 sm:top-6 sm:right-6 sm:[&]:w-8 sm:[&]:h-8" />
              <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">
                {t.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-3 sm:pt-4">
                <p className="font-semibold text-foreground text-xs sm:text-sm">{t.name}</p>
                <p className="text-muted-foreground text-[10px] sm:text-xs">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
