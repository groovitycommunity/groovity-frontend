import { useState } from "react";
import Navigation from "@/components/Navigation";
import MusicTrackCardWithPlayer from "@/components/MusicTrackCardWithPlayer";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

//todo: remove mock functionality
const allTracks = [
  { id: "1", title: "Urban Nights", artist: "GrooVITy Collective", duration: "3:45" },
  { id: "2", title: "Midnight Groove", artist: "DJ Velocity", duration: "4:12" },
  { id: "3", title: "Street Symphony", artist: "The Beatmakers", duration: "3:28" },
  { id: "4", title: "Echo Chamber", artist: "GrooVITy Collective", duration: "3:55" },
  { id: "5", title: "Neon Pulse", artist: "Rhythm Nation", duration: "4:20" },
  { id: "6", title: "Bass Drop", artist: "Sub Frequency", duration: "3:33" },
  { id: "7", title: "Vinyl Dreams", artist: "The Beatmakers", duration: "4:05" },
  { id: "8", title: "City Lights", artist: "GrooVITy Collective", duration: "3:50" },
  { id: "9", title: "Trap House", artist: "DJ Velocity", duration: "3:40" },
  { id: "10", title: "Lo-Fi Chill", artist: "Calm Vibes", duration: "5:15" },
  { id: "11", title: "Break Beat", artist: "Rhythm Nation", duration: "3:25" },
  { id: "12", title: "Sample This", artist: "The Beatmakers", duration: "4:00" },
];

export default function Catalogue() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTracks = allTracks.filter(
    (track) =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/3 via-background to-background pb-20">
      <Navigation />

      <AnimatedSection className="pt-32 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-4">
            Music Catalogue
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our collection of original beats and productions - each with its own player
          </p>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tracks or artists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="input-search-tracks"
            />
          </div>
        </div>
      </AnimatedSection>

      <div className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTracks.map((track, index) => (
              <AnimatedSection key={track.id} delay={index * 50}>
                <MusicTrackCardWithPlayer {...track} />
              </AnimatedSection>
            ))}
          </div>

          {filteredTracks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No tracks found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
