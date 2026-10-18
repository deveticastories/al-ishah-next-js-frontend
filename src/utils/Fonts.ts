import { Inter, Manrope } from "next/font/google";

// Headings, nav and buttons
export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// Body copy, form fields and footer
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
