import React from 'react'
import styled from 'styled-components';

export const H4 = (props) => {
  return (
    <Head4>{props.children}</Head4>
  )
}

const Head4 = styled.h4`
  font-size: 28px;
  line-height:38px;
  letter-spacing:2px;
  font-weight:700;
  text-transform: uppercase;
  margin: 0;
`;