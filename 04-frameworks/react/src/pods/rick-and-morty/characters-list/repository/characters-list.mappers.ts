import type { Character } from "../characters-list.vm";
import type { CharacterApi } from "./characters-list.api-model";

export const mapCharactersListApiToVm = (characters: CharacterApi[]): Character[] => {
  return characters.map((character: CharacterApi): Character => {
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
  });
};