import Link from "next/link";
import React from "react";
import { getLanguage, getTranslation } from "../../utils/i18n";
const language = getLanguage();

const FooterFour = () => {
  return (
    <footer className="footer4-bg">
      <div className="footer-area footer-area4 footer-area4-bg pt-120 pb-120">
        <div className="footer-4-bg-img">
          <img src="/assets/img/bg/footer-4-bg.jpg" alt="" />
        </div>
        <div className="container">
          <div className="footer4-inner footer-4-plant-shape">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="footer-widget footer4-widget footer4-widget1 mb-0">
                  <div className="footer-logo">
                    <Link href="/">
                      <a>
                        <img src="/assets/img/logo/logo-w.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="footer-text">
                    <p>
                      {getTranslation(language, "home.footer.footer-text")}: +57
                      3012546886 <br />
                      calle 33 #4-27 Tierralta
                    </p>
                  </div>
                  <div className="footer-btn">
                    <Link href="/contact">
                      <a className="border-btn">
                        <i className="fal fa-farm"></i>
                        <span>
                          {getTranslation(
                            language,
                            "home.footer.footer-btn-text"
                          )}
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div className="footer-social">
                    <span>
                      {getTranslation(
                        language,
                        "home.footer.footer-social-text"
                      )}
                      :
                    </span>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a href="https://www.unicordoba.edu.co/">
                            <i className="fab fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/activag10/?igsh=bm9ubndzenRqMzN4#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/channel/UCWpOq0WMvRYYYGM_oAo4h2w">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;
