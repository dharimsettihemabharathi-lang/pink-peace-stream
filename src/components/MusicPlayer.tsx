import { Play, Pause, SkipBack, SkipForward, Volume2, Music } from "lucide-react";
import { usePlayer } from "@/context/PlayerContext";
import { Slider } from "@/components/ui/slider";

const MusicPlayer = () => {
  const { currentSong, isPlaying, progress, togglePlay, setProgress } = usePlayer();

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-border/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-3">
        {/* Progress bar */}
        <div className="mb-2">
          <Slider
            value={[progress]}
            onValueChange={([v]) => setProgress(v)}
            max={100}
            step={1}
            className="h-1"
          />
        </div>
        <div className="flex items-center gap-4">
          {/* Song info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${currentSong.coverColor} flex items-center justify-center flex-shrink-0 ${isPlaying ? "animate-pulse-soft" : ""}`}>
              <Music className="h-5 w-5 text-primary-foreground/70" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">{currentSong.title}</p>
              <p className="text-xs text-muted-foreground truncate">{currentSong.artist}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <SkipBack className="h-4 w-4 text-muted-foreground" />
            </button>
            <button onClick={togglePlay} className="p-3 rounded-full pink-gradient shadow-lg hover:shadow-xl transition-all">
              {isPlaying ? (
                <Pause className="h-5 w-5 text-primary-foreground" />
              ) : (
                <Play className="h-5 w-5 text-primary-foreground ml-0.5" />
              )}
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <SkipForward className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Volume (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider defaultValue={[75]} max={100} step={1} className="w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
