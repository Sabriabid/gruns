import { Quote } from "lucide-react";
import clsx from "clsx";

export default function AtlasQuoteBlock({
  text,
  source,
  tag,
  tone = "neutral",
  className,
}: {
  text: string;
  source?: string;
  tag?: string;
  tone?: "neutral" | "positive" | "negative";
  className?: string;
}) {
  const toneClass = {
    neutral: "border-atlas-border bg-atlas-surface",
    positive: "border-atlas-success/30 bg-atlas-success/5",
    negative: "border-atlas-danger/30 bg-atlas-danger/5",
  }[tone];

  return (
    <figure
      className={clsx(
        "rounded-lg border p-4 leading-relaxed",
        toneClass,
        className
      )}
    >
      <Quote size={14} className="text-atlas-muted mb-2" />
      <blockquote className="text-sm text-atlas-text italic">
        « {text} »
      </blockquote>
      {(source || tag) && (
        <figcaption className="mt-3 flex items-center justify-between gap-2 text-[11px] text-atlas-muted">
          {source && <span>📍 {source}</span>}
          {tag && (
            <span className="rounded bg-atlas-surface-2 px-1.5 py-0.5 font-mono">
              {tag}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
