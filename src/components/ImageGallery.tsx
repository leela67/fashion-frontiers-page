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

  return (
    <section className="py-20 lg:py-32 bg-pearl">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
            Collection Moodboard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into our creative vision and artistic inspiration
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item opacity-0 overflow-hidden shadow-elegant hover:shadow-hover transition-elegant cursor-pointer group ${
                image.size === "large"
                  ? "col-span-2 row-span-2"
                  : image.size === "medium"
                  ? "col-span-1 row-span-2"
                  : "col-span-1 row-span-1"
              }`}
              style={{ animationDelay: `${image.delay}ms` }}
            >
              <div className="relative h-full overflow-hidden">
                <img
                  src={image.src}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-elegant" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
