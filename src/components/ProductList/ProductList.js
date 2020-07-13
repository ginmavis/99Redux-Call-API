import React, { Component } from "react";
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h4 className="display-4">Danh sách sản phẩm</h4>
        <table className="table table-sm table-bordered  table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>{this.props.children}</tbody>
        </table>
      </div>
    );
  }
}
