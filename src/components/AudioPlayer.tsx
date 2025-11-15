import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

interface AudioPlayerProps {
  trackTitle: string;
  artist: string;
  coverUrl?: string;
  audioUrl?: string;
}

export default function AudioPlayer({
  trackTitle,
  artist,
  coverUrl,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(33);
  const [volume, setVolume] = useState(75);
  const [currentTime, setCurrentTime] = useState("1:23");
  const [duration] = useState("3:45");

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log(isPlaying ? "Paused" : "Playing");
  };

  const handleProgressChange = (value: number[]) => {
    setProgress(value[0]);
    const totalSeconds = 225;
    const newTime = Math.floor((value[0] / 100) * totalSeconds);
    const minutes = Math.floor(newTime / 60);
    const seconds = newTime % 60;
    setCurrentTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);
  };

  return (
    <Card className="fixed bottom-0 left-0 right-0 border-t border-border bg-card/95 backdrop-blur-lg z-40" data-testid="audio-player">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {coverUrl ? (
              <img src={coverUrl} alt={trackTitle} className="h-14 w-14 rounded-md" />
            ) : (
              <div className="h-14 w-14 rounded-md bg-gradient-to-br from-primary/30 to-accent flex items-center justify-center">
                <span className="text-2xl">♪</span>
              </div>
            )}
            
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-foreground truncate" data-testid="text-player-title">
                {trackTitle}
              </div>
              <div className="text-sm text-muted-foreground truncate">{artist}</div>
            </div>
          </div>

          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="flex items-center gap-4 mb-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                data-testid="button-previous"
              >
                <SkipBack className="h-4 w-4" />
              </Button>
              
              <Button
                variant="default"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={handlePlayPause}
                data-testid="button-play-pause"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5 ml-0.5" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                data-testid="button-next"
              >
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground w-10 text-right">{currentTime}</span>
              <Slider
                value={[progress]}
                onValueChange={handleProgressChange}
                max={100}
                step={1}
                className="flex-1"
                data-testid="slider-progress"
              />
              <span className="text-xs text-muted-foreground w-10">{duration}</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 w-40">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider
              value={[volume]}
              onValueChange={(value) => setVolume(value[0])}
              max={100}
              step={1}
              className="flex-1"
              data-testid="slider-volume"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
