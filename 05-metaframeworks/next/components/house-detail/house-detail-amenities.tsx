import { CheckCircle } from "lucide-react";

interface Props {
  amenities: string[];
}

export function HouseDetailAmenities(props: Props) {
  const { amenities } = props;

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-bold text-neutral-100">Servicios incluidos</h2>
      <div className="flex flex-wrap gap-2">
        {amenities.map((amenity) => (
          <span
            key={amenity}
            className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm px-3 py-1.5 rounded-full"
          >
            <CheckCircle className="w-4 h-4 text-rose-500" />
            {amenity}
          </span>
        ))}
      </div>
    </div>
  );
}
