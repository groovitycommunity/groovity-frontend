import { useEffect, useState } from "react";
import preloaderVideoSrc from "@assets/Final Preloader.mp4";

export default function Preloader() {

  const [isLoading, setIsLoading] = useState(() => {
    return window.location.pathname === "/";
  });

  const [slideUp, setSlideUp] = useState(false);

  // 🔒 Proper Scroll Lock (previous reliable logic)
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.documentElement.style.height = "100vh";

      document.body.classList.add("preloader-active");
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";

      document.body.classList.remove("preloader-active");
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
      document.body.classList.remove("preloader-active");
    };
  }, [isLoading]);


  // Fallback timer
  useEffect(() => {
    if (!isLoading) return;

    const fallbackTimer = setTimeout(() => {
      handleTransition();
    }, 5500);

    return () => clearTimeout(fallbackTimer);
  }, [isLoading]);

  const handleTransition = () => {
    setSlideUp(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleVideoEnd = () => {
    handleTransition();
  };

  const handleVideoError = () => {
    handleTransition();
  };

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-transform duration-1000 ease-in-out ${slideUp ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        onError={handleVideoError}
        className="w-full h-full object-cover"
      >
        <source src={preloaderVideoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
