import React from 'react';
import { Row, Col } from 'antd';
import { MyCard } from './Blocks';
import { MyLayout } from 'components/myLayout';


export const ProductListComponent = ({selectProductAction, data}) => {
  const renderCards = el => {
    return(
      <Col span={4}>
        <MyCard el={el} selectProduct={selectProductAction}></MyCard>
      </Col>
    )
  };
  const contentProductList = (
    <Row justify="space-around">
      {data.map(el => (renderCards(el)))}
    </Row>
  );
  return(
    <MyLayout content={ contentProductList } />
  )
}
