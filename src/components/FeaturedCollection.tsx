import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";

const collections = [
  {
    id: 1,
    title: "Evening Elegance",
    price: "$2,450",
    mainImage: collection1,
    hoverImage: collection2,
  },
  {
    id: 2,
    title: "Modern Couture",
    price: "$3,200",
    mainImage: collection2,
    hoverImage: collection3,
  },
  {
    id: 3,
    title: "Luxury Accessories",
    price: "$890",
    mainImage: collection3,
    hoverImage: collection4,
  },
  {
    id: 4,
    title: "Bridal Collection",
    price: "$5,800",
    mainImage: collection4,
    hoverImage: collection1,
  },
];

const FeaturedCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(collections.length - itemsPerView.desktop, prev + 1));
  };

  return (
    <section id="collections" className="py-20 lg:py-32 bg-pearl">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-2">
              New Arrivals
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our latest curated collection
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden lg:flex gap-2">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="p-3 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-smooth disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous items"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex >= collections.length - itemsPerView.desktop}
              className="p-3 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-smooth disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next items"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden mb-4 shadow-elegant hover:shadow-hover transition-elegant">
                <img
                  src={hoveredItem === item.id ? item.hoverImage : item.mainImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-elegant group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-elegant" />
              </div>

              {/* Item Info */}
              <div className="text-center">
                <h3 className="font-serif text-xl font-semibold mb-1 group-hover:text-accent transition-smooth">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-primary hover:bg-primary hover:text-primary-foreground font-medium tracking-wider uppercase transition-smooth">
            View All Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
