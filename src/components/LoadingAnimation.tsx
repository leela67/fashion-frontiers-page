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
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luxury opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo and Brand Name */}
        <div className="mb-8 overflow-hidden text-center">
          {/* R Logo SVG */}
          <div className="animate-logo-scale mb-6 flex justify-center">
            <svg
              width="120"
              height="140"
              viewBox="0 0 120 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-24 md:w-28 md:h-32 lg:w-32 lg:h-36"
            >
              {/* Elegant R Logo based on brand kit */}
              <path
                d="M30 20 Q45 15 55 20 Q65 25 65 40 Q65 55 55 60 L75 60 Q85 65 90 75 Q95 85 90 95 Q85 105 75 108 L95 138"
                stroke="url(#logoGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M30 20 L30 110"
                stroke="url(#logoGradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M55 60 L70 110"
                stroke="url(#logoGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle
                cx="98"
                cy="125"
                r="8"
                fill="url(#logoGradient)"
              />
              <path
                d="M30 40 Q50 35 60 40"
                stroke="url(#logoGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(38 60% 79%)" />
                  <stop offset="50%" stopColor="hsl(38 65% 75%)" />
                  <stop offset="100%" stopColor="hsl(38 60% 79%)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* IVAAJ COUTURE Text */}
          <div className="animate-fade-in-up animation-delay-300">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-wider">
              <span className="inline-block text-secondary animate-letter-spacing">
                IVAAJ
              </span>
            </h1>
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-light text-secondary tracking-[0.3em] mt-1">
              COUTURE
            </h2>
          </div>
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

