import React from 'react'
import styled from 'styled-components'



const Button2 = (props) => {
  
  return (
        <ButtonTwo item1={props.item1}>
          {props.children}</ButtonTwo>
     
  )
}

 const ButtonTwo = styled.button`
  background: ${props => props.item1 ? props.theme.main : 'transparent'};
  width: 10rem;
  height: 3rem;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  border: 1.5px solid black;
  color: ${props => props.item1 ? props.theme.secondary : props.theme.secondaryColor};

  &:hover{
      background: ${props => props.theme.secondaryColor};
      color: ${props => props.theme.secondary};
      cursor: pointer;
  }
`;

export default Button2