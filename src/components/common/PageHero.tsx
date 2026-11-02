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
      {/* On phones the photo sits above the copy at full width so it isn't cropped to a narrow sliver */}
      <section
        className={`relative flex flex-col overflow-hidden bg-dark lg:h-[838px] lg:flex-row ${
          centered ? "lg:items-center" : "lg:items-start"
        }`}
      >
        <div className="relative aspect-[16/9] w-full lg:absolute lg:inset-0 lg:aspect-auto">
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
              className="object-cover object-center"
            />
          )}
          {darken && (
            <div className="absolute inset-0 hidden bg-gradient-to-r from-black/75 via-black/45 to-black/10 lg:block" />
          )}
          {/* Blends the photo's bottom edge into the copy panel below it */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-dark to-transparent lg:hidden" />
        </div>

        <Container
          className={`relative ${
            centered
              ? "py-10 text-center lg:pb-0 lg:pt-2"
              : // Heading top is pinned at the same height on every page so moving between pages feels continuous
                "pb-12 pt-6 lg:pb-0 lg:pt-[460px] xl:pl-[66px]"
          }`}
        >
          <div className="relative">
            {/* Sits above the heading without pushing it down from the shared position */}
            {badge && <div className="mb-[19px] xl:ml-1 lg:absolute lg:bottom-full lg:left-0">{badge}</div>}
            <h1 className="font-heading text-[40px] font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-[56px] lg:text-display lg:leading-[0.92] lg:whitespace-nowrap">
              {title.map((line, index) => (
                <span key={line} className="block">
                  {line}
                  {index < title.length - 1 && " "}
                </span>
              ))}
            </h1>
          </div>
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
