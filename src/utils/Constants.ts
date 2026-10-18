import type { StaticImageData } from "next/image";
import { Images } from "./Images";
import { Routes } from "./Routes";

export const COMPANY_NAME = "Al Ihsas General Trading LLC";
export const COPYRIGHT_YEAR = 2026;

export type NavLink = { label: string; href: string; hasDropdown?: boolean };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: Routes.home },
  { label: "About", href: Routes.about },
  { label: "Products", href: Routes.products, hasDropdown: true },
  { label: "Contact Us", href: Routes.contact },
];

export const CONTACT_INFO = {
  email: "arshakir123@gmail.com",
  phone: "+971 54401 8199",
  website: "alihsastrading.com",
} as const;

export type Feature = { title: string; description: string; image: StaticImageData };

export const FEATURES: Feature[] = [
  {
    title: "Diverse Product Portfolio",
    description: "A diverse range of registered-brand products for every business need.",
    image: Images.featurePortfolio,
  },
  {
    title: "International Sourcing",
    description: "Products sourced and manufactured across Asia, the Middle East, and Europe.",
    image: Images.featureSourcing,
  },
  {
    title: "Brand Partnerships",
    description:
      "Distribution of registered brands with an emphasis on long-term business relationships.",
    image: Images.featurePartnerships,
  },
];

export const SERVICES = [
  {
    number: "01",
    title: "Product Distribution",
    description: "Distribution of products from registered brands.",
  },
  {
    number: "02",
    title: "Global Sourcing",
    description: "Products sourced from international markets.",
  },
  {
    number: "03",
    title: "Business Partnerships",
    description: "Connecting businesses and brand partners.",
  },
  {
    number: "04",
    title: "Product Enquiries",
    description: "Helping customers enquire about available products.",
  },
];

export type Brand = { id: string; name: string; logo: StaticImageData };

export const BRANDS: Brand[] = [
  { id: "dakota", name: "Dakota", logo: Images.brandDakota },
  { id: "kt", name: "K&T", logo: Images.brandKt },
  { id: "keves", name: "Keves", logo: Images.brandKeves },
  { id: "bathline", name: "Bathline", logo: Images.brandBathline },
];

// Order used by the "Connecting Trusted Brands" marquee
export const MARQUEE_BRANDS: Brand[] = [BRANDS[1], BRANDS[0], BRANDS[2], BRANDS[3]];

export type Product = {
  id: string;
  brandId: string;
  title: string;
  description: string;
  image: StaticImageData;
};

export const PRODUCTS: Product[] = [
  {
    id: "drainage-channel",
    brandId: "dakota",
    title: "Drainage Channel For Outdoor Dakota",
    description: "Helps prevent wastewater backflow in drainage systems.",
    image: Images.drainageChannel,
  },
  {
    id: "catch-pit",
    brandId: "dakota",
    title: "Pvc Catch Pit And Gully Grating",
    description:
      "Collects surface water and filters debris to ensure efficient drainage and prevent blockages.",
    image: Images.catchPit,
  },
  {
    id: "race-floor",
    brandId: "dakota",
    title: "Race Floor System",
    description: "Arkimade for Paving",
    image: Images.raceFloor,
  },
];

export const MARKETS = [
  { region: "Asia", description: "A diverse range of products from regional manufacturers." },
  { region: "Middle East", description: "Products from suppliers across the region" },
  { region: "Europe", description: "Access to products from European sources." },
];

// "Quick Links" in the footer lists the main pages except the one being viewed
export const FOOTER_LINKS = [
  {
    title: "About",
    links: [
      { label: "Contacts", href: Routes.contact },
      { label: "About us", href: Routes.about },
      { label: "FAQ", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Terms of use", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Log in", href: "#" },
    ],
  },
];
