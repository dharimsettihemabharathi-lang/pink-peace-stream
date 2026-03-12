import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import SongCard from "@/components/SongCard";
import SearchBar from "@/components/SearchBar";
import { songs, moods, languages } from "@/data/songs";

const Songs = () => {
  const [params] = useSearchParams();
  const initialMood = params.get("mood") || "";
  const [search, setSearch] = useState("");
  const [selectedMood, setSelectedMood] = useState(initialMood);
  const [selectedLang, setSelectedLang] = useState("");

  const filtered = useMemo(() => {
    return songs.filter(s => {
      const matchSearch = !search || s.title.toLowerCase().includes(search.toLowerCase()) || s.artist.toLowerCase().includes(search.toLowerCase());
      const matchMood = !selectedMood || s.mood === selectedMood;
      const matchLang = !selectedLang || s.language === selectedLang;
      return matchSearch && matchMood && matchLang;
    });
  }, [search, selectedMood, selectedLang]);

  return (
    <div className="container mx-auto px-4 py-8 pb-28">
      <h1 className="text-3xl font-display font-bold mb-6">All Songs</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <SearchBar value={search} onChange={setSearch} placeholder="Search songs..." />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={() => setSelectedMood("")} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${!selectedMood ? "pink-gradient text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}>All Moods</button>
        {moods.map(m => (
          <button key={m} onClick={() => setSelectedMood(m === selectedMood ? "" : m)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedMood === m ? "pink-gradient text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}>{m}</button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={() => setSelectedLang("")} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${!selectedLang ? "pink-gradient text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}>All Languages</button>
        {languages.map(l => (
          <button key={l} onClick={() => setSelectedLang(l === selectedLang ? "" : l)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedLang === l ? "pink-gradient text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"}`}>{l}</button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-center py-12">No songs found matching your filters.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map(s => <SongCard key={s.id} song={s} />)}
        </div>
      )}
    </div>
  );
};

export default Songs;
