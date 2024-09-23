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
            <Breadcrumb breadTitle={getTranslation(language, 'agro.index.breadTitle')} breadSubtitle={getTranslation(language, 'agro.index.breadSubtitle')} breadHome={getTranslation(language, 'agro.index.breadHome')} breadMenu={getTranslation(language, 'agro.index.breadMenu')} />
            {/* <BlogSectionMain /> */}
            <FooterFour />
        </main>
    );
};

export default index;