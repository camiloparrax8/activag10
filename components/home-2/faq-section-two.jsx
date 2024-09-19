import React from 'react';
import { getLanguage, getTranslation } from '../../utils/i18n';

const FaqSectionTwo = ({faq_area}) => {

   const language = getLanguage();
    return (
        <div className={` ${faq_area ? faq_area : 'faq-area style-3 pt-120 pb-60'}`}>
         <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-6">
                  <div className="faq-img mb-60">
                     <img src="/assets/img/ALO_0955.jpg" alt=""/>
                     <div className="faq-thumb">
                        <img src="/assets/img/logo/logo-w.png" alt=""/>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="section-title style-2">
                     <h2 className="section-main-title mb-55">{getTranslation(language, 'about.timeline.details.title')}</h2>
                  </div>
                  <div className="faq-wrapper mb-60">
                     <div className="gm-faq">
                        <div className="accordion" id="accordionExample-st-2">
                           <div className="gm-faq-group">
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingOne-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseOne-st-2" aria-expanded="false"
                                       aria-controls="collapseOne-st-2">
                                       2006
                                    </button>
                                 </h2>
                                 <div id="collapseOne-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingOne-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                       {getTranslation(language, 'about.timeline.details.2006')}
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingTwo-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseTwo-st-2" aria-expanded="true"
                                       aria-controls="collapseTwo-st-2">
                                       2007-2008
                                    </button>
                                 </h2>
                                 <div id="collapseTwo-st-2" className="accordion-collapse collapse show"
                                    aria-labelledby="headingTwo-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                       {getTranslation(language, 'about.timeline.details.2007')}
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingThree-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseThree-st-2" aria-expanded="false"
                                       aria-controls="collapseThree-st-2">
                                       2009-2010
                                    </button>
                                 </h2>
                                 <div id="collapseThree-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                    {getTranslation(language, 'about.timeline.details.2009')}
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingFour-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseFour-st-2" aria-expanded="false"
                                       aria-controls="collapseFour-st-2">
                                       2011-2012
                                    </button>
                                 </h2>
                                 <div id="collapseFour-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingFour-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                    {getTranslation(language, 'about.timeline.details.2011')}
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingFive-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseFive-st-2" aria-expanded="false"
                                       aria-controls="collapseFive-st-2">
                                       2013-2020
                                    </button>
                                 </h2>
                                 <div id="collapseFive-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingFive-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                    {getTranslation(language, 'about.timeline.details.2013')}
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingSix-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseSix-st-2" aria-expanded="false"
                                       aria-controls="collapseSix-st-2">
                                       2021-2023
                                    </button>
                                 </h2>
                                 <div id="collapseSix-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingFour-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                    {getTranslation(language, 'about.timeline.details.2021')}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default FaqSectionTwo;