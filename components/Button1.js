import React from 'react'
import styled from 'styled-components'

const Button1 = (props) => {
  return (
    <Button>{props.children}</Button>
  )
}

 const Button = styled.button`
  background: ${props => props.theme.body};
  width: 10rem;
  height: 3rem;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  color: ${props => props.theme.secondary};

  &:hover{
      background: ${props => props.theme.accentColor};
      cursor: pointer;
  }
`;

export default Button1