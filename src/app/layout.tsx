import type { Metadata } from "next";
import { inter, manrope } from "@/utils/Fonts";
import { themeVariables } from "@/utils/Theme";
import { COMPANY_NAME } from "@/utils/Constants";
import "./globals.css";

export const metadata: Metadata = {
  title: COMPANY_NAME,
  description:
    "Al Ihsas General Trading LLC distributes a diverse range of registered brands, with products sourced and manufactured across Asia, the Middle East, and Europe.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
      style={themeVariables}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
