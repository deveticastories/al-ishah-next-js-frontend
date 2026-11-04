import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`font-heading text-[28px] font-medium leading-[1.2] tracking-[-0.02em] sm:text-[42px] sm:leading-[1.04] sm:tracking-[-0.04em] lg:text-h2 ${className}`}
    >
      {children}
    </h2>
  );
}
