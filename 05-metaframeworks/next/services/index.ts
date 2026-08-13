import { House } from "@/types";
import { notFound } from "next/navigation";
import { env } from "@/lib/env";

const API_URL = env.API_URL;

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
