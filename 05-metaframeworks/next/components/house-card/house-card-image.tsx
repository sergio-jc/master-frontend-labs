import Image from "next/image";
import { StarRating } from "../star-rating";

interface Props {
  imageUrl: string;
  name: string;
  city: string;
  price: number;
  avgRating: number;
  reviewCount: number;
}

export function HouseCardImage(props: Props) {
  const { imageUrl, name, city, price, avgRating, reviewCount } = props;

  return (
    <div className="relative h-52 overflow-hidden">
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-75 grayscale-[20%]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-neutral-950/90 via-black/30 to-transparent" />

      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm rounded-full px-2.5 py-1 border border-neutral-700">
        <StarRating rating={avgRating} />
        <span className="text-xs font-semibold text-neutral-100">
          {avgRating}.0
        </span>
        <span className="text-xs text-neutral-500">({reviewCount})</span>
      </div>

      <div className="absolute top-3 right-3 bg-rose-600 rounded-full px-3 py-1 text-xs font-bold text-white tracking-wide">
        {city}
      </div>

      <div className="absolute bottom-3 right-3 text-2xl">
        <span className="font-semibold text-neutral-100">{price}€</span>
        <span className="text-neutral-500 text-sm"> x noche</span>
      </div>
    </div>
  );
}
