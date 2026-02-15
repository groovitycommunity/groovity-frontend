import { useEffect, useRef, useState } from "react";
import backgroundVideo from "@/assets/bg_video.mp4";
import mobileBg from "@/assets/bg_for_mobile.jpg";

export default function BackgroundCanvas() {
  const [blurAmount, setBlurAmount] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop < 100) {
        setBlurAmount(0); // No blur at top
      } else {
        const blur = Math.min((scrollTop - 100) / 50, 8);
        setBlurAmount(blur);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);


  return (
    <div className="fixed left-0 right-0 bottom-0 top-[5rem] z-0 overflow-hidden pointer-events-none">

      <video
        id="hero-video"
        ref={videoRef}
        autoPlay
        loop
        playsInline
        muted
        src={backgroundVideo}
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        style={{
          filter: `blur(${blurAmount}px)`
        }}
      />



      {/* Mobile Background */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${mobileBg})`,
          backgroundPosition: "center center",
          filter: `blur(${blurAmount}px)`
        }}
      />


      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/1"></div>
    </div>
  );
}
