import type { Metadata } from "next";
import ProductsScreen from "@/screens/ProductsScreen";
import { BRANDS } from "@/utils/Constants";
import { BRAND_CATALOGUES } from "@/utils/ProductsData";

export function generateStaticParams() {
  return Object.keys(BRAND_CATALOGUES).map((brand) => ({ brand }));
}

export async function generateMetadata(props: PageProps<"/products/[brand]">): Promise<Metadata> {
  const { brand: brandId } = await props.params;
  const brand = BRANDS.find((item) => item.id === brandId);
  const seo = BRAND_CATALOGUES[brandId]?.seo;
  return {
    title: `${brand?.name ?? "Products"} Products | Al Ihsas General Trading LLC`,
    description: seo?.description,
    keywords: seo?.keywords,
  };
}

// The brand is read inside ProductsScreen's Suspense boundary so the header and footer stay in the shared App Shell
export default function Page(props: PageProps<"/products/[brand]">) {
  return <ProductsScreen params={props.params} />;
}
