import Button from "@/components/common/Button";
import PageHero from "@/components/common/PageHero";
import { Images } from "@/utils/Images";
import { Routes } from "@/utils/Routes";

export default function HeroSection() {
  return (
    <PageHero
      image={Images.hero}
      imageAlt="Al Ihsas truck at a container port at sunset"
      slides={[
        { image: Images.heroPortSunset, alt: "Container truck between stacked shipping containers at sunset" },
        { image: Images.heroHarborCranes, alt: "Port cranes along the waterfront at sunset" },
        { image: Images.heroContainerShip, alt: "Aerial view of a cargo ship loaded with shipping containers" },
      ]}
      title={["Connecting Global Brands.", "Delivering Quality Products."]}
      description="Al Ihsas General Trading LLC Distributes A Diverse Range Of Registered Brands, With Products Sourced And Manufactured Across Asia, The Middle East, And Europe."
      actions={
        <>
          <Button href={Routes.products} className="w-[187px]">
            Explore Products
          </Button>
          <Button href={Routes.about} variant="outline" className="w-[187px]">
            About Company
          </Button>
        </>
      }
    />
  );
}
