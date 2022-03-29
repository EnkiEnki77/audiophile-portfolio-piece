import React from 'react'
import styled from 'styled-components'

const RadioInput = () => {
  return (
    
        <InputContainer>
            <Input type="radio" />
            <Label>e-Money</Label>
        </InputContainer>
  )
}

 const Container  = styled.div`
  height: 81px;
  width: 309px;
  display: flex;
  flex-flow: row wrap;
`;

 const Label = styled.label`
 font-weight: 700;
font-size: 14px;
line-height: 19px;
letter-spacing: -0.25px;

color: #000000;
`;

//  const InputError = styled.p`
//   flex-basis: 50%;
//   margin: 0;
  
//   font-weight: 700;
// font-size: 12px;
// line-height: 16px;
// text-align: right;
// letter-spacing: -0.214286px;

// color: #CD2C2C;;
// `;

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
gap: 0 16px;
`;

 const  Input = styled.input`
    width: 20px;
    height:20px;
    margin: 0;
    color: ${props => props.theme.body};

    &:active { 
        background-color: ${props => props.theme.body} 
    }
`;

export default RadioInput