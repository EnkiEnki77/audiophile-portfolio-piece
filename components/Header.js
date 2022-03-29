import {React, useState} from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import MainLogo from '../assets/home/mobile/audiophile.png'
import { Link } from 'react-router-dom';

const Header = (props) => {
    

  return (
    <Head>
        <Nav onClick={props.toggle}/>
        <Link to='/'><Logo src={MainLogo}/></Link>
        <Link to='/checkout'><Cart/></Link>
    </Head>
  )
}

export const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:90px;
  width:100%;
  background-color: #000000;
  padding: 1.5rem;
  position: fixed;
  z-index:3;
 
`;

export const Nav = styled(GiHamburgerMenu)`
  color: #FFFFFF;
  font-size: 25px;
`;

export const Logo = styled.img`
  color: #FFFFFF;
  width: 143px;
  height: 25px;
`;

export const Cart = styled(AiOutlineShoppingCart)`
  color: #FFFFFF;
  font-size: 25px;
`;

export default Header