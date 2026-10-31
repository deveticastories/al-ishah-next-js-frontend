export const Routes = {
  home: "/",
  about: "/about",
  products: "/products",
  contact: "/contact",
  brand: (brandId: string) => `/products/${brandId}`,
} as const;
