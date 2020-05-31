import React from "react";

const ProductList = React.lazy(() => import("./views/container/ProductList"));
const Cart = React.lazy(() => import("./views/container/Cart"));
const Detail = React.lazy(() => import("./views/container/Detail"));
const Laptop = React.lazy(() => import("./views/E-divice/Laptop"));
const Phone = React.lazy(() => import("./views/E-divice/Phone"));
const Accessories = React.lazy(() => import("./views/E-divice/Accessories"));
const Camera = React.lazy(() => import("./views/E-divice/Camera"));
const Dryer = React.lazy(() => import("./views/E-divice/Dryer"));
const Tivi = React.lazy(() => import("./views/E-divice/Tivi"));
const Book = React.lazy(() => import("./views/L-shop/Book"));
const Food = React.lazy(() => import("./views/L-shop/Food"));
const HHAppliances = React.lazy(() => import("./views/L-shop/HHAppliances"));
const Toy = React.lazy(() => import("./views/L-shop/Toy"));

// các route trong DefaultLayout
const routes = [
  { path: "/app", exact: true, name: "Home" , component: ProductList},
  { path: "/app/productList", name: "ProductList", component: ProductList },
  { path: "/app/cart", name: "Cart", component: Cart },
  { path: "/app/detail", name: "Detail", component: Detail },
  { path: "/app/e-device/laptop", name: "Laptop", component: Laptop },
  { path: "/app/e-device/tivi", name: "Tivi", component: Tivi },
  { path: "/app/e-device/camera", name: "Camera", component: Camera },
  { path: "/app/e-device/dryer", name: "Dryer", component: Dryer },
  {
    path: "/app/e-device/accessories",
    name: "Accessories",
    component: Accessories
  },
  {
    path: "/app/e-device/smart-phone",
    name: "Phone",
    component: Phone
  },
  { path: "/app/life-shop/book", name: "Book", component: Book },
  { path: "/app/life-shop/food", name: "Food", component: Food },
  {
    path: "/app/life-shop/hh-appliances",
    name: "HHAppliances",
    component: HHAppliances
  },
  { path: "/app/life-shop/toy", name: "Toy", component: Toy }
];

export default routes;
