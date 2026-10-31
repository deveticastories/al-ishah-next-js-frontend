import type { Metadata } from "next";
import AllProductsScreen from "@/screens/AllProductsScreen";

export const metadata: Metadata = {
  title: "Products | Al Ihsas General Trading LLC",
  description:
    "Browse all products supplied by Al Ihsas General Trading LLC in the UAE, including Dakota, Keves and LuxWares drainage, floor support and valve products.",
};

export default function Page() {
  return <AllProductsScreen />;
}
