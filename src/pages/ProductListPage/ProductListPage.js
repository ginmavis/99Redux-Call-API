import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    // axios config
    callApi("products", "GET", null).then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }
  onDelete = (id) => {
    var { products } = this.state;
    callApi(`products/${id}`, "DELETE", null).then((res) => {
      var index = this.findIndex(products, id);
      if (index !== -1) {
        products.splice(index, 1);
        this.setState({
          products: products,
        });
      }
    });
  };
  findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };
  render() {
    // var { products } = this.props;
    var { products } = this.state;
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

export default ProductListPage;
