import { useEffect, useState } from "react";

const LoadingAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Check if user has already seen the animation in this session
    const hasSeenAnimation = sessionStorage.getItem('hasSeenLoadingAnimation');
    
    if (hasSeenAnimation) {
      // Skip animation if already seen
      setIsVisible(false);
      onComplete();
      return;
    }

    // Animation sequence timing
    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 3500); // Main animation duration

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('hasSeenLoadingAnimation', 'true');
      onComplete();
    }, 4000); // Total duration including fade out

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luxury opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-secondary/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-secondary/20 rounded-full animate-pulse-slow animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-secondary/30 rounded-full animate-pulse-slow animation-delay-600"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        {/* Brand Name with Elegant Animation */}
        <div className="mb-8 overflow-hidden">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-wider animate-fade-in-up">
            <span className="inline-block animate-letter-spacing text-primary">
              RIVAAJ
            </span>
          </h1>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-secondary tracking-[0.3em] mt-2 animate-fade-in-up animation-delay-300">
            COUTURE
          </h2>
        </div>

        {/* Tagline */}
        <p className="font-body text-sm md:text-base text-muted-foreground tracking-widest uppercase animate-fade-in animation-delay-600">
          Where Heritage Meets Luxury
        </p>

        {/* Decorative Line */}
        <div className="mt-8 flex items-center justify-center gap-4 animate-fade-in animation-delay-900">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary"></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary"></div>
        </div>

        {/* Loading Indicator */}
        <div className="mt-12 flex justify-center animate-fade-in animation-delay-1200">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce animation-delay-0"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce animation-delay-150"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce animation-delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;

