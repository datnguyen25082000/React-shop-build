import React from "react";
import Item from "./Item";
import Title from "../Title";
import DataContext from "../../../contexts/DataContext";
import emptycart from "./empty-cart.jpg";
import "./style-cart.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }

  static contextType = DataContext;

  render() {
    const cart = this.context.cart;
    const handle = this.context.handle;
    const total = this.context.total;

    if (cart.length === 0) {
      return (
        <div className="row list-item">
          <div className="card-header col-12 mb-5">
            <i className="fas fa-cart-plus" />
            Cart
          </div>
          <Title name="Your" title="cart" />
          <div className="col-sm-12 col-md-10 col-md-offset-1 empty-div">
            <img src={emptycart} alt="imag-cart" className="empty-cart-image" />
            <p className="font-weight-bold ">Your cart is empty</p>
          </div>
        </div>
      );
    }
    return (
      <div className="row list-item">
        <div className="card-header col-12 mb-5">
          <i className="fas fa-cart-plus" />
          Cart
        </div>
        <Title name="Your" title="cart" />

        <div className="col-sm-12 col-md-10 col-md-offset-1 table-item">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Quantity</th>

                <th className="text-center">Price</th>
                <th className="text-center">Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <Item key={product._id} data={product} handle={handle} />
              ))}
            </tbody>
          </table>
          <div className="total">
            <span className="font-weight-bold ">Total: </span>
            {total + "$"}
          </div>
        </div>

        <Link to="/" className="mx-auto">
          <button
            type="button"
            className="btn btn-danger px-5 mt-5 py-2 mx-auto"
          >
            <span className="glyphicon glyphicon-remove" /> CHECK OUT
          </button>
        </Link>
      </div>
    );
  }
}
