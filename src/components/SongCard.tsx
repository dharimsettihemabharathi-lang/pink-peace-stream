import { Play, Pause } from "lucide-react";
import { Song } from "@/data/songs";
import { usePlayer } from "@/context/PlayerContext";

const SongCard = ({ song }: { song: Song }) => {
  const { currentSong, isPlaying, playSong, togglePlay } = usePlayer();
  const isActive = currentSong?.id === song.id;
  const playing = isActive && isPlaying;

  const handleClick = () => {
    if (isActive) {
      togglePlay();
    } else {
      playSong(song);
    }
  };

  return (
    <div
      className={`glass-card group hover-lift p-3 cursor-pointer transition-all duration-300 ${isActive ? "ring-2 ring-primary/50 shadow-lg" : ""}`}
      onClick={handleClick}
    >
      <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
        <img
          src={song.coverImage}
          alt={song.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-center justify-center">
          <div
            className={`rounded-full p-3 pink-gradient shadow-lg transform transition-all duration-300 ${
              playing
                ? "scale-100 opacity-100"
                : "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
            }`}
          >
            {playing ? (
              <Pause className="h-5 w-5 text-primary-foreground" />
            ) : (
              <Play className="h-5 w-5 text-primary-foreground ml-0.5" />
            )}
          </div>
        </div>
        {/* Playing indicator */}
        {playing && (
          <div className="absolute bottom-2 left-2 right-2 flex gap-0.5 items-end h-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-primary-foreground/80 rounded-full animate-pulse-soft"
                style={{
                  height: `${40 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
      <h3 className="font-semibold text-sm text-foreground truncate">{song.title}</h3>
      <p className="text-xs text-muted-foreground truncate">{song.artist}</p>
      <div className="flex items-center justify-between mt-1.5">
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
          {song.mood}
        </span>
        <span className="text-[10px] text-muted-foreground">{song.duration}</span>
      </div>
    </div>
  );
};

export default SongCard;
