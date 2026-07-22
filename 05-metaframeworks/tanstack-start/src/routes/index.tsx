import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { useCallback } from "react";
import { z } from "zod";

import { HousesList } from "#/components/houses-list";
import Search from "#/components/search";
import { getHouses } from "#/services";

const SearchParams = z.object({
  search: z.string().optional(),
});

export const Route = createFileRoute("/")({
  component: App,
  validateSearch: SearchParams,
  loader: async () => {
    const houses = await getHouses();
    return { housesList: houses };
  },
});

function App() {
  const { housesList } = Route.useLoaderData();
  const { search: searchTerm } = Route.useSearch();
  const navigate = useNavigate({ from: Route.id });

  const handleSearch = useCallback(
    (search: string) => {
      navigate({ search: { search } });
    },
    [navigate],
  );

  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Houses List</h2>
        <Search onSearch={handleSearch} initialSearch={searchTerm} />
      </div>
      <HousesList searchTerm={searchTerm} housesList={housesList} />
    </div>
  );
}
