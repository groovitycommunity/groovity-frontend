import MusicTrackCardWithPlayer from "../MusicTrackCardWithPlayer";

export default function MusicTrackCardWithPlayerExample() {
  return (
    <div className="p-8 max-w-xs">
      <MusicTrackCardWithPlayer
        id="1"
        title="Urban Nights"
        artist="grooVITy Collective"
        duration="3:45"
      />
    </div>
  );
}
