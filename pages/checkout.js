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
                </CartItemCont>
                <TotalsCont>
                    <TotalCont>
                        <Total>Total</Total>
                        <TotalNum></TotalNum>
                    </TotalCont>
                    <ShippingCont>
                        <Shipping>Total</Shipping>
                        <ShippingNum></ShippingNum>
                    </ShippingCont>
                    <VatCont>
                        <Vat>Total</Vat>
                        <VatNum></VatNum>
                    </VatCont>
                    <GrandTotalCont>
                        <GrandTotal>Total</GrandTotal>
                        <GrandTotalNum></GrandTotalNum>
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
  height: 612px;
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

`;

const TotalsCont = styled.div`
  
`;

const SummaryTitle = styled(H6)`
  
`;

const TotalCont = styled.div`
  
`;

const Total = styled.p`
  
`;

const TotalNum = styled(H4)`
  
`;

const ShippingCont = styled.div`
  
`;

const Shipping = styled.p`
  
`;

const ShippingNum = styled(H4)`
  
`;

const VatCont = styled.div`
  
`;

const Vat = styled.p`
  
`;

const VatNum = styled(H4)`
  
`;

const GrandTotalCont = styled.div`
  
`;

const GrandTotal = styled.p`
  
`;

const GrandTotalNum = styled(H4)`
  
`;

const CheckoutButton = styled(Button1)`
  width: 100%;
`;
export default Checkout
