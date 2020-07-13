import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  { name: "Trang Chủ", to: "/", exact: true },
  {
    name: "Quản lý sản phẩm",
    to: "/product-list",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={`nav-item ${active}`}>
            <Link className="nav-link" to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    ></Route>
  );
};

export default class menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          CALL API
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {this.showMenus(menus)}
        </ul>
      </nav>
    );
  }
  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          ></MenuLink>
        );
      });
    }
    return result;
  };
}
