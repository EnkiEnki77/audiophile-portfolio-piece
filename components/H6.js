import React from 'react'
import styled from 'styled-components';

export const H6 = ({className, children}) => {
  return (
    <Head6 className={className}>{children}</Head6>
  )
}

const Head6 = styled.h6`
  font-size: 18px;
  line-height:24px;
  letter-spacing:1.3px;
  font-weight:700;
  text-transform: uppercase;
  margin: 0;
`;