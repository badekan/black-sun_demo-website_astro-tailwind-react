import type { HeaderData } from "../components/ogranisms/Header/Header.astro";
import sharedData from "./shared";

const logo = sharedData.nav.find((item) => item.isLogo);
const nav = sharedData.nav.filter((item) => !item.isLogo  && !item.isButton )
const button = sharedData.nav.find((item) => item.isButton);

const headerData: HeaderData = {
  logo,
  nav,
  button,
}

export default headerData;