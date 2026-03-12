import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = ({ value, onChange, placeholder = "Search songs, artists, languages..." }: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) => (
  <div className="relative max-w-md w-full">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    <Input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="pl-10 bg-muted/50 border-border/50 focus:ring-primary/30 rounded-xl"
    />
  </div>
);

export default SearchBar;
