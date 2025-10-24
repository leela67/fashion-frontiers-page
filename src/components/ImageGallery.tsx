import { useEffect, useRef } from "react";
import { collectionImages, heroImages } from "@/data/oneDriveImages";

const moodboardItems = [
  { type: "image", src: collectionImages.collection1, size: "large", delay: 0 },
  { type: "image", src: collectionImages.collection2, size: "medium", delay: 100 },
  {
    type: "quote",
    text: "With every stitch, I see infinite possibilities of elegance, grace and timeless beauty.",
    size: "small",
    delay: 150
  },
  { type: "image", src: heroImages.hero1, size: "medium", delay: 200 },
  { type: "image", src: collectionImages.collection3, size: "large", delay: 300 },
  {
    type: "quote",
    text: "You have magic in your creativity.",
    author: "— Fashion Connoisseur",
    size: "small",
    delay: 350
  },
  { type: "image", src: heroImages.hero2, size: "medium", delay: 400 },
  { type: "image", src: collectionImages.collection4, size: "large", delay: 500 },
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
    <section id="media-coverage" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-light mb-6 text-charcoal tracking-tight leading-tight">
            Collection Moodboard
          </h2>
          <p className="font-sans text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            A curated glimpse into our creative vision and artistic inspiration
          </p>
        </div>

        {/* Masonry Grid Layout - Pixel-perfect Dolly Jain style */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr"
        >
          {moodboardItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-item opacity-0 transition-all duration-500 ${getItemClasses(
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
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
                  {/* Plus icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                      <span className="text-white text-3xl font-light leading-none">+</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center p-8 lg:p-12 bg-pearl/30">
                  <div className="text-center">
                    <p className="font-serif text-xl lg:text-2xl xl:text-3xl font-light text-charcoal leading-relaxed mb-4 italic">
                      "{item.text}"
                    </p>
                    {item.author && (
                      <p className="font-sans text-sm lg:text-base text-muted-foreground font-light tracking-wider">
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
