import { getLanguage, getTranslation } from "../../utils/i18n";

const language = getLanguage();

const nav_menus_list = [
  {
    link: '/',
    title: getTranslation(language, 'header.menu.home'),
  },
  {
    link: '/about',
    title: getTranslation(language, 'header.menu.about'),
  },
  {
    link: '/process',
    title: getTranslation(language, 'header.menu.process'),
  },
  {
    link: '/blog',
    title: getTranslation(language, 'header.menu.blog'),
  },
  {
    link: '/contact',
    title: getTranslation(language, 'header.menu.contact'),
  }

]

export default nav_menus_list;