import Image from "next/image";
import { StarRating } from "../star-rating";

interface Props {
  imageUrl: string;
  name: string;
  country: string;
  city: string;
  address: string;
  avgRating: string | null;
}

export function HouseDetailHero(props: Props) {
  const { imageUrl, name, country, city, address, avgRating } = props;

  return (
    <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden">
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover brightness-75"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      {avgRating && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1">
          <StarRating rating={Math.round(Number(avgRating))} />
          <span className="text-sm font-semibold text-neutral-200">
            {avgRating}
          </span>
        </div>
      )}

      <div className="absolute bottom-5 left-5 right-5">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
          {name}
        </h1>
        <p className="text-sm text-neutral-300 mt-1">
          {country} · {city} · {address}
        </p>
      </div>
    </div>
  );
}
