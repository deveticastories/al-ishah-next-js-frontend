import type { Metadata } from "next";
import ContactScreen from "@/screens/ContactScreen";

export const metadata: Metadata = {
  title: "Contact Us | Al Ihsas General Trading LLC",
};

export default function Page() {
  return <ContactScreen />;
}
