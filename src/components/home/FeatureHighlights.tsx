import Image from "next/image";
import Container from "@/components/common/Container";
import { FEATURES } from "@/utils/Constants";

export default function FeatureHighlights() {
  return (
    <section className="relative">
      <Container className="relative grid gap-10 pt-16 md:grid-cols-3 md:gap-6 lg:pt-[87px] xl:pl-[60px]">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="flex items-start gap-4 lg:gap-[17px]">
            <Image
              src={feature.image}
              alt={feature.title}
              className="h-[90px] w-[88px] shrink-0 object-cover"
            />
            <div>
              <h3 className="font-heading text-title font-medium tracking-[-0.03em] text-black">
                {feature.title}
              </h3>
              <p className="mt-2.5 max-w-[330px] text-body leading-6 text-dark">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
