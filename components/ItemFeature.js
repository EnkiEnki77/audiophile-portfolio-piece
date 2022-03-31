import React from 'react'
import Accessories from './Accessories'
import { Body } from './Body';
import { H3 } from './H3';
import styled from 'styled-components';
import { H4 } from './H4';
import { H5 } from './H5';

const ItemFeature = (props) => {
  return (
    <FeatureContainer>
        <Features>Features</Features>
        <FeatureDescript>Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
        <br/>
        <br/>
The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.</FeatureDescript>
        <InTheBox>In The Box</InTheBox>
        {props.includes.map((include, i) => <Accessories key={i} quantity={include.quantity} item={include.item}/>)}
    </FeatureContainer>
  )
}

const FeatureContainer = styled.div`
  padding: 0 24px ;
  margin-bottom: 88px;
`;

const Features = styled(H5)`
  margin-bottom: 24px;
`;

const  FeatureDescript = styled(Body)`
  margin-bottom:113px;
`;

const  InTheBox = styled(H5)`
  margin-bottom:24px;
`;
export default ItemFeature