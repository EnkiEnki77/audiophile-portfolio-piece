import React from 'react'
import styled from 'styled-components';

export const H2 = (props) => {
  return (
    <Head2>{props.children}</Head2>
  )
}

const Head2 = styled.h2`
  font-size: 40px;
  line-height:44px;
  letter-spacing:1.5px;
  font-weight:700;
  text-transform: uppercase;
  margin: 0;
`;