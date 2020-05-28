import React, { useState } from 'react';

import { MyLayout } from 'components/myLayout';
import { ShoppingCartItem } from './ShoppingCartItem';
import { EmptyShoppingCart } from './EmptyShoppingCart';


export const ShoppingCartComponent = (cartItems, deleteItemAction) => {
  const items = cartItems.cartItems
  console.log('============', items, deleteItemAction)
  // const [items, changeItems] = useState(dataShoppingCart);
  const changeCount = (index, count) => {
    // const newItems = [...items];
    // newItems[index] = {...newItems[index], count}
    // changeItems(newItems)
  };
  // const deleteItem = (index) => {
    // const newItems = [...items];
    // newItems.splice(index, 1)
    // changeItems(newItems)
  // };
  const contentShoppingCart = (
    <div>
      <h1>Корзина</h1>
      {items.map((el, index) => <ShoppingCartItem
        name={el.name}
        image={el.image}
        count={el.count}
        price={el.price}
        onCountChange={(count) => (changeCount(index, count))}
        // deleteItem={() => (deleteItem(index))}
        deleteItem={deleteItemAction}
        index={index}
        />
      )}
      <h2>
        Общая стоимость покупки { items.reduce((sum, el) => sum + el.price*el.count, 0) } грн.
      </h2>
    </div>
  );
  const emptyShoppingCart = (
    <div>
      <h1>Корзина</h1>
      <EmptyShoppingCart />
    </div>
  );
  if (!items.length) {
    return (
      <MyLayout content={emptyShoppingCart} />
    )
  }
  return (
    <MyLayout content={contentShoppingCart} />
  )
}
