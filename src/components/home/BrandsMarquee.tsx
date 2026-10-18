import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";
import SectionLabel from "@/components/common/SectionLabel";
import { MARQUEE_BRANDS } from "@/utils/Constants";

// Per-logo heights so each mark has the same visual weight as in the design
const LOGO_HEIGHT: Record<string, string> = {
  kt: "h-[115px]",
  dakota: "h-[83px]",
  keves: "h-[136px]",
  bathline: "h-[44px]",
};

export default function BrandsMarquee() {
  // Rendered twice so the track can loop seamlessly
  const track = [...MARQUEE_BRANDS, ...MARQUEE_BRANDS];

  return (
    <section className="pb-24 pt-24 lg:pb-[120px] lg:pt-[110px]">
      <div className="text-center">
        <SectionLabel>Our Brands</SectionLabel>
        <SectionHeading className="mt-2.5 px-4 text-black">Connecting Trusted Brands</SectionHeading>
      </div>

      <div className="mt-12 overflow-hidden">
        <ul className="animate-marquee flex w-max items-center">
          {track.map((brand, index) => (
            <li
              key={`${brand.id}-${index}`}
              className="flex h-[150px] w-[260px] shrink-0 items-center justify-center px-6 sm:w-[320px]"
              aria-hidden={index >= MARQUEE_BRANDS.length}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                className={`${LOGO_HEIGHT[brand.id]} w-auto max-w-full object-contain`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
