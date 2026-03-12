import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import { Song, songs } from "@/data/songs";

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  currentTime: number;
  playSong: (song: Song) => void;
  togglePlay: () => void;
  setProgress: (p: number) => void;
  playNext: () => void;
  playPrev: () => void;
  volume: number;
  setVolume: (v: number) => void;
}

const PlayerContext = createContext<PlayerState | null>(null);

export const usePlayer = () => {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
};

// Use Web Audio API to generate a pleasant tone for each song
const createAudioContext = () => {
  return new (window.AudioContext || (window as any).webkitAudioContext)();
};

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgressState] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolumeState] = useState(75);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // Generate a unique frequency based on song id
  const getFrequency = (song: Song) => {
    const hash = song.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    // Map to pleasant frequencies (pentatonic scale variations)
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
    return notes[hash % notes.length];
  };

  const startAudio = useCallback((song: Song) => {
    try {
      stopAudio();
      const ctx = createAudioContext();
      audioCtxRef.current = ctx;

      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTarget(getFrequency(song), ctx.currentTime, 0.01);
      
      // Add gentle vibrato
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 5;
      lfoGain.gain.value = 3;
      lfo.connect(lfoGain);
      lfoGain.connect(oscillator.frequency);
      lfo.start();

      gain.gain.value = (volume / 100) * 0.15; // Keep it soft
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start();

      oscillatorRef.current = oscillator;
      gainRef.current = gain;
    } catch (e) {
      console.log("Audio not available:", e);
    }
  }, [volume]);

  const stopAudio = useCallback(() => {
    try {
      oscillatorRef.current?.stop();
      audioCtxRef.current?.close();
    } catch (e) {}
    oscillatorRef.current = null;
    audioCtxRef.current = null;
    gainRef.current = null;
  }, []);

  // Update volume in real-time
  useEffect(() => {
    if (gainRef.current) {
      gainRef.current.gain.value = (volume / 100) * 0.15;
    }
  }, [volume]);

  const startTimer = useCallback((song: Song, fromProgress = 0) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const totalSec = song.durationSec;
    let elapsed = (fromProgress / 100) * totalSec;

    intervalRef.current = setInterval(() => {
      elapsed += 0.5;
      const pct = Math.min((elapsed / totalSec) * 100, 100);
      setProgressState(pct);
      setCurrentTime(elapsed);
      if (pct >= 100) {
        clearInterval(intervalRef.current!);
        setIsPlaying(false);
        stopAudio();
      }
    }, 500);
  }, [stopAudio]);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const playSong = useCallback((song: Song) => {
    stopTimer();
    stopAudio();
    setCurrentSong(song);
    setIsPlaying(true);
    setProgressState(0);
    setCurrentTime(0);
    startAudio(song);
    startTimer(song, 0);
  }, [stopTimer, stopAudio, startAudio, startTimer]);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => {
      const next = !prev;
      if (next && currentSong) {
        startAudio(currentSong);
        startTimer(currentSong, progress);
      } else {
        stopTimer();
        stopAudio();
      }
      return next;
    });
  }, [currentSong, progress, startAudio, startTimer, stopTimer, stopAudio]);

  const setProgress = useCallback((p: number) => {
    setProgressState(p);
    if (currentSong) {
      setCurrentTime((p / 100) * currentSong.durationSec);
      if (isPlaying) {
        stopTimer();
        startTimer(currentSong, p);
      }
    }
  }, [currentSong, isPlaying, stopTimer, startTimer]);

  const playNext = useCallback(() => {
    if (!currentSong) return;
    const idx = songs.findIndex(s => s.id === currentSong.id);
    const next = songs[(idx + 1) % songs.length];
    playSong(next);
  }, [currentSong, playSong]);

  const playPrev = useCallback(() => {
    if (!currentSong) return;
    const idx = songs.findIndex(s => s.id === currentSong.id);
    const prev = songs[(idx - 1 + songs.length) % songs.length];
    playSong(prev);
  }, [currentSong, playSong]);

  const setVolume = useCallback((v: number) => {
    setVolumeState(v);
  }, []);

  useEffect(() => {
    return () => {
      stopTimer();
      stopAudio();
    };
  }, [stopTimer, stopAudio]);

  return (
    <PlayerContext.Provider value={{ currentSong, isPlaying, progress, currentTime, playSong, togglePlay, setProgress, playNext, playPrev, volume, setVolume }}>
      {children}
    </PlayerContext.Provider>
  );
};
