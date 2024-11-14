import Link from "next/link";
import React from "react";
import { useState } from "react";
import useGlobalContext from "../../hooks/use-context";
import { getLanguage, getTranslation, setLanguage } from "../../utils/i18n";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const [home, setHome] = useState(false);
  const [process, setProcess] = useState(false);

  const language = getLanguage();

  return (
    <>
      <div className="fix">
        <div className={`side-info ${showSidebar ? "info-open" : ""}`}>
          <div className="side-info-content">
            <div className="offset-widget offset-logo mb-40">
              <div className="row align-items-center">
                <div className="col-9">
                  <Link href="/">
                    <a>
                      <img src="/assets/img/logo/logo-w.png" alt="Logo" />
                    </a>
                  </Link>
                </div>
                <div className="col-3 text-end">
                  <button
                    className="side-info-close"
                    onClick={() => setShowSidebar(false)}
                  >
                    <i className="fal fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- side-mobile-menu start --> */}
            <nav className="side-mobile-menu d-block d-xl-none mm-menu">
              <ul>
                <li
                  className={`menu-item-has-children has-droupdown ${home ? "active" : ""}`}
                >
                  <a
                    onClick={() => {
                      setHome(!home);
                    }}
                  >
                    <i
                      className="fal fa-globe"
                      style={{ marginRight: "5px" }}
                    ></i>
                    {getTranslation(language, "language.title")}
                  </a>
                  <ul
                    onClick={() => setShowSidebar(false)}
                    className={`sub-menu ${home ? "active" : ""}`}
                  >
                    <li>
                      <a onClick={() => setLanguage("es")}>
                        {getTranslation(language, "language.es")}
                      </a>
                    </li>
                    <li>
                      <a onClick={() => setLanguage("en")}>
                        {getTranslation(language, "language.en")}
                      </a>
                    </li>
                    {/* <li>
                      <a onClick={() => setLanguage("em")}>
                        {getTranslation(language, "language.em")}
                      </a>
                    </li> */}
                  </ul>
                </li>
                <li>
                  <Link href="/">
                    {getTranslation(language, "header.menu.home")}
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    {getTranslation(language, "header.menu.about")}
                  </Link>
                </li>
                <li
                  className={`menu-item-has-children has-droupdown ${process ? "active" : ""}`}
                >
                  <a
                    onClick={() => {
                      setProcess(!process);
                    }}
                  >
                    {getTranslation(language, "header.menu.procesos.title")}
                  </a>
                  <ul
                    onClick={() => setShowSidebar(false)}
                    className={`sub-menu ${process ? "active" : ""}`}
                  >
                    <li>
                      <Link href="/procesos/agro">
                        {getTranslation(language, "header.menu.procesos.agro")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/procesos/transformacion">
                        {getTranslation(
                          language,
                          "header.menu.procesos.transformacion"
                        )}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/blog">
                    {getTranslation(language, "header.menu.blog")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    {getTranslation(language, "header.menu.contact")}
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="offset-widget offset-social mb-30">
              <div className="footer-social">
                <span>Connect:</span>
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
      <div
        onClick={() => setShowSidebar(false)}
        className={`offcanvas-overlay ${showSidebar ? "overlay-open" : ""}`}
      ></div>
    </>
  );
};

export default Sidebar;
