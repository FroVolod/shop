import { connect } from 'react-redux';

import { ProductListComponent } from './productList';
import { selectProductAction } from 'Redux/Actions/products';
 

const actions = {
  selectProductAction
}
export const ProductList = connect(null, actions)(ProductListComponent)
