import {SELECT_PRODUCT, GET_PRODUCT} from '../Actions/products'


const initialState = {
  data: [
    {
       id: 1,
       name: "шарик",
       image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
       price: "20"
    },
    {
       id: 2,
       name: "футболка",
       image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
       price: "100"
    },
    {
       id: 4,
       name: "шарик 2",
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
       price: "40"
    }
  ],
  selectedProduct: {}
}

export const products = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT: 
      return {
        ...state,
        selectedProduct: action.product
      };
    case GET_PRODUCT.REQUEST:
      return {
        ...state
      };
    case GET_PRODUCT.SUCCESS:
      return {
        ...state,
        data: action.data.products
      };
    case GET_PRODUCT.FAILURE:
      return {
        ...state,
        error: action,
      };
    default:
      return {
        ...state
      };
  }
}
