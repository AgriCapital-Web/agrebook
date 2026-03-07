import { useState, useEffect } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À Propos", href: "#apropos" },
  { label: "Équipe", href: "#equipe" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
    }
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/images/agrebook-logo.jpg"
              alt="AGREBOOK CI"
              className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-lg object-cover"
            />
            <div>
              <span className="font-display text-base sm:text-lg lg:text-xl font-bold text-primary">
                AGREBOOK CI
              </span>
              <p className="text-[9px] sm:text-[10px] text-muted-foreground leading-tight hidden sm:block">
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
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
              aria-label="Basculer le thème"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="/services"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Demander ma carte
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
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
            <div className="px-4 py-3 sm:py-4 space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-foreground/80 hover:text-primary py-1.5 sm:py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 sm:gap-3 pt-1">
                <a
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="block bg-primary text-primary-foreground px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold text-center flex-1"
                >
                  Demander ma carte
                </a>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2.5 sm:p-3 rounded-lg text-foreground/70 hover:text-primary hover:bg-muted transition-colors border border-border"
                  aria-label="Basculer le thème"
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm pt-1 sm:pt-2">
                <Phone size={12} className="sm:[&]:w-3.5 sm:[&]:h-3.5" />
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
