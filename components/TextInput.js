import React from 'react'
import styled from 'styled-components'

const TextInput = () => {
  return (
    <Container>
        <Label>Name</Label>
        <InputError>Wrong format</InputError>
        <InputContainer>
            <Input type="text" placeholder="Insert your name"/>
        </InputContainer>
    </Container>
  )
}

 const Container  = styled.div`
  height: 81px;
  width: 100%;
  max-width: 309px;
  display: flex;
  gap:9px 0;
  flex-flow: row wrap;
`;

 const Label = styled.label`
  font-weight: 700;
font-size: 12px;
line-height: 16px;
letter-spacing: -0.214286px;
/* flex-basis: 45%; */

text-align: center;
align-self: flex-end;
flex-basis: 50%;
color: #000000;
text-align: start;
`;

 const InputError = styled.p`
  flex-basis: 50%;
  margin: 0;
  
  font-weight: 700;
font-size: 12px;
line-height: 16px;
text-align: right;
letter-spacing: -0.214286px;

color: #CD2C2C;;
`;

 const InputContainer = styled.div`
  background: #FFFFFF;
border: 1px solid #CFCFCF;
box-sizing: border-box;
border-radius: 8px;
height: 56px;
width: 309px;
padding-left: 24px;
display: flex;
align-items: center;
`;

 const  Input = styled.input`
  width: 100%;
  border: none;

  font-weight: 700;
font-size: 14px;
line-height: 19px;
letter-spacing: -0.25px;

color: #000000;

&:focus{
    outline: none;
}
`;

export default TextInput