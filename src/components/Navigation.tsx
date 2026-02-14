import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/2_main_logo-removebg-preview_1762872053864.png";

export default function Navigation() {
  const [location, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Gallery", path: "/gallery" },
    { label: "Events", path: "/events" },
    { label: "Beats", path: "/beats" },
    { label: "About", path: "/about" },
    { label: "Team", path: "/team" },
    { label: "We are recruiting!", path: "/recruiting", isCTA: true }
  ];

  // 🔒 Disable scroll when mobile menu is open
  useEffect(() => {
    const html = document.documentElement;

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      html.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      html.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
        ? "bg-black/75 border-b border-border"
        : "bg-black/30 border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex items-center gap-4 px-3 py-2 rounded-md -ml-3">
              <img src={logoImage} alt="GrooVITy" className="h-14 w-14" />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navItems.map((item) =>
              item.isCTA ? (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`
                    px-4 py-2 rounded-full font-semibold text-sm
                    bg-[#F9FF00] text-black
                    hover:scale-105 transition-all duration-300
                    ${isActive(item.path) ? "ring-2 ring-[#F9FF00]/60" : ""}
                  `}
                >
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary hover:scale-105 ${isActive(item.path) ? "text-primary" : "text-white"
                    }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/85 backdrop-blur-md">
          <div className="px-6 py-6 space-y-3">
            {navItems.map((item) =>
              item.isCTA ? (
                <button
                  key={item.path}
                  onClick={() => {
                    handleNavigation(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#F9FF00] text-black font-semibold px-4 py-3 rounded-lg text-center hover:opacity-90 transition"
                >
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.path}
                  onClick={() => {
                    handleNavigation(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left block px-4 py-3 rounded-md transition-all duration-300 ${isActive(item.path) ? "bg-primary/10 text-primary" : "text-foreground"
                    }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
