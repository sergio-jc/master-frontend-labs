import type { Review } from "@/types";
import { StarRating } from "./star-rating";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm font-bold text-neutral-300">
            {review.author[0].toUpperCase()}
          </div>
          <span className="text-sm font-semibold text-neutral-200">
            {review.author}
          </span>
        </div>
        <StarRating rating={review.rating} />
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed">
        {review.comment}
      </p>
      <time className="text-xs text-neutral-600">
        {new Date(review.date).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
    </div>
  );
}
