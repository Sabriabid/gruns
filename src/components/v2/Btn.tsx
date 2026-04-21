import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  onDark?: boolean;
};

export default function Btn({
  children,
  variant = "primary",
  onDark = false,
  className = "",
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 md:px-8 py-3.5 md:py-4 text-[15px] font-medium transition-all duration-200 active:scale-[0.98]";

  const styles =
    variant === "primary"
      ? onDark
        ? "bg-gomu-yellow text-gomu-purple-deep hover:scale-[1.02] hover:bg-gomu-chartreuse"
        : "bg-gomu-purple-deep text-gomu-cream hover:scale-[1.02] hover:bg-gomu-purple-1"
      : onDark
        ? "border-[1.5px] border-gomu-cream/70 text-gomu-cream hover:bg-gomu-cream/10"
        : "border-[1.5px] border-gomu-purple-deep text-gomu-purple-deep hover:bg-gomu-purple-deep hover:text-gomu-cream";

  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}
