import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import Container from "@/components/common/Container";
import HeroCarousel, { type HeroSlide } from "@/components/common/HeroCarousel";

type PageHeroProps = {
  image: StaticImageData;
  imageAlt: string;
  title: string[];
  description: string;
  align?: "left" | "center";
  badge?: ReactNode;
  actions?: ReactNode;
  // Extra photos rotated after `image` in an auto-sliding carousel
  slides?: HeroSlide[];
  // Darkens the text side of light photos so the white copy stays readable
  darken?: boolean;
};

// Full-bleed photo hero shared by every page (838px tall at the 1440px design width)
export default function PageHero({
  image,
  imageAlt,
  title,
  description,
  align = "left",
  badge,
  actions,
  slides,
  darken = false,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <>
      <section
        className={`relative flex min-h-[620px] overflow-hidden lg:h-[838px] ${
          centered ? "items-center" : "items-end"
        }`}
      >
        {slides?.length ? (
          <HeroCarousel slides={[{ image, alt: imageAlt }, ...slides]} />
        ) : (
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-center"
          />
        )}
        {darken && <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />}
        {/* Keeps the copy readable when the photo is cropped on small screens */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:hidden" />

        <Container
          className={`relative ${
            centered
              ? "py-40 text-center lg:pb-0 lg:pt-2"
              : `pb-16 pt-40 xl:pl-[66px] ${actions ? "lg:pb-[115px]" : "lg:pb-[192px]"}`
          }`}
        >
          {badge && <div className="mb-[19px] xl:ml-1">{badge}</div>}
          <h1 className="font-heading text-[40px] font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-[56px] lg:text-display lg:leading-[0.92] lg:whitespace-nowrap">
            {title.map((line, index) => (
              <span key={line} className="block">
                {line}
                {index < title.length - 1 && " "}
              </span>
            ))}
          </h1>
          <p
            className={`text-body leading-6 text-white ${
              centered ? "mx-auto mt-[22px] max-w-[600px]" : "mt-5 max-w-[760px] xl:ml-1"
            }`}
          >
            {description}
          </p>
          {actions && <div className="mt-[23px] flex flex-wrap gap-5 xl:ml-1">{actions}</div>}
        </Container>
      </section>
      {/* Soft shadow cast under the hero, as in the design */}
      <div className="relative" aria-hidden="true">
        <div className="pointer-events-none absolute -top-10 left-[15%] h-24 w-[40%] rounded-full bg-black/10 blur-3xl" />
      </div>
    </>
  );
}
