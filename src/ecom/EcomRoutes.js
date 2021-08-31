import React from "react";

const Dashboard = React.lazy(() => import("./modules/dashboard/Dashboard"));

const CategoryList = React.lazy(() =>
  import("./modules/category/CategoryList")
);
const CategoryForm = React.lazy(() =>
  import("./modules/category/CategoryForm")
);

const OrderList = React.lazy(() => import("./modules/order/OrderList"));
const OrderForm = React.lazy(() => import("./modules/order/OrderForm"));

const ProductList = React.lazy(() => import("./modules/product/ProductList"));
const ProductForm = React.lazy(() => import("./modules/product/ProductForm"));

const User = React.lazy(() => import("./modules/user/User"));

const EcomRoutes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/categoryList", name: "Category List", component: CategoryList },
  { path: "/categoryForm", name: "Category Form", component: CategoryForm },
  { path: "/orderList", name: "Order List", component: OrderList },
  { path: "/orderForm", name: "Modify Order", component: OrderForm },
  { path: "/productList", name: "Product List", component: ProductList },
  { path: "/productForm", name: "Product Form", component: ProductForm },
  { path: "/userList", name: "Users", component: User },
];

export default EcomRoutes;
