import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import trackFile from "@assets/07- sample chaar_1763053723439.mp4";

export default function AudioController() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(trackFile);
    audio.loop = true;
    audioRef.current = audio;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const handleClick = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
      <Button
        size="icon"
        variant="default"
        onClick={handleClick}
        className="h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg"
        data-testid="button-audio-toggle"
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5 sm:h-6 sm:w-6" />
        ) : (
          <VolumeX className="h-5 w-5 sm:h-6 sm:w-6" />
        )}
      </Button>
    </div>
  );
}
