import mobileBg from "@assets/bg_for_mobile.jpg";
import desktopBg from "@assets/bg_for_desktop.png"; // 👈 add your desktop image
import { useEffect, useState } from "react";

export default function BackgroundCanvas() {
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop < 100) {
        setBlurAmount(0);   // fully clear at top
      } else {
        const blur = Math.min((scrollTop - 100) / 50, 8);
        setBlurAmount(blur);
      }
    };


    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* Mobile Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat md:hidden transition-all duration-700 ease-in-out touch-none"
        style={{
          backgroundImage: `url(${mobileBg})`,
          backgroundPosition: "center 25%",
          filter: `blur(${blurAmount}px)`,
        }}
      />

      {/* Desktop Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat hidden md:block transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${desktopBg})`,
          backgroundPosition: "center 20%",
          filter: `blur(${blurAmount}px)`,
        }}
      />

      <div className="absolute inset-0 "></div>
    </div>
  );
}
