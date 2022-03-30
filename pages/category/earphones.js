import React from 'react'
import styled from 'styled-components'
import Footer from '../../Components/Footer';
import HeadWithNav from '../../Components/HeadWithNav';
import MobileNav from '../../Components/MobileNav';
import Products from '../../Components/Products';
import SiteMessage from '../../Components/SiteMessage';
import ProductImage from '../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'

const CategoryEarphones = () => {
    return (
        <CategoryEarphonesContainer>
            <HeadWithNav/>
            <Products category='EARPHONES' image = {ProductImage} name = 'XX99 Mark II Headphones' description ='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'/>
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
