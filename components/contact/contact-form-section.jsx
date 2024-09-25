import React, { useState } from "react";
import { getLanguage, getTranslation } from "../../utils/i18n";

const language = getLanguage();

const ContactFormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    // Regex para validar el nombre (solo letras y espacios)
    const nameRegex = /^[a-zA-Z\s]+$/;
    // Regex para validar el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      return "Por favor, ingresa un nombre válido (solo letras y espacios).";
    }
    if (!emailRegex.test(email)) {
      return "Por favor, ingresa un correo electrónico válido.";
    }
    if (message.trim().length === 0) {
      return "El mensaje no puede estar vacío.";
    }
    return ""; // No hay errores
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    
    if (validationError) {
      setError(validationError);
      return; // Detener el envío del formulario si hay errores
    }

    setError(""); // Limpiar errores

    const phoneNumber = "573017672315"; // Reemplazar con el número de WhatsApp al que se enviarán los datos
    const whatsappMessage =
      `*Formulario de contacto*\n` +
      `*Nombre completo:* ${name}\n` +
      `*Correo electrónico:* ${email}\n` +
      `*Mensaje:* ${message}\n`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact-area pt-120">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-delay=".3s">
          <div className="col-lg-12">
            <div className="contact-wrapper">
              <div className="contact-wrapper-content">
                <div className="section-title">
                  <span className="section-subtitle">
                    {getTranslation(language, "contact.contactForm.formulario")}
                  </span>
                  <h2 className="section-main-title mb-35">
                    {getTranslation(language, "contact.contactForm.tituloFormulario")}
                  </h2>
                </div>
                {error && <div className="error-message">{error}</div>}
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="single-input-field field-name">
                          <input
                            type="text"
                            placeholder={getTranslation(language, "contact.contactForm.placeholderNombre")}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="single-input-field field-email">
                          <input
                            type="text"
                            placeholder={getTranslation(language, "contact.contactForm.placeholderCorreo")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="single-input-field field-message">
                          <textarea
                            name="message"
                            id="message"
                            placeholder={getTranslation(language, "contact.contactForm.placeholderMensaje")}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="contact-btn">
                      <button type="submit" className="fill-btn">
                        <i className="fal fa-farm"></i>
                        <span>
                          {getTranslation(language, "contact.contactForm.botonEnvio")}
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="contact-wrapper-img">
                <img src="/assets/img/about/contact-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
