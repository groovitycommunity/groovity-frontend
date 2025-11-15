import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";
import { Link } from "wouter";
import { useAudio } from "@/contexts/AudioContext";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isPlaying } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isPlaying;
      videoRef.current.volume = isPlaying ? 0.3 : 0;
    }
  }, [isPlaying]);

  const videoScale = Math.max(0.5, 1 - scrollY / 1000);
  const videoOpacity = Math.max(0.3, 0.6 - scrollY / 2000);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        style={{ 
          transform: `scale(${videoScale})`,
          opacity: videoOpacity
        }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-dj-mixing-music-on-a-turntable-in-a-nightclub-50647-large.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.15),transparent_50%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium tracking-widest uppercase backdrop-blur-sm">
            Music • Culture • Innovation
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-display font-extrabold text-foreground mb-6 tracking-tight">
          Groo<span className="text-primary">VIT</span>y
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Where hip-hop meets innovation. Join VIT's premier technoculture club for music production workshops, 
          live concerts, and cutting-edge seminars.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/events">
            <Button variant="default" size="lg" className="gap-2 text-base" data-testid="button-explore-events">
              <Calendar className="h-5 w-5" />
              Explore Events
            </Button>
          </Link>
          <Link href="/beats">
            <Button variant="outline" size="lg" className="gap-2 text-base bg-background/20 backdrop-blur-sm" data-testid="button-listen-music">
              <Play className="h-5 w-5" />
              Buy Beats
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-[2px] bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
}
