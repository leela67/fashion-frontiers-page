import { useEffect, useRef } from "react";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const moodboardItems = [
  { type: "image", src: collection1, size: "large", delay: 0 },
  { type: "image", src: collection2, size: "medium", delay: 100 },
  { 
    type: "quote", 
    text: "With every stitch, I see infinite possibilities of elegance, grace and timeless beauty.",
    size: "small",
    delay: 150
  },
  { type: "image", src: hero1, size: "medium", delay: 200 },
  { type: "image", src: collection3, size: "large", delay: 300 },
  { 
    type: "quote", 
    text: "You have magic in your creativity.",
    author: "— Fashion Connoisseur",
    size: "small",
    delay: 350
  },
  { type: "image", src: hero2, size: "medium", delay: 400 },
  { type: "image", src: collection4, size: "large", delay: 500 },
  { 
    type: "quote", 
    text: "There's a design for every personality, every occasion and every mood.",
    size: "medium",
    delay: 550
  },
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

  const getItemClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-1 sm:col-span-2 row-span-2";
      case "medium":
        return "col-span-1 row-span-2";
      case "small":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <section id="media-coverage" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="heading-display heading-6xl font-light mb-4 text-charcoal tracking-tight leading-tight">
            Collection Moodboard
          </h2>
          <p className="body-text-lg text-muted-foreground max-w-2xl mx-auto font-light tracking-wide">
            A curated glimpse into our creative vision and artistic inspiration
          </p>
        </div>

        {/* Masonry Grid Layout - Pixel-perfect Dolly Jain style */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-fr"
        >
          {moodboardItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-item opacity-0 transition-elegant ${getItemClasses(
                item.size
              )}`}
              style={{ animationDelay: `${item.delay}ms` }}
            >
              {item.type === "image" ? (
                <div className="relative overflow-hidden bg-pearl h-full group cursor-pointer">
                  <img
                    src={item.src}
                    alt={`Collection ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Elegant overlay on hover */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-elegant" />
                  {/* Plus icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-elegant">
                    <div className="w-12 h-12 border-2 border-hero rounded-full flex items-center justify-center">
                      <span className="text-hero text-3xl font-light leading-none">+</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center p-8 lg:p-12 bg-pearl/30">
                  <div className="text-center">
                    <p className="heading-display heading-3xl font-light text-charcoal leading-relaxed mb-4 italic">
                      "{item.text}"
                    </p>
                    {item.author && (
                      <p className="body-text text-muted-foreground font-light tracking-wider">
                        {item.author}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
