import coverLove from "@/assets/covers/love.jpg";
import coverMelody from "@/assets/covers/melody.jpg";
import coverSad from "@/assets/covers/sad.jpg";
import coverHappy from "@/assets/covers/happy.jpg";
import coverDevotional from "@/assets/covers/devotional.jpg";
import coverPop from "@/assets/covers/pop.jpg";
import coverClassical from "@/assets/covers/classical.jpg";
import coverTrending from "@/assets/covers/trending.jpg";

export interface Song {
  id: string;
  title: string;
  artist: string;
  language: string;
  mood: string;
  duration: string;
  durationSec: number;
  coverColor: string;
  coverImage: string;
  trending?: boolean;
  latest?: boolean;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  songIds: string[];
  coverColor: string;
  coverImage: string;
}

const moodCovers: Record<string, string> = {
  Melody: coverMelody,
  Love: coverLove,
  Sad: coverSad,
  Happy: coverHappy,
  Devotional: coverDevotional,
  Pop: coverPop,
  Classical: coverClassical,
  Trending: coverTrending,
};

const colors = [
  "from-pink-400 to-rose-300",
  "from-pink-300 to-purple-300",
  "from-rose-400 to-pink-300",
  "from-pink-200 to-rose-400",
  "from-fuchsia-300 to-pink-300",
  "from-rose-300 to-pink-200",
  "from-pink-400 to-fuchsia-300",
  "from-rose-200 to-pink-400",
];

const c = (i: number) => colors[i % colors.length];

const parseDuration = (d: string): number => {
  const [m, s] = d.split(":").map(Number);
  return m * 60 + s;
};

const makeSong = (id: string, title: string, artist: string, language: string, mood: string, duration: string, colorIdx: number, trending?: boolean, latest?: boolean): Song => ({
  id, title, artist, language, mood, duration,
  durationSec: parseDuration(duration),
  coverColor: c(colorIdx),
  coverImage: moodCovers[mood] || coverMelody,
  trending, latest,
});

export const songs: Song[] = [
  // English
  makeSong("e1", "Moonlit Dreams", "Luna Rivers", "English", "Melody", "3:45", 0, true),
  makeSong("e2", "Heartbeat", "Aria Cole", "English", "Love", "4:12", 1, false, true),
  makeSong("e3", "Rainy Window", "Eliot James", "English", "Sad", "3:58", 2),
  makeSong("e4", "Sunshine Dance", "Melody Park", "English", "Happy", "3:22", 3, true),
  makeSong("e5", "Divine Grace", "Angel Choir", "English", "Devotional", "5:01", 4),
  makeSong("e6", "Neon Nights", "Pop Galaxy", "English", "Pop", "3:15", 5, false, true),
  makeSong("e7", "Sonata in Pink", "Clara Bennett", "English", "Classical", "6:30", 6),
  makeSong("e8", "Viral Vibes", "TrendSetter", "English", "Trending", "2:55", 7, true),
  // Hindi
  makeSong("h1", "Tere Bina", "Arijit Singh", "Hindi", "Love", "4:30", 0, true),
  makeSong("h2", "Dil Ki Baat", "Shreya Ghoshal", "Hindi", "Melody", "4:15", 1, false, true),
  makeSong("h3", "Aankhon Mein", "Atif Aslam", "Hindi", "Sad", "4:48", 2),
  makeSong("h4", "Nachle", "Badshah", "Hindi", "Happy", "3:10", 3, true),
  makeSong("h5", "Om Namah", "Shankar M.", "Hindi", "Devotional", "5:30", 4),
  makeSong("h6", "Rang De", "Neha Kakkar", "Hindi", "Pop", "3:25", 5, false, true),
  makeSong("h7", "Raag Yaman", "Pandit Jasraj", "Hindi", "Classical", "8:00", 6),
  makeSong("h8", "Trending Bollywood", "Various", "Hindi", "Trending", "3:40", 7, true),
  // Telugu
  makeSong("t1", "Premaloo", "Sid Sriram", "Telugu", "Love", "4:20", 0, false, true),
  makeSong("t2", "Manasu Maree", "Anurag Kulkarni", "Telugu", "Melody", "4:05", 1),
  makeSong("t3", "Edhola Nee", "Harika Narayan", "Telugu", "Sad", "4:35", 2, true),
  makeSong("t4", "Padara Padara", "Vishal M.", "Telugu", "Happy", "3:18", 3, false, true),
  makeSong("t5", "Sri Venkatesha", "SPB", "Telugu", "Devotional", "5:45", 4),
  makeSong("t6", "Buttabomma", "Armaan Malik", "Telugu", "Pop", "3:30", 5, true),
  // Tamil
  makeSong("tm1", "Kanave Kanave", "Anirudh", "Tamil", "Love", "4:10", 0, true),
  makeSong("tm2", "Ennai Noki", "Sid Sriram", "Tamil", "Melody", "4:25", 1),
  makeSong("tm3", "Po Nee Po", "A.R. Rahman", "Tamil", "Sad", "4:50", 2, false, true),
  makeSong("tm4", "Vaathi Coming", "Anirudh", "Tamil", "Happy", "3:05", 3, true),
  makeSong("tm5", "Thirupachi Aruvale", "Hariharan", "Tamil", "Devotional", "5:15", 4),
  makeSong("tm6", "Arabic Kuthu", "Anirudh", "Tamil", "Pop", "3:35", 5, false, true),
  // Korean
  makeSong("k1", "봄날 (Spring Day)", "BTS", "Korean", "Melody", "4:34", 0, true),
  makeSong("k2", "사랑해 (Saranghae)", "IU", "Korean", "Love", "3:50", 1, false, true),
  makeSong("k3", "눈물 (Tears)", "BIGBANG", "Korean", "Sad", "4:20", 2),
  makeSong("k4", "Dynamite", "BTS", "Korean", "Happy", "3:19", 3, true),
  makeSong("k5", "How You Like That", "BLACKPINK", "Korean", "Pop", "3:02", 5, false, true),
  // Japanese
  makeSong("j1", "桜 (Sakura)", "Ikimono Gakari", "Japanese", "Melody", "4:40", 0, false, true),
  makeSong("j2", "First Love", "Utada Hikaru", "Japanese", "Love", "4:18", 1),
  makeSong("j3", "涙 (Namida)", "RADWIMPS", "Japanese", "Sad", "4:55", 2, true),
  makeSong("j4", "Happy Song", "Kenshi Yonezu", "Japanese", "Happy", "3:28", 3),
  makeSong("j5", "Idol", "YOASOBI", "Japanese", "Pop", "3:12", 5, true, true),
];

