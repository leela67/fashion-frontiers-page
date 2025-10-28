import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    const sectionElement = sectionRef.current;

    if (!videoElement || !sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play();
            setIsPlaying(true);
          } else {
            videoElement.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1920&h=1080&fit=crop"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-runway-in-slow-motion-43683-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Cinematic Gradient Overlay - Deeper for luxury feel */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-6xl animate-fade-in">
          {/* Luxury Typography - Enhanced elegance */}
          <div className="mb-12">
            <p className="subheading-sm text-hero/70 tracking-[0.35em] mb-6 font-light">
              Rivaaj Couture Presents
            </p>
            <h1 className="heading-display heading-9xl text-hero mb-8 tracking-tight leading-[0.9]">
              Fashion Film
            </h1>
            <div className="w-32 h-[1px] bg-hero/50 mx-auto mb-10" />
            <p className="body-text-lg text-hero/85 tracking-[0.25em] uppercase font-light max-w-3xl mx-auto leading-relaxed">
              Experience the art of luxury couture
            </p>
          </div>

          {/* Elegant Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="group mx-auto w-20 h-20 rounded-full border-2 border-hero/40 backdrop-blur-md hover:border-hero hover:overlay-light-20 transition-elegant flex items-center justify-center text-hero shadow-elegant"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-9 h-9 transition-smooth group-hover:scale-110" />
            ) : (
              <Play className="w-9 h-9 ml-1 transition-smooth group-hover:scale-110" />
            )}
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-80 animate-fade-in">
          <p className="subheading-sm text-hero/70 tracking-[0.2em]">
            Scroll to explore
          </p>
          <div className="w-[1px] h-16 bg-gradient-to-b from-hero/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
