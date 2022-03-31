import React from 'react'
import styled from 'styled-components';

export const H3 = ({className, children}) => {
  return (
    <Head3 className={className}>{children}</Head3>
  )
}

const Head3 = styled.h3`
  font-size: 32px;
  line-height:36px;
  letter-spacing:1.15px;
  font-weight:700;
  text-transform: uppercase;
  margin: 0;
`;