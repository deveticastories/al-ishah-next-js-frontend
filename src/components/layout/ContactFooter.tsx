import ContactSection from "@/components/common/ContactSection";
import Footer from "@/components/layout/Footer";
import { Gradients } from "@/utils/Colors";

// "Let's Start A Conversation" form and the footer share one soft gradient background
export default function ContactFooter({ currentHref }: { currentHref: string }) {
  return (
    <div style={{ background: Gradients.contact }}>
      <ContactSection />
      <Footer currentHref={currentHref} />
    </div>
  );
}
