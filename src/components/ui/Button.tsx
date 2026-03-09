"use client";

import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center font-bold rounded-[10px] transition-all duration-300 ease-in-out cursor-pointer",
        {
          "bg-brand-green text-white shadow-[5px_5px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px]":
            variant === "primary",
          "bg-brand-yellow text-brand-dark shadow-[5px_5px_0px_0px_#000000] hover:shadow-[1px_1px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px]":
            variant === "secondary",
          "bg-transparent text-brand-green border-2 border-brand-green hover:bg-brand-green hover:text-white":
            variant === "outline",
        },
        {
          "px-5 py-2.5 text-sm": size === "sm",
          "px-8 py-3.5 text-base": size === "md",
          "px-11 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
