import { getLanguage, getTranslation } from "../../utils/i18n";

const language = getLanguage();

const nav_menus_list = [
  {
    link: "/",
    title: getTranslation(language, "header.menu.home"),
  },
  {
    link: "/about",
    title: getTranslation(language, "header.menu.about"),
  },

  {
    link: "/blog",
    title: getTranslation(language, "header.menu.procesos.title"),
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      {
        link: "/procesos/agro",
        title: getTranslation(language, "header.menu.procesos.agro"),
      },
      {
        link: "/procesos/transformacion",
        title: getTranslation(language, "header.menu.procesos.transformacion"),
      },
      // { link: '/procesos/comercializacion', title: getTranslation(language, 'header.menu.procesos.comercializacion') },
    ],
  },

  {
    link: "/procesos/comercializacion",
    title: getTranslation(language, "header.menu.procesos.comercializacion"),
  },
  {
    link: "/blog",
    title: getTranslation(language, "header.menu.blog"),
  },
  {
    link: "/contact",
    title: getTranslation(language, "header.menu.contact"),
  },
];

export default nav_menus_list;
