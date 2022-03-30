import React from 'react'
import styled from 'styled-components'
import Product from './Product';
import productData from '../public/productData.json'


const Products = (props) => {
  console.log(productData)

  const products = productData.filter(product => product.category === props.category.toLowerCase())
  console.log(products)

  const images = products.map(product => product.image.mobile.substring(1)) 
  console.log(images)
    
  return (
    <ProductContainer>  
        <CategoryHeader>
            <Category>{props.category}</Category>
        </CategoryHeader>
        {products.map((product, i) => <Product key={product.id} new={props.new} name={product.name} description={product.description} image={images[i]}/>)}
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