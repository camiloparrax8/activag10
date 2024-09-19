import React from 'react';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BlogSectionMain from './blog-section-main';
import FooterFour from '../../layout/footers/footerfour';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'blog & insights'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'Blog'} />
            <BlogSectionMain />
            <FooterFour />
        </main>
    );
};

export default index;