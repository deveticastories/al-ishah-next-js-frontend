import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`font-heading text-[34px] font-medium leading-[1.04] tracking-[-0.04em] sm:text-[42px] lg:text-h2 ${className}`}
    >
      {children}
    </h2>
  );
}
