import MusicTrackCard from "../MusicTrackCard";

export default function MusicTrackCardExample() {
  return (
    <div className="p-8 max-w-xs">
      <MusicTrackCard
        id="1"
        title="Urban Nights"
        artist="grooVITy Collective"
        duration="3:45"
        onPlay={() => console.log("Play clicked")}
      />
    </div>
  );
}
