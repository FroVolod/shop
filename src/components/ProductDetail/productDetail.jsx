import React from 'react';

import { MyLayout } from 'components/myLayout'


export const ProductDetailComponent = ({item}) => {
  return(
    <MyLayout content={
      <div>
        <h1>О продукте</h1>
        <p>{item.name}</p>
      </div>
      }
    />
  )
}
