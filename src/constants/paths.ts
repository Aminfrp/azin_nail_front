export interface IPaths{
  home: string;
  aboutUs: string;
  products: string;
  product: string;
}
export const PATHS: IPaths = {
  home : "/",
  aboutUs: "/about-us",
  products: "/products",
  product: "/products/:slug",
}