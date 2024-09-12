import React from 'react';
import { getLanguage, setLanguage, getTranslation } from '../../utils/i18n';

const HeaderTopFour = () => {

    const language = getLanguage();
    console.log(language);
    return (
        <div className="header-top-area style-4 d-none d-lg-block">
            <div className="container">
                <div className="header-top-inner">
                    <div className="header-top-left">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p><a href="tel:78989700098">789 897 000 98</a></p>
                                </div>
                            </div>
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-envelope-open"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p><a href="mailto:info@gardomia.com">info@activag10.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-top-right">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="dropdown filter-item-btn">
                                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fal fa-globe"></i>{getTranslation(language, `language.${language}`)}<i className="fal fa-angle-down"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" onClick={() => setLanguage('es')}>{getTranslation(language, 'language.es')}</button></li>
                                        <li><button className="dropdown-item" onClick={() => setLanguage('en')}>{getTranslation(language, 'language.en')}</button></li>
                                        <li><button className="dropdown-item" onClick={() => setLanguage('em')}>{getTranslation(language, 'language.em')}</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopFour;