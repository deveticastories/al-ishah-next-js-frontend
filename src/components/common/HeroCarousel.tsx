"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export type HeroSlide = { image: StaticImageData; alt: string };

type HeroCarouselProps = {
  slides: HeroSlide[];
  interval?: number;
};

// Background photos for PageHero that slide left on a timer; the copy on top stays put
export default function HeroCarousel({ slides, interval = 5000 }: HeroCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => setActive((index) => (index + 1) % slides.length), interval);
    return () => window.clearTimeout(timer);
  }, [active, interval, slides.length]);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden" aria-roledescription="carousel">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.alt}
              className="relative h-full w-full shrink-0"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
              aria-hidden={index !== active}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? undefined : "eager"}
                placeholder="blur"
                sizes="100vw"
                className="object-cover object-[70%_center] lg:object-center"
              />
            </div>
          ))}
        </div>
      </div>
      {/* The stock photos are brighter than the original hero, so shade the side the copy sits on */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 via-45% to-transparent" aria-hidden="true" />

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2.5 lg:bottom-10">
        {slides.map((slide, index) => (
          <button
            key={slide.alt}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === active}
            onClick={() => setActive(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === active ? "w-10 bg-primary" : "w-5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </>
  );
}
