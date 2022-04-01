import React from 'react'
import styled from 'styled-components'
import Button1 from '../components/Button1'
import CartItem from '../components/CartItem'
import Footer from '../Components/Footer'
import { H4 } from '../components/H4'
import { H5 } from '../components/H5'
import { H6 } from '../components/H6'
import HeadWithNav from '../Components/HeadWithNav'
import MobileNav from '../Components/MobileNav'
import RadioInput from '../components/RadioInput'
import SiteMessage from '../Components/SiteMessage'
import { Subtitle } from '../components/SubTitle'
import TextInput from '../components/TextInput'

const Checkout = () => {
    return (
    <CheckoutContainer>
        <HeadWithNav/>
        <CheckoutFormCont>
            <GoBack>Go Back</GoBack>
            <CheckoutForm>
                <CheckoutHeader>Checkout</CheckoutHeader>
                <InputSection>
                    <SectionTitle>Billing Details</SectionTitle>
                    <InputContainer >
                        <TextInput/>
                        <TextInput/>
                        <TextInput/>
                    </InputContainer>
                </InputSection>
                <InputSection>
                    <SectionTitle>Shipping Info</SectionTitle>
                    <InputContainer >
                        <TextInput/>
                        <TextInput/>
                        <TextInput/>
                        <TextInput/>
                    </InputContainer>
                </InputSection>
                <InputSection>
                        <SectionTitle>Payment Details</SectionTitle>
                    <InputContainer>
                        <div style={{display: 'flex', flexFlow: 'column', gap:'16px'}}>
                            <Label>Payment Method</Label>
                            <RadioInput/>
                            <RadioInput/>
                        </div>
                        <TextInput/>
                        <TextInput/>
                    </InputContainer>
                </InputSection>
            </CheckoutForm>
            <SummaryCont>
                <SummaryTitle>Summary</SummaryTitle>
                <CartItemCont>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </CartItemCont>
                <TotalsCont>
                    <TotalCont>
                        <Total>Total</Total>
                        <TotalNum>$5000</TotalNum>
                    </TotalCont>
                    <ShippingCont>
                        <Shipping>Shipping</Shipping>
                        <ShippingNum>$5000</ShippingNum>
                    </ShippingCont>
                    <VatCont>
                        <Vat>VAT(included)</Vat>
                        <VatNum>$5000</VatNum>
                    </VatCont>
                    <GrandTotalCont>
                        <GrandTotal>Grand Total</GrandTotal>
                        <GrandTotalNum>$5000</GrandTotalNum>
                    </GrandTotalCont>
                </TotalsCont>
                <CheckoutButton>Continue and pay</CheckoutButton>
            </SummaryCont>
        </CheckoutFormCont>
        <Footer/>
    </CheckoutContainer>
    )
}

 const CheckoutContainer = styled.div`
  display: flex;
  flex-flow: column;
  
  /* padding: 24px;
  background: ${props => props.theme.accent}; */
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
`;

const Label = styled.label`
  font-weight: 700;
font-size: 12px;
line-height: 16px;
color: #000000;
`;

const GoBack = styled.p`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
`;

const CheckoutFormCont = styled.div`
  display: flex;
  flex-flow: column;
  padding: 90px 24px;
  background: ${props => props.theme.accent};
`;

const CheckoutForm = styled.div`
  width: 100%;
  height: 1378px;
  border-radius: 8px;
  display: flex;
  flex-flow: column;
  padding: 24px 24px;
  background: white;
`;

const CheckoutHeader = styled(H4)`
  margin-bottom: 32px;
`;

const InputSection = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
  margin-bottom: 32px;
`;

const SectionTitle = styled(Subtitle)`
  color: ${props => props.theme.body};
`;

const SummaryCont = styled.div`
  width: 100%;
  
  border-radius: 8px;
  background-color: white;
  margin-top: 32px;
  padding: 32px 24px;
  display: flex;
  flex-flow: column;
  gap: 32px;
`;

const CartItemCont = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
`;

const TotalsCont = styled.div`
  
`;

const SummaryTitle = styled(H6)`
  
`;

const TotalCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Total = styled.p`
  font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
opacity: 0.5;
margin: 0;
`;

const TotalNum = styled(H6)`
  
`;

const ShippingCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Shipping = styled.p`
    font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
opacity: 0.5;
margin: 0;
`;

const ShippingNum = styled(H6)`
  
`;

const VatCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Vat = styled.p`
    font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
opacity: 0.5;
margin: 0;
`;

const VatNum = styled(H6)`
  
`;

const GrandTotalCont = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GrandTotal = styled.p`
    font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
opacity: 0.5;
margin: 0;
`;

const GrandTotalNum = styled(H6)`
  color: ${props => props.theme.body};
`;

const CheckoutButton = styled(Button1)`
  width: 100%;
`;

export default Checkout
