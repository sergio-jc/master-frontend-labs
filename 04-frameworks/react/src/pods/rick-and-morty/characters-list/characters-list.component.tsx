import CharacterCardComponent from "./components/character-card.component";
import type { Character } from "./characters-list.vm";

interface Props {
  characters: Character[];
}

const CharactersListComponent = (props: Props) => {
  const { characters } = props;
  if (characters.length === 0) {
    return (
      <p className="text-center text-zinc-500">No se encontraron personajes</p>
    );
  }
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {characters?.map((character) => (
        <CharacterCardComponent key={character.id} character={character} />
      ))}
    </section>
  );
};

export default CharactersListComponent;
