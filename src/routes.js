import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => {
      return <HomePage />;
    },
  },
  {
    path: "/product-list",
    exact: false,
    main: () => {
      return <ProductListPage></ProductListPage>;
    },
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => {
      return <ProductActionPage history={history}></ProductActionPage>;
    },
  },
  {
    path: "/product/:id/edit",
    exact: false,
    // truyền match để lấy tham số trên url
    main: ({ match, history }) => {
      return (
        <ProductActionPage match={match} history={history}></ProductActionPage>
      );
    },
  },

  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
