import Button from "@/components/common/Button";
import CtaBanner from "@/components/common/CtaBanner";
import PageHero from "@/components/common/PageHero";
import ContactDetailsSection from "@/components/contact/ContactDetailsSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Images } from "@/utils/Images";
import { Routes } from "@/utils/Routes";

export default function ContactScreen() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          align="center"
          image={Images.contactHero}
          imageAlt="Black linear shower drain set into wet tiles"
          title={["Let’s Talk"]}
          description="Have A Question Or Need More Information About Our Products? We’re Here To Help. Get In Touch With Our Team For Product Enquiries, Quotations, And Support."
        />
        <ContactDetailsSection />
        <CtaBanner
          className="pb-[94px] pt-20 lg:pt-[113px]"
          label="Support"
          title={["How Can We Help You?"]}
          description="Whether you’re looking for product details, pricing information, or assistance with an order, our team is ready to help you find the right solution."
          actions={
            <Button href="#enquiry" className="w-[187px]">
              Contact Us
            </Button>
          }
        />
      </main>
      <Footer currentHref={Routes.contact} className="bg-footer-bg" />
    </>
  );
}
