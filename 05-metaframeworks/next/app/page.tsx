import { getHouses } from "@/services";
import { HouseCard } from "@/components/house-card";

export default async function Home() {
  const houses = await getHouses();

  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Houses List</h2>
        <div />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
}
