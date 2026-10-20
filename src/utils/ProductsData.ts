import type { StaticImageData } from "next/image";
import { Images } from "./Images";

export type ProductSpec = { label: string; value: string };

// Full product sheet shown when a catalogue card is clicked (content from the Al Ihsas product catalogue PDF)
export type ProductDetails = {
  origin: string;
  overview: string;
  images: { src: StaticImageData; alt: string }[];
  groups: { title: string; items: string[] }[];
};

export type CatalogueProduct = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  specs: ProductSpec[];
  details: ProductDetails;
};

export type HighlightIcon = "box" | "document" | "chat";

export type BrandCatalogue = {
  brandId: string;
  hero: { title: string[]; description: string; imageAlt: string };
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
      imageAlt: "Dakota tile levelling clip on a tiled floor",
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
            { label: "Loading classes", value: "C-250, D-400" },
          ],
          details: {
            origin: "Made in Italy",
            overview:
              "Drainage channels for outdoor use, available with ductile iron or HDPE plastic gratings in three channel sizes. Certified to EN 1433.",
            images: [
              { src: Images.dakotaOutdoorChannelsDetail, alt: "Dakota outdoor drainage channels with different gratings" },
            ],
            groups: [
              { title: "Size (cm)", items: ["100 × 15", "100 × 20", "100 × 26"] },
              { title: "Class of loading", items: ["C-250", "D-400"] },
              { title: "Materials", items: ["Ductile iron", "HDPE plastic"] },
              { title: "Certification", items: ["EN 1433 certified"] },
            ],
          },
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
          details: {
            origin: "Made in Italy",
            overview:
              "Drainage channels with stainless steel, galvanized steel or plastic grates in wave and slot designs, rated for A-125 loading.",
            images: [
              { src: Images.dakotaChannelsGratesDetail, alt: "Dakota drainage channels with steel grates" },
            ],
            groups: [
              { title: "Size (cm)", items: ["100 × 10", "100 × 15", "100 × 20"] },
              { title: "Class of loading", items: ["A-125"] },
              { title: "Grate materials", items: ["Stainless steel", "Galvanized steel", "Plastic"] },
            ],
          },
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
          details: {
            origin: "Made in Italy",
            overview: "PVC plastic drainage channels supplied with PVC grating, rated for A-125 loading.",
            images: [
              { src: Images.dakotaPlasticChannelsDetail, alt: "Dakota plastic drainage channels with PVC grating" },
            ],
            groups: [
              { title: "Size (cm)", items: ["100 × 10", "100 × 15", "100 × 20"] },
              { title: "Class of loading", items: ["A-125"] },
              { title: "Materials", items: ["PVC grating", "PVC plastic"] },
            ],
          },
        },
        {
          id: "pvc-catch-pits",
          title: "PVC Catch Pits & Gully Gratings",
          description: "Catch pit and grating components in several square sizes",
          image: Images.dakotaCatchPits,
          specs: [
            { label: "Materials", value: "PVC" },
            { label: "Sizes", value: "20 × 20, 30 × 30, 40 × 40, 55 × 55, 70 × 70 cm" },
            { label: "Loading classes", value: "A-125" },
          ],
          details: {
            origin: "Made in Italy",
            overview: "PVC catch pits with matching gully gratings in five square sizes, rated for A-125 loading.",
            images: [{ src: Images.dakotaCatchPitsDetail, alt: "Dakota PVC catch pit, cover and gully grating" }],
            groups: [
              { title: "Size (cm)", items: ["20 × 20", "30 × 30", "40 × 40", "55 × 55", "70 × 70"] },
              { title: "Class of loading", items: ["A-125"] },
              { title: "Material", items: ["PVC"] },
            ],
          },
        },
        {
          id: "race-floor-system",
          title: "Race Floor System — Arkimade",
          description: "Adjustable support systems featured for both paving and decking applications.",
          image: Images.dakotaRaceFloor,
          specs: [
            { label: "Applications", value: "Paving, decking" },
            {
              label: "Height ranges",
              value: "10–20 mm to 220–1000 mm with extension, across six listed ranges",
            },
          ],
          details: {
            origin: "Made in Italy",
            overview:
              "Arkimade adjustable pedestals for raised paving and decking, available in six height ranges up to 1000 mm with extension.",
            images: [
              { src: Images.dakotaRaceFloorPaving, alt: "Arkimade pedestals supporting raised paving tiles" },
              { src: Images.dakotaRaceFloorDecking, alt: "Arkimade pedestals supporting timber decking" },
            ],
            groups: [
              { title: "Applications", items: ["Arkimade for paving", "Arkimade for decking"] },
              {
                title: "Adjustable heights",
                items: ["10–20 mm", "18–35 mm", "35–60 mm", "60–115 mm", "115–220 mm", "220–1000 mm (with extension)"],
              },
            ],
          },
        },
        {
          id: "tile-levelling-system",
          title: "Tile Levelling System",
          description: "Tile installation components presented in the Dakota catalogue.",
          image: Images.dakotaTileLevelling,
          specs: [{ label: "Components", value: "Wedges, clips, cylinders" }],
          details: {
            origin: "Made in Italy",
            overview: "Tile levelling components used together during tile installation for an even, level finish.",
            images: [{ src: Images.dakotaTileLevellingDetail, alt: "Dakota tile levelling clips, cylinders and wedges" }],
            groups: [{ title: "Components", items: ["Wedges", "Clips", "Cylinders"] }],
          },
        },
      ],
    },
    cta: {
      title: ["Looking For A Dakota", "Product?"],
      description:
        "Tell us which product or specification you need. Contact Al Ihsas General Trading LLC for product enquiries and availability.",
    },
  },
  keves: {
    brandId: "keves",
    hero: {
      title: ["Keves Roof", "Drainage Solutions"],
      description:
        "Explore Keves Scupper And Dome Drains, Built With Cast Iron Bodies And Aluminium Grills For Roof Drainage Applications.",
      imageAlt: "Building products on a tiled floor",
    },
    about: {
      title: ["Durable Drains For", "Roofs & Terraces"],
      description:
        "Keves' product range featured in our catalogue includes 4-inch scupper and dome drains made with a cast iron body and aluminium grill. Explore the available products and their specifications to identify the right option for your project.",
      image: Images.kevesBrandAbout,
      imageAlt: "Keves dome drain and scupper drain",
    },
    highlights: [
      { title: "Roof Drainage Range", description: "Scupper and dome drains in one range.", icon: "box" },
      { title: "Detailed Specifications", description: "Review sizes and materials.", icon: "document" },
      { title: "Product Enquiries", description: "Get in touch with our team.", icon: "chat" },
    ],
    catalogue: {
      title: "Explore Keves Products",
      description:
        "Browse the product range to find available options, sizes, materials, and technical specifications.",
      products: [
        {
          id: "scupper-drain",
          title: "Scupper Drain 4″",
          description: "Scupper drain with a cast iron body and aluminium grill.",
          image: Images.kevesScupperDrain,
          specs: [
            { label: "Size", value: "4″" },
            { label: "Materials", value: "Cast iron body, aluminium grill" },
          ],
          details: {
            origin: "Made in India",
            overview: "A 4-inch scupper drain with a cast iron body and an aluminium grill.",
            images: [{ src: Images.kevesScupperDrain, alt: "Keves 4 inch scupper drain" }],
            groups: [
              { title: "Size", items: ["4″"] },
              { title: "Materials", items: ["Cast iron body", "Aluminium grill"] },
            ],
          },
        },
        {
          id: "dome-drain",
          title: "Dome Drain 4″",
          description: "Dome drain with a cast iron body and aluminium grill.",
          image: Images.kevesDomeDrain,
          specs: [
            { label: "Size", value: "4″" },
            { label: "Materials", value: "Cast iron body, aluminium grill" },
          ],
          details: {
            origin: "Made in India",
            overview: "A 4-inch dome drain with a cast iron body and an aluminium dome grill.",
            images: [{ src: Images.kevesDomeDrain, alt: "Keves 4 inch dome drain" }],
            groups: [
              { title: "Size", items: ["4″"] },
              { title: "Materials", items: ["Cast iron body", "Aluminium grill"] },
            ],
          },
        },
      ],
    },
    cta: {
      title: ["Looking For A Keves", "Product?"],
      description:
        "Tell us which product or specification you need. Contact Al Ihsas General Trading LLC for product enquiries and availability.",
    },
  },
};
