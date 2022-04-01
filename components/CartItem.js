import React from 'react'
import Image from 'next/image'
import {H5} from './H5'
import styled from 'styled-components';
import CartItemImg from '../public/assets/cart/image-xx99-mark-one-headphones.jpg'
import { Overline } from './Overline';


const CartItem = () => {
  return (
    <CartCont>
        <CartItemInfoCont>
            <CartImg style={{borderRadius: '8px'}}src={CartItemImg} width='64px' height='64px'/>
            <CartItemInfo>
                <CartItemName>XX99 MK II</CartItemName>
                <CartItemPrice>$2,999</CartItemPrice>
            </CartItemInfo>
        </CartItemInfoCont>
        <CartItemCount>x1</CartItemCount>
    </CartCont>
  )
}

const CartCont = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartItemInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content:center;
`;

const CartImg  = styled(Image)`
  
`;

const CartItemInfoCont = styled.div`
  display: flex;
   gap: 16px;
`;

const CartItemName = styled.p`
  margin: 0;
  font-weight: 700;
font-size: 15px;
line-height: 25px;
color: #000000;

`;

const CartItemPrice = styled.p`
  font-weight: 700;
font-size: 14px;
line-height: 25px;
color: #000000;
opacity: 0.5;
margin: 0;
`;

const CartItemCount = styled.p`
  
`;

export default CartItem