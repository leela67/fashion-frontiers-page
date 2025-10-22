import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";

const carouselItems = [
  {
    id: 1,
    type: "image",
    src: collection1,
    alt: "Rang Mahal Collection - Image 1",
  },
  {
    id: 2,
    type: "image",
    src: collection2,
    alt: "Rang Mahal Collection - Image 2",
  },
  {
    id: 3,
    type: "image",
    src: collection3,
    alt: "Rang Mahal Collection - Image 3",
  },
  {
    id: 4,
    type: "image",
    src: collection4,
    alt: "Rang Mahal Collection - Image 4",
  },
];

const FeaturedCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section id="collections" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 lg:mb-20">
          <h2 className="font-black-mango text-4xl lg:text-5xl font-bold tracking-tight text-primary text-center lg:text-left mb-4">
            Latest Collection
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="mb-8">
              <h3 className="font-black-mango text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-6">
                Rang Mahal
              </h3>
              <p className="font-darker-grotesque text-base lg:text-lg font-normal leading-relaxed text-gray-700 mb-6">
                Begin your journey of matrimony with our wedding edit—a poetic ode to your love story. The intricate craftsmanship celebrates your bond, making every detail meaningful. Elevate your wedding day with ensembles that add a touch of regal and that echoes the beauty of your shared journey.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button className="font-darker-grotesque px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-semibold tracking-wider uppercase text-sm">
                Explore Now
              </button>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full">
              {/* Main Carousel Container */}
              <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] rounded-lg shadow-lg">
                {/* Carousel Items */}
                {carouselItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      />
                    )}
                  </div>
                ))}

                {/* Play Button Overlay for Videos */}
                {carouselItems[currentIndex]?.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors cursor-pointer">
                    <Play className="w-16 h-16 text-white fill-white" />
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white text-black rounded-full transition-all duration-300 hover:shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white text-black rounded-full transition-all duration-300 hover:shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Carousel Indicators (Dots) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Auto-play Toggle */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="text-sm font-darker-grotesque tracking-wider uppercase text-gray-600 hover:text-primary transition-colors"
              >
                {isAutoPlay ? "Pause" : "Play"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
