import Container from "@/components/common/Container";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import SectionHeading from "@/components/common/SectionHeading";
import SectionLabel from "@/components/common/SectionLabel";
import type { BrandCatalogue } from "@/utils/ProductsData";

type BrandAboutSectionProps = {
  about: BrandCatalogue["about"];
};

export default function BrandAboutSection({ about }: BrandAboutSectionProps) {
  return (
    <section className="pt-24 lg:pt-[141px]">
      <Container className="grid items-center gap-10 lg:grid-cols-[479px_1fr] lg:gap-[66px]">
        <ImagePlaceholder
          image={about.image}
          alt={about.imageAlt}
          fit={about.imageFit}
          className="h-[360px] w-full lg:h-[513px]"
        />

        <div>
          <SectionLabel>About The Brand</SectionLabel>
          <SectionHeading className="mt-3 text-black lg:leading-[1.14]">
            {about.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </SectionHeading>
          <p className="mt-[42px] max-w-[640px] text-body leading-6 text-dark">{about.description}</p>
        </div>
      </Container>
    </section>
  );
}
