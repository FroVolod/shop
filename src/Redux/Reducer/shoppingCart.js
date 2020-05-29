import {
  // CHANGE_COUNT_ITEM,
  DELETE_ITEM
} from '../Actions/shoppingCart';
import {SELECT_PRODUCT} from '../Actions/products';


const initialState = {
  cartItems: [],
  deletedItem: {}
}

export const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        cartItems: [...new Set([...state.cartItems, action.product])]
      };
    // case CHANGE_COUNT_ITEM:
    //   return {
    //     ...state
    //   };
    case DELETE_ITEM: {
      const newItems = [...state.cartItems];
      newItems.splice(action.index, 1);
      return {
        ...state,
        cartItems: newItems,
        deletedItem: action.index
      };
    };     
    default:
      return {
        ...state
      }
  }
}