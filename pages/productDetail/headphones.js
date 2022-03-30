
import React from 'react'
import styled from 'styled-components'
import Footer from '../../Components/Footer'
import HeadWithNav from '../../Components/HeadWithNav'
import MobileNav from '../../Components/MobileNav'
import SiteMessage from '../../Components/SiteMessage'

const ProductDetailHeadphones1 = () => {
  return (
    <ProductDetailHeadphones1Container>
        <HeadWithNav/>
        <MobileNav/>
        <SiteMessage/>
        <Footer/>
    </ProductDetailHeadphones1Container>
  )
}

export const ProductDetailHeadphones1Container = styled.div`
  
`;

export default ProductDetailHeadphones1