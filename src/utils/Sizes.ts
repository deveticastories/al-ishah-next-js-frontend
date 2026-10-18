// Layout and typography sizes measured from the 1440px-wide Figma frame.
export const Sizes = {
  designWidth: 1440,
  containerPadding: 62,
  headerHeight: 99,
  heroHeight: 838,
  radius: 4,
  inputRadius: 6,
  buttonHeight: 44,
  inputHeight: 70,
} as const;

// Font sizes in px. Exposed to Tailwind as `text-display`, `text-h2`, etc.
export const FontSizes = {
  display: 66,
  h2: 50,
  title: 20,
  nav: 18,
  button: 18,
  body: 16,
  small: 14,
  serviceNumber: 140,
} as const;
