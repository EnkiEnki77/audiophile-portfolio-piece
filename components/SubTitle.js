import React from 'react'
import styled from 'styled-components';

export const Subtitle = ({className, children}) => {
  return (
    <Paragraph className={className}>{children}</Paragraph>
  )
}

const Paragraph = styled.p`
  font-size: 13px;
  line-height:25px;
  
  letter-spacing:1px;
  font-weight:700;
  text-transform: uppercase;
  color: ${props => props.theme.main};
  margin: 0;
`;