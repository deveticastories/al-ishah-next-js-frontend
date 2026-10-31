export const ABOUT_INTRO =
  "At Al Ihsas General Trading LLC, we connect dependable building and drainage products from registered brands and suppliers with the needs of our customers, making product sourcing simple, reliable and built on strong partnerships. Embracing technology and innovation, we aim to become a prominent general trading and distribution company in the Middle East.";

export const ABOUT_STATS = {
  products: { value: "1000+", label: "Products Supplied" },
  clients: { value: "500+", label: "Happy Clients" },
} as const;

export type ValueIcon = "shield" | "handshake" | "globe" | "user";

export const COMPANY_VALUES: { label: string; icon: ValueIcon }[] = [
  { label: "Quality Assurance", icon: "shield" },
  { label: "Trust & Reliability", icon: "handshake" },
  { label: "Regional Reach", icon: "globe" },
  { label: "Customer First", icon: "user" },
];

export const VISION_MISSION = [
  {
    title: "Our Vision",
    description:
      "To become a prominent leader in the Middle East by offering a diverse range of building products, embracing technology and innovation, and delivering quality products with excellent service.",
  },
  {
    title: "Our Mission",
    description:
      "To establish a robust supply chain that prioritises product quality, exceptional service, and customer satisfaction. We aim to support our customers’ business growth, enhance their sales performance, and develop strong, lasting relationships.",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Diverse Product Portfolio",
    description:
      "We offer a broad range of products from registered brands to serve varied business requirements.",
  },
  {
    title: "International Sourcing Network",
    description:
      "Our products are sourced and manufactured across Asia, the Middle East, and Europe, connecting our customers with products from different regions.",
  },
  {
    title: "Commitment to Quality",
    description:
      "We emphasise quality and product standards in our approach to sourcing and distribution.",
  },
  {
    title: "Customer-Focused Service",
    description:
      "We value customer satisfaction and aim to build dependable business relationships through attentive service and a clear understanding of customer needs.",
  },
];
