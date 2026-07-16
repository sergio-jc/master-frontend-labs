import { HouseCard } from "./house-card";
import { getHouses } from "@/services";

interface Props {
  searchTerm: string;
}

export async function HousesList(props: Props) {
  const { searchTerm } = props;

  const houses = await getHouses({
    next: { tags: ["houses"], revalidate: 60 * 60 * 24 },
  });

  const filteredHouses = houses.filter((house) => {
    if (!searchTerm) return true;
    const normalizedQuery = searchTerm.toLowerCase().trim();
    const normalizedName = house.name.toLowerCase().trim();
    return normalizedName.includes(normalizedQuery);
  });

  if (filteredHouses.length === 0) {
    return (
      <div className="text-neutral-500 text-center py-10 flex-1">
        No houses found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredHouses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
}
