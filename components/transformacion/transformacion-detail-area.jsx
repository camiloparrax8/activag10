import Link from "next/link";
import React from "react";
import ServicesList from "../../data/services-data-trasformacion";
import ServiceSection from "../home/service-section";
import ModalVideo from "react-modal-video";
import { getLanguage, getTranslation } from "../../utils/i18n";

const language = getLanguage();

const TransformacionDetailArea = () => {
  return (
    <>
      <section className="portfolio-details-area pt-120 pb-90">
        <div className="container">
          <div
            className="portfolio-details-wrapper wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="portfolio-thumb">
              <img src="/assets/img/ALO_8214.jpg" alt="" />
            </div>
            <div className="portfolio-meta-wrapper">
              <div className="portfolio-meta">
                <div className="portfolio-faq-wrapper">
                  <h4>{getTranslation(language,  "transformacion.info.title")}</h4>
                  <p className="mb-35">
                   {getTranslation(language, "transformacion.info.description")}
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mb-4">
              <h2>{getTranslation(language,  "transformacion.step-title")}</h2>
            </div>
            <div className="services-wrapper services-wrapper-2">
            
              {ServicesList && (
                <div
                  className="services-inner services-inner-2 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="row g-0">
                    {ServicesList.map((item, num) => (
                      <div className="col-lg-3 col-md-6" key={num}>
                        <div className="single-service style-2">
                          <div className="single-service-content">
                            <div className="service-icon">
                              <i className={item.serviceIcon}></i>
                            </div>
                            <h4 className="service-title">
                              {item.serviceTitle}
                            </h4>
                            <p>{item.serviceDesc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransformacionDetailArea;
