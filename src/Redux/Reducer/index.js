import {combineReducers} from 'redux';

import {products} from './products';
import {shoppingCart} from './shoppingCart';


const appReducer = combineReducers({
  products,
  shoppingCart
});
export {appReducer};
