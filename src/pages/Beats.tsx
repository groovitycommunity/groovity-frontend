import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import MusicTrackCardWithPlayer from "@/components/MusicTrackCardWithPlayer";
import PurchaseModal from "@/components/PurchaseModal";
import MusicVisualizerBottom from "@/components/MusicVisualizerBottom";

interface Beat {
  id: string;
  title: string;
  artist: string;
  price: number;
  preview_url: string;
  thumbnail_url: string;
}

export default function Beats() {
  const [beats, setBeats] = useState<Beat[]>([]);
  const [selectedBeat, setSelectedBeat] = useState<Beat | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/beats`);
        if (!res.ok) return;
        const data = await res.json();
        setBeats(data);
      } catch (err) {
        console.error("Failed to fetch beats", err);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background">
      <Navigation />

      <AnimatedSection className="pt-32 pb-10 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-4">
            Beats Store
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            Explore exclusive beats crafted by our producers.
          </p>
          

          <div className="space-y-8">
            {beats.map((beat, idx) => (
              <AnimatedSection key={beat.id} delay={idx * 100}>
                <MusicTrackCardWithPlayer
                  id={beat.id}
                  title={beat.title}
                  artist={beat.artist}
                  price={beat.price}
                  previewUrl={beat.preview_url}
                  thumbnailUrl={beat.thumbnail_url}
                  onBuy={() => setSelectedBeat(beat)}
                  onPlayStateChange={setIsPlaying}
                />
              </AnimatedSection>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8 opacity-70">
            * Prices are negotiable
          </p>
        </div>
      </AnimatedSection>

      <Footer />

      {selectedBeat && (
        <PurchaseModal
          isOpen={true}
          onClose={() => setSelectedBeat(null)}
          beat={selectedBeat}
        />
      )}

      <MusicVisualizerBottom isPlaying={isPlaying} />
    </div>
  );
}
