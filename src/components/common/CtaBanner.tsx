import Image from "next/image";
import type { ReactNode } from "react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import SectionLabel from "@/components/common/SectionLabel";
import { COMPANY_NAME } from "@/utils/Constants";
import { Images } from "@/utils/Images";

type CtaBannerProps = {
  label: string;
  title: string[];
  description: string;
  actions: ReactNode;
  className?: string;
};

// Pink-bordered call-to-action box with the company logo, used at the bottom of each page
export default function CtaBanner({
  label,
  title,
  description,
  actions,
  className = "pt-14 pb-[73px]",
}: CtaBannerProps) {
  return (
    <section className={className}>
      <Container>
        <div className="mx-auto flex max-w-[1123px] flex-col-reverse items-center gap-10 rounded border border-cta-border px-6 py-12 md:flex-row md:justify-between md:px-[104px] md:pb-[50px] md:pt-[71px]">
          <div className="max-w-[612px]">
            <SectionLabel>{label}</SectionLabel>
            <SectionHeading className="mt-[27px] text-black">
              {title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </SectionHeading>
            <p className="mt-[22px] text-body leading-6 text-dark">{description}</p>
            <div className="mt-[22px] flex flex-wrap gap-5">{actions}</div>
          </div>

          <Image
            src={Images.logo}
            alt={COMPANY_NAME}
            className="h-auto w-[200px] md:w-[266px] md:-translate-y-1"
          />
        </div>
      </Container>
    </section>
  );
}
