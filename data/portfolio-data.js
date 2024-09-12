
import { getLanguage, getTranslation } from "../utils/i18n";

const language = getLanguage();

const portfolioList = [
   
    //home two portfolio end
    {
        id:10,
        portfolioImg:'/assets/img/portfolio/portfolio-24.jpg',
        portfolioTag: '22',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:getTranslation(language, 'home.portfolio.item-1.portfolio-title'),
    },
    {
        id:11,
        portfolioImg:'/assets/img/portfolio/portfolio-25.jpg',
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:getTranslation(language, 'home.portfolio.item-2.portfolio-title'),
    },
    {
        id:12,
        portfolioImg:'/assets/img/portfolio/portfolio-26.jpg',
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:getTranslation(language, 'home.portfolio.item-3.portfolio-title'),
    },
    {
        id:13,
        portfolioImg:'/assets/img/portfolio/portfolio-27.jpg',
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:getTranslation(language, 'home.portfolio.item-4.portfolio-title'),
    },
    {
        id:14,
        portfolioImg:'/assets/img/portfolio/portfolio-28.jpg',
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:getTranslation(language, 'home.portfolio.item-5.portfolio-title'),
    },
    {
        id:15,
        portfolioImg:'/assets/img/portfolio/portfolio-29.jpg',
        portfolioTag:'gardening',
        portfolioIcon:'fas fa-eye',
        portfolioTitle:getTranslation(language, 'home.portfolio.item-6.portfolio-title'),
    },
    //home four portfolio end
    
  ]
  
  export default portfolioList;