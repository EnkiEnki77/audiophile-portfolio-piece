import React from 'react'
import styled from 'styled-components';

export const H5 = ({className, children}) => {
  return (
    <Head5 className={className}>{children}</Head5>
  )
}

const Head5 = styled.h5`
  font-size: 24px;
  line-height:33px;
  letter-spacing:1.7px;
  font-weight:700;
  text-transform: uppercase;
  margin: 0;
`;