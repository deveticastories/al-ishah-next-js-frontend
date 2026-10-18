import type { CSSProperties } from "react";
import { Colors } from "./Colors";
import { FontSizes, Sizes } from "./Sizes";

const toKebab = (key: string) => key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

// CSS variables applied on <html>. globals.css maps them into the Tailwind theme,
// so Colors.ts / Sizes.ts stay the single source of truth.
export const themeVariables = {
  ...Object.fromEntries(
    Object.entries(Colors).map(([key, value]) => [`--c-${toKebab(key)}`, value]),
  ),
  ...Object.fromEntries(
    Object.entries(FontSizes).map(([key, value]) => [`--fs-${toKebab(key)}`, `${value}px`]),
  ),
  "--container-padding": `${Sizes.containerPadding}px`,
  "--header-height": `${Sizes.headerHeight}px`,
} as CSSProperties;
