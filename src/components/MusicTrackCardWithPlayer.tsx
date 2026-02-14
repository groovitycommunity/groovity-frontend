import { Play, Pause, ShoppingCart } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { AudioManager } from "@/lib/AudioManager";

interface Props {
  id: string;
  title: string;
  artist: string;
  price: number;
  previewUrl: string;
  thumbnailUrl: string;
  onBuy: () => void;
  onPlayStateChange?: (playing: boolean) => void; // 👈 ADDED BACK
}

export default function MusicTrackCardWithPlayer({
  id,
  title,
  artist,
  price,
  previewUrl,
  thumbnailUrl,
  onBuy,
  onPlayStateChange
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AudioManager.registerStopCallback(() => {
      setIsPlaying(false);
      onPlayStateChange?.(false);
    });
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    const heroVideo = document.getElementById("hero-video") as HTMLVideoElement | null;

    if (!audio) return;

    if (isPlaying) {
      AudioManager.stop(audio);
      setIsPlaying(false);
      onPlayStateChange?.(false);

      heroVideo?.play().catch(() => { }); // ▶ resume bg video
    } else {
      AudioManager.play(audio);
      setIsPlaying(true);
      onPlayStateChange?.(true);

      heroVideo?.pause(); // ⏸ pause bg video
    }
  };


  return (
    <Card className="
      w-full bg-card/20 border border-primary/20 rounded-xl 
      px-4 py-3 flex items-center justify-between gap-3
      hover:shadow-primary/20 transition-all duration-300
    ">
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg"
      />

      {/* Info */}
      <div className="flex flex-col flex-1 min-w-0 pl-2">
        <h2 className="text-base sm:text-lg font-semibold truncate">{title}</h2>
        <p className="text-muted-foreground text-xs sm:text-sm truncate">
          {artist}
        </p>
      </div>

      {/* Price */}
      <div className="text-right pr-2 hidden sm:block">
        <p className="text-xl font-bold text-primary">₹{price}*</p>
        <span className="text-muted-foreground text-xs">Exclusive License</span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={togglePlay}
          className="p-2 rounded-md border border-primary text-primary hover:bg-primary/10 transition"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>

        <button
          onClick={onBuy}
          className="bg-primary px-4 py-2 rounded-md text-black font-semibold text-sm flex items-center gap-2 hover:bg-primary/80 transition"
        >
          <ShoppingCart size={16} /> Buy
        </button>
      </div>

      <audio
        ref={audioRef}
        src={previewUrl}
        onEnded={() => {
          setIsPlaying(false);
          onPlayStateChange?.(false);

          const heroVideo = document.getElementById("hero-video") as HTMLVideoElement | null;
          heroVideo?.play().catch(() => { });
        }}

      />
    </Card>
  );
}
