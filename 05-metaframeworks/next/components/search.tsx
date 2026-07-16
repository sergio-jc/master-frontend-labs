"use client";
import { useDebounce } from "@/hooks/use-debounce";
import { useUpdateSearchParams } from "@/hooks/use-update-search-params";
import { SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const updateSearchParams = useUpdateSearchParams();
  const debouncedSearch = useDebounce(search, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    console.log("first")
    updateSearchParams({ search: debouncedSearch });
  }, [debouncedSearch, updateSearchParams]);

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
