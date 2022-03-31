import React from 'react'
import styled from 'styled-components';

export const Body = ({className, children}, props) => {
  return (
    <Paragraph className={className}>{children}</Paragraph>
  )
}

const Paragraph = styled.p`
  font-size: 15px;
  line-height:25px;
  font-weight:500;
  opacity: 0.6;
  margin: 0;
`;
