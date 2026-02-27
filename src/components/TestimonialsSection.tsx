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
    <section id="temoignages" className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Témoignages
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-3">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border relative"
            >
              <Quote size={32} className="text-gold/30 absolute top-6 right-6" />
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {t.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
