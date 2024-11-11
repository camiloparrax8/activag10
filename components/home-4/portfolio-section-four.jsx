import Link from "next/link";
import React from "react";
import portfolioList from "../../data/portfolio-data";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { getLanguage, getTranslation } from "../../utils/i18n";

const language = getLanguage();

const PortfolioSectionFour = () => {
  const lightboxImages = portfolioList.map((img) => img.portfolioImg);
  const images = lightboxImages;

  return (
    <>
      <section className="portfolio-area pt-120 pb-90 portfolio-bg fix">
        <div className="container">
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="col-lg-8">
              <div className="section-title style-4 text-center">
                <span className="section-subtitle">
                  {getTranslation(
                    language,
                    "home.portfolio.general.section-subtitle"
                  )}
                </span>
                <h2 className="section-main-title mb-45">
                  {getTranslation(
                    language,
                    "home.portfolio.general.section-main-title"
                  )}
                </h2>
              </div>
            </div>
          </div>
          <PhotoProvider
            speed={() => 800}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            {portfolioList && (
              <div
                className="portfolio-wrapper portfolio-hover-items-wrapper style-4 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="portfolio-shape-1"></span>
                <i className="flaticon-gardening-1 portfolio-shape-2"></i>
                {portfolioList.map((item, index) => (
                  <div
                    className="portfolio-single portfolio-hover-style style-4"
                    key={index}
                  >
                    <div className="portfolio-thumb">
                      <a>
                        <img src={item.portfolioImg} alt="" />
                      </a>
                      <div className="portfolio-content">
                        <a className="portfolio-hover-bg"></a>
                        <div className="portfolio-inner">
                          <div className="portfolio-inner-text">
                            <span className="portfolio-tag">
                              {item.portfolioTag}
                            </span>
                            <h4 className="portfolio-title">
                              <Link href={`/shop-details/${item.id}`}>
                                <a>{item.portfolioTitle}</a>
                              </Link>
                            </h4>
                          </div>
                          <span>
                            <PhotoView src={item.portfolioImg}>
                              <button className="icon-btn image-popups">
                                <i className={item.portfolioIcon}></i>
                              </button>
                            </PhotoView>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </PhotoProvider>
          {/* <div className="portfolio-btn style-4 mt-40 mb-30 text-center wow fadeInUp" data-wow-delay=".3s">
                        <Link href="/portfolio"><a className="fill-btn">Load More<i className="fal fa-plus"></i></a></Link>
                    </div> */}
        </div>
      </section>
    </>
  );
};

export default PortfolioSectionFour;
