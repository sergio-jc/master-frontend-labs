import { useEffect, useState } from "react";
import type { Character } from "./characters-list.vm";
import CharactersListComponent from "./characters-list.component";
import PaginationComponent from "@/common/components/pagination.component";
import MainSearchComponent from "@/common/components/main-search.component";
import { getCharactersList } from "./repository";

const CharactersListContainer = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const [searchName, setSearchName] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const handleSearch = (search: string) => {
    setSearchName(search);
    setPage(1);
  };

  const onPreviousPage = () => {
    setPage(page - 1);
  };

  const onNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getCharactersList({ page, searchName }).then((result) => {
      setCharacters(result.characters);
      setTotalPages(result.info.pages);
    });
  }, [searchName, page]);
  return (
    <div className="flex flex-col gap-4">
      <MainSearchComponent
        title="Search Characters"
        placeholder="Search for a character..."
        handleSearch={handleSearch}
        defaultSearch={searchName}
      />
      <CharactersListComponent characters={characters} />
      <PaginationComponent
        page={page}
        totalPages={totalPages}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
    </div>
  );
};

export default CharactersListContainer;
