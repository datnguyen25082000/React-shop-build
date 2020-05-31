import React from "react";
import "./style-product.css";
import Product from "./Product";

export default class Trend extends React.Component {
  render() {
    return (
      <div class="main-trend bg-white">
        <div className="card-header font-weight-bold"># Hot trend</div>
        <div class="list-hot-trend">
          <div class="row">
            {this.props.hotTrend.map(trend =>
            <Product handle={this.props.handle} data= {trend} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
