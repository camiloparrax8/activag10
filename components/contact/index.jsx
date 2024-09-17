import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import ContactFormSection from './contact-form-section';
import ContactMapSection from './contact-map-section';
import FooterFour from '../../layout/footers/footerfour';
import { getLanguage, getTranslation } from "../../utils/i18n";

const language = getLanguage();


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={getTranslation(language, 'contact.index.breadTitle')} breadSubtitle={getTranslation(language, 'contact.index.breadSubtitle')} breadHome={getTranslation(language, 'contact.index.breadHome')} breadMenu={getTranslation(language, 'contact.index.breadMenu')} />
            <ContactFormSection />
            <ContactMapSection />
            <FooterFour />
        </main>
    );
};

export default index;