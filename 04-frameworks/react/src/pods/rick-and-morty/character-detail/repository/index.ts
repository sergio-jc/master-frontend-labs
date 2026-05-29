import { getCharacterDetailApi } from "./character-detail.api";
import { mapCharacterDetailApiToVm } from "./character-detail.mappers";

export const getCharacterDetail = async ({ id }: { id: string }) => {
  const result = await getCharacterDetailApi({ id });
  return mapCharacterDetailApiToVm(result);
};
