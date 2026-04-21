export default function Eyebrow({
  children,
  className = "",
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  const toneClass =
    tone === "dark" ? "text-gomu-purple-deep/80" : "text-gomu-yellow";
  return (
    <div
      className={`text-[13px] uppercase tracking-cap font-medium ${toneClass} ${className}`}
    >
      {children}
    </div>
  );
}
