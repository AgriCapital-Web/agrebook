import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/2250741144150?text=Bonjour%20AGREBOOK%20CI%2C%20je%20souhaite%20avoir%20des%20informations."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="white" />
    </motion.a>
  );
};

export default WhatsAppButton;
