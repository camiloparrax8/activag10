import React from 'react';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BrandSliderTwo from '../elements/brand/brand-slider-two';
import AboutFeatureSection from './about-feature-section';
import AboutTimeline from './about-timeline';
import AboutVideoSection from './about-video-section';
import AboutUsSection from './aboutus-section';
import FooterFour from '../../layout/footers/footerfour';


const AboutMain = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb breadTitle={'about us'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'about us'} />
                <AboutUsSection />
                <AboutFeatureSection />
                <AboutVideoSection />
                <BrandSliderTwo />
                <AboutTimeline />
            </main>
            <FooterFour />
        </>
    );
};

export default AboutMain;