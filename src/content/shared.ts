import type { FooterCtaBlock } from "../components/ogranisms/Footer.astro";
import ImgCtaBlock from '../img/cta-block.jpg';
import ImgCtaBlock2x from '../img/cta-block@2x.jpg';

interface SharedData {
  offices: string[];
  copyright: string;
  legalNav: {
    label: string;
    href: string;
  }[];
  newsletter: {
    title: string;
    placeholder: string;
  };
  socials: {
    name: string;
    icon: string;
    href: string;
  }[];
  nav: {
    label: string;
    href: string;
    isLogo?: boolean;
    isButton?: boolean;
    subnav?: {
      label: string;
      sublabel?: string;
      icon?: string;
      href: string;
    }[];
  }[];
  ctaBlock?: FooterCtaBlock
} 

const sharedData: SharedData = {
  offices: [
    "Bruxelles",
    "Namur",
  ],
  copyright: "© 2024 Black Sun, Inc. All right reserved",
  legalNav: [
    {
      label: "Cookie Policy",
      href: "#",
    },
    {
      label: "Privacy Policy",
      href: "#",
    },
    {
      label: "Terms of Service",
      href: "#",
    }
  ],
  newsletter:{
    title: "Get the latest Black Sun news and projects straight into your inbox.",
    placeholder: "Enter your email",
  },
  socials: [
    {
      name: "Instagram",
      icon: "instagram",
      href: "#",
    },
    {
      name: "Linkedin",
      icon: "linkedin",
      href: "#",
    },
  ],
  nav:[
    {
      label: "Home",
      href: "#",
      isLogo: true,
    },
    {
      label: "Solutions",
      href: "#",
      subnav: [
        {
          label: 'UX/UI',
          sublabel: 'Design',
          icon: 'ux',
          href: '#',
        },
        {
          label: 'App',
          sublabel: 'Development',
          icon: 'app',
          href: '#',
        },
        {
          label: 'Software',
          sublabel: 'Development',
          icon: 'software',
          href: '#',
        },
        {
          label: 'Blockchain',
          sublabel: 'Development',
          icon: 'blockchain',
          href: '#',
        },
      ]
    },
    {
      label: "Services",
      href: "#",
      subnav: [
        {
          label: "Customer experiences",
          href: "#",
        },
        {
          label: "Meaningful brands",
          href: "#",
        },
        {
          label: "Accessibility",
          href: "#",
        }
      ]
    },
    {
      label: "Company",
      href: "#",
    },
    {
      label: "Client",
      href: "#",
    },
    {
      label: "Contact us",
      href: "#",
      isButton: true,
    },
  ],
  ctaBlock: {
    img:{
      src: ImgCtaBlock,
      src2x: ImgCtaBlock2x.src,
      alt: 'cta block',
    },
    name:'Time Rogier',
    role:'CEO',
    text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas accusantium cum odio nam nesciunt illo nostrum quia.',
  }  
}

export default sharedData;