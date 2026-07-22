import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

interface Props {
  onSearch: (search: string) => void;
  initialSearch?: string;
}

export default function Search(props: Props) {
  const { onSearch, initialSearch } = props;
  const [search, setSearch] = useState(initialSearch || "");
  const debouncedSearch = useDebounce(search, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);

  return (
    <div className="relative w-72 border border-neutral-800 rounded-lg">
      <SearchIcon className="w-4 h-4 text-neutral-500 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-7 h-10 p-2"
        id="search"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}
