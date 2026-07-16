import { House } from "@/types";
import { notFound } from "next/navigation";

const API_URL = "http://localhost:3001";

export const getHouses = async (options?: RequestInit): Promise<House[]> => {
  const response = await fetch(`${API_URL}/api/houses`, options);
  return response.json();
};

export const getHouse = async (id: string): Promise<House> => {
  const response = await fetch(`${API_URL}/api/houses/${id}`);
  if (!response.ok && response.status === 404) {
    notFound();
  }
  return response.json();
};
