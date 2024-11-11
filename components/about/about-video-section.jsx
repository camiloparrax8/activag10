import React, { useEffect } from "react";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { getLanguage, getTranslation } from "../../utils/i18n";

const AboutVideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  const [video, setVideo] = useState();

  const language = getLanguage();

  useEffect(() => {
    switch (language) {
      case "es":
        setVideo("SRLa2OwRUxA");
        break;
      case "en":
        setVideo("c_6kxhesr6Q");
        break;
      case "em":
        setVideo("c_6kxhesr6Q");
        break;
      default:
        setVideo("c_6kxhesr6Q");
        break;
    }
  }, [language]);

  return (
    <section
      className="video-area video-about pt-120 pb-145"
      style={{ background: "url(/assets/img/ALO_0445.jpg)" }}
    >
      <div className="container">
        <div className="row wow fadeInUp" data-wow-delay=".3s">
          <div className="col-lg-12">
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId={video}
              onClose={() => {
                openVideoModal();
              }}
            />
            <div className="video-content">
              <div className="video-btn mb-45">
                <span
                  className="play-btn popup-video play-border-effect"
                  onClick={() => {
                    openVideoModal();
                  }}
                >
                  <i className="fas fa-play"></i>
                </span>
              </div>
              <div className="section-title">
                <h2 className="section-main-title mb-0 text-white">
                  {getTranslation(language, "about.video-title")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideoSection;
