import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Button from "@/components/common/Button";
import CtaBanner from "@/components/common/CtaBanner";
import PageHero from "@/components/common/PageHero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BrandAboutSection from "@/components/products/BrandAboutSection";
import BrandHighlights from "@/components/products/BrandHighlights";
import CatalogueSection from "@/components/products/CatalogueSection";
import { BRANDS } from "@/utils/Constants";
import { Images } from "@/utils/Images";
import { BRAND_CATALOGUES } from "@/utils/ProductsData";
import { Routes } from "@/utils/Routes";

type ProductsScreenProps = {
  params: Promise<{ brand: string }>;
};

export default function ProductsScreen({ params }: ProductsScreenProps) {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Same height as PageHero so the page doesn't jump when the brand streams in */}
        <Suspense fallback={<div className="min-h-[620px] bg-placeholder lg:h-[838px]" aria-hidden="true" />}>
          <BrandCatalogueContent params={params} />
        </Suspense>
      </main>
      <Footer currentHref={Routes.products} className="bg-footer-bg" />
    </>
  );
}

async function BrandCatalogueContent({ params }: ProductsScreenProps) {
  const { brand: brandId } = await params;
  const brand = BRANDS.find((item) => item.id === brandId);
  const catalogue = BRAND_CATALOGUES[brandId];

  if (!brand || !catalogue) notFound();

  return (
    <>
      <PageHero
        image={Images.productsHero}
        imageAlt={catalogue.hero.imageAlt}
        title={catalogue.hero.title}
        description={catalogue.hero.description}
        badge={<Image src={brand.logo} alt={brand.name} className="h-[54px] w-auto" />}
      />
      <BrandAboutSection about={catalogue.about} />
      <BrandHighlights highlights={catalogue.highlights} />
      <CatalogueSection catalogue={catalogue.catalogue} />
      <CtaBanner
        className="pb-[72px] pt-20 lg:pt-[119px]"
        label="Need Help Finding A Product?"
        title={catalogue.cta.title}
        description={catalogue.cta.description}
        actions={
          <Button href={Routes.contact} className="w-[187px]">
            Contact Us
          </Button>
        }
      />
    </>
  );
}
