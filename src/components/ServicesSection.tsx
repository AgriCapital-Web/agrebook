import { motion } from "framer-motion";
import { ShieldCheck, MapPin, FileText } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Identification & Authentification",
    description:
      "La carte de travail permet d'identifier et d'authentifier toute personne physique au cours d'une prestation ou d'un service. Elle garantit une mesure de sûreté et de sécurité.",
    image: "/images/carte-travail-1.jpg",
  },
  {
    icon: MapPin,
    title: "Localisation & Compétences",
    description:
      "Elle permet de localiser et de déterminer le domaine de compétence de ses titulaires. Un outil professionnel qui répond aux exigences pratiques et de sécurité.",
    image: "/images/marquette.jpg",
  },
  {
    icon: FileText,
    title: "Document Administratif & Légal",
    description:
      "La carte de travail fournit des garanties financières, physiques et morales qui régissent les relations interprofessionnelles. Elle fait office de certificat de travail et carte civile.",
    image: "/images/carte-travail-2.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-14 sm:py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold">
            Nos Services
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mt-2 sm:mt-3 mb-3 sm:mb-4">
            La carte de travail, votre miroir professionnel
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg">
            Un document administratif et légal pour tous les secteurs
            d'activités : privé, semi-privé, public ou parapublic.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="h-40 sm:h-44 lg:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                  <service.icon size={20} className="text-primary sm:[&]:w-6 sm:[&]:h-6" />
                </div>
                <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
