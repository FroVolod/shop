import { connect } from 'react-redux';

import { ShoppingCartComponent } from './shoppingCart';
import {ShoppingCartItemsComponent} from './ShoppingCartItems'
import {deleteItemAction, changeCountAction} from 'Redux/Actions/shoppingCart';


const mapStateToProps = (state) => ({
  cartItems: state.shoppingCart.cartItems
});
const actions = {
  deleteItemAction,
  changeCountAction
};
export const ShoppingCart = connect(mapStateToProps)(ShoppingCartComponent);
export const ShoppingCartItems = connect(mapStateToProps, actions)(ShoppingCartItemsComponent);
