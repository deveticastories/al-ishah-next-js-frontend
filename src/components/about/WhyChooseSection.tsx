import Image from "next/image";
import Container from "@/components/common/Container";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import SectionHeading from "@/components/common/SectionHeading";
import SectionLabel from "@/components/common/SectionLabel";
import { ArrowBulletIcon } from "@/components/icons/Icons";
import { WHY_CHOOSE_US } from "@/utils/AboutData";
import { Images } from "@/utils/Images";

export default function WhyChooseSection() {
  return (
    <section className="pb-24 pt-20 lg:pb-[147px] lg:pt-[75px]">
      <Container className="grid gap-12 lg:grid-cols-[522px_1fr] lg:gap-[134px]">
        <div className="relative lg:mt-[126px]">
          {/* Red swoosh from the logo peeking out behind the photos */}
          <Image
            src={Images.swoosh}
            alt=""
            aria-hidden="true"
            className="absolute -top-[148px] left-[338px] hidden h-auto w-[280px] lg:block"
          />
          <div className="relative grid grid-cols-2 gap-[18px]">
            <ImagePlaceholder
              image={Images.aboutDeckingInstallation}
              alt="Timber decking installed on Arkimade pedestals in a garden"
              className="h-[360px] w-full lg:h-[513px]"
            />
            {/* Product shot on white, so a border keeps the slot's edge visible */}
            <ImagePlaceholder
              image={Images.aboutDeckingPedestal}
              alt="Dakota Arkimade adjustable decking pedestal"
              className="h-[360px] w-full border border-border lg:h-[513px]"
            />
          </div>
        </div>

        <div className="lg:-ml-0.5">
          <SectionLabel>Why Al Ihsas</SectionLabel>
          <SectionHeading className="mt-3 text-black lg:leading-[1.14]">
            Built On Quality, Driven
            <br />
            By Relationships
          </SectionHeading>

          <ul className="mt-[50px] max-w-[555px]">
            {WHY_CHOOSE_US.map((item, index) => (
              <li
                key={item.title}
                className={`relative pl-7 ${
                  index > 0 ? "mt-[19px] pt-[19px] before:absolute before:left-5 before:top-0 before:h-px before:w-[515px] before:max-w-[calc(100%-20px)] before:bg-separator" : ""
                }`}
              >
                <h3 className="relative font-heading text-title font-medium leading-[30px] tracking-[-0.03em] text-dark">
                  <ArrowBulletIcon className="absolute -left-7 top-[5px] size-5" />
                  {item.title}
                </h3>
                <p className="mt-1.5 text-body leading-6 text-dark">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
