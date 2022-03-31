import React from 'react'
import { Body } from './Body'
import Button1 from './Button1'
import Counter from './Counter'
import { H2 } from './H2'
import { Overline } from './Overline'
import { Subtitle } from './SubTitle'
import styled from 'styled-components'
import Image from 'next/image'
import newImage from '../public/assets/home/mobile/audiophile.png'
import { H6 } from './H6'
import { H4 } from './H4'

const ItemDetail = ({className, image}) => {
  return (
    <ItemDetailCont>
        <ItemImage style={{borderRadius: '8px'}} src={image} width="327px" height="327px"/>
        <NewProduct>New Product</NewProduct>
        <ItemName>YX1 WIRELESS EARPHONES</ItemName>
        <ItemDescription>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</ItemDescription>
        <ItemPrice className={className}>$ 599</ItemPrice>
        <AddToCart>
            <Counter/>
            <Button1>add to cart</Button1>
        </AddToCart>
    </ItemDetailCont>
  )
}

const ItemDetailCont = styled.div`
  width: 100%;
  padding:0 24px ;
  display: flex ;
  flex-flow:column;
  gap: 24px;
  margin-bottom: 88px;
`;

const ItemImage = styled(Image)`
  
`;

const NewProduct = styled(Overline)`
  margin-bottom: 7px;
`;

const ItemName = styled(H4)`
  
`;

const ItemDescription = styled(Body)`
  
`;

const ItemPrice = styled(H6)`
  margin-bottom: 7px;
`;

const AddToCart = styled.div`
  display: flex;
  gap: 16px;
`;

export default ItemDetail