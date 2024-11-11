import Link from "next/link";
import React, { useEffect, useState } from "react";
import { EffectFade, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import { getLanguage, getTranslation } from "../../../utils/i18n";

// Import Swiper styles
import "swiper/css/bundle";

const language = getLanguage();

const HeroSliderThree = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState();
  const openVideoModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    switch (language) {
      case "es":
        setVideo("QXxswvjpvas");
        break;
      case "en":
        setVideo("OjulAeVUU1w");
        break;
      case "em":
        setVideo("OjulAeVUU1w");
        break;
      default:
        setVideo("OjulAeVUU1w");
        break;
    }
  }, [language]);

  const SliderItem = [
    {
      id: 1,
      sliderBg: "/assets/img/banner/banner-3-1.jpg",
      sliderSubtitle: getTranslation(
        language,
        "home.banner.item-1.slider-subtitle"
      ),
      sliderTitle: getTranslation(language, "home.banner.item-1.slider-title"),
      sliderbtn: getTranslation(language, "home.banner.item-1.slider-btn"),
    },
    {
      id: 2,
      sliderBg: "/assets/img/banner/banner-4-1-dark.jpg",
      sliderSubtitle: getTranslation(
        language,
        "home.banner.item-2.slider-subtitle"
      ),
      sliderTitle: getTranslation(language, "home.banner.item-2.slider-title"),
      sliderbtn: getTranslation(language, "home.banner.item-2.slider-btn"),
    },
    {
      id: 3,
      sliderBg: "/assets/img/banner/banner-1-1-dark.jpg",
      sliderSubtitle: getTranslation(
        language,
        "home.banner.item-3.slider-subtitle"
      ),
      sliderTitle: getTranslation(language, "home.banner.item-3.slider-title"),
      sliderbtn: getTranslation(language, "home.banner.item-3.slider-btn"),
    },
  ];

  return (
    <div className="banner-area banner-area3 pos-rel">
      <div className="swiper-container slider__active">
        {SliderItem && (
          <div className="swiper-wrapper">
            <Swiper
              modules={[EffectFade, Scrollbar, A11y, Autoplay]}
              spaceBetween={30}
              effect={"fade"}
              slidesPerView={1}
              autoplaydisableoninteraction={"false"}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
            >
              {SliderItem.map((item, num) => (
                <SwiperSlide key={num}>
                  <div className="swiper-slidess">
                    <div className="single-banner single-banner-3 banner-970 d-flex align-items-center pos-rel">
                      <div
                        className="banner-bg banner-bg3 banner-bg3-1"
                        style={{ backgroundImage: `url(${item.sliderBg})` }}
                      ></div>

                      <div className="container pos-rel">
                        <div className="row justify-content-center">
                          <div className="col-lg-8 col-md-12">
                            <div className="banner-content banner-content3 banner-content3-1 banner-plant-shape">
                              <div
                                className="banner-meta-text"
                                data-animation="fadeInUp"
                                data-delay=".3s"
                              >
                                <span>{item.sliderSubtitle}</span>
                              </div>
                              <h1
                                className="banner-title"
                                data-animation="fadeInUp"
                                data-delay=".5s"
                              >
                                {item.sliderTitle}
                              </h1>
                              <div
                                className="banner-btn"
                                data-animation="fadeInUp"
                                data-delay=".7s"
                              >
                                <Link href="/contact">
                                  <a className="fill-btn-rounded">
                                    {item.sliderbtn}
                                    <i className="fal fa-long-arrow-right"></i>
                                  </a>
                                </Link>
                                <span
                                  className="play-btn play-border-effect"
                                  onClick={() => {
                                    openVideoModal();
                                  }}
                                >
                                  <i className="fas fa-play"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={video}
        onClose={() => {
          openVideoModal();
        }}
      />
    </div>
  );
};

export default HeroSliderThree;
