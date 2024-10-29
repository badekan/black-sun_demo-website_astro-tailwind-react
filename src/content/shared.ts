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
          label: "Growth marketing",
          href: "#",
        },
        {
          label: "Meaningful brands",
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
  ]  
}

export default sharedData;