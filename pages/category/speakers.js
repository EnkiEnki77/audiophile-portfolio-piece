import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer';
import HeadWithNav from '../Components/HeadWithNav';
import MobileNav from '../Components/MobileNav';
import Products from '../Components/Products';
import SiteMessage from '../Components/SiteMessage';

const CategorySpeakers = () => {
    return (
        <CategorySpeakersContainer>
            <HeadWithNav/>
            <Products category='Speakers'/>
            <MobileNav/>
            <SiteMessage/>
            <Footer/>
        </CategorySpeakersContainer>
    )
}

export const CategorySpeakersContainer = styled.div`
  width: 100%;
`;

export default CategorySpeakers
