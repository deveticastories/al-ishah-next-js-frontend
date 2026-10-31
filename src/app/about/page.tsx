import type { Metadata } from "next";
import AboutScreen from "@/screens/AboutScreen";

export const metadata: Metadata = {
  title: "About Us | Al Ihsas General Trading LLC",
};

export default function Page() {
  return <AboutScreen />;
}
