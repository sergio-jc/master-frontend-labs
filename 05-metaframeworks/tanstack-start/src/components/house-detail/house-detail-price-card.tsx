import { toast } from "sonner";
import { StarRating } from "../star-rating";

interface Props {
  price: number;
  avgRating: string | null;
  reviewCount: number;
}

export function HouseDetailPriceCard(props: Props) {
  const { price, avgRating, reviewCount } = props;

  const handleReserve = () => {
    toast.success("Reserva realizada correctamente", {
      description: "Te esperamos en el alojamiento",
    });
  };

  return (
    <div className="lg:w-72 shrink-0">
      <div className="sticky top-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-5 shadow-xl shadow-black/50">
        <div className="flex flex-col gap-1">
          <div className="flex items-end gap-1">
            <span className="text-3xl font-extrabold text-white">{price}€</span>
            <span className="text-neutral-500 mb-0.5">/ noche</span>
          </div>
          {avgRating && (
            <div className="flex items-center gap-1.5">
              <StarRating rating={Math.round(Number(avgRating))} />
              <span className="text-sm text-neutral-400">
                {avgRating} · {reviewCount} reseñas
              </span>
            </div>
          )}
        </div>

        <div className="border-t border-neutral-800" />

        <div className="flex flex-col gap-2 text-sm text-neutral-400">
          <div className="flex justify-between">
            <span>{price}€ × 7 noches</span>
            <span className="text-neutral-200">{price * 7}€</span>
          </div>
          <div className="flex justify-between">
            <span>Tarifa de limpieza</span>
            <span className="text-neutral-200">50€</span>
          </div>
          <div className="border-t border-neutral-800 mt-1 pt-2 flex justify-between font-semibold text-neutral-100">
            <span>Total</span>
            <span>{price * 7 + 50}€</span>
          </div>
        </div>

        <button
          onClick={handleReserve}
          type="button"
          className="w-full bg-cyan-600 hover:bg-cyan-700 active:scale-95 transition-all text-white font-bold py-3 rounded-xl shadow-lg shadow-black/40"
        >
          Reservar ahora
        </button>
      </div>
    </div>
  );
}
