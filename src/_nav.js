export default {
  items: [
    {
      name: "LIST PTODUCTS",
      url: "/app/productList",
      icon: "fas fa-align-left",
      badge: {
        variant: "info",
        text: "NEW"
      }
    },
    {
      title: true,
      name: "electronic device",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      className: "text-primary" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Laptop",
      url: "/app/e-device/laptop",
      icon: "fas fa-laptop"
    },
    {
      name: "Smart phone",
      url: "/app/e-device/smart-phone",
      icon: "fas fa-mobile-alt"
    },
    {
      name: "Accessories",
      url: "/app/e-device/accessories",
      icon: "fas fa-ear-muffs"
    },
    {
      name: "TV",
      url: "/app/e-device/tivi",
      icon: "fas fa-tv"
    },
    {
      name: "Dryer",
      url: "/app/e-device/dryer",
      icon: "fas fa-dryer"
    },
    {
      name: "Camera",
      url: "/app/e-device/camera",
      icon: "fas fa-camera"
    },

    {
      title: true,
      name: "LIFE SHOP",
      wrapper: {
        element: "",
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      className: "mt-1 text-primary" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Household appliances",
      url: "/app/life-shop/hh-appliances",
      icon: "fas fa-home-alt"
    },
    {
      name: "Food",
      url: "/app/life-shop/food",
      icon: "fas fa-burger-soda"
    },
    {
      name: "Book",
      url: "/app/life-shop/book",
      icon: "fas fa-book"
    },
    {
      name: "Toy",
      url: "/app/life-shop/toy",
      icon: "fas fa-child"
    }
  ]
};
