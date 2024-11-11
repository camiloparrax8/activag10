import React from "react";
import { getLanguage, setLanguage, getTranslation } from "../../utils/i18n";

const HeaderTop = () => {
  const language = getLanguage();

  return (
    <div className="header-top-area d-none d-lg-block">
      <div className="container container-big">
        <div className="header-top-inner">
          <div className="header-top-left">
            <div className="meta-items">
              <div className="meta-item">
                <div className="meta-item-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="meta-item-text">
                  <p>
                    <a href="tel:78989700098">789 897 000 98</a>
                  </p>
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-item-icon">
                  <i className="fas fa-envelope-open"></i>
                </div>
                <div className="meta-item-text">
                  <p>
                    <a href="mailto:info@gardomia.com">
                      redesactivag10@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="header-top-right">
            <div className="meta-items">
              <div className="dropdown filter-item-btn">
                <button
                  className="btn btn-language --green"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fal fa-globe"></i>
                  {getTranslation(language, `language.${language}`)}
                  <i className="fal fa-angle-down"></i>
                </button>
                <ul className="dropdown-menu menu-language">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setLanguage("es")}
                    >
                      {getTranslation(language, "language.es")}
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setLanguage("en")}
                    >
                      {getTranslation(language, "language.en")}
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setLanguage("em")}
                    >
                      {getTranslation(language, "language.em")}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
