import {React, useState} from 'react'
import styled from 'styled-components';

const Numbers = () => {
    const [count, setCount] = useState(0)

    function decrement(){
        setCount(count - 1)
    }

    function increment(){
        setCount(count + 1)
    }
  return (
    <div>
        <Counter>
            <Minus onClick = {decrement()}>-</Minus>
            <Number>{count}</Number>
            <Plus onClick = {increment()}>+</Plus>
        </Counter>
    </div>
  )
}

export const Counter = styled.div`
  width: 120px;
  height: 48px; 
  background-color:var(--color3);
  display: flex;
`;

export const Minus = styled.div`
  flex-basis: 33.33%;
  height: 100%;

  &:hover{
      color: var(--color1)
  }
`;

export const Number = styled.h1`
  flex-basis: 33.33%;
  height: 100%;
`;

export const Plus = styled.div`
  flex-basis: 33.33%;
  height: 100%;

  &:hover{
      color: var(--color1)
  }
`;

export default Numbers