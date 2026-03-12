export interface Song {
  id: string;
  title: string;
  artist: string;
  language: string;
  mood: string;
  duration: string;
  coverColor: string;
  trending?: boolean;
  latest?: boolean;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  songIds: string[];
  coverColor: string;
}

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

export const songs: Song[] = [
  // English
  { id: "e1", title: "Moonlit Dreams", artist: "Luna Rivers", language: "English", mood: "Melody", duration: "3:45", coverColor: c(0), trending: true },
  { id: "e2", title: "Heartbeat", artist: "Aria Cole", language: "English", mood: "Love", duration: "4:12", coverColor: c(1), latest: true },
  { id: "e3", title: "Rainy Window", artist: "Eliot James", language: "English", mood: "Sad", duration: "3:58", coverColor: c(2) },
  { id: "e4", title: "Sunshine Dance", artist: "Melody Park", language: "English", mood: "Happy", duration: "3:22", coverColor: c(3), trending: true },
  { id: "e5", title: "Divine Grace", artist: "Angel Choir", language: "English", mood: "Devotional", duration: "5:01", coverColor: c(4) },
  { id: "e6", title: "Neon Nights", artist: "Pop Galaxy", language: "English", mood: "Pop", duration: "3:15", coverColor: c(5), latest: true },
  { id: "e7", title: "Sonata in Pink", artist: "Clara Bennett", language: "English", mood: "Classical", duration: "6:30", coverColor: c(6) },
  { id: "e8", title: "Viral Vibes", artist: "TrendSetter", language: "English", mood: "Trending", duration: "2:55", coverColor: c(7), trending: true },
  // Hindi
  { id: "h1", title: "Tere Bina", artist: "Arijit Singh", language: "Hindi", mood: "Love", duration: "4:30", coverColor: c(0), trending: true },
  { id: "h2", title: "Dil Ki Baat", artist: "Shreya Ghoshal", language: "Hindi", mood: "Melody", duration: "4:15", coverColor: c(1), latest: true },
  { id: "h3", title: "Aankhon Mein", artist: "Atif Aslam", language: "Hindi", mood: "Sad", duration: "4:48", coverColor: c(2) },
  { id: "h4", title: "Nachle", artist: "Badshah", language: "Hindi", mood: "Happy", duration: "3:10", coverColor: c(3), trending: true },
  { id: "h5", title: "Om Namah", artist: "Shankar M.", language: "Hindi", mood: "Devotional", duration: "5:30", coverColor: c(4) },
  { id: "h6", title: "Rang De", artist: "Neha Kakkar", language: "Hindi", mood: "Pop", duration: "3:25", coverColor: c(5), latest: true },
  { id: "h7", title: "Raag Yaman", artist: "Pandit Jasraj", language: "Hindi", mood: "Classical", duration: "8:00", coverColor: c(6) },
  { id: "h8", title: "Trending Bollywood", artist: "Various", language: "Hindi", mood: "Trending", duration: "3:40", coverColor: c(7), trending: true },
  // Telugu
  { id: "t1", title: "Premaloo", artist: "Sid Sriram", language: "Telugu", mood: "Love", duration: "4:20", coverColor: c(0), latest: true },
  { id: "t2", title: "Manasu Maree", artist: "Anurag Kulkarni", language: "Telugu", mood: "Melody", duration: "4:05", coverColor: c(1) },
  { id: "t3", title: "Edhola Nee", artist: "Harika Narayan", language: "Telugu", mood: "Sad", duration: "4:35", coverColor: c(2), trending: true },
  { id: "t4", title: "Padara Padara", artist: "Vishal M.", language: "Telugu", mood: "Happy", duration: "3:18", coverColor: c(3), latest: true },
  { id: "t5", title: "Sri Venkatesha", artist: "SPB", language: "Telugu", mood: "Devotional", duration: "5:45", coverColor: c(4) },
  { id: "t6", title: "Buttabomma", artist: "Armaan Malik", language: "Telugu", mood: "Pop", duration: "3:30", coverColor: c(5), trending: true },
  // Tamil
  { id: "tm1", title: "Kanave Kanave", artist: "Anirudh", language: "Tamil", mood: "Love", duration: "4:10", coverColor: c(0), trending: true },
  { id: "tm2", title: "Ennai Noki", artist: "Sid Sriram", language: "Tamil", mood: "Melody", duration: "4:25", coverColor: c(1) },
  { id: "tm3", title: "Po Nee Po", artist: "A.R. Rahman", language: "Tamil", mood: "Sad", duration: "4:50", coverColor: c(2), latest: true },
  { id: "tm4", title: "Vaathi Coming", artist: "Anirudh", language: "Tamil", mood: "Happy", duration: "3:05", coverColor: c(3), trending: true },
  { id: "tm5", title: "Thirupachi Aruvale", artist: "Hariharan", language: "Tamil", mood: "Devotional", duration: "5:15", coverColor: c(4) },
  { id: "tm6", title: "Arabic Kuthu", artist: "Anirudh", language: "Tamil", mood: "Pop", duration: "3:35", coverColor: c(5), latest: true },
  // Korean
  { id: "k1", title: "봄날 (Spring Day)", artist: "BTS", language: "Korean", mood: "Melody", duration: "4:34", coverColor: c(0), trending: true },
  { id: "k2", title: "사랑해 (Saranghae)", artist: "IU", language: "Korean", mood: "Love", duration: "3:50", coverColor: c(1), latest: true },
  { id: "k3", title: "눈물 (Tears)", artist: "BIGBANG", language: "Korean", mood: "Sad", duration: "4:20", coverColor: c(2) },
  { id: "k4", title: "Dynamite", artist: "BTS", language: "Korean", mood: "Happy", duration: "3:19", coverColor: c(3), trending: true },
  { id: "k5", title: "How You Like That", artist: "BLACKPINK", language: "Korean", mood: "Pop", duration: "3:02", coverColor: c(5), latest: true },
  // Japanese
  { id: "j1", title: "桜 (Sakura)", artist: "Ikimono Gakari", language: "Japanese", mood: "Melody", duration: "4:40", coverColor: c(0), latest: true },
  { id: "j2", title: "First Love", artist: "Utada Hikaru", language: "Japanese", mood: "Love", duration: "4:18", coverColor: c(1) },
  { id: "j3", title: "涙 (Namida)", artist: "RADWIMPS", language: "Japanese", mood: "Sad", duration: "4:55", coverColor: c(2), trending: true },
  { id: "j4", title: "Happy Song", artist: "Kenshi Yonezu", language: "Japanese", mood: "Happy", duration: "3:28", coverColor: c(3) },
  { id: "j5", title: "Idol", artist: "YOASOBI", language: "Japanese", mood: "Pop", duration: "3:12", coverColor: c(5), trending: true, latest: true },
];

