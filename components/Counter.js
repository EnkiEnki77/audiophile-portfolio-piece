import React from 'react'
import styled from 'styled-components'

const Counter = () => {
  return (
    <CounterCont>
        <Decrement>-</Decrement>
        <Count>0</Count>
        <Increment>+</Increment>
    </CounterCont>
  )
}

const CounterCont = styled.div`
  display: flex;
  width: 7.5rem;
  height: 48px;
`;

const Decrement = styled.button`
  flex-basis: 33%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.mainColor};
  font-size:13px;

  &:hover{
      color: ${props => props.theme.body};;
  }
`;

const Count = styled.p`
  flex-basis: 33%;
  text-align: center;
  margin: 0;
  background-color: ${props => props.theme.mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:13px;
`;

const Increment = styled.button`
  flex-basis: 33%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3px;
  background-color: ${props => props.theme.mainColor};
  font-size:13px;

  &:hover{
      color: ${props => props.theme.body};;
  }
`;

export default Counter