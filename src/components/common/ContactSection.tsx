import Image from "next/image";
import Container from "@/components/common/Container";
import EnquiryForm from "@/components/common/EnquiryForm";
import { Images } from "@/utils/Images";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-[var(--header-height)] pb-16 pt-16 lg:pb-[129px] lg:pt-[83px]">
      <Container className="grid gap-12 lg:grid-cols-[600px_580px] lg:justify-between xl:pl-[66px] xl:pr-[116px]">
        <div>
          <h2 className="font-heading text-[34px] font-medium leading-tight tracking-[-0.01em] text-black sm:text-[42px] lg:text-h2">
            Let&rsquo;s Start A Conversation
          </h2>
          <p className="mt-[30px] max-w-[500px] text-body leading-[22px] text-footer-text lg:ml-1">
            Have a product enquiry or interested in working with us? Send us your requirements, and
            our team can follow up with you.
          </p>
          <Image
            src={Images.contactFactory}
            alt="Inside a large manufacturing facility"
            placeholder="blur"
            className="mt-10 h-auto w-full object-cover lg:h-[351px] lg:w-[599px]"
          />
        </div>

        <EnquiryForm />
      </Container>
    </section>
  );
}
