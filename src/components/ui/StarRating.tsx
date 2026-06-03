import { Star } from "lucide-react";

export default function StarRating({
  rating = 5,
  size = 16,
  className = "",
}: {
  rating?: number;
  size?: number;
  /** Tailwind classes for the filled stars (fill + text). */
  className?: string;
}) {
  const filled = className || "fill-gomu-yellow text-gomu-yellow";
  return (
    <div className="inline-flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? filled : "text-gomu-purple-deep/20"}
        />
      ))}
    </div>
  );
}
