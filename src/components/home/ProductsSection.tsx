"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import SectionLabel from "@/components/common/SectionLabel";
import ProductCard from "@/components/home/ProductCard";
import { BRANDS, PRODUCTS } from "@/utils/Constants";
import { Routes } from "@/utils/Routes";

export default function ProductsSection() {
  const [selectedBrand, setSelectedBrand] = useState(BRANDS[0].id);
  const products = PRODUCTS.filter((product) => product.brandId === selectedBrand);

  return (
    <section id="products" className="scroll-mt-[var(--header-height)] pt-24 lg:pt-[130px]">
      <Container>
        <div className="text-center">
          <SectionLabel>Our Products</SectionLabel>
          <SectionHeading className="mt-2 text-black">Explore Our Product Range</SectionHeading>
          <p className="mx-auto mt-5 max-w-[530px] text-body leading-6 text-dark">
            Discover a diverse portfolio of products from registered brands, sourced to serve
            different business and industry requirements.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-[26px]">
          <span className="w-full text-center text-body text-gray-text sm:mr-[7px] sm:w-auto">
            Choose your brand
          </span>
          {BRANDS.map((brand) => {
            const selected = brand.id === selectedBrand;
            return (
              <button
                key={brand.id}
                type="button"
                aria-pressed={selected}
                aria-label={brand.name}
                onClick={() => setSelectedBrand(brand.id)}
                className={`flex h-[60px] w-[100px] items-center sm:h-[71px] sm:w-[139px] justify-center rounded border transition-colors ${
                  selected
                    ? "border-2 border-primary"
                    : "border-border-light hover:border-primary-light"
                }`}
              >
                <Image src={brand.logo} alt="" className="h-8 w-auto max-w-[80px] object-contain sm:h-9 sm:max-w-[100px]" />
              </button>
            );
          })}
        </div>

        {products.length > 0 ? (
          <div className="mt-16 grid gap-[31px] sm:grid-cols-2 lg:mt-[98px] lg:grid-cols-3 xl:px-px">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-body text-gray-text lg:mt-[98px]">
            Products for this brand are coming soon.
          </p>
        )}

        <div className="mt-[37px] text-center">
          <p className="text-body text-gray-text">
            Browse our available products to find the right solutions for your needs
          </p>
          <Button href={Routes.products} className="mt-[22px] min-w-[168px] px-[18px]">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
}
