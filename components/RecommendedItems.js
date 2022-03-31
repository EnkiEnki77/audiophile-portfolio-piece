import React from 'react'
import { H5 } from './H5';
import Recommendation from './Recommendation';
import styled from 'styled-components';
import productData from '../public/productData.json'

const RecommendedItems = () => {

  const products = productData.filter(product => product.category === 'earphones')
  console.log(products)

  const image1 = products[0].others[0].image.mobile.substring(1)
  const image2 = products[0].others[1].image.mobile.substring(1)
  const image3 = products[0].others[2].image.mobile.substring(1)

  return (
    <RecommendedItemsCont>
        <YouMayAlsoLike>You may also like</YouMayAlsoLike>
        <Recommendation image={image1} name={products[0].others[0].name}/>
        <Recommendation image={image2} name={products[0].others[1].name}/>
        <Recommendation image={image3} name={products[0].others[2].name}/>
    </RecommendedItemsCont>
  )
}

const RecommendedItemsCont  = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 0 24px;
  align-items: center;
  gap: 40px;
  margin-bottom: 88px;
`;

const  YouMayAlsoLike = styled(H5)`
  
`;

export default RecommendedItems