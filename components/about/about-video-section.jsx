import React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { getLanguage, getTranslation } from '../../utils/i18n';

const AboutVideoSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    const language = getLanguage();

    return (
        <section className="video-area video-about pt-120 pb-145" style={{ background: "url(/assets/img/ALO_0445.jpg)" }}>
         <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-12">
               <ModalVideo channel='youtube' isOpen={isOpen} videoId='Jzs040pxjWM' onClose={() => { openVideoModal(); }} />
                  <div className="video-content">
                     <div className="video-btn mb-45">
                        <span className="play-btn popup-video play-border-effect" onClick={() => { openVideoModal(); }}><i className="fas fa-play"></i></span>
                     </div>
                     <div className="section-title">
                        <h2 className="section-main-title mb-0 text-white">{getTranslation(language, 'about.video-title')}</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default AboutVideoSection;