import { useEffect, useState } from "react";
import preloaderVideoSrc from "@assets/Final Preloader_1763054332488.mp4";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    const fallbackTimer = setTimeout(() => {
      console.log('Preloader fallback timeout triggered');
      handleTransition();
    }, 10000);

    return () => clearTimeout(fallbackTimer);
  }, [isLoading]);

  const handleTransition = () => {
    setSlideUp(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 8700);
  };

  const handleVideoEnd = () => {
    console.log('Video ended, starting transition');
    handleTransition();
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video error, falling back to transition:', e);
    handleTransition();
  };

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-transform duration-1000 ease-in-out ${
        slideUp ? '-translate-y-full' : 'translate-y-0'
      }`}
      data-testid="preloader"
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        onError={handleVideoError}
        className="w-full h-full object-cover"
        data-testid="preloader-video"
      >
        <source src={preloaderVideoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
