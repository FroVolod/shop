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
    case DELETE_ITEM:
      return {
        ...state,
        // cartItems: [...state.cartItems.splice(action.id, 1)]
        deletedItem: action.index
      };
    default:
      return {
        ...state
      }
  }
}
