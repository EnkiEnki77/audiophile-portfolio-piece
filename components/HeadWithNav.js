import {React, useState} from 'react'
import styled from 'styled-components'
import Header from './Header'
import MobileNav from './MobileNav'

const HeadWithNav = () => {
    const [toggle, setToggle] = useState(false)

    function handleNav(){
        setToggle(!toggle)
    }

  return (
            <HeaderContainer toggle ={toggle}>
                <Header toggle={handleNav}/>
                {toggle && <MobileNav header={true}/>}
            </HeaderContainer>
  )
}

export const HeaderContainer = styled.div`
  width: 100%;
  height: ${props => props.toggle ? '804px' : null};
  position: absolute;
  background-color: rgba(0,0,0,0.2);
 
`;

export default HeadWithNav