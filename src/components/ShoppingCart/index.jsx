import { connect } from 'react-redux';

import { ShoppingCartComponent } from './shoppingCart';
import {deleteItemAction, changeCountAction} from 'Redux/Actions/shoppingCart';


const mapStateToProps = (state) => ({
  cartItems: state.shoppingCart.cartItems
});
const actions = {
  deleteItemAction,
  changeCountAction
};
export const ShoppingCart = connect(mapStateToProps, actions)(ShoppingCartComponent);
