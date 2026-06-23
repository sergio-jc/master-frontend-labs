import { HouseDetail } from "@/components/house-detail";
import { getHouse, getHouses } from "@/services";
import { House } from "@/types";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const houses = await getHouses();
  return houses.map((house) => ({ id: house.id }));
}

export default async function HouseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let house: House | null = null;

  try {
    house = await getHouse(id);
  } catch (error) {
    return notFound();
  }
  
  return <HouseDetail house={house} />;
}
