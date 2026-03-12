import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Music } from "lucide-react";
import SongCard from "@/components/SongCard";
import { playlists, getSongById } from "@/data/songs";

const Playlists = () => {
  const [params] = useSearchParams();
  const initialId = params.get("id") || "";
  const [selectedId, setSelectedId] = useState(initialId);
  const selectedPlaylist = playlists.find(p => p.id === selectedId);

  return (
    <div className="container mx-auto px-4 py-8 pb-28">
      <h1 className="text-3xl font-display font-bold mb-6">Playlists</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {playlists.map(pl => (
          <button
            key={pl.id}
            onClick={() => setSelectedId(pl.id === selectedId ? "" : pl.id)}
            className={`glass-card hover-lift p-4 text-left transition-all ${selectedId === pl.id ? "ring-2 ring-primary" : ""}`}
          >
            <div className={`aspect-square rounded-lg bg-gradient-to-br ${pl.coverColor} flex items-center justify-center mb-3`}>
              <Music className="h-8 w-8 text-primary-foreground/60" />
            </div>
            <h3 className="font-semibold text-sm">{pl.name}</h3>
            <p className="text-xs text-muted-foreground">{pl.description}</p>
            <p className="text-xs text-primary mt-1">{pl.songIds.length} songs</p>
          </button>
        ))}
      </div>

      {selectedPlaylist && (
        <div className="animate-fade-in-up">
          <h2 className="text-xl font-display font-semibold mb-4">{selectedPlaylist.name}</h2>
          <p className="text-muted-foreground mb-4">{selectedPlaylist.description}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {selectedPlaylist.songIds.map(id => {
              const song = getSongById(id);
              return song ? <SongCard key={song.id} song={song} /> : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Playlists;
