import React from 'react'
import styled from 'styled-components'
import buttonArrow from '../public/assets/Path2.png'
import Image from 'next/image'
import Link from 'next/link'

const Button3 = (props) => {
  return (
    
        <Button3Cont>
            <Button3Text>SHOP</Button3Text>
            <Button3Arrow src={buttonArrow}/>
        </Button3Cont>
     
  )
}

 const Button3Cont = styled.div`
  width: 58px;
  height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover{
      p{
          color: ${props => props.theme.body}
      }
  }
`;

 const Button3Text = styled.p`
  font-weight: 700;
font-size: 13px;
line-height: 18px;
/* identical to box height */

letter-spacing: 1px;
text-transform: uppercase;

color: #000000;

mix-blend-mode: normal;
`;

 const Button3Arrow = styled(Image)`
  
`;

export default Button3