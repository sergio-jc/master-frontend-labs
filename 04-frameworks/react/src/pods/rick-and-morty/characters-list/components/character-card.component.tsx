import type { Character } from "../characters-list.vm";

interface Props {
  character: Character;
}

const statusStyles: Record<string, string> = {
  Alive: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Dead: "bg-red-500/15 text-red-400 border-red-500/30",
  unknown: "bg-zinc-500/15 text-zinc-400 border-zinc-500/30",
};

const getStatusStyle = (status: string) =>
  statusStyles[status] ?? statusStyles.unknown;

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const CharacterCardComponent = (props: Props) => {
  const { character } = props;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 transition-colors hover:bg-zinc-900/80">
      <div className="relative aspect-square overflow-hidden bg-zinc-800">
        <img
          src={character.image}
          alt={character.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span
          className={`absolute right-3 top-3 rounded-full border px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm ${getStatusStyle(character.status)}`}
        >
          {character.status}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-100">
            {character.name}
          </h3>
          <p className="text-sm text-zinc-400">
            {character.species}
            {character.type ? ` · ${character.type}` : ""}
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
          <div>
            <dt className="text-xs text-zinc-500">Gender</dt>
            <dd className="text-zinc-300">{character.gender}</dd>
          </div>
          <div>
            <dt className="text-xs text-zinc-500">Origin</dt>
            <dd
              className="truncate text-zinc-300"
              title={character.origin.name}
            >
              {character.origin.name}
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="text-xs text-zinc-500">Last location</dt>
            <dd
              className="truncate text-zinc-300"
              title={character.location.name}
            >
              {character.location.name}
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="text-xs text-zinc-500">Created</dt>
            <dd className="text-zinc-300">{formatDate(character.created)}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default CharacterCardComponent;
