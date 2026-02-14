import React, { useState, useEffect } from "react";
import {
    Play, Pause, SkipForward, SkipBack,
    Repeat, ListMusic, X, Activity
} from "lucide-react";

// --- Fake Playlist (UI Only, layout unchanged) ---
const TRACKS = [
    { id: 1, title: "Pikaboo", artist: "GrooVITy" },
];

// --- Volume Knob (Styled to match DJ Controller) ---
const VolumeKnob = ({ value, onChange }: { value: number; onChange: (val: number) => void }) => {
    const [isDragging, setIsDragging] = useState(false);
    const startY = React.useRef<number>(0);
    const startVal = React.useRef<number>(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        startY.current = e.clientY;
        startVal.current = value;
        document.body.style.cursor = "ns-resize";
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            const deltaY = startY.current - e.clientY;
            const sensitivity = 0.005;
            const newValue = Math.min(1, Math.max(0, startVal.current + deltaY * sensitivity));
            onChange(newValue);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            document.body.style.cursor = "default";
        };

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, onChange]);

    const rotation = value * 270 - 135;

    return (
        <div className="flex flex-col items-center gap-1">
            <div
                onMouseDown={handleMouseDown}
                // Changed: Darker, more metallic look with a yellow accent ring on active
                className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#2a2a2a] to-black shadow-[0_4px_8px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] border border-[#111] flex items-center justify-center cursor-ns-resize group active:scale-95 transition-transform"
            >
                {/* Indicator Line (The "Paint Splash" Yellow) */}
                <div
                    className="absolute w-1 h-3.5 bg-[#FFE600] rounded-full top-1 origin-bottom shadow-[0_0_8px_rgba(255,230,0,0.6)]"
                    style={{ transform: `rotate(${rotation}deg) translateY(-25%)` }}
                />
                {/* Center Cap */}
                <div className="w-5 h-5 rounded-full bg-[#151515] border border-black shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
            </div>
            <span className="text-[9px] font-black text-[#666] uppercase tracking-wider group-hover:text-[#FFE600] transition-colors">Vol</span>
        </div>
    );
};

