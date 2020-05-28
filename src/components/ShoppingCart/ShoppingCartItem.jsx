import React from 'react';
import { Row, Col, Divider, InputNumber, Button } from 'antd';


export const ShoppingCartItem = ({name, image, count, price, onCountChange, deleteItem, index}) => {
  return (
    <div>
      <Divider orientation="left" />
      <Row jastify="center">
        <Col span={2}>
          <img alt="" src={image} style={{ width: 60 }} />
        </Col>
        <Col span={3}>
          {name}
        </Col>
        <Col span={3}>
          {price} грн.
        </Col>
        <Col span={3}>
          Количество
          <InputNumber
            min={1}
            value={count}
            onChange={(value) => onCountChange(value)}
          />
        </Col>
        <Col span={4}>
          Итого { price * count } грн.
        </Col>
        <Col span={4}>
          <Button type="danger" onClick={() => deleteItem(index)}>Удалить из корзины</Button>
        </Col>
      </Row>
    </div>
  )
}
