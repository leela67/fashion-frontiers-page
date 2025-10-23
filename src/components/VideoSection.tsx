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
        poster="https://images.unsplash.com/photo-1558769132-cb1aea6c0a0f?w=1920&h=1080&fit=crop"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-runway-in-slow-motion-43683-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-5xl animate-fade-in">
          {/* Luxury Typography */}
          <div className="mb-8">
            <p className="font-darker-grotesque text-sm md:text-base text-white/80 tracking-[0.3em] uppercase mb-4 font-light">
              Rivaaj Couture Presents
            </p>
            <h1 className="font-black-mango text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[0.95]">
              Fashion Film
            </h1>
            <div className="w-24 h-[1px] bg-white/60 mx-auto mb-8" />
            <p className="font-darker-grotesque text-base md:text-lg lg:text-xl text-white/90 tracking-[0.2em] uppercase font-light max-w-2xl mx-auto leading-relaxed">
              Experience the art of luxury couture
            </p>
          </div>

          {/* Elegant Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="group mx-auto w-20 h-20 rounded-full border-2 border-white/40 backdrop-blur-md hover:border-white hover:bg-white/10 transition-elegant flex items-center justify-center text-white shadow-elegant"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-9 h-9 transition-transform group-hover:scale-110" />
            ) : (
              <Play className="w-9 h-9 ml-1 transition-transform group-hover:scale-110" />
            )}
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-80 animate-fade-in">
          <p className="font-darker-grotesque text-xs text-white/70 tracking-[0.2em] uppercase">
            Scroll to explore
          </p>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
