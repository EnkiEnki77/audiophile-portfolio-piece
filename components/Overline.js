import React from 'react'
import styled from 'styled-components';

export const Overline = ({className, children}) => {
  return (
    <OverlineCont className={className}>{children}</OverlineCont>
  )
}

const OverlineCont = styled.p`
  font-size: 14px;
  line-height:19px;
  letter-spacing:10px;
  font-weight:500;
  text-transform: uppercase;
  color: ${props => props.theme.body};
  margin: 0;
`;