// --- MAIN COMPONENT ---
export default function AudioWidget() {

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(0.8);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [showPlaylist, setShowPlaylist] = useState(false);

    const currentTrack = TRACKS[currentTrackIndex];

    const getVideo = () =>
        document.getElementById("hero-video") as HTMLVideoElement | null;

    // 🔹 Play / Pause
    useEffect(() => {
        const video = getVideo();
        if (!video) return;

        if (isPlaying) {
            video.play().catch(() => setIsPlaying(false));
        } else {
            video.pause();
        }
    }, [isPlaying]);

    // 🔹 Volume + Loop
    useEffect(() => {
        const video = getVideo();
        if (!video) return;

        video.muted = false;
        video.volume = volume;

        // Always loop
        video.loop = true;

    }, [volume]);

    // 🔹 Track Progress
    useEffect(() => {
        const video = getVideo();
        if (!video) return;

        const update = () => {
            if (!video.duration) return;
            setCurrentTime(video.currentTime);
            setDuration(video.duration);
            setProgress((video.currentTime / video.duration) * 100);
        };

        video.addEventListener("timeupdate", update);

        return () => {
            video.removeEventListener("timeupdate", update);
        };
    }, []);

    const togglePlay = () => setIsPlaying(prev => !prev);

    const handleNext = () => {
        const video = getVideo();
        if (!video) return;
        video.currentTime = 0;
        video.play();
        setIsPlaying(true);
        // Logic kept strictly as provided: does not increment index
    };

    const handlePrev = () => {
        const video = getVideo();
        if (!video) return;
        video.currentTime = 0;
        video.play();
        setIsPlaying(true);
        // Logic kept strictly as provided: does not decrement index
    };

    const selectTrack = (index: number) => {
        setCurrentTrackIndex(index);
        setShowPlaylist(false);
    };

    const handleSeek = (val: number) => {
        const video = getVideo();
        if (!video || !video.duration) return;
        video.currentTime = (val / 100) * video.duration;
        setProgress(val);
    };

    const formatTime = (t: number) => {
        if (!t) return "0:00";
        const min = Math.floor(t / 60);
        const sec = Math.floor(t % 60);
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    };

    return (
        <div className="relative z-10 font-mono select-none">
            {/* Placeholder for the external video element this widget controls */}
            <div className="hidden">
                <video id="hero-video" src="https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4" />
            </div>

            {/* Container Style Update: Dark Asphalt & Yellow Theme */}
            <div className="w-[320px] bg-[#121212] rounded-md shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-[#333] relative overflow-hidden flex flex-col group">

                {/* Grunge Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#222] via-[#121212] to-[#050505] opacity-100 pointer-events-none" />

                {/* Screw Holes */}
                <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#000] shadow-[0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center z-10"><div className="w-0.5 h-px bg-[#333] rotate-45"></div></div>
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#000] shadow-[0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center z-10"><div className="w-0.5 h-px bg-[#333] rotate-12"></div></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#000] shadow-[0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center z-10"><div className="w-0.5 h-px bg-[#333] -rotate-45"></div></div>
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#000] shadow-[0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center z-10"><div className="w-0.5 h-px bg-[#333] rotate-90"></div></div>

                {/* INFO STRIP */}
                <div className="relative bg-[#0a0a0a] px-5 py-3 border-b border-[#222] flex items-center justify-between z-10">
                    <div className="flex-1 min-w-0 pr-2">
                        <div className="text-[#FFE600] font-black text-xs truncate tracking-widest uppercase flex items-center gap-2 drop-shadow-[0_0_5px_rgba(255,230,0,0.3)]">
                            {isPlaying && <div className="w-1.5 h-1.5 bg-[#FFE600] rounded-full animate-pulse shadow-[0_0_5px_#FFE600]" />}
                            {currentTrack.title}
                        </div>
                        <div className="flex justify-between text-[9px] text-[#555] font-bold mt-1 uppercase tracking-wider">
                            <span className="truncate max-w-[100px] hover:text-[#888] transition-colors">{currentTrack.artist}</span>
                            <span className="font-mono text-[#777]">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* PROGRESS */}
                <div className="h-1 bg-[#1a1a1a] w-full relative group cursor-pointer z-10 border-t border-black">
                    <div
                        className="absolute top-0 left-0 h-full bg-[#FFE600] transition-all duration-100 shadow-[0_0_10px_rgba(255,230,0,0.4)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={(e) => handleSeek(parseFloat(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                </div>

                {/* CONTROLS */}
                <div className="relative p-4 bg-gradient-to-b from-[#151515] to-[#0a0a0a] flex items-center justify-between gap-3 z-10">

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setShowPlaylist(!showPlaylist)}
                            className="w-8 h-8 rounded-sm bg-[#111] border border-[#222] flex items-center justify-center text-[#555] hover:text-[#FFE600] hover:border-[#FFE600] hover:shadow-[0_0_8px_rgba(255,230,0,0.2)] transition-all"
                        >
                            <ListMusic size={14} />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 bg-[#080808] p-1 rounded-full border border-[#1a1a1a] shadow-inner">
                        <button onClick={handlePrev} className="p-2 text-[#444] hover:text-white transition-colors">
                            <SkipBack size={16} />
                        </button>

                        <button
                            onClick={togglePlay}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg active:scale-95 border border-[#333] ${isPlaying ? 'bg-[#FFE600] text-black shadow-[0_0_15px_rgba(255,230,0,0.4)] border-[#FFE600]' : 'bg-[#1a1a1a] text-[#FFE600] hover:bg-[#222]'}`}
                        >
                            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
                        </button>

                        <button onClick={handleNext} className="p-2 text-[#444] hover:text-white transition-colors">
                            <SkipForward size={16} />
                        </button>
                    </div>

                    <VolumeKnob value={volume} onChange={setVolume} />
                </div>

                {/* PLAYLIST OVERLAY */}
                {showPlaylist && (
                    <div className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-sm z-20 flex flex-col animate-in fade-in duration-200">
                        <div className="flex items-center justify-between p-3 border-b border-[#222]">
                            <span className="text-[10px] font-black text-[#FFE600] uppercase tracking-widest">Library</span>
                            <button onClick={() => setShowPlaylist(false)} className="text-[#555] hover:text-[#FFE600] transition-colors">
                                <X size={14} />
                            </button>
                        </div>

                        <div className="overflow-y-auto flex-1 p-2">
                            {TRACKS.map((track, idx) => (
                                <div
                                    key={track.id}
                                    onClick={() => selectTrack(idx)}
                                    className={`p-2 rounded-sm mb-1 cursor-pointer text-xs font-bold uppercase tracking-wide transition-all ${currentTrackIndex === idx
                                            ? 'text-[#FFE600] bg-[#1a1a1a] border-l-2 border-[#FFE600]'
                                            : 'text-[#555] hover:text-[#888] hover:bg-[#111]'
                                        }`}
                                >
                                    {track.title}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}