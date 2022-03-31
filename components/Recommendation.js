import React from 'react'
import Button1 from './Button1'
import Image from 'next/image'
import { H4 } from './H4'
import styled from 'styled-components';
import audio from '../public/assets/home/mobile/audiophile.png'
import { H5 } from './H5';

const Recommendation = (props) => {
  return (
    <RecommendationCont>
        <ImgCont>
            <div style={{width: '73px', height: '95px'}}><RecImg src={props.image} layout='fill' /></div>
        </ImgCont>
        <RecName>{props.name}</RecName>
        <Button1>see product</Button1>
    </RecommendationCont>
  )
}

const RecommendationCont = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 16px ;
`;

const ImgCont = styled.div`
  width: 100%;
  height: 120px;
  background: ${props => props.theme.mainColor};
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const RecImg = styled(Image)`
  
`;

const RecName = styled(H5)`
  
`;

export default Recommendation