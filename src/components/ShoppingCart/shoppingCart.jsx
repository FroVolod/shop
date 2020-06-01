import React from 'react';

import { MyLayout } from 'components/myLayout';
import { ShoppingCartItems } from 'components/ShoppingCart';
import { EmptyShoppingCart } from './EmptyShoppingCart';


export const ShoppingCartComponent = ({ cartItems }) => {
  const contentShoppingCart = (
    <div>
      <h1>Корзина</h1>
      <ShoppingCartItems
      />
      <h5>
        Общая стоимость покупки {cartItems.reduce((sum, el) => sum + el.price * el.count, 0)} грн.
      </h5>
    </div>
  );
  const emptyShoppingCart = (
    <div>
      <h1>Корзина</h1>
      <EmptyShoppingCart />
    </div>
  );
  if (!cartItems.length) {
    return (
      <MyLayout content={emptyShoppingCart} />
    )
  };
  return (
    <MyLayout content={contentShoppingCart} />
  )
};