export const languages = ["English", "Hindi", "Telugu", "Tamil", "Korean", "Japanese"];
export const moods = ["Melody", "Love", "Sad", "Happy", "Devotional", "Pop", "Classical", "Trending"];

export const playlists: Playlist[] = [
  { id: "p1", name: "Peaceful Morning", description: "Start your day with calm melodies", songIds: ["e1", "h2", "t2", "tm2", "j1"], coverColor: c(0) },
  { id: "p2", name: "Love Forever", description: "Romantic songs across languages", songIds: ["e2", "h1", "t1", "tm1", "k2", "j2"], coverColor: c(1) },
  { id: "p3", name: "Feel Good Vibes", description: "Upbeat tracks to lift your mood", songIds: ["e4", "h4", "t4", "tm4", "k4", "j4"], coverColor: c(3) },
  { id: "p4", name: "K-Pop Essentials", description: "Best of Korean Pop", songIds: ["k1", "k2", "k4", "k5"], coverColor: c(4) },
  { id: "p5", name: "Bollywood Hits", description: "Top Hindi tracks", songIds: ["h1", "h2", "h4", "h6", "h8"], coverColor: c(5) },
  { id: "p6", name: "Soul Soother", description: "When you need calm in the storm", songIds: ["e3", "h3", "t3", "tm3", "k3", "j3"], coverColor: c(2) },
  { id: "p7", name: "Divine Melodies", description: "Devotional songs for inner peace", songIds: ["e5", "h5", "t5", "tm5"], coverColor: c(6) },
  { id: "p8", name: "Global Trending", description: "What the world is listening to", songIds: ["e8", "h8", "t6", "tm4", "k4", "j5"], coverColor: c(7) },
];

export const getSongsByLanguage = (lang: string) => songs.filter(s => s.language === lang);
export const getSongsByMood = (mood: string) => songs.filter(s => s.mood === mood);
export const getTrendingSongs = () => songs.filter(s => s.trending);
export const getLatestSongs = () => songs.filter(s => s.latest);
export const getSongById = (id: string) => songs.find(s => s.id === id);
