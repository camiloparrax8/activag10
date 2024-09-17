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
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d66440.99430109383!2d-74.280594133827!3d40.7544305056857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1652616547670!5m2!1sen!2sbd"></iframe>
                  </div>
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
                                 <p><a href="tel:1-800-700-600">{getTranslation(language, 'contact.contactMap.numeroTelefono')}</a></p>
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
                                 <p><a href="#">{getTranslation(language, 'contact.contactMap.direccion')}</a></p>
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