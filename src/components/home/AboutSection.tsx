import Image from "next/image";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import SectionLabel from "@/components/common/SectionLabel";
import { Images } from "@/utils/Images";
import { Routes } from "@/utils/Routes";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-[var(--header-height)] pt-24 lg:pt-[196px]">
      <Container className="grid items-start gap-10 lg:grid-cols-[688px_1fr] lg:gap-[57px]">
        <Image
          src={Images.aboutWarehouse}
          alt="Warehouse with stacked boxes and a pallet jack"
          placeholder="blur"
          className="h-auto w-full rounded object-cover lg:h-[442px]"
        />

        <div className="lg:-mt-1.5">
          <SectionLabel>About Us</SectionLabel>
          <SectionHeading className="mt-[18px] text-black">
            A Trusted Partner In
            <br />
            General Trading
          </SectionHeading>

          <div className="mt-[50px] max-w-[505px] space-y-6 text-body leading-6 text-dark">
            <p>
              Al Ihsas General Trading LLC proudly serves as an authorised distributor of a diverse
              range of registered brands. Our product portfolio encompasses a wide variety of items
              sourced and manufactured across Asia, the Middle East, and Europe.
            </p>
            <p>
              We aim to connect businesses with a diverse selection of products while building
              strong commercial relationships with our brand partners and customers.
            </p>
          </div>

          <Button href={Routes.about} className="mt-8 w-[168px]">
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  );
}
