import React from 'react';

import {ShoppingCartItem} from './ShoppingCartItem';


export const ShoppingCartItemsComponent = ({ cartItems, deleteItemAction, changeCountAction }) => {
  return (
    <div>
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
    </div>
  )
}
