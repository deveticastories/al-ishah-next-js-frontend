"use client";

import Image from "next/image";
import { useState, type Ref } from "react";
import Button from "@/components/common/Button";
import OriginBadge from "@/components/common/OriginBadge";
import { CloseIcon } from "@/components/icons/Icons";
import type { Country } from "@/utils/Constants";
import type { CatalogueProduct } from "@/utils/ProductsData";
import { Routes } from "@/utils/Routes";

type ProductDetailsDialogProps = {
  ref: Ref<HTMLDialogElement>;
  product: CatalogueProduct;
  country: Country;
};

export default function ProductDetailsDialog({ ref, product, country }: ProductDetailsDialogProps) {
  const { details } = product;
  const [activeImage, setActiveImage] = useState(0);
  const image = details.images[activeImage];

  return (
    <dialog
      ref={ref}
      aria-labelledby={`${product.id}-title`}
      // Clicks on the backdrop land on the dialog element itself
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[1040px] rounded bg-white p-0 text-dark backdrop:bg-black/60"
    >
      <div className="relative grid gap-8 p-5 pt-14 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
        <form method="dialog" className="absolute right-3 top-3">
          <button
            type="submit"
            aria-label="Close product details"
            className="flex size-10 items-center justify-center rounded text-dark transition-colors hover:bg-surface hover:text-primary"
          >
            <CloseIcon className="size-6" />
          </button>
        </form>

        <div>
          <div className="flex aspect-[4/3] items-center justify-center rounded border border-border bg-white p-3">
            <Image
              src={image.src}
              alt={image.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 480px, 100vw"
              className="h-full w-full object-contain"
            />
          </div>

          {details.images.length > 1 && (
            <div className="mt-3 flex gap-3">
              {details.images.map((item, index) => (
                <button
                  key={item.alt}
                  type="button"
                  aria-label={`Show image: ${item.alt}`}
                  aria-pressed={index === activeImage}
                  onClick={() => setActiveImage(index)}
                  className={`size-20 overflow-hidden rounded border bg-white p-1 transition-colors ${
                    index === activeImage ? "border-2 border-primary" : "border-border-light hover:border-primary-light"
                  }`}
                >
                  <Image src={item.src} alt="" sizes="80px" className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="lg:pt-6">
          <OriginBadge country={country} />
          <h3
            id={`${product.id}-title`}
            className="mt-3 pr-10 font-heading text-title font-medium tracking-[-0.03em] text-black"
          >
            {product.title}
          </h3>
          <p className="mt-3 text-body leading-6 text-dark">{details.overview}</p>

          <dl className="mt-6 grid gap-x-8 gap-y-5 border-t border-border pt-6 sm:grid-cols-2">
            {details.groups.map((group) => (
              <div key={group.title}>
                <dt className="font-medium text-dark">{group.title}</dt>
                <dd className="mt-1.5">
                  <ul className="space-y-1 text-body leading-6 text-spec-value">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>

          <Button href={Routes.contact} className="mt-8 w-[187px]">
            Enquire Now
          </Button>
        </div>
      </div>
    </dialog>
  );
}
