import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Modules"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Order",
    //route: "/base",
    icon: <CIcon name="cil-cursor" customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Orders",
        to: "/orderList",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Modify Order",
        to: "/orderForm",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Category",
    //route: "/base",
    icon: <CIcon name="cil-tags" customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Categories",
        to: "/categoryList",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add Category",
        to: "/categoryForm",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Product",
    //route: "/base",
    icon: <CIcon name="cil-star" customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Products",
        to: "/productList",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add Product",
        to: "/productForm",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "User",
    //route: "/base",
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Users",
        to: "/userList",
      },
    ],
  },
];

export default _nav;
