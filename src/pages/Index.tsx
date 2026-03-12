import { useState } from "react";
import { Link } from "react-router-dom";
import { Music, Headphones, Globe, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SongCard from "@/components/SongCard";
import SectionHeader from "@/components/SectionHeader";
import SearchBar from "@/components/SearchBar";
import { songs, getTrendingSongs, getLatestSongs, playlists, languages, moods } from "@/data/songs";

const Index = () => {
  const [search, setSearch] = useState("");
  const trending = getTrendingSongs();
  const latest = getLatestSongs();

  const filtered = search
    ? songs.filter(s =>
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.artist.toLowerCase().includes(search.toLowerCase()) ||
        s.language.toLowerCase().includes(search.toLowerCase())
      )
    : null;

  return (
    <div className="pb-28">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Welcome to <span className="text-gradient">Peace World</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Your serene sanctuary of music — melodies from around the world, curated to bring peace to your soul.
            </p>
            <div className="flex justify-center mb-8">
              <SearchBar value={search} onChange={setSearch} />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Music, label: "10K+ Songs" },
                { icon: Globe, label: "6 Languages" },
                { icon: Headphones, label: "8 Moods" },
                { icon: Heart, label: "Curated Playlists" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="glass-card px-4 py-2 flex items-center gap-2 text-sm">
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-12 mt-8">
        {/* Search results */}
        {filtered && (
          <section>
            <SectionHeader title={`Results for "${search}"`} />
            {filtered.length === 0 ? (
              <p className="text-muted-foreground">No songs found.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filtered.map(s => <SongCard key={s.id} song={s} />)}
              </div>
            )}
          </section>
        )}

        {!filtered && (
          <>
            {/* Trending */}
            <section className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <SectionHeader title="🔥 Trending Now" linkTo="/songs" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {trending.slice(0, 6).map(s => <SongCard key={s.id} song={s} />)}
              </div>
            </section>

            {/* Latest */}
            <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <SectionHeader title="✨ Latest Releases" linkTo="/songs" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {latest.slice(0, 6).map(s => <SongCard key={s.id} song={s} />)}
              </div>
            </section>

            {/* Languages */}
            <section className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <SectionHeader title="🌍 Browse by Language" linkTo="/languages" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {languages.map((lang, i) => (
                  <Link key={lang} to={`/languages?lang=${lang}`}
                    className="glass-card hover-lift p-4 text-center pink-gradient-soft">
                    <span className="font-display font-bold text-foreground">{lang}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Moods */}
            <section className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <SectionHeader title="🎭 Browse by Mood" linkTo="/songs" />
              <div className="flex flex-wrap gap-2">
                {moods.map(mood => (
                  <Link key={mood} to={`/songs?mood=${mood}`}
                    className="px-4 py-2 rounded-full glass-card hover-lift text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                    {mood}
                  </Link>
                ))}
              </div>
            </section>

            {/* Playlists */}
            <section className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <SectionHeader title="📀 Featured Playlists" linkTo="/playlists" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {playlists.slice(0, 4).map(pl => (
                  <Link key={pl.id} to={`/playlists?id=${pl.id}`} className="glass-card hover-lift p-4">
                    <div className="aspect-square rounded-lg overflow-hidden mb-3">
                      <img src={pl.coverImage} alt={pl.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-semibold text-sm">{pl.name}</h3>
                    <p className="text-xs text-muted-foreground">{pl.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
