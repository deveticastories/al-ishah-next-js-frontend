import Image from "next/image";
import type { CatalogueProduct } from "@/utils/ProductsData";

type CatalogueCardProps = {
  product: CatalogueProduct;
};

export default function CatalogueCard({ product }: CatalogueCardProps) {
  return (
    <article id={product.id} className="scroll-mt-[var(--header-height)] rounded border border-border p-[14px] pb-5">
      <div className="bg-surface">
        <Image
          src={product.image}
          alt={product.title}
          placeholder="blur"
          sizes="(min-width: 1024px) 388px, 100vw"
          className="aspect-[388/367] h-auto w-full object-cover"
        />
      </div>

      <h3 className="mt-4 font-heading text-title font-medium tracking-[-0.03em] text-black">
        {product.title}
      </h3>
      <p className="mt-2 min-h-12 max-w-[370px] text-body leading-6 text-dark">{product.description}</p>

      <dl className="mt-3.5 space-y-1.5">
        {product.specs.map((spec) => (
          <div key={spec.label} className="flex gap-1.5 text-body leading-6">
            <dt className="shrink-0 font-medium text-dark">{spec.label} :</dt>
            <dd className="text-spec-value">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
