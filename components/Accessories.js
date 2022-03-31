import React from 'react'
import { Body } from './Body';
import styled from 'styled-components';

const Accessories = (props) => {
  return (
    <AccessoryCont>
      <AccCount>{`${props.quantity}x`}</AccCount>
      <Accesory>{props.item}</Accesory>
    </AccessoryCont>
  )
}

const AccessoryCont  = styled.div`
  display: flex;
`;

const AccCount = styled(Body)`
  color: ${props => props.theme.body};
  margin-right: 22px;
`;

const  Accesory= styled(Body)`
  
`;



export default Accessories