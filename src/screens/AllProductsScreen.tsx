import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import CtaBanner from "@/components/common/CtaBanner";
import OriginBadge from "@/components/common/OriginBadge";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CatalogueCard from "@/components/products/CatalogueCard";
import { BRANDS } from "@/utils/Constants";
import { Images } from "@/utils/Images";
import { BRAND_CATALOGUES } from "@/utils/ProductsData";
import { Routes } from "@/utils/Routes";

// Only brands with a catalogue have products to list
const CATALOGUE_BRANDS = BRANDS.flatMap((brand) => {
  const catalogue = BRAND_CATALOGUES[brand.id];
  return catalogue ? [{ brand, catalogue }] : [];
});

export default function AllProductsScreen() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          image={Images.productsHero}
          imageAlt="Building products ready for distribution"
          title={["Our Products"]}
          description="Explore The Full Range Of Products We Supply From Our Registered Brands Across Europe And Asia, Sourced To Serve Different Business And Industry Requirements."
          darken
        />

        <section className="pt-20 lg:pt-[119px]">
          <Container>
            <div className="text-center">
              <p className="font-body text-body leading-6 text-primary">All brands</p>
              <SectionHeading className="mt-2 text-black">Explore Our Product Range</SectionHeading>
            </div>

            {/* Jump links to each brand's products */}
            <nav aria-label="Brands" className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-[26px]">
              {CATALOGUE_BRANDS.map(({ brand }) => (
                <a
                  key={brand.id}
                  href={`#${brand.id}`}
                  aria-label={brand.name}
                  className="flex h-[60px] w-[100px] items-center justify-center rounded border border-border-light transition-colors hover:border-primary-light sm:h-[71px] sm:w-[139px]"
                >
                  <Image src={brand.logo} alt="" className="h-8 w-auto max-w-[80px] object-contain sm:h-9 sm:max-w-[100px]" />
                </a>
              ))}
            </nav>

            {CATALOGUE_BRANDS.map(({ brand, catalogue }) => (
              <div key={brand.id} id={brand.id} className="mt-16 scroll-mt-[var(--header-height)] lg:mt-24">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
                  <div className="flex flex-wrap items-center gap-4">
                    <Image src={brand.logo} alt={brand.name} className="h-10 w-auto sm:h-12" />
                    <OriginBadge country={brand.country} />
                  </div>
                  <Link
                    href={Routes.brand(brand.id)}
                    className="font-heading text-button tracking-[-0.04em] text-primary underline underline-offset-2"
                  >
                    View {brand.name} Catalogue
                  </Link>
                </div>

                <div className="mt-8 grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[31px]">
                  {catalogue.catalogue.products.map((product) => (
                    <CatalogueCard key={product.id} product={product} country={brand.country} />
                  ))}
                </div>
              </div>
            ))}
          </Container>
        </section>

        <CtaBanner
          className="pb-[72px] pt-20 lg:pt-[119px]"
          label="Need Help Finding A Product?"
          title={["Can’t Find What", "You’re Looking For?"]}
          description="Tell us about your project requirements and our team will help you source the right products."
          actions={
            <Button href={Routes.contact} className="w-[187px]">
              Contact Us
            </Button>
          }
        />
      </main>
      <Footer currentHref={Routes.products} className="bg-footer-bg" />
    </>
  );
}
