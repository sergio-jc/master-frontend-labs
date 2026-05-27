import { routes } from "@/core";
import MainLayout from "@/layouts/main.layout";
import { Link } from "react-router";

const HomeScene = () => {
  const labs = [
    {
      id: "search-org",
      label: "Search Organization",
      to: routes.organizations,
      description: "Search for an organization and see its details and members",
    },
    {
      id: "Rick & Morty API",
      label: "Rick & Morty API",
      to: routes.rickAndMorty,
      description: "Use the Rick & Morty API to list and search for characters",
    },
  ];
  return (
    <MainLayout>
      <div className="flex flex-col gap-4">
        {labs.map((lab) => (
          <Link key={lab.id} to={lab.to}>
            <article className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-2 flex flex-col gap-2 hover:bg-zinc-900/80 transition-colors py-4 px-6">
              <h2 className="text-lg font-semibold">{lab.label}</h2>
              <p className="text-sm text-zinc-300">{lab.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

export default HomeScene;
