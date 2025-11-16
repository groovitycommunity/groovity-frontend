// 🔥 Global Audio Manager — handles background + beats

class GlobalAudioManager {
  private currentAudio: HTMLAudioElement | null = null;
  private backgroundAudio: HTMLAudioElement | null = null;
  private stopCallbacks: Array<() => void> = [];

  registerBackground(audio: HTMLAudioElement) {
    this.backgroundAudio = audio;
  }

  registerStopCallback(cb: () => void) {
    this.stopCallbacks.push(cb);
  }

  stopAll() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }

    if (this.backgroundAudio) {
      this.backgroundAudio.pause();
      this.backgroundAudio.currentTime = 0;
    }

    this.stopCallbacks.forEach(cb => cb());
  }

  play(audio: HTMLAudioElement) {
    this.stopAll();
    this.currentAudio = audio;
    audio.play();
  }

  stop(audio: HTMLAudioElement) {
    audio.pause();
    audio.currentTime = 0;
  }
}

export const AudioManager = new GlobalAudioManager();
