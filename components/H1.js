import React from 'react'
import styled from 'styled-components';

export const H1 = (props) => {
  return (
    <Head1>{props.children}</Head1>
  )
}

const Head1 = styled.h1`
  font-size: 56px;
  line-height:58px;
  letter-spacing:2px;
  font-weight:700;
  text-transform: uppercase;
  margin: 0;
`;