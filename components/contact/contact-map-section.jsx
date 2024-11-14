import React from 'react';
import { getLanguage, getTranslation } from "../../utils/i18n";

const language = getLanguage();

const ContactMapSection = () => {
    return (
        <section className="contact-info-area">
         <div className="contact-info-shape">
            <img className="contact-img-1" src="/assets/img/about/shovle-img.jpg" alt=""/>
         </div>
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title text-center">
                     <span className="section-subtitle">{getTranslation(language, 'contact.contactMap.spanContacto')}</span>
                     <h2 className="section-main-title mb-45">{getTranslation(language, 'contact.contactMap.h2Contacto')}</h2>
                  </div>
               </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-4">
                  <div className="contact-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3949.317237564014!2d-76.06300162499089!3d8.170759991860256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTAnMTQuNyJOIDc2wrAwMyczNy41Ilc!5e0!3m2!1ses!2sco!4v1731620769968!5m2!1ses!2sco" ></iframe>                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="info-item-wrapper info-wrapper-media">
                     <h4 className="contact-info-title">{getTranslation(language, 'contact.contactMap.h4Informacion')}</h4>
                     <div className="info-contact">
                        <ul>
                           <li>
                              <div className="single-contact">
                                 <div className="contact-icon">
                                    <i className="fas fa-phone"></i>
                                 </div>
                                 <p><a href="3145959915">3206271291 -  3145959915 </a></p>
                              </div>
                           </li>
                           <li>
                              <div className="single-contact">
                                 <div className="contact-icon">
                                    <i className="fas fa-envelope-open"></i>
                                 </div>
                                 <p><a href="mailto:info@bdevs-email.com">{getTranslation(language, 'contact.contactMap.correo')}</a></p>
                              </div>
                           </li>
                           <li>
                              <div className="single-contact">
                                 <div className="contact-icon">
                                    <i className="fas fa-map-marked-alt"></i>
                                 </div>
                                 <p><a href="#">CLL 12 # 17-34 BR 19 MARZO <br /> TIERRALTA, CORDOBA -  COLOMBIA</a></p>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="info-item-wrapper info-wrapper-time">
                     <h4 className="contact-info-title">{getTranslation(language, 'contact.contactMap.horaDeApertura')}</h4>
                     <div className="info-contact-time">
                        <ul>
                           <li>
                              <div className="info-date">
                                 <span>{getTranslation(language, 'contact.contactMap.spanSabLunes')}</span>
                                 <span>10:00 am - 8:00 pm</span>
                              </div>
                           </li>
                           <li>
                              <div className="info-date">
                                 <span>{getTranslation(language, 'contact.contactMap.spanLunJue')}</span>
                                 <span>11:00 am - 6:00 pm</span>
                              </div>
                           </li>
                           <li>
                              <div className="info-date">
                                 <span>{getTranslation(language, 'contact.contactMap.spanViernes')}</span>
                                 <span>{getTranslation(language, 'contact.contactMap.spanDiaLibre')}</span>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default ContactMapSection;