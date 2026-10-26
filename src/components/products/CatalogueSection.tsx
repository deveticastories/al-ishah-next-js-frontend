import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import CatalogueCard from "@/components/products/CatalogueCard";
import type { Country } from "@/utils/Constants";
import type { BrandCatalogue } from "@/utils/ProductsData";

type CatalogueSectionProps = {
  catalogue: BrandCatalogue["catalogue"];
  country: Country;
};

export default function CatalogueSection({ catalogue, country }: CatalogueSectionProps) {
  return (
    <section className="pt-20 lg:pt-[119px]">
      <Container>
        <div className="text-center">
          <p className="font-body text-body leading-6 text-primary">Product categories</p>
          <SectionHeading className="mt-2 text-black">{catalogue.title}</SectionHeading>
          <p className="mx-auto mt-5 max-w-[490px] text-body leading-6 text-dark">{catalogue.description}</p>
        </div>

        <div className="mt-10 grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[31px]">
          {catalogue.products.map((product) => (
            <CatalogueCard key={product.id} product={product} country={country} />
          ))}
        </div>
      </Container>
    </section>
  );
}
