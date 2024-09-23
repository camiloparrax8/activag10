import React from 'react';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BlogSectionMain from './blog-section-main';
import FooterFour from '../../layout/footers/footerfour';
import { getLanguage, getTranslation } from "../../utils/i18n";

const language = getLanguage();


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={getTranslation(language, 'blog.index.breadTitle')} breadSubtitle={getTranslation(language, 'blog.index.breadSubtitle')} breadHome={getTranslation(language, 'blog.index.breadHome')} breadMenu={getTranslation(language, 'blog.index.breadMenu')} />
            <BlogSectionMain />
            <FooterFour />
        </main>
    );
};

export default index;