import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import WorkSection from "./work-section";
import { getLanguage, getTranslation } from "../../utils/i18n";

const language = getLanguage();

const AgroDetailArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="portfolio-details-area pt-120 pb-90">
        <div className="container">
          <div
            className="portfolio-details-wrapper wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="portfolio-thumb">
              <img
                src="/assets/img/portfolio/siembra-cosecha-banner.jpg"
                alt=""
              />
            </div>
            <div className="portfolio-meta-wrapper">
              <div className="portfolio-meta">
                <div className="row">
                  <div className="col-11">
                    <div className="meta-list">
                      <div className="meta-item">
                        <span>
                          {getTranslation(
                            language,
                            "agro.AgroDetailArea.meta-list.meta-item-1"
                          )}
                        </span>
                        <p>
                          {getTranslation(language, "agro.AgroDetailArea.p.p1")}
                        </p>
                      </div>
                      <div className="meta-item">
                        <span>
                          {getTranslation(
                            language,
                            "agro.AgroDetailArea.meta-list.meta-item-2"
                          )}
                        </span>
                        <p>
                          {getTranslation(language, "agro.AgroDetailArea.p.p2")}
                        </p>
                      </div>
                      <div className="meta-item">
                        <span>
                          {getTranslation(
                            language,
                            "agro.AgroDetailArea.meta-list.meta-item-3"
                          )}
                        </span>
                        <p>
                          {getTranslation(language, "agro.AgroDetailArea.p.p3")}
                        </p>
                      </div>
                      <div className="meta-item">
                        <span>
                          {getTranslation(
                            language,
                            "agro.AgroDetailArea.meta-list.meta-item-4"
                          )}
                        </span>
                        <p>
                          {getTranslation(language, "agro.AgroDetailArea.p.p4")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-1 p-1">
                    <div className="portfolio-meta-btn">
                      <ModalVideo
                        channel="youtube"
                        isOpen={isOpen}
                        videoId="Jzs040pxjWM"
                        onClose={() => {
                          openVideoModal();
                        }}
                      />
                      <a
                        href="#"
                        className="fill-btn"
                        onClick={() => {
                          openVideoModal();
                        }}
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mb-20">
              {getTranslation(language, "agro.AgroDetailArea.decription")}
            </p>

            <div className="portfolio-sub-image">
              <img src="/assets/img/portfolio/siembra-410.jpg" alt="" />
              <img src="/assets/img/portfolio/cosecha-410.jpg" alt="" />
              <img src="/assets/img/portfolio/cosecha2-410.jpg" alt="" />
         
            </div>

            

              <WorkSection></WorkSection>

             
          </div>
        </div>
      </section>
    </>
  );
};

export default AgroDetailArea;
