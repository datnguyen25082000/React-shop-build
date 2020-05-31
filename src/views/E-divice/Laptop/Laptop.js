import React, { Component } from "react";
import Title from "../../../views/container/Title";
import Product from "../../container/ProductList/Product";
import DataContext from "../../../contexts/DataContext";
import SearchBox from "../../container/ProductList/SearchBox";

import { Button, ButtonGroup } from "reactstrap";
function CheckLaptop(data) {
  return data.type === "laptop";
}

export default class Laptop extends Component {
  static contextType = DataContext;

  render() {
    const productsList = this.context.storeProducts.filter(CheckLaptop);
    const handle = this.context.handle;
    return (
      <div className="productsList">
        <SearchBox />

        <Title name="Laptop" title="" />

        <div className="row products-list ">
          {productsList.map(product => {
            return <Product data={product} handle={handle} />;
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
