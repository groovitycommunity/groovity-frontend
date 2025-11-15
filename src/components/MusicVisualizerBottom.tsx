import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface MusicVisualizerBottomProps {
  isPlaying: boolean;
}

export default function MusicVisualizerBottom({ isPlaying }: MusicVisualizerBottomProps) {
  if (!isPlaying) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 z-40 pointer-events-none">
      <DotLottieReact
        src="https://lottie.host/9c73638d-6ee3-4b90-bc34-69bf3c1501b1/kHPx1vdfKQ.lottie"
        loop
        autoplay
        className="w-full h-full"
      />
    </div>
  );
}
