import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdateProductRequest,
} from "./../../actions/index";
import { connect } from "react-redux";
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: false,
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log("willmount");
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkbStatus: itemEditing.status,
      });
    }
  }

  onSave = (e) => {
    e.preventDefault();
    var { id, txtName, txtPrice, chkbStatus } = this.state;
    var { history } = this.props;
    // console.log(this.state);
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
    };
    if (id) {
      //update
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProduct(product);
    }
    history.goBack();
  };

  render() {
    console.log("render");
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-12 mt-5">
        <form onSubmit={this.onSave} method="POST">
          <div className="form-group">
            <label htmlFor="">Tên sản phẩm :</label>
            <input
              value={txtName}
              onChange={this.onChange}
              type="text"
              className="form-control"
              name="txtName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Giá :</label>
            <input
              value={txtPrice}
              onChange={this.onChange}
              type="text"
              className="form-control"
              name="txtPrice"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Trạng thái :</label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                value={chkbStatus}
                onChange={this.onChange}
                type="checkbox"
                className="mr-3"
                name="chkbStatus"
                id=""
                checked={chkbStatus}
              />
              Còn Hàng
            </label>
          </div>
          <button type="submit" className="mr-3 my-3  btn btn-primary">
            Save
          </button>
          <Link to="/product-list" className="mx-3 btn btn-danger">
            {" "}
            Trở lại{" "}
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
