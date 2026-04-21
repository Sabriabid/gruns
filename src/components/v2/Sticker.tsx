type Color = "yellow" | "chartreuse" | "cream";

export default function Sticker({
  children,
  rotate = -6,
  color = "yellow",
  className = "",
}: {
  children: React.ReactNode;
  rotate?: number;
  color?: Color;
  className?: string;
}) {
  const bg =
    color === "yellow"
      ? "bg-gomu-yellow text-gomu-purple-deep"
      : color === "chartreuse"
        ? "bg-gomu-chartreuse text-gomu-purple-deep"
        : "bg-gomu-cream text-gomu-purple-deep";

  return (
    <span
      className={`inline-block handwritten text-[18px] md:text-[22px] px-3 py-1 rounded-[8px] ${bg} shadow-[0_4px_0_rgba(59,10,94,0.15)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
