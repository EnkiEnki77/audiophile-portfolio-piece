import React from 'react'
import Image from 'next/image'
import {H5} from './H5'
import styled from 'styled-components';


const CartItem = () => {
  return (
    <CartCont>
        {/* <CartImg src=/> */}
        <CartItemInfoCont>
            <CartItemName></CartItemName>
            <CartItemPrice></CartItemPrice>
        </CartItemInfoCont>
        <CartItemCount></CartItemCount>
    </CartCont>
  )
}

const CartCont = styled.div`
  
`;

const CartImg  = styled(Image)`
  
`;

const CartItemInfoCont = styled.div`
  
`;

const CartItemName = styled.p`
  
`;

const CartItemPrice = styled(H5)`
  
`;

const CartItemCount = styled.p`
  
`;

export default CartItem