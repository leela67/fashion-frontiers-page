import { useEffect, useRef } from "react";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const images = [
  { src: collection1, delay: 0 },
  { src: collection2, delay: 100 },
  { src: hero1, delay: 200 },
  { src: collection3, delay: 300 },
  { src: hero2, delay: 400 },
  { src: collection4, delay: 500 },
];

const ImageGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const galleryElement = galleryRef.current;
    if (!galleryElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = galleryElement.querySelectorAll(".gallery-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="media-coverage" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-black-mango text-4xl lg:text-5xl font-bold mb-4 text-primary tracking-tight">
            Collection Moodboard
          </h2>
          <p className="font-darker-grotesque text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            A curated glimpse into our creative vision and artistic inspiration
          </p>
        </div>

        {/* Professional Grid Layout - Matching reference design */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item opacity-0 overflow-hidden cursor-pointer group"
              style={{ animationDelay: `${image.delay}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={image.src}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
