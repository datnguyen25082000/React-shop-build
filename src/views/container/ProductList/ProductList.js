import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import Title from "../Title";
import Product from "./Product";
import DataContext from "../../../contexts/DataContext";
import "./style-product.css";
import SearchBox from "./SearchBox";
import Trend from "./Trend";

export default class ProductList extends Component {
  static contextType = DataContext;

  render() {
    const productsList = this.context.storeProducts;
    const handle = this.context.handle;
    const hotTrend = this.context.hotTrend;
    return (
      <div className="productsList">
        <SearchBox />
        <Trend data={productsList} hotTrend= {hotTrend} handle={handle} />

        <Title name="Our" title="products" />

        <div className="row products-list ">
          {productsList.map((product, idx) => {
            return <Product key={idx} data={product} handle={handle} />;
          })}
        </div>

        <ButtonGroup className="mr-2 btn-group-page">
          <Button>&larr;</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>&rarr;</Button>
        </ButtonGroup>
      </div>
    );
  }
}
