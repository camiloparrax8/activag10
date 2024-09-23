import React from 'react';
import HeaderFour from '../../layout/headers/headerfour';
import ServiceSectionFour from '../home-4/service-section-four';
import FoundationSectionFour from '../home-4/foundation-section-four';
import FeatureSectionFour from '../home-4/feature-section-four';
import PortfolioSectionFour from '../home-4/portfolio-section-four';
import TestimonialSliderFour from '../elements/testimonial/testimonial-slider-four';
import TeamSection from '../home-4/team-section';
import NewsletterSectionFour from '../home-4/newsletter-section-four';
import BlogSectionTwo from '../home-2/blog-section-two';
import FooterFour from '../../layout/footers/footerfour';
import HeroSliderThree from '../elements/hero/hero-slider-three';
import TawkMessenger from '../TawkMessenger/TawkMessenger';


const index = () => {
  return (
    <main>
      <HeaderFour />
      <HeroSliderThree />
      <ServiceSectionFour />
      <FoundationSectionFour />
      <FeatureSectionFour />
      <PortfolioSectionFour />
      {/* <TestimonialSliderFour />
      <TeamSection />
      <NewsletterSectionFour /> */}
      <BlogSectionTwo blog_area_class="blog-area-4 pt-120 pb-75" blog_single_class="style-4 mb-45" />
      <FooterFour />
      <TawkMessenger></TawkMessenger>
    </main>
  );
};

export default index;