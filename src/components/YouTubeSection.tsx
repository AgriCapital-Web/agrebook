import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    id: "dUcEJGADLjM",
    title: "Présentation AGREBOOK CI",
  },
  {
    id: "dUcEJGADLjM",
    title: "Services & Solutions",
  },
];

const YouTubeSection = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold">
            Vidéos
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mt-2 sm:mt-3 mb-3 sm:mb-4">
            Découvrez AGREBOOK CI en vidéo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg">
            Suivez nos actualités et présentations sur notre chaîne YouTube.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card"
            >
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                  <Play size={14} className="text-destructive sm:[&]:w-4 sm:[&]:h-4" />
                </div>
                <p className="font-semibold text-foreground text-xs sm:text-sm">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
