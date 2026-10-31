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
  emails: ["info@alihsastrading.com", "sales@ihsastrading.com"],
  phones: ["+971 54401 8199", "+974 7703 1406"],
  website: "alihsastrading.com",
} as const;

export type Feature = {
  title: string;
  description: string;
  image: StaticImageData;
};

export const FEATURES: Feature[] = [
  {
    title: "Diverse Product Portfolio",
    description:
      "A diverse range of registered-brand products for every business need.",
    image: Images.featurePortfolio,
  },
  {
    title: "International Sourcing",
    description:
      "Products sourced and manufactured across Asia, the Middle East, and Europe.",
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

export type Country = "Italy" | "India" | "Turkey";

// Country is where the brand's products are made, shown as a "Made in" badge
export type Brand = {
  id: string;
  name: string;
  logo: StaticImageData;
  country: Country;
};

export const BRANDS: Brand[] = [
  { id: "dakota", name: "Dakota", logo: Images.brandDakota, country: "Italy" },
  { id: "keves", name: "Keves", logo: Images.brandKeves, country: "India" },
  {
    id: "luxwares",
    name: "LuxWares",
    logo: Images.brandLuxwares,
    country: "Turkey",
  },
];

// Order used by the "Connecting Trusted Brands" marquee
export const MARQUEE_BRANDS: Brand[] = [BRANDS[0], BRANDS[1], BRANDS[2]];

export type Product = {
  id: string;
  brandId: string;
  title: string;
  description: string;
  image: StaticImageData;
};

// Arkimade paving and decking are the main Dakota products, so they lead the home page grid
export const PRODUCTS: Product[] = [
  {
    id: "arkimade-paving",
    brandId: "dakota",
    title: "Arkimade For Paving",
    description: "Adjustable raced floor system for Tiles.",
    image: Images.dakotaArkimadePaving,
  },
  {
    id: "arkimade-decking",
    brandId: "dakota",
    title: "Arkimade For Decking",
    description: "Adjustable raced floor pedestal system for WPC wood.",
    image: Images.dakotaArkimadeDecking,
  },
  {
    id: "drainage-channel",
    brandId: "dakota",
    title: "Outdoor Drainage Channel System",
    description: "Helps prevent wastewater backflow in drainage systems.",
    image: Images.drainageChannel,
  },
  {
    id: "scupper-drain",
    brandId: "keves",
    title: "Scupper Drain",
    description: "Cast iron scupper drain with aluminium grill, in 3″ and 4″.",
    image: Images.kevesScupperDrain,
  },
  {
    id: "dome-drain",
    brandId: "keves",
    title: "Dome Drain",
    description: "Cast iron dome drain with aluminium grill, in 3″ and 4″.",
    image: Images.kevesDomeDrain,
  },
  {
    id: "plastic-check-valve",
    brandId: "luxwares",
    title: "75 mm Plastic Check Valve",
    description:
      "Stops sewer backflow, pests and odours from entering the building.",
    image: Images.luxwaresCheckValve,
  },
  {
    id: "locked-anti-flooding-valve",
    brandId: "luxwares",
    title: "Locked Anti Flooding Valve",
    description:
      "Lockable backflow valve with stainless steel or plastic flap.",
    image: Images.luxwaresAntiFloodingValve,
  },
];

export const MARKETS = [
  {
    region: "Asia",
    description: "A diverse range of products from regional manufacturers.",
  },
  {
    region: "Middle East",
    description: "Products from suppliers across the region",
  },
  {
    region: "Europe",
    description: "Access to products from European sources.",
  },
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
