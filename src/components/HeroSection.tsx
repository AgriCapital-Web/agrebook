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
      className="relative min-h-[100svh] flex items-center pt-16 sm:pt-20 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt=""
          className="w-full h-[120%] object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/85 via-black/70 to-black/30" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-white/20"
          >
            <Shield size={14} className="text-gold shrink-0" />
            <span className="text-xs sm:text-sm text-white/90 font-medium">
              Approuvé et certifié par l'État ivoirien
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] mb-4 sm:mb-6"
          >
            <span className="text-white">Obtenez votre </span>
            <span className="text-gradient-gold">carte de travail</span>
            <span className="text-white"> en toute tranquillité</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-xl text-white/75 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
          >
            AGREBOOK CI — Agence de Gestion Régionale des Entreprises, votre
            partenaire incontournable pour la croissance des entreprises et
            l'innovation en Côte d'Ivoire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground px-6 py-3 sm:py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Demander ma carte
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 sm:py-3.5 rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              Nos services
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8 sm:mt-12 pt-5 sm:pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <Award size={16} className="text-gold shrink-0" />
              <span className="text-white/70 text-xs">RCCM: CI-ABJ-03-2024-B13-11409</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/20" />
            <span className="text-white/70 text-xs">
              Capital: 1.000.000 FCFA
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
