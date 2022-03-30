import React from 'react'
import styled from 'styled-components'
import Footer from '../../Components/Footer'
import HeadWithNav from '../../Components/HeadWithNav'
import MobileNav from '../../Components/MobileNav'
import SiteMessage from '../../Components/SiteMessage'

const ProductDetailEarphones = () => {
  return (
    <ProductDetailEarphonesContainer>
        <HeadWithNav/>
        <MobileNav/>
        <SiteMessage/>
        <Footer/>
    </ProductDetailEarphonesContainer>
  )
}

export const ProductDetailEarphonesContainer = styled.div`
  
`;

export default ProductDetailEarphones