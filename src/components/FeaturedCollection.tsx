import { useState, useEffect, useRef } from "react";
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

// Single video to display alongside images
const videoSrc = "https://videos.pexels.com/video-files/3045163/3045163-sd_640_360_25fps.mp4";

const FeaturedCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [videoAutoplay, setVideoAutoplay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for video autoplay on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section is in viewport - autoplay video
            setVideoAutoplay(true);
            if (videoRef.current) {
              videoRef.current.play().catch(() => {
                // Autoplay may be blocked, user can click play
              });
            }
          } else {
            // Section is out of viewport - pause video
            setVideoAutoplay(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section id="collections" className="py-16 lg:py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        {/* Section Title - Luxury Centered */}
        <div className="mb-12 lg:mb-16 text-center animate-fade-in">
          <p className="subheading-sm text-muted-foreground tracking-[0.3em] mb-3 font-light">
            New Arrivals
          </p>
          <h2 className="heading-luxury heading-6xl tracking-tight text-primary mb-4 leading-tight">
            Latest Collection
          </h2>
          <div className="w-20 h-[2px] bg-primary/40 mx-auto" />
        </div>

        {/* Main Layout - Text Left, Image and Video Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Column - Elegant Text Content */}
          <div className="flex flex-col justify-start lg:col-span-1 lg:sticky lg:top-24">
            <div className="space-y-6 mb-10">
              <div>
                <h3 className="heading-luxury heading-5xl tracking-tight text-primary mb-5 leading-tight">
                  Rang Mahal
                </h3>
                <div className="w-14 h-[2px] bg-primary/60 mb-5" />
              </div>

              <p className="body-text-lg font-light text-foreground/80 mb-5">
                Begin your journey of matrimony with our wedding edit—a poetic ode to your love story. The intricate craftsmanship celebrates your bond, making every detail meaningful.
              </p>

              <p className="body-text-lg font-light text-foreground/80 mb-6">
                Elevate your wedding day with ensembles that add a touch of regal elegance and echo the beauty of your shared journey.
              </p>
            </div>

            {/* Luxury CTA Button */}
            <div>
              <button className="group relative btn-primary px-8 py-4 overflow-hidden shadow-elegant hover:shadow-hover font-medium tracking-[0.15em] uppercase text-sm">
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-charcoal transform scale-x-0 group-hover:scale-x-100 transition-elegant origin-left" />
              </button>
            </div>
          </div>

          {/* Right Column - Refined Media Layout */}
          <div className="lg:col-span-2">
            <div className="relative w-full">
              {/* Main Carousel Container - Elegant Proportions */}
              <div className="flex gap-6 lg:gap-8 items-center">
                {/* Image Carousel - Primary (65% width on desktop) */}
                <div className="relative overflow-hidden bg-muted aspect-portrait shadow-elegant hover:shadow-hover transition-elegant w-full lg:w-[65%] group">
                  {/* Carousel Items with Smooth Transitions */}
                  {carouselItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-all duration-[800ms] ease-out ${
                        index === currentIndex
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-[0.98]"
                      }`}
                    >
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
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

                  {/* Subtle Vignette Overlay */}
                  <div className="absolute inset-0 overlay-subtle pointer-events-none" />

                  {/* Refined Navigation Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-3 overlay-light-20 hover:overlay-light-40 backdrop-blur-sm text-hero transition-elegant hover:shadow-elegant opacity-0 group-hover:opacity-100 z-10 border border-hero/30"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={goToNext}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-3 overlay-light-20 hover:overlay-light-40 backdrop-blur-sm text-hero transition-elegant hover:shadow-elegant opacity-0 group-hover:opacity-100 z-10 border border-hero/30"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Video Element - Secondary (35% width, 75% height of image, vertically centered) */}
                <div className="relative w-full lg:w-[35%] flex items-center">
                  <div className="relative overflow-hidden bg-muted shadow-elegant hover:shadow-hover transition-elegant w-full aspect-portrait" style={{ height: '75%' }}>
                    <video
                      ref={videoRef}
                      src={videoSrc}
                      className="w-full h-full object-cover"
                      controls
                      controlsList="nodownload"
                      muted
                      loop
                    />
                  </div>
                </div>
              </div>

              {/* Elegant Carousel Indicators */}
              <div className="flex gap-3 justify-center mt-8">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-[2px] rounded-full transition-elegant ${
                      index === currentIndex
                        ? "bg-primary w-12"
                        : "bg-border w-8 hover:bg-primary/40 hover:w-10"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Refined Auto-play Toggle */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="w-8 h-[1px] bg-border" />
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="subheading-sm tracking-[0.2em] text-muted-foreground hover:text-primary transition-smooth"
              >
                {isAutoPlay ? "Pause Carousel" : "Play Carousel"}
              </button>
              <div className="w-8 h-[1px] bg-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
