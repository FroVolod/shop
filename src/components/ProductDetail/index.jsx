import {connect} from 'react-redux';

import {ProductDetailComponent} from './productDetail';


const mapStateToProps = (state) => ({
  item: state.products.selectedProduct
})
export const ProductDetail = connect(mapStateToProps)(ProductDetailComponent)
