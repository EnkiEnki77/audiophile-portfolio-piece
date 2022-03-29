import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import HeadWithNav from '../Components/HeadWithNav'
import MobileNav from '../Components/MobileNav'
import SiteMessage from '../Components/SiteMessage'

const Checkout = () => {
    return (
    <CheckoutContainer>
        <HeadWithNav/>
        
        <Footer/>
    </CheckoutContainer>
    )
}

export const CheckoutContainer = styled.div`
  
`;

export default Checkout
