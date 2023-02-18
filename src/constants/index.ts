import { PATHS } from "./paths";

interface INav {
  name: string;
  url: string
}

export const NAV_LINKS:INav[] = [
  {
    name: "Home",
    url : PATHS.home
  },
  {
    name: "Products",
    url : PATHS.products
  },
  {
    name: "About Us",
    url : PATHS.aboutUs
  },
]