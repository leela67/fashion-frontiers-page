import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedCollection from "@/components/FeaturedCollection";
import VideoSection from "@/components/VideoSection";
import CategoryExplorer from "@/components/CategoryExplorer";
import ImageGallery from "@/components/ImageGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <FeaturedCollection />
        <VideoSection />
        <CategoryExplorer />
        <ImageGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
