import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Award } from "lucide-react";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="accueil"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20"
          >
            <Shield size={16} className="text-gold" />
            <span className="text-sm text-white/90 font-medium">
              Approuvé et certifié par l'État ivoirien
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Obtenez votre </span>
            <span className="text-gradient-gold">carte de travail</span>
            <span className="text-white"> en toute tranquillité</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/75 mb-8 max-w-2xl leading-relaxed"
          >
            AGREBOOK CI — Agence de Gestion Régionale des Entreprises, votre
            partenaire incontournable pour la croissance des entreprises et
            l'innovation en Côte d'Ivoire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://app.jotform.com/agrebook-ci/service-agrebook-ci"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Demander ma carte
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/20 transition-colors"
            >
              Nos services
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <Award size={20} className="text-gold" />
              <span className="text-white/70 text-sm">RCCM: CI-ABJ-03-2024-B13-11409</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/20" />
            <span className="hidden sm:block text-white/70 text-sm">
              Capital: 1.000.000 FCFA
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
