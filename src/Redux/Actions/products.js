import { createAsyncAction } from "Helpers/asyncAction";
import { api } from "Helpers/api";


export const SELECT_PRODUCT = "SELECT_PRODUCT";
export const selectProductAction = (product) => ({
    type: SELECT_PRODUCT,
    product,
});

export const GET_PRODUCT = createAsyncAction("GET_PRODUCT");
export const getProduct = () => (
   api({
    types: GET_PRODUCT,
    endpoint: '/get-products',
    method: 'get',
  })
);
