import type { FooterData } from "../components/ogranisms/Footer.astro";


import sharedData from "./shared";

const logo = sharedData.nav.find((item) => item.isLogo);
const nav = sharedData.nav.filter((item) => !item.isLogo  && !item.isButton );
const newsletter = sharedData.newsletter;
const offices = sharedData.offices;
const socials = sharedData.socials;
const copyright = sharedData.copyright;
const legalNav = sharedData.legalNav;
const ctaBlock = sharedData.ctaBlock;

const footerData: FooterData = {
  logo,
  nav,
  newsletter,
  offices,
  socials,
  copyright,
  legalNav,
  ctaBlock
}

export default footerData;