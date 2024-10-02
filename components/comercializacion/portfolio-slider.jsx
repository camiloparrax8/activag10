import Link from 'next/link';
import React from 'react';
import { Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
// Import Swiper styles
import 'swiper/css/bundle';
import portfolioList from './portfolio-data';
import { motion } from "framer-motion";
import { getLanguage, getTranslation } from "../../utils/i18n";




const PortfolioSlider = () => {
const language = getLanguage();

    return (
        <>
            <section className="portfolio-area pt-120 pb-90 portfolio-bg portfolio-full-width">
                <div className="containers">
                    <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-8">
                            <div className="section-title style-2 text-center">
                                <span className="section-subtitle">[ {getTranslation(language, 'comercializacion.product.subtitle')} ]</span>
                                <h2 className="section-main-title mb-45"> {getTranslation(language, 'comercializacion.product.title')} </h2>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-wrapper portfolio-slide-wrapper mb-30 wow fadeInUp" data-wow-delay=".3s">
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
                                        disableOnInteraction: true
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: '.portfolio-pagination',
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
                                        }
                                    }}

                                >
                                  
                                    {portfolioList.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <motion.div animate={{ scale: 1 }}
                                                    initial={{ scale: 0.9 }}
                                                    exit={{ scale: 1 }}
                                                    transition={{ duration: 0.8 }} layout
                                                    key={item.id} className="tp-creative-item">
                                                    <div className="swiper-slidess">
                                                        <div className="portfolio-single portfolio-hover-style style-2">
                                                            <div className="portfolio-thumb">
                                                                <Link href={`/portfolio-details/${item.id}`}><a><img src={item.portfolioImg} alt="" /></a></Link>
                                                                <div className="portfolio-content">
                                                                    <Link href={`/portfolio-details/${item.id}`}><a className="portfolio-hover-bg"></a></Link>
                                                                    <div className="portfolio-inner">
                                                                        <div className="portfolio-inner-text">
                                                                            <span className="portfolio-tag">{item.portfolioTag}</span>
                                                                            <h4 className="portfolio-title"><Link href={`/portfolio-details/${item.id}`}><a>{item.portfolioTitle}</a></Link></h4>
                                                                        </div>
                                                                        <span>
                                                                        <PhotoView src={item.portfolioImg}>
                                                                            <button className="icon-btn image-popups"><i className={item.portfolioIcon}></i></button>
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