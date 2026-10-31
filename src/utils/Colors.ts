// Brand palette sampled from the Figma exports (home/about/products/contact.png).
// These values are exposed to Tailwind as CSS variables via `utils/Theme.ts`,
// so classes like `text-primary` or `border-input` resolve to the hex below.
export const Colors = {
  primary: "#e9232b",
  primaryLight: "#f18e92",
  white: "#ffffff",
  black: "#000000",
  dark: "#231f20",
  muted: "#acacac",
  grayText: "#6b6b6b",
  footerText: "#494949",
  border: "#c7c7c7",
  borderLight: "#e6e6e6",
  divider: "#cdcdcd",
  footerDivider: "#e1e1e1",
  surface: "#e7e7e7",
  ctaBorder: "#f7aeae",
  input: "#d8d8d8",
  maroon: "#540000",
  social: "#5a3346",
  marketNote: "#5d292a",
  dash: "#ee4047",
  statRed: "#a92227",
  statGray: "#f5f5f5",
  valuesBg: "#ffeeef",
  placeholder: "#d9d9d9",
  highlightBg: "#f3f3f3",
  mutedText: "#797979",
  specValue: "#8a8a8a",
  formBg: "#efefef",
  enquiryHeading: "#514e4e",
  dropdownActive: "#eeafaf",
  footerBg: "#f9f9ff",
  separator: "#e0e0e0",
} as const;

export const Gradients = {
  markets:
    "linear-gradient(90deg, #330709 0%, #0a0101 30%, #000000 55%, #120203 80%, #2a0607 100%)",
  sendButton: "linear-gradient(100deg, #9c0d09 0%, #890e07 45%, #411801 100%)",
  copyright: "linear-gradient(90deg, #8e0000 0%, #820707 50%, #760c0c 100%)",
  contact:
    "radial-gradient(60% 50% at 0% 100%, #f7eef5 0%, transparent 70%), radial-gradient(50% 40% at 50% 85%, #f9eef3 0%, transparent 70%), linear-gradient(180deg, #ffffff 0%, #f9f9ff 30%, #f7f4fa 100%)",
} as const;

export type ColorName = keyof typeof Colors;
