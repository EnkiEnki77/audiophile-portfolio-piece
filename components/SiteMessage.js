import React from 'react'
import styled from 'styled-components'
import SiteMIMG from '../assets/shared/mobile/image-best-gear.jpg'

const SiteMessage = () => {
  return (
    <SiteMContainer>
        <SiteMImg src={SiteMIMG}/>
        <SiteMTitle>Bringing you the best audio gear</SiteMTitle>
        <SiteMDescript>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</SiteMDescript>
    </SiteMContainer>
  )
}

export const SiteMContainer = styled.div`
  width:100%;
 height: 698px;
  padding: 0 1.5rem;
  margin-top: 120px;
`;

export const  SiteMImg = styled.img`
  height: 300px;
width: 327px;
left: 0px;
top: 0px;
border-radius: 0px;

`;

export const  SiteMTitle = styled.h2`
  font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;
text-align: center;
letter-spacing: 1px;
text-transform: uppercase;

color: #000000;
`;

export const  SiteMDescript = styled.p`
  font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
/* or 167% */

text-align: center;

color: #000000;

mix-blend-mode: normal;
opacity: 0.5;
`;

export default SiteMessage