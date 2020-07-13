import * as Types from "./../constants/ActionTypes";
import callApi from "./../utils/apiCaller";
export const actFetchProductsRequest = () => {
  return (dispatch) => {
    // phải có dữ liệu thì mới dispatch được
    return callApi("products", "GET", null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
    //  có thể viết payload : products
  };
};

export const actDeleteProductsRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeleteProduct(id));
    });
  };
};

export const actDeleteProduct = (id) => {
  return { type: Types.DELETE_PRODUCT, id };
};
