import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style-product.css";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.data
    };
  }
  render() {
    return (
      <div className=" p-3 col-10 col-md-5 col-lg-3 product-item mx-auto">
        <div className="card">
          <Link
            to="/app/detail"
            onClick={() => this.props.handle.getDetail(this.state.product._id)}
          >
            <img
              className="card-img"
              src={this.state.product.img}
              alt="phoneImage"
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.product.title}</h5>
              <p className="price">{this.state.product.price + "$"}</p>
            </div>
          </Link>
          <div class="ratingresult">
            <i class="fas fa-star ml-3 mb-4" />
            <i class="fas fa-star" />
            <i class="fas fa-star" />
            <i class="fas fa-star" />
            <i class="fas fa-star" />
          </div>

          <div className="btn-in-picture">
            <button
              className="btn btn-red btn-filter btn-primary"
              onClick={() => this.props.handle.addCart(this.state.product._id)}
            >
              <i className="fas fa-cart-plus cart-icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
