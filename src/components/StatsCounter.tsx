import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Handshake, Building2, Award } from "lucide-react";

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Cartes délivrées" },
  { icon: Handshake, value: 12, suffix: "", label: "Partenaires institutionnels" },
  { icon: Building2, value: 300, suffix: "+", label: "Entreprises accompagnées" },
  { icon: Award, value: 3, suffix: " ans", label: "D'expérience" },
];

const AnimatedNumber = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
      {count.toLocaleString("fr-FR")}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-gold" />
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
              <p className="text-primary-foreground/60 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
