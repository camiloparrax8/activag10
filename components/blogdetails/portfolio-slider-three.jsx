import Link from 'next/link';
import React from 'react';
import { Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

// Import Swiper styles
import 'swiper/css/bundle';
// import portfolioList from '../../data/portfolio-data';
import { motion } from "framer-motion";
const PortfolioSliderThree = ({imagenes}) => {

    return (
        <>
            <section className="portfolio-area pt-60 pb-90  portfolio-full-width">
                <div className="portfolio-wrapper portfolio-slide-wrapper style-3 mb-30 wow fadeInUp" data-wow-delay=".3s">
                    <div className="swiper-container portfolio-active-style-3">
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
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true
                                }}
                                breakpoints={{
                                    600: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                    }
                                }}
                            >
                                {imagenes.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <motion.div animate={{ scale: 1 }}
                                                initial={{ scale: 0.9 }}
                                                exit={{ scale: 1 }}
                                                transition={{ duration: 0.8 }} layout
                                                key={item.id} className="tp-creative-item">
                                                <div className="swiper-slidess">
                                                    <div className="portfolio-single portfolio-hover-style style-3">
                                                        <div className="portfolio-thumb">
                                                            <Link href={`/portfolio-details/${item.id}`}><a><img src={`https://activag10-panel-laravel.orioncolombia.com/${item.url}`} alt="" /></a></Link>
                                                            <div className="portfolio-content">
                                                                <Link href={`/portfolio-details/${item.id}`}><a className="portfolio-hover-bg"></a></Link>
                                                                <div className="portfolio-inner">
                                                                    
                                                                    <span>
                                                                    <PhotoView src={`https://activag10-panel-laravel.orioncolombia.com/${item.url}`}>
                                                                        <button className="icon-btn image-popups"><i className="fas fa-eye"></i></button>
                                                                        </PhotoView>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            </PhotoProvider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSliderThree;