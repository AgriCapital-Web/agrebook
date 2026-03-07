import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    details: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent("Demande de contact - AGREBOOK CI");
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nSource: ${formData.source}\nDétails: ${formData.details}`
    );
    window.open(`mailto:agrebook@gmail.com?subject=${subject}&body=${body}`);
    toast({ title: "Redirection vers votre messagerie", description: "Envoyez le message pré-rempli." });
    setSending(false);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold">
              Contact
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6">
              Écrivez à AGREBOOK CI
            </h2>
            <p className="text-muted-foreground mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
              Contactez-nous pour bénéficier de nos solutions innovantes et
              obtenir vos cartes de travail personnalisées de la meilleure qualité.
            </p>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs sm:text-sm">Téléphone</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    01.41.14.41.50 / 07.47.97.38.49
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    07.13.24.03.69 / 05.07.61.64.75
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs sm:text-sm">Email</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">agrebook@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs sm:text-sm">Adresse</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a
                href="https://www.facebook.com/profile.php?id=100092432662872"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="https://youtu.be/dUcEJGADLjM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-5 sm:p-6 lg:p-8 border border-border shadow-sm space-y-4 sm:space-y-5"
          >
            <div>
              <label className="text-xs sm:text-sm font-medium text-foreground block mb-1 sm:mb-1.5">
                Nom et prénoms *
              </label>
              <input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Votre nom complet"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground block mb-1 sm:mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium text-foreground block mb-1 sm:mb-1.5">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+225 07 00 00 00 00"
                />
              </div>
            </div>
            <div>
              <label className="text-xs sm:text-sm font-medium text-foreground block mb-1 sm:mb-1.5">
                Comment nous avez-vous connu ? *
              </label>
              <select
                required
                value={formData.source}
                onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Sélectionner une option</option>
                <option value="search">Moteur de recherche</option>
                <option value="social">Réseaux sociaux</option>
                <option value="tv">TV</option>
                <option value="radio">Radio</option>
                <option value="friends">Amis ou connaissances</option>
              </select>
            </div>
            <div>
              <label className="text-xs sm:text-sm font-medium text-foreground block mb-1 sm:mb-1.5">
                Détails et ville *
              </label>
              <textarea
                required
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background text-foreground text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Précisez votre demande et votre ville..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-primary-foreground py-3 sm:py-3.5 rounded-lg font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Envoyer le message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
