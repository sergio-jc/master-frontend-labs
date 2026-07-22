import type { Review } from "@/types";
import { ReviewCard } from "../review-card";

interface Props {
  reviews: Review[];
}

export function HouseDetailReviews(props: Props) {
  const { reviews } = props;

  if (reviews.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-bold text-neutral-100">Reseñas</h2>
        <span className="text-neutral-500">({reviews.length})</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
