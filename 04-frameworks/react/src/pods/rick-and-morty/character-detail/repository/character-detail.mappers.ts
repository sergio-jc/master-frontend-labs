import type { CharacterDetail } from "../character-detail.vm";
import type { CharacterDetailApi } from "./character-detail.api-model";

export const mapCharacterDetailApiToVm = (
  character: CharacterDetailApi,
): CharacterDetail => {
  return {
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: {
      name: character.origin.name,
      url: character.origin.url,
    },
    location: {
      name: character.location.name,
      url: character.location.url,
    },
    image: character.image,
    episode: character.episode,
    url: character.url,
    created: character.created,
  };
};
