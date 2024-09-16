import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import ContactFormSection from './contact-form-section';
import ContactMapSection from './contact-map-section';
import FooterFour from '../../layout/footers/footerfour';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'contact us'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'contact'} />
            <ContactFormSection />
            <ContactMapSection />
            <FooterFour />
        </main>
    );
};

export default index;