import { useEffect, useRef } from "react";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const images = [
  { src: collection1, size: "large", delay: 0 },
  { src: collection2, size: "small", delay: 100 },
  { src: hero1, size: "medium", delay: 200 },
  { src: collection3, size: "small", delay: 300 },
  { src: hero2, size: "large", delay: 400 },
  { src: collection4, size: "medium", delay: 500 },
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

  const getImageClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-1 sm:col-span-2 lg:col-span-2 row-span-2";
      case "medium":
        return "col-span-1 sm:col-span-1 lg:col-span-1 row-span-2";
      case "small":
        return "col-span-1 sm:col-span-1 lg:col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  const getAspectRatio = (size: string) => {
    switch (size) {
      case "large":
        return "aspect-[3/4]";
      case "medium":
        return "aspect-[3/4]";
      case "small":
        return "aspect-[3/4]";
      default:
        return "aspect-[3/4]";
    }
  };

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

        {/* Masonry Grid Layout - Matching reference design */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-max"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item opacity-0 overflow-hidden cursor-pointer group shadow-elegant hover:shadow-hover transition-all duration-500 ${getImageClasses(
                image.size
              )}`}
              style={{ animationDelay: `${image.delay}ms` }}
            >
              <div className={`relative ${getAspectRatio(image.size)} overflow-hidden bg-gray-100 h-full`}>
                <img
                  src={image.src}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
