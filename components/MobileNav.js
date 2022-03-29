import React from 'react'
import styled from 'styled-components'
import Button3 from './Button3'
import Headphones from '../assets/cart/image-removebg-preview(41).png'
import Speakers from '../assets/cart/image-removebg-preview(38).png'
import Earphones from '../assets/cart/image-removebg-preview(42).png'

const MobileNav = (props) => {
  return (
    <NavContainer header = {props.header}>
        <NavUl>
            <NavItem>
                <NavImg src={Headphones}/>
                <Container>
                    <NavCategory>Headphones</NavCategory>
                    <Button3 route='/category/headphones'/>
                </Container>
            </NavItem>
            <NavItem>
                <NavImg src={Speakers}/>
                <Container>
                    <NavCategory>Speakers</NavCategory>
                    <Button3 route='/category/speakers'/>
                </Container>
            </NavItem>
            <NavItem>
                <NavImg src={Earphones}/>
                <Container>
                    <NavCategory>Earphones</NavCategory>
                    <Button3 route='/category/earphones'/>
                </Container>
            </NavItem>
        </NavUl>
    </NavContainer>
  )
}

export const NavContainer = styled.nav`
  width: 100%;
  height: 750px;
  position: ${props => props.header ? 'absolute' : null};
  padding-top: ${props => props.header ? '90px' : null};
  background-color: #ffffff;
  z-index:2;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  
`;

export const NavUl  = styled.ul`
  display: flex;
  flex-flow: column ;
  padding: 32px 1.5rem;
  height: 100%;
  gap:  16px;
`;

export const NavItem = styled.li`
  height: 217px;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  height:165px;
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 22px;
`;

export const  NavImg = styled.img`
  height: 104px;
width: 90px;
position: absolute;
top: 0;
`;

export const  NavCategory =  styled.h2`
  font-family: "Manrope";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 20px;
letter-spacing: 1.0714285373687744px;
text-align: center;
text-transform: uppercase;
`;

export default MobileNav