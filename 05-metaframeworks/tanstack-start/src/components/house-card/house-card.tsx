import { Link } from "@tanstack/react-router";
import { env } from "@/lib/env";
import type { House } from "@/types";
import { HouseCardContent } from "./house-card-content";
import { HouseCardImage } from "./house-card-image";

interface Props {
  house: House;
}

export function HouseCard(props: Props) {
  const { house } = props;
  const imageUrl = `${env.IMAGE_URL}${house.image}`;
  const avgRating =
    house.reviews.length > 0
      ? Math.round(
          house.reviews.reduce((sum, r) => sum + r.rating, 0) /
            house.reviews.length,
        )
      : 0;

  return (
    <Link to="/$id" params={{ id: house.id }}>
      <article className="group bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-600 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 flex flex-col">
        <HouseCardImage
          imageUrl={imageUrl}
          name={house.name}
          city={house.city}
          price={house.price}
          avgRating={avgRating}
          reviewCount={house.reviews.length}
        />
        <HouseCardContent
          name={house.name}
          address={house.address}
          country={house.country}
          description={house.description}
          bedrooms={house.bedrooms}
          beds={house.beds}
          bathrooms={house.bathrooms}
        />
      </article>
    </Link>
  );
}
