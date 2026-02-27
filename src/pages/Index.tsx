import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersBar from "@/components/PartnersBar";
import ServicesSection from "@/components/ServicesSection";
import StatsCounter from "@/components/StatsCounter";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import YouTubeSection from "@/components/YouTubeSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersBar />
        <ServicesSection />
        <StatsCounter />
        <AboutSection />
        <TeamSection />
        <YouTubeSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
