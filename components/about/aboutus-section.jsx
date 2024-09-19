import Link from 'next/link';
import React from 'react';
import { getLanguage, getTranslation } from '../../utils/i18n';

const AboutUsSection = () => {

    const language = getLanguage();

    return (
        <section className="about-area pt-120 pb-90">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div className="about-thumb mb-30">
                            <img src="/assets/img/ALO_0982.jpg" alt=""/>
                            <div className="about-thumb-meta">
                                <p>{getTranslation(language, 'about.since')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content mb-30">
                            <div className="section-title">
                                <span className="section-subtitle">{getTranslation(language, 'about.title')}</span>
                                <h2 className="section-main-title mb-20">{getTranslation(language, 'about.name')}</h2>
                            </div>
                            <p className="mb-30">{getTranslation(language, 'about.description')}</p>
                            <p className="mb-45">{getTranslation(language, 'about.description-two')}</p>
                            <div className="about-btn">
                                <Link href="/contact"><a className="fill-btn">{getTranslation(language, 'about.cta')}<i className="fal fa-angle-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;