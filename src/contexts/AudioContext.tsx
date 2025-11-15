import { createContext, useContext, useState, useRef, ReactNode, useEffect } from "react";

interface AudioContextType {
  isPlaying: boolean;
  isBeatPlaying: boolean;
  toggleAudio: () => Promise<void>;
  pauseBackgroundMusic: () => void;
  setBeatPlaying: (playing: boolean) => void;
  setStopBeatCallback: (callback: (() => void) | null) => void;
  stopCurrentBeat: () => void;
  audioElement: HTMLAudioElement | null;
  audioContext: AudioContext | null;
  analyser: AnalyserNode | null;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBeatPlaying, setIsBeatPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const stopBeatCallbackRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const audio = new Audio("https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3");
    audio.loop = true;
    audio.volume = 0.3;

    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const analyser = ctx.createAnalyser();
    const source = ctx.createMediaElementSource(audio);
    
    source.connect(analyser);
    analyser.connect(ctx.destination);
    analyser.fftSize = 256;
    
    analyserRef.current = analyser;
    setAudioElement(audio);
    setAudioContext(ctx);
    
    return () => {
      audio.pause();
      ctx.close();
    };
  }, []);

  const toggleAudio = async () => {
    if (!audioElement || !audioContext) return;

    if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      try {
        if (audioContext.state === 'suspended') {
          await audioContext.resume();
        }
        await audioElement.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Audio playback failed:", error);
        setIsPlaying(false);
      }
    }
  };

  const pauseBackgroundMusic = () => {
    if (!audioElement) return;
    if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    }
  };

  const setBeatPlaying = (playing: boolean) => {
    setIsBeatPlaying(playing);
  };

  const setStopBeatCallback = (callback: (() => void) | null) => {
    stopBeatCallbackRef.current = callback;
  };

  const stopCurrentBeat = () => {
    if (stopBeatCallbackRef.current) {
      stopBeatCallbackRef.current();
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, isBeatPlaying, toggleAudio, pauseBackgroundMusic, setBeatPlaying, setStopBeatCallback, stopCurrentBeat, audioElement, audioContext, analyser: analyserRef.current }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
