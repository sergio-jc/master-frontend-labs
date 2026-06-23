import { BathIcon, BedIcon, HouseIcon } from "lucide-react";

interface Props {
  name: string;
  address: string;
  country: string;
  description: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

export function HouseCardContent(props: Props) {
  const { name, address, country, description, bedrooms, beds, bathrooms } =
    props;

  return (
    <div className="flex flex-col flex-1 p-5 gap-3">
      <div>
        <h3 className="text-base font-bold text-neutral-100 leading-snug line-clamp-1">
          {name}
        </h3>
        <p className="text-xs text-neutral-500 mt-0.5 tracking-wide">
          {address} · {country}
        </p>
      </div>

      <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center gap-4 text-sm text-neutral-300">
        <span className="flex items-center gap-1.5">
          <HouseIcon className="w-4 h-4 text-rose-500 shrink-0" />
          {bedrooms} hab.
        </span>
        <span className="flex items-center gap-1.5">
          <BedIcon className="w-4 h-4 text-rose-500 shrink-0" />
          {beds} camas
        </span>
        <span className="flex items-center gap-1.5">
          <BathIcon className="w-4 h-4 text-rose-500 shrink-0" />
          {bathrooms} baños
        </span>
      </div>
    </div>
  );
}
