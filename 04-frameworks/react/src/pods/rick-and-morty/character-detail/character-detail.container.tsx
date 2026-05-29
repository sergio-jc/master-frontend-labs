import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { CharacterDetail } from "./character-detail.vm";
import { getCharacterDetail } from "./repository";
import CharacterDetailComponent from "./character-detail.component";

const CharacterDetailContainer = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState<CharacterDetail | null>(null);

  useEffect(() => {
    if (!characterId) return;
    getCharacterDetail({ id: characterId }).then((result) => {
      setCharacter(result);
    });
  }, [characterId]);

  if (!character || !characterId) return <p>Character not found</p>;

  return <CharacterDetailComponent character={character} />;
};

export default CharacterDetailContainer;
