import Link from 'next/link';
import React from 'react';
import { getLanguage, getTranslation } from '../../utils/i18n';

const AboutFeatureSection = () => {

    const language = getLanguage();

    return (
        <div className="section strategy-area pb-90">
            <div className="container">
                <div className="strategy-wrapper">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-strategy mb-30">
                                <div className="st-hover">
                                    <div className="st-h-content" style={{ background: "url(/assets/img/bg/st-h-bg.jpg)" }}>
                                        <p>{getTranslation(language, 'about.mision.description')}</p>
                                    </div>
                                </div>
                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/mission-icon.png" alt="" />
                                </div>
                                <h4>{getTranslation(language, 'about.mision.title')}</h4>
                                <Link href="/contact"><a className="strategy-arrow"><i className="fal fa-long-arrow-right"></i></a></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-strategy mb-30">
                                <div className="st-hover">
                                    <div className="st-h-content" style={{ background: "url(/assets/img/bg/st-h-bg.jpg)" }}>
                                        <p>{getTranslation(language, 'about.vision.description')}</p>
                                    </div>
                                </div>
                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/vision-icon.png" alt="" />
                                </div>
                                <h4>{getTranslation(language, 'about.vision.title')}</h4>
                                <Link href="/contact"><a className="strategy-arrow"><i className="fal fa-long-arrow-right"></i></a></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-strategy mb-30">
                                <div className="st-hover">
                                    <div className="st-h-content" style={{ background: "url(/assets/img/bg/st-h-bg.jpg)" }}>
                                        <p>{getTranslation(language, 'about.goal.description')}</p>
                                    </div>
                                </div>
                                <div className="strategy-icon">
                                    <img src="/assets/img/icon/approach-icon.png" alt="" />
                                </div>
                                <h4>{getTranslation(language, 'about.goal.title')}</h4>
                                <Link href="/contact"><a className="strategy-arrow"><i className="fal fa-long-arrow-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFeatureSection;