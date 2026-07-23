import Search from "@/components/search";
import { Suspense } from "react";
import { HousesList } from "@/components/houses-list";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {

  const { search } = await searchParams;

  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Houses List</h2>
        <Search searchTerm={search} />
      </div>
      <Suspense key={search} fallback={<div>Loading Houses List...</div>}>
        <HousesList searchTerm={search} />
      </Suspense>
    </div>
  );
}
