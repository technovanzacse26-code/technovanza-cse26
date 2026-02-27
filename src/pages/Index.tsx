import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;
