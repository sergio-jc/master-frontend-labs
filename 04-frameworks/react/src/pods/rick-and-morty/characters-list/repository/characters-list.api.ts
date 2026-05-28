import { DEFAULT_RICK_AND_MORTY_API_URL } from "@/common/constants";
import type { CharactersResponseApi } from "./characters-list.api-model";

export const getCharactersListApi = async ({ page, searchName }: { page: number, searchName: string }): Promise<CharactersResponseApi> => {
  let baseUrl = `${DEFAULT_RICK_AND_MORTY_API_URL}/character`;
  const queryParams = new URLSearchParams();

  if (page && page > 0) {
    queryParams.set("page", page.toString());
  }
  if (searchName && searchName.length > 0) {
    queryParams.set("name", searchName);
  }

  baseUrl = `${baseUrl}?${queryParams.toString()}`;
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch characters list");
  }
  return response.json();
};