export const languages = ["English", "Hindi", "Telugu", "Tamil", "Korean", "Japanese"];
export const moods = ["Melody", "Love", "Sad", "Happy", "Devotional", "Pop", "Classical", "Trending"];

export const playlists: Playlist[] = [
  { id: "p1", name: "Peaceful Morning", description: "Start your day with calm melodies", songIds: ["e1", "h2", "t2", "tm2", "j1"], coverColor: c(0), coverImage: coverMelody },
  { id: "p2", name: "Love Forever", description: "Romantic songs across languages", songIds: ["e2", "h1", "t1", "tm1", "k2", "j2"], coverColor: c(1), coverImage: coverLove },
  { id: "p3", name: "Feel Good Vibes", description: "Upbeat tracks to lift your mood", songIds: ["e4", "h4", "t4", "tm4", "k4", "j4"], coverColor: c(3), coverImage: coverHappy },
  { id: "p4", name: "K-Pop Essentials", description: "Best of Korean Pop", songIds: ["k1", "k2", "k4", "k5"], coverColor: c(4), coverImage: coverPop },
  { id: "p5", name: "Bollywood Hits", description: "Top Hindi tracks", songIds: ["h1", "h2", "h4", "h6", "h8"], coverColor: c(5), coverImage: coverTrending },
  { id: "p6", name: "Soul Soother", description: "When you need calm in the storm", songIds: ["e3", "h3", "t3", "tm3", "k3", "j3"], coverColor: c(2), coverImage: coverSad },
  { id: "p7", name: "Divine Melodies", description: "Devotional songs for inner peace", songIds: ["e5", "h5", "t5", "tm5"], coverColor: c(6), coverImage: coverDevotional },
  { id: "p8", name: "Global Trending", description: "What the world is listening to", songIds: ["e8", "h8", "t6", "tm4", "k4", "j5"], coverColor: c(7), coverImage: coverTrending },
];

export const getSongsByLanguage = (lang: string) => songs.filter(s => s.language === lang);
export const getSongsByMood = (mood: string) => songs.filter(s => s.mood === mood);
export const getTrendingSongs = () => songs.filter(s => s.trending);
export const getLatestSongs = () => songs.filter(s => s.latest);
export const getSongById = (id: string) => songs.find(s => s.id === id);
