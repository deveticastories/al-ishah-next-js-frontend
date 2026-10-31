import ValuesSection from "@/components/about/ValuesSection";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import WhyChooseSection from "@/components/about/WhyChooseSection";
import Button from "@/components/common/Button";
import CtaBanner from "@/components/common/CtaBanner";
import MarketsSection from "@/components/common/MarketsSection";
import PageHero from "@/components/common/PageHero";
import ContactFooter from "@/components/layout/ContactFooter";
import Header from "@/components/layout/Header";
import { COMPANY_NAME } from "@/utils/Constants";
import { Images } from "@/utils/Images";
import { Routes } from "@/utils/Routes";

export default function AboutScreen() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          image={Images.aboutHero}
          imageAlt="Warehouse workers beside a parcel conveyor"
          title={["Connecting Global Brands", "with Business Needs"]}
          description="Al Ihsas General Trading LLC Brings Together A Diverse Range Of Registered Brands And Quality Products Sourced Across Asia, The Middle East, And Europe To Meet Your Business Requirements."
          actions={
            <>
              <Button href={Routes.products} className="w-[187px]">
                Explore Products
              </Button>
              <Button href={Routes.contact} variant="outline" className="w-[187px]">
                Contact Us
              </Button>
            </>
          }
        />
        <WhoWeAreSection />
        <ValuesSection />
        <WhyChooseSection />
        <MarketsSection />
        <CtaBanner
          label="Let’s Build A Stronger Partnership"
          title={["Looking For Products For", "Your Business?"]}
          description={`Explore our product range and discover how ${COMPANY_NAME} can support your business requirements.`}
          actions={
            <>
              <Button href={Routes.products} className="w-[187px]">
                Explore Products
              </Button>
              <Button href={Routes.contact} variant="outlinePrimary" className="w-[187px]">
                Contact Us
              </Button>
            </>
          }
        />
      </main>
      <ContactFooter currentHref={Routes.about} />
    </>
  );
}
