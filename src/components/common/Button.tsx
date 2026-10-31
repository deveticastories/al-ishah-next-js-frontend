import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "outlinePrimary";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-[#c91c23]",
  outline: "border border-white text-white hover:bg-white/10",
  outlinePrimary: "border border-primary text-primary hover:bg-primary/5",
};

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex h-11 items-center whitespace-nowrap justify-center rounded px-7 font-heading text-button font-normal tracking-[-0.04em] transition-colors ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
