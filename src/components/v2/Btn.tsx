import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Common = {
  variant?: "primary" | "secondary";
  onDark?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type ButtonProps = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof Common> & {
    href?: undefined;
  };

type AnchorProps = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof Common> & {
    href: string;
  };

type Props = ButtonProps | AnchorProps;

export default function Btn({
  children,
  variant = "primary",
  onDark = false,
  className = "",
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 md:px-8 py-3.5 md:py-4 text-[15px] font-semibold transition-all duration-200 active:scale-[0.98]";

  const styles =
    variant === "primary"
      ? onDark
        ? "bg-gomu-yellow text-gomu-purple-deep shadow-[0_5px_0_rgba(59,10,94,0.35)] hover:-translate-y-0.5 hover:bg-gomu-chartreuse hover:shadow-[0_7px_0_rgba(59,10,94,0.35)]"
        : "bg-gomu-purple-deep text-gomu-cream shadow-[0_5px_0_rgba(59,10,94,0.25)] hover:-translate-y-0.5 hover:bg-gomu-purple-1 hover:shadow-[0_7px_0_rgba(59,10,94,0.25)]"
      : onDark
        ? "border-[1.5px] border-gomu-cream/70 text-gomu-cream hover:bg-gomu-cream/10"
        : "border-[1.5px] border-gomu-purple-deep text-gomu-purple-deep hover:bg-gomu-purple-deep hover:text-gomu-cream";

  const cls = `${base} ${styles} ${className}`;

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
