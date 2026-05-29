import { DEFAULT_RICK_AND_MORTY_API_URL } from "@/common/constants";
import type { CharacterDetailApi } from "./character-detail.api-model";

export const getCharacterDetailApi = async ({
  id,
}: {
  id: string;
}): Promise<CharacterDetailApi> => {
  const response = await fetch(
    `${DEFAULT_RICK_AND_MORTY_API_URL}/character/${id}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch character detail");
  }
  return response.json();
};
