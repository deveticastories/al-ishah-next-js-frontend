import type { StaticImageData } from "next/image";
import { Images } from "./Images";

export type ProductSpec = { label: string; value: string };

// Full product sheet shown when a catalogue card is clicked (content from the Al Ihsas product catalogue PDF)
export type ProductDetails = {
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
  // Search engine description and keywords for the brand page
  seo?: { description: string; keywords: string[] };
  // Falls back to the shared products hero photo when a brand has no image of its own
  hero: {
    title: string[];
    description: string;
    image?: StaticImageData;
    imageAlt: string;
    // Set for light photos that need a dark tint behind the white hero copy
    darken?: boolean;
  };
  about: {
    title: string[];
    description: string;
    image?: StaticImageData;
    imageAlt?: string;
    // Wide product shots on white show whole instead of being cropped to the slot
    imageFit?: "cover" | "contain";
  };
  highlights: { title: string; description: string; icon: HighlightIcon }[];
  catalogue: {
    title: string;
    description: string;
    products: CatalogueProduct[];
  };
  cta: { title: string[]; description: string };
};

// Brands without an entry here don't have a catalogue page yet
export const BRAND_CATALOGUES: Record<string, BrandCatalogue> = {
  dakota: {
    brandId: "dakota",
    seo: {
      description:
        "Al Ihsas General Trading LLC is a supplier for adjustable pedestals, raised floor systems and grating channels in the UAE, distributing Dakota drainage and floor support products.",
      keywords: [
        "supplier for adjustable pedestals in uae",
        "supplier raised floor in uae",
        "supplier for grating channel in UAE",
      ],
    },
    hero: {
      title: ["Dakota Drainages & Pedestals"],
      description:
        "Explore Dakota’s Range Of Drainage Channels, Catch Pits, Floor Support Systems, And Tile Levelling Products For Building And Outdoor Applications.",
      image: Images.dakotaHero,
      imageAlt: "Dakota drainage channel with galvanized steel grating",
    },
    about: {
      title: ["Practical Products For Building", "& Outdoor Applications"],
      description:
        "Dakota's product range featured in our catalogue includes drainage systems and installation accessories in different designs, materials, and sizes. From outdoor drainage channels to adjustable floor support systems and tile levelling components, explore the available products and their specifications to identify the right option for your project. As a supplier for adjustable pedestals, raised floor systems and grating channels in the UAE, we help you source the right Dakota products for your site.",
      image: Images.dakotaBrandAbout,
      imageAlt: "Modern home with landscaped outdoor space",
    },
    highlights: [
      {
        title: "Multiple Product Categories",
        description: "Drainage and installation products in one range.",
        icon: "box",
      },
      {
        title: "Detailed Specifications",
        description: "Review sizes and materials.",
        icon: "document",
      },
      {
        title: "Product Enquiries",
        description: "Get in touch with our team.",
        icon: "chat",
      },
    ],
    catalogue: {
      title: "Explore Dakota Products",
      description:
        "Browse the product range by category to find available options, sizes, materials, and technical specifications.",
      products: [
        {
          id: "arkimade-paving",
          title: "Arkimade For Paving",
          description:
            "Adjustable Race Floor pedestals for raised paving tiles.",
          image: Images.dakotaArkimadePaving,
          specs: [
            { label: "Application", value: "Raised paving" },
            { label: "Height range", value: "10 mm to 1000 mm with extension" },
          ],
          details: {
            overview:
              "Race Floor System pedestals for raised paving tiles. The adjustable heads level the floor over uneven surfaces, with six height ranges up to 1000 mm with extension.",
            images: [
              {
                src: Images.dakotaArkimadePavingInstalled,
                alt: "Arkimade pedestals supporting raised paving tiles",
              },
              {
                src: Images.dakotaArkimadePavingPedestals,
                alt: "Arkimade paving pedestals at different heights",
              },
            ],
            groups: [
              { title: "Application", items: ["Raised paving tiles"] },
              {
                title: "Adjustable heights",
                items: [
                  "10–20 mm",
                  "18–35 mm",
                  "35–60 mm",
                  "60–115 mm",
                  "115–220 mm",
                  "220–1000 mm (with extension)",
                ],
              },
            ],
          },
        },
        {
          id: "arkimade-decking",
          title: "Arkimade For Decking",
          description:
            "Adjustable Race Floor pedestals for supporting timber decking.",
          image: Images.dakotaArkimadeDecking,
          specs: [
            { label: "Application", value: "Decking" },
            { label: "Height range", value: "10 mm to 1000 mm with extension" },
          ],
          details: {
            overview:
              "Race Floor System pedestals for decking. They support timber decking joists above paving or ground, with six height ranges up to 1000 mm with extension.",
            images: [
              {
                src: Images.dakotaArkimadeDeckingInstalled,
                alt: "Arkimade pedestals supporting timber decking joists",
              },
              {
                src: Images.dakotaArkimadeDeckingPedestals,
                alt: "Arkimade decking pedestals",
              },
            ],
            groups: [
              { title: "Application", items: ["Timber decking"] },
              {
                title: "Adjustable heights",
                items: [
                  "10–20 mm",
                  "18–35 mm",
                  "35–60 mm",
                  "60–115 mm",
                  "115–220 mm",
                  "220–1000 mm (with extension)",
                ],
              },
            ],
          },
        },
        {
          id: "outdoor-drainage-channels",
          title: "Outdoor Drainage Channels",
          description:
            "Drainage channels in multiple sizes and materials for outdoor applications.",
          image: Images.dakotaOutdoorChannels,
          specs: [
            { label: "Materials", value: "Ductile iron, HDPE plastic" },
            { label: "Sizes", value: "100 × 15, 100 × 20, 100 × 26 cm" },
            { label: "Loading classes", value: "C-250, D-400" },
          ],
          details: {
            overview:
              "Drainage channels for outdoor use, available with ductile iron or HDPE plastic gratings in three channel sizes. Certified to EN 1433.",
            images: [
              {
                src: Images.dakotaOutdoorChannelProduct,
                alt: "Dakota outdoor drainage channel with black grating",
              },
              {
                src: Images.dakotaOutdoorChannelsDetail,
                alt: "Dakota outdoor drainage channels with different gratings",
              },
            ],
            groups: [
              {
                title: "Size (cm)",
                items: ["100 × 15", "100 × 20", "100 × 26"],
              },
              { title: "Class of loading", items: ["C-250", "D-400"] },
              { title: "Materials", items: ["Ductile iron", "HDPE plastic"] },
              { title: "Certification", items: ["EN 1433 certified"] },
            ],
          },
        },
        {
          id: "drainage-channels-grates",
          title:
            "Drainage channels for Indoors and outdoors with heavy loading capacity",
          description:
            "Channel options featuring different grate materials and designs.",
          image: Images.dakotaChannelsGrates,
          specs: [
            {
              label: "Materials",
              value: "Stainless steel, galvanized steel, plastic",
            },
            { label: "Sizes", value: "100 × 10, 100 × 15, 100 × 20 cm" },
            { label: "Loading classes", value: "A-125" },
          ],
          details: {
            overview:
              "Drainage channels with stainless steel, galvanized steel or plastic grates in wave and slot designs, rated for A-125 loading.",
            images: [
              {
                src: Images.dakotaChannelsGratesDetail,
                alt: "Dakota drainage channels with steel grates",
              },
            ],
            groups: [
              {
                title: "Size (cm)",
                items: ["100 × 10", "100 × 15", "100 × 20"],
              },
              { title: "Class of loading", items: ["A-125"] },
              {
                title: "Grate materials",
                items: ["Stainless steel", "Galvanized steel", "Plastic"],
              },
            ],
          },
        },
        {
          id: "plastic-drainage-channels",
          title: "PVC drainage channels",
          description: "Plastic drainage channel options with PVC grating",
          image: Images.dakotaPlasticChannels,
          specs: [
            { label: "Materials", value: "PVC plastic, PVC grating" },
            { label: "Sizes", value: "100 × 10, 100 × 15, 100 × 20 cm" },
            { label: "Loading classes", value: "A-125" },
          ],
          details: {
            overview:
              "PVC plastic drainage channels supplied with PVC grating, rated for A-125 loading.",
            images: [
              {
                src: Images.dakotaPlasticChannelProduct,
                alt: "Dakota plastic drainage channel with white PVC grating",
              },
              {
                src: Images.dakotaPlasticChannelsDetail,
                alt: "Dakota plastic drainage channels with PVC grating",
              },
            ],
            groups: [
              {
                title: "Size (cm)",
                items: ["100 × 10", "100 × 15", "100 × 20"],
              },
              { title: "Class of loading", items: ["A-125"] },
              { title: "Materials", items: ["PVC grating", "PVC plastic"] },
            ],
          },
        },
        {
          id: "pvc-catch-pits",
          title: "PVC Catch Pits & Gully Gratings",
          description:
            "Catch pit and grating components in several square sizes",
          image: Images.dakotaCatchPits,
          specs: [
            { label: "Materials", value: "PVC" },
            {
              label: "Sizes",
              value: "20 × 20, 30 × 30, 40 × 40, 55 × 55, 70 × 70 cm",
            },
            { label: "Loading classes", value: "A-125" },
          ],
          details: {
            overview:
              "PVC catch pits with matching gully gratings in five square sizes, rated for A-125 loading.",
            images: [
              {
                src: Images.dakotaCatchPitsDetail,
                alt: "Dakota PVC catch pit, cover and gully grating",
              },
            ],
            groups: [
              {
                title: "Size (cm)",
                items: ["20 × 20", "30 × 30", "40 × 40", "55 × 55", "70 × 70"],
              },
              { title: "Class of loading", items: ["A-125"] },
              { title: "Material", items: ["PVC"] },
            ],
          },
        },
        {
          id: "tile-levelling-system",
          title: "Tile leveling systems for indoor and outdoor tiles",
          description:
            "Tile installation components presented in the Dakota catalogue.",
          image: Images.dakotaTileLevelling,
          specs: [{ label: "Components", value: "Wedges, clips, cylinders" }],
          details: {
            overview:
              "Tile levelling components used together during tile installation for an even, level finish.",
            images: [
              {
                src: Images.dakotaTileLevellingDetail,
                alt: "Dakota tile levelling clips, cylinders and wedges",
              },
            ],
            groups: [
              { title: "Components", items: ["Wedges", "Clips", "Cylinders"] },
            ],
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
        "Keves' product range featured in our catalogue includes 3-inch and 4-inch scupper and dome drains made with a cast iron body and aluminium grill. Explore the available products and their specifications to identify the right option for your project.",
      image: Images.kevesBrandAbout,
      imageAlt: "Keves dome drain and scupper drain",
      imageFit: "contain",
    },
    highlights: [
      {
        title: "Roof Drainage Range",
        description: "Scupper and dome drains in one range.",
        icon: "box",
      },
      {
        title: "Detailed Specifications",
        description: "Review sizes and materials.",
        icon: "document",
      },
      {
        title: "Product Enquiries",
        description: "Get in touch with our team.",
        icon: "chat",
      },
    ],
    catalogue: {
      title: "Explore Keves Products",
      description:
        "Browse the product range to find available options, sizes, materials, and technical specifications.",
      products: [
        {
          id: "scupper-drain",
          title: "Scupper Drain",
          description:
            "Scupper drain with a cast iron body and aluminium grill.",
          image: Images.kevesScupperDrain,
          specs: [
            { label: "Sizes", value: "3″, 4″" },
            { label: "Materials", value: "Cast iron body, aluminium grill" },
          ],
          details: {
            overview:
              "A scupper drain available in 3-inch and 4-inch sizes, with a cast iron body and an aluminium grill.",
            images: [
              {
                src: Images.kevesScupperDrain,
                alt: "Keves scupper drain",
              },
            ],
            groups: [
              { title: "Sizes", items: ["3″", "4″"] },
              {
                title: "Materials",
                items: ["Cast iron body", "Aluminium grill"],
              },
            ],
          },
        },
        {
          id: "dome-drain",
          title: "Dome Drain",
          description: "Dome drain with a cast iron body and aluminium grill.",
          image: Images.kevesDomeDrain,
          specs: [
            { label: "Sizes", value: "3″, 4″" },
            { label: "Materials", value: "Cast iron body, aluminium grill" },
          ],
          details: {
            overview:
              "A dome drain available in 3-inch and 4-inch sizes, with a cast iron body and an aluminium dome grill.",
            images: [{ src: Images.kevesDomeDrain, alt: "Keves dome drain" }],
            groups: [
              { title: "Sizes", items: ["3″", "4″"] },
              {
                title: "Materials",
                items: ["Cast iron body", "Aluminium grill"],
              },
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
  luxwares: {
    brandId: "luxwares",
    hero: {
      title: ["LuxWares Check &", "Anti Flooding Valves"],
      description:
        "Explore LuxWares Waste Water Check Valves And Locked Anti Flooding Valves By Torun Plastik, Built To Stop Sewer Backflow Into Buildings.",
      image: Images.luxwaresHero,
      imageAlt: "LuxWares locked anti flooding valve with water balance system",
      darken: true,
    },
    about: {
      title: ["Backflow Protection For", "Waste Water Lines"],
      description:
        "LuxWares, manufactured by Torun Plastik, offers PP check valves and locked anti flooding valves for waste water systems. They block sewer recoil, keep out pests such as mice and insects, and prevent sewage odours, with a removable top cover for easy cleaning. Explore the available products and their specifications to identify the right option for your project.",
      image: Images.luxwaresBrandAbout,
      imageAlt:
        "LuxWares locked anti flooding valves with stainless steel and plastic flaps",
    },
    highlights: [
      {
        title: "Backflow Prevention Range",
        description: "Check and anti flooding valves in one range.",
        icon: "box",
      },
      {
        title: "Detailed Specifications",
        description: "Review sizes and materials.",
        icon: "document",
      },
      {
        title: "Product Enquiries",
        description: "Get in touch with our team.",
        icon: "chat",
      },
    ],
    catalogue: {
      title: "Explore LuxWares Products",
      description:
        "Browse the product range to find available options, sizes, materials, and technical specifications.",
      products: [
        {
          id: "plastic-check-valve",
          title: "75 mm Plastic Check Valve",
          description:
            "Waste water check valve that stops sewer backflow, pests and odours.",
          image: Images.luxwaresCheckValve,
          specs: [
            { label: "Product code", value: "TP 1034" },
            { label: "Size", value: "Ø75 mm" },
            { label: "Material", value: "PP" },
          ],
          details: {
            overview:
              "A 75 mm PP waste water check valve that blocks sewer and infrastructure recoil, keeps mice and insects out of the building and prevents sewage odours. The top cover removes for easy, practical cleaning.",
            images: [
              {
                src: Images.luxwaresCheckValve,
                alt: "LuxWares 75 mm plastic check valve",
              },
              {
                src: Images.luxwaresCheckValveDrawing,
                alt: "Technical drawing of the 75 mm check valve",
              },
            ],
            groups: [
              {
                title: "Product",
                items: ["Code: TP 1034", "Material: PP", "Weight: 470 g"],
              },
              {
                title: "Dimensions",
                items: [
                  "Inlet / outlet: Ø75 mm",
                  "Length: 240 mm",
                  "Height: 156 mm",
                ],
              },
              {
                title: "Packaging",
                items: [
                  "Inner carton quantity: 18",
                  "Package size: 440 × 540 × 410 mm",
                  "Package weight: 10 kg",
                ],
              },
              {
                title: "Practice areas",
                items: [
                  "Buildings and sites",
                  "Sports complexes, villas and mansions",
                  "Factory buildings",
                  "Building and related fields",
                ],
              },
            ],
          },
        },
        {
          id: "locked-anti-flooding-valve",
          title: "Locked Anti Flooding Valve",
          description:
            "Lockable backflow valve with a built-in water balance level.",
          image: Images.luxwaresAntiFloodingValve,
          specs: [
            { label: "Flap options", value: "Stainless steel, plastic" },
            { label: "Feature", value: "Water balance system" },
          ],
          details: {
            overview:
              "A locked anti flooding valve that keeps sewer water from flowing back into the building. A built-in water balance system (spirit level) helps set the valve level during installation, and it is available with a stainless steel or plastic flap.",
            images: [
              {
                src: Images.luxwaresAntiFloodingValveBalance,
                alt: "LuxWares locked anti flooding valve with water balance system",
              },
              {
                src: Images.luxwaresAntiFloodingValveFlaps,
                alt: "Anti flooding valves with stainless steel and plastic flaps",
              },
            ],
            groups: [
              {
                title: "Flap options",
                items: ["Stainless steel flap", "Plastic flap"],
              },
              {
                title: "Features",
                items: ["Lockable cover", "Water balance system"],
              },
            ],
          },
        },
      ],
    },
    cta: {
      title: ["Looking For A LuxWares", "Product?"],
      description:
        "Tell us which product or specification you need. Contact Al Ihsas General Trading LLC for product enquiries and availability.",
    },
  },
};
