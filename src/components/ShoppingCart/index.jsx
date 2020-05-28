import { connect } from 'react-redux';

import { ShoppingCartComponent } from './shoppingCart';
import {deleteItemAction} from 'Redux/Actions/shoppingCart'


const mapStateToProps = (state) => ({
  cartItems: state.shoppingCart.cartItems
})
const actions = {
  deleteItemAction
}
export const ShoppingCart = connect(mapStateToProps, actions)(ShoppingCartComponent)
