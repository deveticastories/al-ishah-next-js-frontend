import Button from "@/components/common/Button";
import CtaBanner from "@/components/common/CtaBanner";
import MarketsSection from "@/components/common/MarketsSection";
import AboutSection from "@/components/home/AboutSection";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ContactFooter from "@/components/layout/ContactFooter";
import Header from "@/components/layout/Header";
import { COMPANY_NAME } from "@/utils/Constants";
import { Routes } from "@/utils/Routes";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeatureHighlights />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <BrandsMarquee />
        <MarketsSection />
        <CtaBanner
          label="Let's Work Together"
          title={["Looking For Products For", "Your Business?"]}
          description={`Get in touch with ${COMPANY_NAME} to enquire about our products, registered brands, and potential business partnerships.`}
          actions={
            <Button href="#contact" className="min-w-32 px-[18px]">
              Get a Quote
            </Button>
          }
        />
      </main>
      <ContactFooter currentHref={Routes.home} />
    </>
  );
}
