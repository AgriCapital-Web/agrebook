import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/images/gallery/art-sculpture.jpg", alt: "Sculpture africaine" },
  { src: "/images/gallery/africa-day.jpg", alt: "Journée de l'Afrique" },
  { src: "/images/gallery/masque-africain.jpg", alt: "Masque africain traditionnel" },
  { src: "/images/gallery/oeuvres-afrique.jpg", alt: "Œuvres d'art africain" },
  { src: "/images/gallery/art-masque.png", alt: "Art et masques d'Afrique" },
  { src: "/images/gallery/parc-salonga.jpg", alt: "Parc national de la Salonga" },
  { src: "/images/gallery/virunga.jpg", alt: "Parc national des Virunga" },
  { src: "/images/gallery/afrique.jpg", alt: "Paysage africain" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            aria-label="Fermer"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Galerie"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
