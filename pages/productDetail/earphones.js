import React from 'react'
import styled from 'styled-components'
import { Body } from '../../components/Body'
import Footer from '../../Components/Footer'
import HeadWithNav from '../../Components/HeadWithNav'
import ItemDetail from '../../components/ItemDetail'
import ItemFeature from '../../components/ItemFeature'
import MobileNav from '../../Components/MobileNav'
import RecommendedItems from '../../components/RecommendedItems'
import Showcase from '../../components/Showcase'
import SiteMessage from '../../Components/SiteMessage'
import productData from '../../public/productData.json'

const ProductDetailEarphones = () => {

  const products = productData.filter(product => product.category === 'earphones')
  console.log(products)

  const images = products.map(product => product.image.mobile.substring(1)) 
  console.log(images)

  return (
    <ProductDetailEarphonesContainer>
        <HeadWithNav/>
        <GoBack>Go Back</GoBack>
        <ItemDetail image = {images[0]}/>
        <ItemFeature includes={products[0].includes}/>
        <Showcase/>
        <RecommendedItems/>
        <HeadWithNav/>
        <MobileNav/>
        <SiteMessage/>
        <Footer/>
    </ProductDetailEarphonesContainer>
  )
}

 const ProductDetailEarphonesContainer = styled.div`
  
`;

const GoBack = styled(Body)`
  margin-left: 24px;
  padding-top: 106px;
  margin-bottom: 24px;
  position: sticky;
  z-index:3;
`;

export default ProductDetailEarphones