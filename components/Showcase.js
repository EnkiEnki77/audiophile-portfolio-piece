import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import newImage from '../public/assets/home/mobile/audiophile.png'
import productData from '../public/productData.json'


const Showcase = () => {
  const products = productData.filter(product => product.category === 'earphones')
  console.log(products)

  const image1 = products[0].gallery.first.mobile.substring(1)
  const image2 = products[0].gallery.second.mobile.substring(1)
  const image3 = products[0].gallery.third.mobile.substring(1)


  return (
    <ShowcaseCont>
        <ShowcaseImg1 style={{borderRadius:'8px'}} src={image1} width="100%" height="174px"/>
        <ShowcaseImg2 style={{borderRadius:'8px'}} src={image2} width="100%" height="174px"/>
        <ShowcaseImg3 style={{borderRadius:'8px'}} src={image3} width="100%" height="368px"/>
    </ShowcaseCont>
  )
}

const ShowcaseCont = styled.div`
  width:100%;
  height:756px;
  padding:0 24px;
  display: flex;
  flex-flow: column;
  gap: 20px;
  margin-bottom: 120px;
`;

const ShowcaseImg1 = styled(Image)`
  
`;

const ShowcaseImg2 = styled(Image)`
  
`;

const ShowcaseImg3 = styled(Image)`
  
`;

export default Showcase