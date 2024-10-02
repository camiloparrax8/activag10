import { getLanguage, getTranslation } from "../utils/i18n";

const language = getLanguage();


const ServicesList = [
    {
        id:11,
        serviceImg:'',
        serviceIcon:'/assets/img/icon/s-icon1.png',
        serviceTitle: getTranslation(language, 'home.service-section.item-1.title'),
        serviceBadge: getTranslation(language, 'home.service-section.item-1.badge'),
        serviceDesc:getTranslation(language, 'home.service-section.item-1.description'),
        serviceBtn:getTranslation(language, 'home.service-section.item-1.button'),
        href:"procesos/agro",
        
    },
    {
        id:12,
        serviceImg:'',
        serviceIcon:'/assets/img/icon/s-icon2.png',
        serviceTitle:getTranslation(language, 'home.service-section.item-2.title'),
        serviceBadge:getTranslation(language, 'home.service-section.item-2.badge'),
        serviceDesc:getTranslation(language, 'home.service-section.item-2.description'),
        serviceBtn:getTranslation(language, 'home.service-section.item-2.button'),
        href:"procesos/transformacion",
       
    },
    {
        id:13,
        serviceImg:'',
        serviceIcon:'/assets/img/icon/s-icon7.png',
        serviceTitle:getTranslation(language, 'home.service-section.item-3.title'),
        serviceBadge:getTranslation(language, 'home.service-section.item-3.badge'),
        serviceDesc:getTranslation(language, 'home.service-section.item-3.description'),
        serviceBtn:getTranslation(language, 'home.service-section.item-3.button'),
        href:"procesos/comercializacion",
        
    },
  ]
  
  export default ServicesList;