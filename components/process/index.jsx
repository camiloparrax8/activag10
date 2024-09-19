import React from 'react';

import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';


import FooterFour from '../../layout/footers/footerfour';
import { getLanguage, getTranslation } from "../../utils/i18n";

const language = getLanguage();


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={getTranslation(language, 'process.index.breadTitle')} breadSubtitle={getTranslation(language, 'process.index.breadSubtitle')} breadHome={getTranslation(language, 'process.index.breadHome')} breadMenu={getTranslation(language, 'process.index.breadMenu')} />
        
            <FooterFour />
        </main>
    );
};

export default index;