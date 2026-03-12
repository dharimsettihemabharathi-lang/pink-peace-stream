import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SongCard from "@/components/SongCard";
import { languages, getSongsByLanguage } from "@/data/songs";

const Languages = () => {
  const [params] = useSearchParams();
  const initialLang = params.get("lang") || languages[0];
  const [selected, setSelected] = useState(initialLang);
  const langSongs = getSongsByLanguage(selected);

  return (
    <div className="container mx-auto px-4 py-8 pb-28">
      <h1 className="text-3xl font-display font-bold mb-6">Browse by Language</h1>

      <div className="flex flex-wrap gap-2 mb-8">
        {languages.map(lang => (
          <button
            key={lang}
            onClick={() => setSelected(lang)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              selected === lang ? "pink-gradient text-primary-foreground shadow-lg" : "glass-card hover-lift text-foreground"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-display font-semibold mb-4">{selected} Songs</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {langSongs.map(s => <SongCard key={s.id} song={s} />)}
      </div>
    </div>
  );
};

export default Languages;
