import Link from 'next/link';
import React from 'react';
import { getLanguage, getTranslation } from "../../utils/i18n";

const language = getLanguage();

const FoundationSectionFour = () => {
    return (
        <section className="foundation-area style-2 pt-0 pb-60">
         <div className="container">
            <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-6">
                  <div className="foundation-img style-2 mb-60">
                     <div className="row align-items-center">
                        <div className="col-6">
                           <img className="foundation-2-img1" src="/assets/img/about/foundation-2-img1.jpg" alt="img"/>
                        </div>
                        <div className="col-6">
                           <div className="row">
                              <div className="col-12">
                                 <img className="foundation-2-img2" src="/assets/img/about/foundation-2-img2.jpg" alt="img"/>
                              </div>
                              <div className="col-12">
                                 <img className="foundation-2-img3" src="/assets/img/about/foundation-2-img3.jpg" alt="img"/>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="foundation-content style-2 mb-60">
                     <div className="section-title">
                        <span className="section-subtitle">{getTranslation(language, 'home.Foundation-section-four.section-subtitle')}</span>
                        <h2 className="section-main-title mb-20">{getTranslation(language, 'home.Foundation-section-four.section-main-title')}</h2>
                     </div>
                     <p>
                     {getTranslation(language, 'home.Foundation-section-four.section-description')}
                      </p>
                     <div className="founder-meta mt-45">
                        <div className="founder-info-meta">
                           <div className="founder-img">
                              <img src="/assets/img/team/founder.jpg" alt=""/>
                           </div>
                           <div className="founder-desciption">
                              <span className="designation">{getTranslation(language, 'home.Foundation-section-four.designation')}</span>
                              <h4 className="founder-name">{getTranslation(language, 'home.Foundation-section-four.founder-name')}</h4>
                           </div>
                        </div>
                        {/* <Link href="/contact"><a className="fill-btn-rounded">get in touch<i className="fal fa-angle-right"></i></a></Link> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default FoundationSectionFour;