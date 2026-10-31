import Container from "@/components/common/Container";
import EnquiryForm from "@/components/common/EnquiryForm";
import SectionHeading from "@/components/common/SectionHeading";
import { CONTACT_DETAILS } from "@/utils/ContactData";

export default function ContactDetailsSection() {
  return (
    <section className="pt-20 lg:pt-[221px]">
      <Container className="grid gap-12 lg:grid-cols-[1fr_847px]">
        <div className="lg:pt-7">
          <p className="font-body text-body leading-6 text-primary">Contact Information</p>
          <SectionHeading className="mt-1.5 text-black">Get In Touch</SectionHeading>

          <dl className="mt-[70px] space-y-[44px]">
            {CONTACT_DETAILS.map((detail) => (
              <div key={detail.title}>
                <dt className="text-[18px] font-medium leading-6 text-black">{detail.title}</dt>
                {detail.lines.map((line) => (
                  <dd key={line.value} className="mt-3 max-w-[420px] text-body leading-6 text-dark">
                    {line.href ? (
                      <a href={line.href} className="hover:text-primary">
                        {line.value}
                      </a>
                    ) : (
                      line.value
                    )}
                  </dd>
                ))}
              </div>
            ))}
          </dl>
        </div>

        <div id="enquiry" className="scroll-mt-[var(--header-height)] bg-form-bg px-6 pb-[33px] pt-[38px] lg:pl-11 lg:pr-[114px]">
          <SectionHeading className="text-enquiry-heading">Send Us An Enquiry</SectionHeading>
          <EnquiryForm
            className="mt-[33px] gap-[17px]"
            messageClassName="h-[105px]"
            submitClassName="mt-3"
          />
        </div>
      </Container>
    </section>
  );
}
