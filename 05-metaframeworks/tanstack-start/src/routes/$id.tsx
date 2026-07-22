import { createFileRoute } from "@tanstack/react-router";
import { HouseDetail } from "#/components/house-detail";
import { getHouse } from "#/services";

export const Route = createFileRoute("/$id")({
  component: About,
  loader: async ({ params }) => {
    const house = await getHouse(params.id);
    return { house };
  },
});

function About() {
  const { house } = Route.useLoaderData();
  return <HouseDetail house={house} />;
}
