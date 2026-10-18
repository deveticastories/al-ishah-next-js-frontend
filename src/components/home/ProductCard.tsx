import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/utils/Constants";
import { Routes } from "@/utils/Routes";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded border border-border p-[14px] pb-[25px]">
      <div className="bg-surface">
        <Image
          src={product.image}
          alt={product.title}
          placeholder="blur"
          sizes="(min-width: 1024px) 388px, 100vw"
          className="aspect-[388/367] h-auto w-full object-cover"
        />
      </div>

      <h3 className="mt-[25px] font-heading text-title font-medium tracking-[-0.03em] text-black">
        {product.title}
      </h3>

      <div className="mt-3 flex items-end justify-between gap-2.5">
        <p className="line-clamp-2 min-h-12 max-w-[285px] text-body leading-6 text-dark">
          {product.description}
        </p>
        <Link
          href={Routes.brand(product.brandId)}
          className="shrink-0 font-heading text-button tracking-[-0.04em] text-primary underline underline-offset-2"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
