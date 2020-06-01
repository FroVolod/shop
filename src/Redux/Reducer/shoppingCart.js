import {
  CHANGE_COUNT_ITEM,
  DELETE_ITEM
} from '../Actions/shoppingCart';
import {SELECT_PRODUCT} from '../Actions/products';


const initialState = {
  cartItems: [],
  deletedItem: {},
}

export const shoppingCart = (state = initialState, action) => {
  let newItems;
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        cartItems: [...new Set([...state.cartItems, {...action.product, count: 1}])]
      };
    case CHANGE_COUNT_ITEM:
      newItems = [...state.cartItems];
      newItems[action.index] = {...newItems[action.index], count: action.count}
      return {
        ...state,
        cartItems: newItems
      };
    case DELETE_ITEM:
      newItems = [...state.cartItems];
      newItems.splice(action.index, 1);
      return {
        ...state,
        cartItems: newItems,
        deletedItem: action.index
      };
    default:
      return {
        ...state
      }
  }
}
