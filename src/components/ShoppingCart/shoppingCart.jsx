import React from 'react';

import { MyLayout } from 'components/myLayout';
import { ShoppingCartItem } from './ShoppingCartItem';
import { EmptyShoppingCart } from './EmptyShoppingCart';


export const ShoppingCartComponent = ({ cartItems, deleteItemAction, changeCountAction }) => {
  const contentShoppingCart = (
    <div>
      <h1>Корзина</h1>
      {cartItems.map((el, index) => <ShoppingCartItem
        name={el.name}
        image={el.image}
        count={el.count}
        price={el.price}
        onCountChange={(count) => (changeCountAction(index, count))}
        deleteItem={deleteItemAction}
        index={index}
      />
      )}
      <h2>
        Общая стоимость покупки {cartItems.reduce((sum, el) => sum + el.price * el.count, 0)} грн.
      </h2>
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
