import {React, useState} from 'react'
import styled from 'styled-components'
import Button1 from './Button1'
import Image from 'next/image'



const Product = (props) => {
    
  return (
    <ProductContainer>
        <div style={{ marginBottom: '8px' }}><ProductImg src={props.image}  width='327px' height='356px'/></div>
        {props.new && <NewProduct>NEW PRODUCT</NewProduct>}
        <ProductName>{props.name}</ProductName>
        <ProductDescript>{props.description}</ProductDescript>
        <Button1>see product</Button1>
    </ProductContainer>
  )
}

export const ProductContainer = styled.div`
  width: 100%;
  padding:0 1.5rem;
  margin-top: 64px;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const ProductImg = styled(Image)`
  
  
`;

export const  NewProduct = styled.h3`
  font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
text-align: center;
letter-spacing: 10px;
text-transform: uppercase;
margin: 0;

color: #D87D4A;

`;

export const ProductName = styled.h2`
margin: 0;
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

export const  ProductDescript = styled.p`
margin: 0;
  font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
/* or 167% */

text-align: center;

color: #000000;

mix-blend-mode: normal;
opacity: 0.8;
`;


export default Product