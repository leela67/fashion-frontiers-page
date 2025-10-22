import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Timeless Elegance",
    subtitle: "Spring/Summer Collection 2025",
  },
  {
    image: hero2,
    title: "Contemporary Luxury",
    subtitle: "Minimalist Sophistication",
  },
  {
    image: hero3,
    title: "Haute Couture",
    subtitle: "Exclusive Designer Pieces",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl animate-fade-in">
              <h2 className="font-black-mango text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="font-darker-grotesque text-lg md:text-xl lg:text-2xl text-white/90 tracking-widest uppercase drop-shadow-md">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-smooth text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-smooth text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
