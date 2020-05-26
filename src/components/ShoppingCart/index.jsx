import React, { useState } from 'react';

import { MyLayout } from 'components/myLayout';
import { ShoppingCartItem } from './ShoppingCartItem';
import { EmptyShoppingCart } from './EmptyShoppingCart';


const dataShoppingCart = [
  {
    id: 1,
    name: "шарик",
    image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
    price: "20",
    count: 1
  },
  {
    id: 2,
    name: "футболка",
    image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
    price: "100",
    count: 1
  },
  {
    id: 4,
    name: "шарик 2",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
    price: "40",
    count: 1
  }
]

export const ShoppingCart = () => {
  const [items, changeItems] = useState(dataShoppingCart);
  const changeCount = (index, count) => {
    const newItems = [...items];
    newItems[index] = {...newItems[index], count}
    changeItems(newItems)
  };
  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1)
    changeItems(newItems)
  };
  const contentShoppingCart = (
    <div>
      <h1>Корзина</h1>
      {items.map((el, index) => <ShoppingCartItem
        name={el.name}
        image={el.image}
        count={el.count}
        price={el.price}
        onCountChange={(count) => (changeCount(index, count))}
        deleteItem={() => (deleteItem(index))}
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
