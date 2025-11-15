import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState } from "react";

interface MusicTrackCardProps {
  id: string;
  title: string;
  artist: string;
  duration: string;
  coverUrl?: string;
  onPlay?: () => void;
  isPlaying?: boolean;
}

export default function MusicTrackCard({
  title,
  artist,
  duration,
  coverUrl,
  onPlay,
  isPlaying = false,
}: MusicTrackCardProps) {
  const [localPlaying, setLocalPlaying] = useState(false);

  const handlePlayClick = () => {
    setLocalPlaying(!localPlaying);
    onPlay?.();
  };

  const playing = isPlaying || localPlaying;

  return (
    <Card className="overflow-hidden hover-elevate group" data-testid={`card-track-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative aspect-square overflow-hidden bg-muted">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/30 via-accent to-muted flex items-center justify-center">
            <div className="text-6xl font-display font-bold text-primary/50">♪</div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button
            variant="default"
            size="icon"
            className="h-16 w-16 rounded-full"
            onClick={handlePlayClick}
            data-testid="button-play"
          >
            {playing ? (
              <Pause className="h-8 w-8" />
            ) : (
              <Play className="h-8 w-8 ml-1" />
            )}
          </Button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1 truncate" data-testid="text-track-title">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground truncate" data-testid="text-artist">
          {artist}
        </p>
        <p className="text-xs text-muted-foreground mt-2">{duration}</p>
      </div>
    </Card>
  );
}
