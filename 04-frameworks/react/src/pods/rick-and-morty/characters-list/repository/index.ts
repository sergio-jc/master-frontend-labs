import { getCharactersListApi } from "./characters-list.api";
import { mapCharactersListApiToVm } from "./characters-list.mappers";

export const getCharactersList = async ({ page, searchName }: { page: number, searchName: string }) => {
  const result = await getCharactersListApi({ page, searchName });
  return {
    characters: mapCharactersListApiToVm(result.results),
    info: result.info,
  };
};