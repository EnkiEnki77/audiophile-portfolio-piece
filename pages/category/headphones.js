import React from 'react'
import styled from 'styled-components'
import Footer from '../../Components/Footer';
import HeadWithNav from '../../Components/HeadWithNav';
import MobileNav from '../../Components/MobileNav';
import Products from '../../Components/Products';
import SiteMessage from '../../Components/SiteMessage';

const CategoryEarphones = () => {
    return (
        <CategoryEarphonesContainer>
            <HeadWithNav/>
            <Products category='HEADPHONES' />
            <MobileNav/>
            <SiteMessage/>
            <Footer/>
        </CategoryEarphonesContainer>
    )
}

export const CategoryEarphonesContainer = styled.div`
  width: 100%;
`;

export default CategoryEarphones
