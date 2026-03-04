import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/images/gallery/art-sculpture.jpg", alt: "Sculpture africaine" },
  { src: "/images/gallery/africa-day.jpg", alt: "Journée de l'Afrique" },
  { src: "/images/gallery/masque-africain.jpg", alt: "Masque africain traditionnel" },
  { src: "/images/gallery/oeuvres-afrique.jpg", alt: "Œuvres d'art africain" },
  { src: "/images/gallery/art-masque.png", alt: "Art et masques d'Afrique" },
  { src: "/images/gallery/parc-salonga.jpg", alt: "Parc national de la Salonga" },
  { src: "/images/gallery/virunga.jpg", alt: "Parc national des Virunga" },
  { src: "/images/gallery/afrique.jpg", alt: "Paysage africain" },
  { src: "/images/gallery/afrique-continent.jpg", alt: "Continent africain" },
  { src: "/images/gallery/journee-afrique.png", alt: "Journée mondiale de l'Afrique" },
  { src: "/images/gallery/culture-africaine.jpg", alt: "Culture africaine" },
  { src: "/images/gallery/art-africain-1.jpg", alt: "Art africain" },
  { src: "/images/gallery/entreprises-afrique.jpg", alt: "Entreprises en Afrique" },
  { src: "/images/gallery/maggi-maquette.jpg", alt: "Maquette publicitaire" },
  { src: "/images/gallery/maggi-pub.jpg", alt: "Publicité africaine" },
  { src: "/images/gallery/art-traditionnel.jpg", alt: "Art traditionnel africain" },
  { src: "/images/gallery/gwd-news.jpg", alt: "Actualités culturelles" },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const navigate = useCallback((dir: 1 | -1) => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + dir + galleryImages.length) % galleryImages.length);
  }, [selectedIndex]);

  return (
    <>
      <section className="py-20 lg:py-28 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              Galerie
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Art & Culture Africaine
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Célébrons la richesse culturelle et artistique du continent africain.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox with navigation */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white z-10"
            aria-label="Fermer"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 p-2"
            aria-label="Précédent"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 p-2"
            aria-label="Suivant"
          >
            <ChevronRight size={36} />
          </button>
          <img
            src={galleryImages[selectedIndex].src}
            alt={galleryImages[selectedIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {selectedIndex + 1} / {galleryImages.length}
          </p>
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
