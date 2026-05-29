import type { CharacterDetail } from "./character-detail.vm";

interface Props {
  character: CharacterDetail;
}

const statusStyles: Record<string, string> = {
  Alive: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Dead: "bg-red-500/15 text-red-400 border-red-500/30",
  unknown: "bg-zinc-500/15 text-zinc-400 border-zinc-500/30",
};

const getStatusStyle = (status: string) =>
  statusStyles[status] ?? statusStyles.unknown;

const CharacterDetailComponent = (props: Props) => {
  const { character } = props;

  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="relative shrink-0">
            <img
              className="h-48 w-48 rounded-xl border border-zinc-700 object-cover"
              src={character.image}
              alt={character.name}
            />
            <span
              className={`absolute right-3 top-3 rounded-full border px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm ${getStatusStyle(character.status)}`}
            >
              {character.status}
            </span>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold">{character.name}</h1>
              <p className="text-sm text-zinc-400">
                {character.species}
                {character.type ? ` · ${character.type}` : ""}
              </p>
            </div>

            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs text-zinc-500">Gender</dt>
                <dd className="text-zinc-200">{character.gender}</dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">Origin</dt>
                <dd className="text-zinc-200">{character.origin.name}</dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">Last known location</dt>
                <dd className="text-zinc-200">{character.location.name}</dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">Episodes</dt>
                <dd className="text-zinc-200">{character.episode.length}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharacterDetailComponent;
