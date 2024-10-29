import { IconName } from "../components/atoms/Icon";
import type { CardArticleData } from "../components/molecules/CardArticle.astro";
import type { HeroLandingData } from "../components/ogranisms/HeroLanding/HeroLanding.astro";
import type { SectionArticlesData } from "../components/ogranisms/SectionArticles.astro";
import type { SectionClientsData } from "../components/ogranisms/SectionClients.astro";
import type { SectionNumberData } from "../components/ogranisms/SectionNumber.astro";
import type { SectionWhyData } from "../components/ogranisms/SectionWhy.astro";


// Section Clients
import ImgLogoChanel from '../img/logo-chanel.svg';
import ImgLogoDior from '../img/logo-dior.svg';
import ImgLogoMercedes from '../img/logo-mercedes.svg';
import ImgLogoNike from '../img/logo-nike.svg';
import ImgLogoRenault from '../img/logo-renault.svg';
import ImgLogoValentino from '../img/logo-valentino.svg';
import sharedData from "./shared";

const heroLandingSolutions = sharedData.nav.find((item) => item.label == "Solutions");

const heroLandingData: HeroLandingData = {
  suptitle: 'Global agency',
  title: 'Transformative brands, special by digital product',
  content: '<p>We offers end  end-to-end solutions, encompassing software development, UX/UI design, app, and resource hiring services.</p>',
  button: {
    label: "Schedule Call",
    icon: IconName.Chat,
  },
  widgets: {
    widgetNumber: {
      title: '+50',
      subtitle: 'Talented team member',
    },
    widgetSolutions: {
      title: 'We provide',
      items: heroLandingSolutions?.subnav,
    }
  },
};

const sectionClients: SectionClientsData = {
		title: 'Joining with industry leaders.',
		content: '<p>We work with the most successful businesses, in the world, giving you an unmatched level ofexpertise and experience.</p>',
		items: [
      {
        src: ImgLogoNike,
        alt: 'logo Nike',
      },
      {
        src: ImgLogoMercedes,
        alt: 'logo Mercedes',
      },
      {
        src: ImgLogoChanel,
        alt: 'logo Chanel',
      },
      {
        src: ImgLogoDior,
        alt: 'logo Dior',
      },
      {
        src: ImgLogoRenault,
        alt: 'logo Renault',
      },
      {
        src: ImgLogoValentino,
        alt: 'logo Valentino',
      },
    ],
};

const setionWhyData: SectionWhyData = {
  suptitle: "Why us?",
  title: "We make goods wich offer infinite possibilities",
  content: "SunApp’s main objective is to become the top glbal IT services provide, competing across different IT sectors.",
  button: {
    label: "Schedule Call",
    icon: IconName.Chat,
  }
}

const sectionNumber: SectionNumberData = {
  title: "About our<br> Successful Story",
  items: [
    {
      number: "50+",
      details: "Talented team member",
    },
    {
      number: "25K",
      details: "Complete live projects",
    },
    {
      number: "95%",
      details: "Client return after project",
    },
  ]
}

import { getCollection } from 'astro:content';
const articles = await getCollection('article');
const articlesData: CardArticleData[] = articles.map((article):CardArticleData => {
  return(
      {
        title: article.data.title,
        tags: article.data.tags,
        img: {
          src: article.data.cover,
          src2x: article.data.cover2x,
          alt: article.data.coverAlt,
        },
    }
  )
});


const sectionArticles: SectionArticlesData = {
  title: "Kepp aware of the last trends",
  content: "<p>We work with the most successful businesses,in the world, giving you an unmatched level ofexpertise and experience</p>",
  items: articlesData
}

export default { heroLandingData, sectionClients, setionWhyData, sectionNumber, sectionArticles };