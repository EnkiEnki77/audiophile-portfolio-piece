import React from 'react'
import styled from 'styled-components';

export const H5 = ({className, children}) => {
  return (
    <Head1 className={className}>{children}</Head1>
  )
}

const Head1 = styled.h5`
  font-size: 24px;
  line-height:33px;
  letter-spacing:1.7px;
  font-weight:700;
  text-transform: uppercase;
  margin: 0;
`;