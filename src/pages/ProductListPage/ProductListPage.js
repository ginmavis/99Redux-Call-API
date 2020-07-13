import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
// import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
import {
  actFetchProductsRequest,
  actDeleteProductsRequest,
} from "./../../actions/";
import { connect } from "react-redux";

class ProductListPage extends Component {
  componentDidMount() {
    // c1 gọi thẳng api
    // // axios config
    // callApi("products", "GET", null).then((res) => {
    //   // day data vao store
    //   this.props.fetchAllProducts(res.data);
    // });

    // c2 dùng action và middleware
    this.props.fetchAllProducts();
  }
  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  };

  render() {
    var { products } = this.props;

    return (
      <div className="col-xs-1-12">
        <Link to="/product/add" className="btn my-4 btn-primary">
          Thêm sản phẩm
        </Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: (products) => {
      dispatch(actFetchProductsRequest(products));
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductsRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
