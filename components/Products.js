import React from 'react'
import styled from 'styled-components'
import Product from './Product';


const Products = (props) => {
    
  return (
    <ProductContainer>
        <CategoryHeader>
            <Category>{props.category}</Category>
        </CategoryHeader>
        <Product image = {props.image} name = {props.name} description = {props.description}/>
    </ProductContainer>
  )
}

export const  ProductContainer = styled.div`
  width: 100%;
  padding-top:90px;
  margin-bottom: 88px;
`;

export const CategoryHeader =  styled.div`
  width: 100%;
  height: 100px;
  background-color:#000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Category = styled.h1`
margin: 0;
  font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;
text-align: center;
letter-spacing: 2px;
text-transform: uppercase;

color: #FFFFFF;
`;

export default Products