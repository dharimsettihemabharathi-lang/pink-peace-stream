import React, { createContext, useContext, useState, useCallback } from "react";
import { Song } from "@/data/songs";

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  playSong: (song: Song) => void;
  togglePlay: () => void;
  setProgress: (p: number) => void;
}

const PlayerContext = createContext<PlayerState | null>(null);

export const usePlayer = () => {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
};

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const playSong = useCallback((song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setProgress(0);
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  return (
    <PlayerContext.Provider value={{ currentSong, isPlaying, progress, playSong, togglePlay, setProgress }}>
      {children}
    </PlayerContext.Provider>
  );
};
