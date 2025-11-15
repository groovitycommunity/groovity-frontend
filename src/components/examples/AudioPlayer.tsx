import AudioPlayer from "../AudioPlayer";

export default function AudioPlayerExample() {
  return (
    <div className="h-screen flex items-end">
      <AudioPlayer
        trackTitle="Midnight Groove"
        artist="grooVITy Collective"
      />
    </div>
  );
}
