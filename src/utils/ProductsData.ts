import type { StaticImageData } from "next/image";
import { Images } from "./Images";

export type ProductSpec = { label: string; value: string };

export type CatalogueProduct = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  specs: ProductSpec[];
};

export type HighlightIcon = "box" | "document" | "chat";

export type BrandCatalogue = {
  brandId: string;
  hero: { title: string[]; description: string };
  about: { title: string[]; description: string; image?: StaticImageData; imageAlt?: string };
  highlights: { title: string; description: string; icon: HighlightIcon }[];
  catalogue: { title: string; description: string; products: CatalogueProduct[] };
  cta: { title: string[]; description: string };
};

// Brands without an entry here don't have a catalogue page yet
export const BRAND_CATALOGUES: Record<string, BrandCatalogue> = {
  dakota: {
    brandId: "dakota",
    hero: {
      title: ["Dakota Drainage &", "Installation Solutions"],
      description:
        "Explore Dakota’s Range Of Drainage Channels, Catch Pits, Floor Support Systems, And Tile Levelling Products For Building And Outdoor Applications.",
    },
    about: {
      title: ["Practical Products For Building", "& Outdoor Applications"],
      description:
        "Dakota's product range featured in our catalogue includes drainage systems and installation accessories in different designs, materials, and sizes. From outdoor drainage channels to adjustable floor support systems and tile levelling components, explore the available products and their specifications to identify the right option for your project.",
      image: Images.dakotaBrandAbout,
      imageAlt: "Modern home with landscaped outdoor space",
    },
    highlights: [
      {
        title: "Multiple Product Categories",
        description: "Drainage and installation products in one range.",
        icon: "box",
      },
      { title: "Detailed Specifications", description: "Review sizes and materials.", icon: "document" },
      { title: "Product Enquiries", description: "Get in touch with our team.", icon: "chat" },
    ],
    catalogue: {
      title: "Explore Dakota Products",
      description:
        "Browse the product range by category to find available options, sizes, materials, and technical specifications.",
      products: [
        {
          id: "outdoor-drainage-channels",
          title: "Outdoor Drainage Channels",
          description: "Drainage channels in multiple sizes and materials for outdoor applications.",
          image: Images.dakotaOutdoorChannels,
          specs: [
            { label: "Materials", value: "Ductile iron, HDPE plastic" },
            { label: "Sizes", value: "100 × 15, 100 × 20, 100 × 26 cm" },
            { label: "Loading classes", value: "100 × 15, 100 × 20, 100 × 26 cm" },
          ],
        },
        {
          id: "drainage-channels-grates",
          title: "Drainage Channels & Grates",
          description: "Channel options featuring different grate materials and designs.",
          image: Images.dakotaChannelsGrates,
          specs: [
            { label: "Materials", value: "Stainless steel, galvanized steel, plastic" },
            { label: "Sizes", value: "100 × 10, 100 × 15, 100 × 20 cm" },
            { label: "Loading classes", value: "A-125" },
          ],
        },
        {
          id: "plastic-drainage-channels",
          title: "Plastic Drainage Channels",
          description: "Plastic drainage channel options with PVC grating",
          image: Images.dakotaPlasticChannels,
          specs: [
            { label: "Materials", value: "PVC plastic, PVC grating" },
            { label: "Sizes", value: "100 × 10, 100 × 15, 100 × 20 cm" },
            { label: "Loading classes", value: "A-125" },
          ],
        },
        {
          id: "pvc-catch-pits",
          title: "PVC Catch Pits & Gully Gratings",
          description: "Catch pit and grating components in several square sizes",
          image: Images.dakotaCatchPits,
          specs: [
            { label: "Materials", value: "" },
            { label: "Sizes", value: "20 × 20, 30 × 30, 40 × 40, 55 × 55, 70 × 70 cm" },
            { label: "Loading classes", value: "A-125" },
          ],
        },
        {
          id: "race-floor-system",
          title: "Race Floor System — Arkimade",
          description: "Adjustable support systems featured for both paving and decking applications.",
          image: Images.dakotaRaceFloor,
          specs: [
            { label: "Sizes", value: "100 × 10, 100 × 15, 100 × 20 cm" },
            {
              label: "Height ranges",
              value: "10–20 mm to 220–1000 mm with extension, across six listed ranges",
            },
          ],
        },
        {
          id: "tile-levelling-system",
          title: "Tile Levelling System",
          description: "Tile installation components presented in the Dakota catalogue.",
          image: Images.dakotaTileLevelling,
          specs: [
            { label: "Components", value: "Wedges, clips, cylinders" },
            { label: "Sizes", value: "100 × 10, 100 × 15, 100 × 20 cm" },
            { label: "Loading classes", value: "" },
          ],
        },
      ],
    },
    cta: {
      title: ["Looking For A Dakota", "Product?"],
      description:
        "Tell us which product or specification you need. Contact Al Ihsas General Trading LLC for product enquiries and availability.",
    },
  },
};
