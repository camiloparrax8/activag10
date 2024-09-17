import React from 'react';
import { getLanguage, getTranslation } from "../../utils/i18n";

const language = getLanguage();

const ContactFormSection = () => {
    return (
        <section className="contact-area pt-120">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <div className="contact-wrapper">
                            <div className="contact-wrapper-content">
                                <div className="section-title">
                                    <span className="section-subtitle">{getTranslation(language, 'contact.contactForm.formulario')}</span>
                                    <h2 className="section-main-title mb-35">{getTranslation(language, 'contact.contactForm.tituloFormulario')}</h2>
                                </div>
                                <div className="contact-form">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-name">
                                                    <input type="text" placeholder={getTranslation(language, 'contact.contactForm.placeholderNombre')}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-email">
                                                    <input type="text" placeholder={getTranslation(language, 'contact.contactForm.placeholderCorreo')}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input-field field-message">
                                                    <textarea name="message" id="message" placeholder={getTranslation(language, 'contact.contactForm.placeholderMensaje')}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-btn">
                                            <button type='submit' className="fill-btn"><i className="fal fa-farm"></i><span>{getTranslation(language, 'contact.contactForm.botonEnvio')}</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="contact-wrapper-img">
                                <img src="/assets/img/about/contact-img.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;