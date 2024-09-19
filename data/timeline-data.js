import { getLanguage, getTranslation } from "../utils/i18n";

const language = getLanguage();

const timelineList = [
    {
        id:1,
        timelineYear:'2006',
        timelineImg:'/assets/img/2006.jpg',
        timelineTitle:'2006',
        timelineDesc: getTranslation(language, 'about.timeline.2006'),
        timelineItemClass:'single-year-wrapper first-year',
    },
    {
        id:2,
        timelineYear:'2007',
        timelineImg:'/assets/img/2007-8.jpg',
        timelineTitle:'2007-2008',
        timelineDesc:getTranslation(language, 'about.timeline.2007'),
        timelineItemClass:'single-year-wrapper',
    },
    {
        id:3,
        timelineYear:'2009',
        timelineImg:'/assets/img/2009-10.jpg',
        timelineTitle:'2009-2010',
        timelineDesc:getTranslation(language, 'about.timeline.2009'),
        timelineItemClass:'single-year-wrapper',
    },
    {
        id:4,
        timelineYear:'2011',
        timelineImg:'/assets/img/20011-12.jpg',
        timelineTitle:'2011-2012',
        timelineDesc: getTranslation(language, 'about.timeline.2011'),
        timelineItemClass:'single-year-wrapper',
    },
    {
        id:5,
        timelineYear:'2013',
        timelineImg:'/assets/img/2013-20.jpg',
        timelineTitle:'2013-2020',
        timelineDesc: getTranslation(language, 'about.timeline.2013'),
        timelineItemClass:'single-year-wrapper',
    },
    {
        id:6,
        timelineYear:'2021',
        timelineImg:'/assets/img/2020-2023.jpg',
        timelineTitle:'2021-2023',
        timelineDesc: getTranslation(language, 'about.timeline.2021'),
        timelineItemClass:'single-year-wrapper',
    }
  ]
  
  export default timelineList;