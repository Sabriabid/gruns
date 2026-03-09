import { Star } from "lucide-react";

export default function StarRating({
  rating = 5,
  size = 16,
}: {
  rating?: number;
  size?: number;
}) {
  return (
    <div className="inline-flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < rating
              ? "fill-brand-yellow text-brand-yellow"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}
