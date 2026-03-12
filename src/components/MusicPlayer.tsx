import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { usePlayer } from "@/context/PlayerContext";
import { Slider } from "@/components/ui/slider";

const formatTime = (sec: number) => {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const MusicPlayer = () => {
  const { currentSong, isPlaying, progress, currentTime, togglePlay, setProgress, playNext, playPrev, volume, setVolume } = usePlayer();

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-border/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-3">
        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] text-muted-foreground w-8 text-right">{formatTime(currentTime)}</span>
          <Slider
            value={[progress]}
            onValueChange={([v]) => setProgress(v)}
            max={100}
            step={0.5}
            className="flex-1 h-1"
          />
          <span className="text-[10px] text-muted-foreground w-8">{currentSong.duration}</span>
        </div>
        <div className="flex items-center gap-4">
          {/* Song info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className={`h-12 w-12 rounded-lg overflow-hidden flex-shrink-0 ${isPlaying ? "animate-pulse-soft" : ""}`}>
              <img src={currentSong.coverImage} alt={currentSong.title} className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">{currentSong.title}</p>
              <p className="text-xs text-muted-foreground truncate">{currentSong.artist} · {currentSong.language}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button onClick={playPrev} className="p-2 rounded-full hover:bg-muted transition-colors">
              <SkipBack className="h-4 w-4 text-muted-foreground" />
            </button>
            <button onClick={togglePlay} className="p-3 rounded-full pink-gradient shadow-lg hover:shadow-xl transition-all hover:scale-105">
              {isPlaying ? (
                <Pause className="h-5 w-5 text-primary-foreground" />
              ) : (
                <Play className="h-5 w-5 text-primary-foreground ml-0.5" />
              )}
            </button>
            <button onClick={playNext} className="p-2 rounded-full hover:bg-muted transition-colors">
              <SkipForward className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Volume (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
            <button onClick={() => setVolume(volume > 0 ? 0 : 75)} className="p-1 rounded hover:bg-muted transition-colors">
              {volume === 0 ? <VolumeX className="h-4 w-4 text-muted-foreground" /> : <Volume2 className="h-4 w-4 text-muted-foreground" />}
            </button>
            <Slider value={[volume]} onValueChange={([v]) => setVolume(v)} max={100} step={1} className="w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
