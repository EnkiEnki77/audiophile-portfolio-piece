
import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import HeadWithNav from '../Components/HeadWithNav'
import MobileNav from '../Components/MobileNav'
import SiteMessage from '../Components/SiteMessage'

const ProductDetailSpeakers1 = () => {
  return (
    <ProductDetailSpeakers1Container>
        <HeadWithNav/>
        <MobileNav/>
        <SiteMessage/>
        <Footer/>
    </ProductDetailSpeakers1Container>
  )
}

export const ProductDetailSpeakers1Container = styled.div`
  
`;

export default ProductDetailSpeakers1