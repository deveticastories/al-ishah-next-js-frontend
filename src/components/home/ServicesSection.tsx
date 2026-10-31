import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { SERVICES } from "@/utils/Constants";

// The design highlights the second service number
const HIGHLIGHTED_INDEX = 1;

export default function ServicesSection() {
  return (
    <section className="pt-24 lg:pt-[120px]">
      <Container>
        <SectionHeading className="text-black">Our Services</SectionHeading>

        <div className="mt-14 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:mt-[50px] lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <div
              key={service.number}
              className="group relative flex flex-col items-center px-4 text-center lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-divider"
            >
              {/* Number is clipped to its top half, as in the design */}
              <div className="h-[66px] overflow-hidden">
                <span
                  className={`block font-heading text-service-number font-bold leading-[0.72] tracking-[-0.06em] transition-colors ${
                    index === HIGHLIGHTED_INDEX
                      ? "text-primary-light"
                      : "text-[#bebebe] group-hover:text-primary-light"
                  }`}
                >
                  {service.number}
                </span>
              </div>
              <h3 className="mt-[30px] font-heading text-title font-medium tracking-[-0.03em] text-black">
                {service.title}
              </h3>
              <p className="mt-3 max-w-[220px] text-body leading-6 text-dark">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
