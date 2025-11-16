import { useEffect, useRef, useState } from "react";
import { AudioManager } from "@/lib/AudioManager";

export default function AudioController() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    // Register background audio in global manager
    AudioManager.registerBackground(audioRef.current);

    const audio = audioRef.current;

    const syncState = () => setIsPlaying(!audio.paused);
    audio.addEventListener("play", syncState);
    audio.addEventListener("pause", syncState);

    return () => {
      audio.removeEventListener("play", syncState);
      audio.removeEventListener("pause", syncState);
    };
  }, []);

  const toggleBackgroundPlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      AudioManager.stopAll(); // stop beats
      audioRef.current.play();
    }
  };

  return (
    <div className="hidden">
      <audio
        ref={audioRef}
        src="/music/background.mp3"
        loop
        autoPlay={false}
      />
    </div>
  );
}
