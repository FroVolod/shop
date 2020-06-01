import { connect } from 'react-redux';

import { ProductListComponent } from './productList';
import { selectProductAction } from 'Redux/Actions/products';
 

const mapStateToProps = (state) => ({
  data: state.products.data
})
const actions = {
  selectProductAction
}
export const ProductList = connect(mapStateToProps, actions)(ProductListComponent)
