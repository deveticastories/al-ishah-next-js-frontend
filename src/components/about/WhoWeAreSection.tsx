import StatCard from "@/components/about/StatCard";
import Container from "@/components/common/Container";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import SectionHeading from "@/components/common/SectionHeading";
import SectionLabel from "@/components/common/SectionLabel";
import { ABOUT_INTRO, ABOUT_STATS } from "@/utils/AboutData";
import { Images } from "@/utils/Images";

export default function WhoWeAreSection() {
  return (
    <section className="pt-24 lg:pt-[124px]">
      <Container className="grid gap-10 lg:grid-cols-[479px_1fr] lg:gap-[43px]">
        <ImagePlaceholder
          image={Images.aboutWhoWeAre}
          alt="Warehouse aisles stocked with building products"
          className="h-[360px] w-full lg:h-[513px]"
        />

        <div className="lg:pt-1.5">
          <SectionLabel>Who We Are</SectionLabel>
          <SectionHeading className="mt-2 text-black">Your Trusted Trading Partner</SectionHeading>
          <p className="mt-[22px] max-w-[700px] text-body leading-6 text-dark">{ABOUT_INTRO}</p>

          <div className="mt-[30px] grid gap-9 sm:grid-cols-[355px_1fr]">
            <div className="flex flex-col gap-[35px]">
              <StatCard variant="highlight" {...ABOUT_STATS.products} />
              <StatCard variant="muted" {...ABOUT_STATS.clients} />
            </div>
            <ImagePlaceholder
              image={Images.aboutConstruction}
              alt="Construction workers on a building site"
              className="h-[277px] w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
