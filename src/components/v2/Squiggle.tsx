export default function Squiggle({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 28 C 20 8, 40 40, 60 20 S 100 8, 116 24" />
      <path d="M116 24 L 108 18 M116 24 L 110 30" />
    </svg>
  );
}
