import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <img
                src="/images/agrebook-logo.jpg"
                alt="AGREBOOK CI"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg object-cover"
                loading="lazy"
              />
              <span className="font-display text-base sm:text-lg font-bold">AGREBOOK CI</span>
            </div>
            <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
              Agence de Gestion Régionale des Entreprises et des Banques
              Outillées et Organiser en Kanban de Côte d'Ivoire.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm sm:text-base mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-primary-foreground/70">
              <li><a href="#accueil" className="hover:text-primary-foreground transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
              <li><a href="#apropos" className="hover:text-primary-foreground transition-colors">À Propos</a></li>
              <li><a href="#temoignages" className="hover:text-primary-foreground transition-colors">Témoignages</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm sm:text-base mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-primary-foreground/70">
              <li>Carte de travail</li>
              <li>Accompagnement PME</li>
              <li>Formalisation d'entreprises</li>
              <li>Innovation entrepreneuriale</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm sm:text-base mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone size={12} className="shrink-0 sm:[&]:w-3.5 sm:[&]:h-3.5" />
                <span>01.41.14.41.50</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={12} className="shrink-0 sm:[&]:w-3.5 sm:[&]:h-3.5" />
                <span>agrebook@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={12} className="shrink-0 sm:[&]:w-3.5 sm:[&]:h-3.5" />
                <span>Abidjan, Côte d'Ivoire</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 sm:py-6 space-y-2 sm:space-y-3">
        <p className="text-center text-[10px] sm:text-xs text-primary-foreground/50 px-4">
          © {new Date().getFullYear()} AGREBOOK CI — Tous droits réservés. Toute contrefaçon fera l'objet d'une poursuite judiciaire.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-primary-foreground/40 px-4">
          <img
            src="/images/inocent-koffi.jpg"
            alt="Inocent KOFFI"
            className="h-6 w-6 sm:h-7 sm:w-7 rounded-full object-cover border border-white/20"
            loading="lazy"
          />
          <span className="text-center">
            Plateforme développée par{" "}
            <a
              href="https://ikoffi.agricapital.ci"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground/70 transition-colors"
            >
              Inocent KOFFI
            </a>
            {" - "}
            <a
              href="https://wa.me/2250759566087"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground/70 transition-colors"
            >
              +2250759566087
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
