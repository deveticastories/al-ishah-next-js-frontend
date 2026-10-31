import Image from "next/image";
import Container from "@/components/common/Container";
import SectionLabel from "@/components/common/SectionLabel";
import { Gradients } from "@/utils/Colors";
import { MARKETS } from "@/utils/Constants";
import { Images } from "@/utils/Images";

export default function MarketsSection() {
  return (
    <section className="overflow-hidden text-white" style={{ background: Gradients.markets }}>
      <Container className="grid items-center gap-12 py-20 lg:min-h-[753px] lg:grid-cols-[710px_1fr] lg:gap-0 lg:py-0 xl:pl-[70px]">
        <Image
          src={Images.marketsCollage}
          alt="Warehouse operations, Dubai skyline and Bangkok's Bhumibol Bridge over a world map"
          className="h-auto w-full max-w-[710px] [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent),linear-gradient(transparent,black_6%,black_94%,transparent)] [mask-composite:intersect] lg:mt-[-46px]"
        />

        <div className="lg:-ml-[9px] lg:-mt-[40px]">
          <SectionLabel>Our Markets</SectionLabel>
          <h2 className="mt-3 font-heading text-[34px] font-medium leading-[1.16] tracking-[-0.04em] sm:text-[42px] lg:text-h2">
            International Sourcing.
            <br />
            Diverse Opportunities.
          </h2>

          <dl className="mt-12 space-y-[14px]">
            {MARKETS.map((market) => (
              <div key={market.region} className="flex items-center gap-2 text-body leading-6">
                <dt className="w-[90px] shrink-0 font-semibold">{market.region}</dt>
                <span className="w-10 shrink-0 border-t border-dashed border-dash" aria-hidden="true" />
                <dd className="ml-3 text-white/90">{market.description}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-[70px] max-w-[573px] rounded-sm bg-market-note px-[23px] py-[13px] text-body leading-6 text-white/90">
            Through our diverse sourcing network, we aim to connect businesses with products that
            meet their requirements
          </p>
        </div>
      </Container>
    </section>
  );
}
