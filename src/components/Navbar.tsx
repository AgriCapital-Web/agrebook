import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À Propos", href: "#apropos" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-3">
            <img
              src="/images/agrebook-logo.jpg"
              alt="AGREBOOK CI"
              className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg object-cover"
            />
            <div>
              <span className="font-display text-lg lg:text-xl font-bold text-primary">
                AGREBOOK CI
              </span>
              <p className="text-[10px] text-muted-foreground leading-tight hidden sm:block">
                Votre succès, notre réputation
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.jotform.com/agrebook-ci/service-agrebook-ci"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Je paie ma carte
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-foreground/80 hover:text-primary py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://app.jotform.com/agrebook-ci/service-agrebook-ci"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold text-center"
              >
                Je paie ma carte
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm pt-2">
                <Phone size={14} />
                <span>01.41.14.41.50 / 07.13.24.03.69</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
