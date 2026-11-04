import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import Container from "@/components/common/Container";
import HeroCarousel, { type HeroSlide } from "@/components/common/HeroCarousel";

type PageHeroProps = {
  image: StaticImageData;
  imageAlt: string;
  title: string[];
  description: string;
  badge?: ReactNode;
  actions?: ReactNode;
  // Extra photos rotated after `image` in an auto-sliding carousel
  slides?: HeroSlide[];
  // Darkens the text side of light photos so the white copy stays readable
  darken?: boolean;
};

// Full-bleed photo hero shared by every page (838px tall at the 1440px design width).
// The copy is pinned at a fixed offset from the top, so the headline lands in the same
// spot on every page regardless of line count, badge or buttons.
export default function PageHero({
  image,
  imageAlt,
  title,
  description,
  badge,
  actions,
  slides,
  darken = false,
}: PageHeroProps) {
  return (
    <>
      {/* Phones: the photo keeps its own 16:9 shape (nothing cropped away) with the copy on a
          dark panel below it. Desktop: the copy sits over the full-bleed photo. */}
      <section className="relative flex flex-col overflow-hidden bg-dark lg:h-[838px] lg:flex-row lg:items-start lg:bg-transparent">
        <div className="relative aspect-video w-full lg:absolute lg:inset-0 lg:aspect-auto">
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
          {/* Blends the bottom of the photo into the dark copy panel on phones */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-dark to-transparent lg:hidden" />
        </div>

        <Container className="relative pb-14 pt-8 sm:pt-10 lg:pb-0 lg:pt-[460px] xl:pl-[66px]">
          <div className="relative">
            {/* On desktop it sits above the headline without pushing it down */}
            {badge && (
              <div className="mb-5 lg:absolute lg:bottom-full lg:mb-[19px] xl:ml-1">
                {badge}
              </div>
            )}
            <h1 className="font-heading text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-white sm:text-[56px] sm:leading-[0.95] sm:tracking-[-0.04em] lg:text-display lg:leading-[0.92] lg:whitespace-nowrap">
              {title.map((line, index) => (
                <span key={line} className="block">
                  {line}
                  {index < title.length - 1 && " "}
                </span>
              ))}
            </h1>
          </div>
          <p className="mt-5 max-w-[760px] text-body leading-6 text-white xl:ml-1">
            {description}
          </p>
          {actions && (
            <div className="mt-[23px] flex flex-wrap gap-5 xl:ml-1">
              {actions}
            </div>
          )}
        </Container>
      </section>
      {/* Soft shadow cast under the hero, as in the design */}
      <div className="relative" aria-hidden="true">
        <div className="pointer-events-none absolute -top-10 left-[15%] h-24 w-[40%] rounded-full bg-black/10 blur-3xl" />
      </div>
    </>
  );
}
