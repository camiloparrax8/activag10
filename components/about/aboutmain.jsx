import React from 'react';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BrandSliderTwo from '../elements/brand/brand-slider-two';
import AboutFeatureSection from './about-feature-section';
import AboutTimeline from './about-timeline';
import AboutVideoSection from './about-video-section';
import AboutUsSection from './aboutus-section';
import FooterFour from '../../layout/footers/footerfour';
import { getLanguage, getTranslation } from '../../utils/i18n';
import FaqSectionTwo from '../home-2/faq-section-two';


const AboutMain = () => {

    const language = getLanguage();

    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb breadTitle={getTranslation(language, 'about.title')} breadSubtitle={getTranslation(language, 'about.bread-title')} breadHome={getTranslation(language, 'header.menu.home')} breadMenu={getTranslation(language, 'header.menu.about')} />
                <AboutUsSection />
                <AboutFeatureSection />
                <AboutVideoSection />
                <BrandSliderTwo />
                <AboutTimeline />
                <FaqSectionTwo />
            </main>
            <FooterFour />
        </>
    );
};

export default AboutMain;