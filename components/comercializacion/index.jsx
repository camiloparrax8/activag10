import React from 'react';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
// import BlogSectionMain from './blog-section-main';
import FooterFour from '../../layout/footers/footerfour';
import { getLanguage, getTranslation } from "../../utils/i18n";

const language = getLanguage();


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={getTranslation(language, 'comercializacion.index.breadTitle')} breadSubtitle={getTranslation(language, 'comercializacion.index.breadSubtitle')} breadHome={getTranslation(language, 'comercializacion.index.breadHome')} breadMenu={getTranslation(language, 'comercializacion.index.breadMenu')} />
            {/* <BlogSectionMain /> */}
            <FooterFour />
        </main>
    );
};

export default index;