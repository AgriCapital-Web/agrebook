import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qu'est-ce que la carte de travail AGREBOOK CI ?",
    answer:
      "La carte de travail est un document administratif et légal qui permet d'identifier et d'authentifier toute personne physique au cours d'une prestation ou d'un service. Elle fait office de certificat de travail et carte civile.",
  },
  {
    question: "Comment obtenir ma carte de travail ?",
    answer:
      "Pour obtenir votre carte, il suffit de remplir le formulaire en ligne via notre plateforme, fournir les pièces justificatives nécessaires et procéder au paiement. Votre carte sera traitée et livrée dans les meilleurs délais.",
  },
  {
    question: "Quels sont les documents requis ?",
    answer:
      "Vous aurez besoin d'une pièce d'identité en cours de validité (CNI ou passeport), d'une photo d'identité récente, et des informations relatives à votre activité professionnelle ou votre entreprise.",
  },
  {
    question: "Combien coûte la carte de travail ?",
    answer:
      "Le coût varie en fonction du type de carte et des services associés. Contactez-nous directement ou consultez notre formulaire de paiement en ligne pour connaître les tarifs en vigueur.",
  },
  {
    question: "La carte est-elle reconnue par l'État ivoirien ?",
    answer:
      "Oui, AGREBOOK CI est une entreprise enregistrée au RCCM (CI-ABJ-03-2024-B13-11409) et travaille en partenariat avec des institutions telles que le CEPICI, le Ministère du Commerce et le Ministère du Numérique.",
  },
  {
    question: "Quels secteurs d'activité sont concernés ?",
    answer:
      "La carte de travail s'adresse à tous les secteurs : privé, semi-privé, public et parapublic. Que vous soyez artisan, commerçant, entrepreneur ou salarié, vous pouvez en bénéficier.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold">
            FAQ
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mt-2 sm:mt-3 mb-3 sm:mb-4">
            Questions fréquentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg">
            Retrouvez les réponses aux questions les plus posées sur nos services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-4 sm:px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground text-sm sm:text-base py-4 sm:py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pb-4 sm:pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
