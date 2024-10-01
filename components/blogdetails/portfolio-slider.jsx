import Link from "next/link";
import React from "react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
// Import Swiper styles
import "swiper/css/bundle";
// import portfolioList from "../../data/portfolio-data";
import { motion } from "framer-motion";

const PortfolioSlider = ({imagenes}) => {

    console.log("estas son las imagenes", imagenes)
  return (
    <>
      <section className="portfolio-area pt-120 pb-90 portfolio-bg portfolio-full-width">
        <div className="containers">
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="col-lg-8">
              <div className="section-title style-2 text-center">
                <span className="section-subtitle">[ showcase ]</span>
                <h2 className="section-main-title mb-45">watch our gallery</h2>
              </div>
            </div>
          </div>
          <div
            className="portfolio-wrapper portfolio-slide-wrapper wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="swiper-container portfolio-active-style-2">
              <div className="swiper-wrapper">
                <PhotoProvider
                  speed={() => 800}
                  easing={(type) =>
                    type === 2
                      ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                      : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }
                >
                  <Swiper
                    modules={[Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplaydisableoninteraction={"false"}
                    loop={true}
                    observer={true}
                    observeParents={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: true,
                    }}
                    pagination={{
                      clickable: true,
                      el: ".portfolio-pagination",
                    }}
                    breakpoints={{
                      500: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 5,
                      },
                    }}
                  >
                    {imagenes.map((item, id) => {
                      return (
                        <SwiperSlide key={id}>
                          <motion.div
                            animate={{ scale: 1.5 }}
                            initial={{ scale: 0.8 }}
                            exit={{ scale: 1 }}
                            transition={{ duration: 5 }}
                            layout
                            key={item.id}
                            className="tp-creative-item"
                          >
                            <div className="swiper-slidess">
                              <div className="portfolio-single portfolio-hover-style style-2">
                                <div className="portfolio-thumb">
                                  <a>
                                  <img src={`https://activag10-panel-laravel.orioncolombia.com/${item.url}`} alt="" />
                                  </a>
                                  <div className="portfolio-content">
                                    <a className="portfolio-hover-bg"></a>
                                    <div className="portfolio-inner">
                                      
                                      <span>
                                        <PhotoView src={item.portfolioImg}>
                                          <button className="icon-btn image-popups mb-4 pb-4">
                                            <i className="fas fa-eye"></i>{" "}
                                          </button>
                                        </PhotoView>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </PhotoProvider>
              </div>
              <div className="portfolio-style-2-pagination-wrapper mt-50">
                <div className="portfolio-pagination portfolio-style-2-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSlider;
