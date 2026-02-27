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
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Vidéos
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Découvrez AGREBOOK CI en vidéo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Suivez nos actualités et présentations sur notre chaîne YouTube.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              <div className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Play size={16} className="text-destructive" />
                </div>
                <p className="font-semibold text-foreground text-sm">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
