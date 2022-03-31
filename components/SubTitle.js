import React from 'react'
import styled from 'styled-components';

export const Subtitle = (props) => {
  return (
    <Paragraph>{props.children}</Paragraph>
  )
}

const Paragraph = styled.p`
  font-size: 13px;
  line-height:25px;
  letter-spacing:1px;
  font-weight:700;
  text-transform: uppercase;
  color: ${props => props.theme.main};
`;