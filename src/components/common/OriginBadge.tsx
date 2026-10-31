import type { ReactNode } from "react";
import type { Country } from "@/utils/Constants";

// Drawn as SVG because flag emoji don't render on Windows
const FLAGS: Record<Country, ReactNode> = {
  Italy: (
    <>
      <rect width="10" height="20" fill="#009246" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#CE2B37" />
    </>
  ),
  India: (
    <>
      <rect width="30" height="6.67" fill="#FF9933" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#138808" />
      <circle cx="15" cy="10" r="2.6" fill="none" stroke="#000080" strokeWidth="0.7" />
      <circle cx="15" cy="10" r="0.6" fill="#000080" />
    </>
  ),
  Turkey: (
    <>
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="11" cy="10" r="5" fill="#fff" />
      <circle cx="12.25" cy="10" r="4" fill="#E30A17" />
      <polygon
        fill="#fff"
        points="14.2,10 15.59,9.55 15.58,8.1 16.44,9.28 17.82,8.82 16.96,10 17.82,11.18 16.44,10.72 15.58,11.9 15.59,10.45"
      />
    </>
  ),
};

const TONES = {
  // On product photos and white panels
  light: "bg-white text-dark shadow-[0_2px_8px_rgba(0,0,0,0.12)] ring-1 ring-border",
  // On the dark hero photos
  dark: "bg-white/15 text-white ring-1 ring-white/40 backdrop-blur-sm",
};

type OriginBadgeProps = {
  country: Country;
  tone?: keyof typeof TONES;
  className?: string;
};

export default function OriginBadge({ country, tone = "light", className = "" }: OriginBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full py-1 pl-1.5 pr-3 text-small font-medium leading-5 ${TONES[tone]} ${className}`}
    >
      <svg viewBox="0 0 30 20" className="h-3.5 w-[21px] shrink-0 overflow-hidden rounded-[2px] ring-1 ring-black/10" aria-hidden="true">
        {FLAGS[country]}
      </svg>
      Made in {country}
    </span>
  );
}
