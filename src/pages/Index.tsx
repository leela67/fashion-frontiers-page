import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ImageGallery from "@/components/ImageGallery";
import FeaturedCollection from "@/components/FeaturedCollection";
import VideoSection from "@/components/VideoSection";
import CategoryExplorer from "@/components/CategoryExplorer";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <ImageGallery />
        <FeaturedCollection />
        <VideoSection />
        <CategoryExplorer />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
