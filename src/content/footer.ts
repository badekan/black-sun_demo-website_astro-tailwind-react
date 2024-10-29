import type { FooterData } from "../components/ogranisms/Footer.astro";
import sharedData from "./shared";

const logo = sharedData.nav.find((item) => item.isLogo);
const nav = sharedData.nav.filter((item) => !item.isLogo  && !item.isButton );
// const nav = {...nav2}
//   .filter((item) => !item.isLogo && !item.isButton)
//   .map((item) => {
//     if (item.subnav) {
//       item.subnav = item.subnav.map((subItem) => ({
//         label: subItem.sublabel ? `${subItem.label} ${subItem.sublabel.toLowerCase()}` : subItem.label,
//       }));
//     }
//     return item;
//   });
const newsletter = sharedData.newsletter;
const offices = sharedData.offices;
const socials = sharedData.socials;
const copyright = sharedData.copyright;
const legalNav = sharedData.legalNav;

const footerData: FooterData = {
  logo,
  nav,
  newsletter,
  offices,
  socials,
  copyright,
  legalNav
}

export default footerData;