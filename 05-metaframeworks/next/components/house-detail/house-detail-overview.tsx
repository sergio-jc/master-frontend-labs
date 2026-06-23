import { LucideIcon } from "lucide-react";

interface Characteristic {
  icon: LucideIcon;
  label: string;
  value: number;
}

interface Props {
  description: string;
  houseCharacteristics: Characteristic[];
}

export function HouseDetailOverview(props: Props) {
  const { description, houseCharacteristics } = props;

  return (
    <div className="flex flex-col gap-6">
      <p className="text-neutral-400 leading-relaxed">{description}</p>
      <ol className="flex flex-col gap-2">
        {houseCharacteristics.map((characteristic) => {
          const Icon = characteristic.icon;
          return (
            <li
              key={characteristic.label}
              className="flex items-center gap-2"
            >
              <Icon className="w-4 h-4 text-rose-500" />
              <span>{characteristic.value}</span>
              <span>{characteristic.label}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
