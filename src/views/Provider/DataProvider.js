import React, {Component} from 'react';
import DataContext from '../../contexts/DataContext'
import { detailProduct } from "../../containers/data";
import axios from "axios";

class DataProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          storeProducts:[
           
          ],
          detailProduct: detailProduct,
          hotTrend: [],
          cart: [],
          total: 0,
          update: false,
        };
      }

      componentDidMount() 
      {
        axios.get('http://localhost:5000/productlist')
        .then(res => {
          if(this.state.update == false) {
              res.data.forEach(function (element) {
              element.inCart = false;
              element.total = 0;
              element.count = 0;
            });

            this.setState({storeProducts : res.data});
            this.setState({hotTrend: [res.data[0], res.data[8],res.data[4],res.data[2] ]})
            this.setState({update: true});
          }
        });
      }

      handleGetDetail = productId => {
        const newDetail = this.state.storeProducts.find(c => c._id === productId);
        this.setState({ detailProduct: newDetail });
      };
    
      handleAddCart = productId => {
        const newItem = this.state.storeProducts.find(c => c._id === productId);
        console.log("productID: " + productId);
        console.log(this.state.storeProducts);
        const newCart = this.state.cart;
    
        if (newItem.inCart === false) {
          newItem.inCart = true;
          newItem.count = 1;
          newItem.total = newItem.price;
          newCart.push(newItem);
          this.handleUpdateTotal();
        }
        this.setState({ cart: newCart });
      };
    
      handleChangeNumber = (productId, evt) => {
        const item = this.state.storeProducts.find(c => c._id === productId);
        const newCart = this.state.cart;
        const value = evt.target.value;
        item.count = parseInt(value, 10);
        item.total = value * item.price;
        this.handleUpdateTotal();
        this.setState({ cart: newCart });
      };
    
      handleRemoveItem = productId => {
        const item = this.state.storeProducts.find(c => c._id === productId);
        item.inCart = false;
        item.count = 0;
        item.total = 0;
        const newCart = this.state.cart.filter(d => d._id !== productId);
    
        this.setState({ cart: newCart });
        this.handleUpdateTotal();
      };
    
      handleUpdateTotal = () => {
        let total = 0;
        const newCart = this.state.cart;
        newCart.forEach(element => {
          total += element.price * element.count;
        });
        this.setState({ total });
      };

    render() { 
        return ( 
            <DataContext.Provider value={{
                storeProducts: this.state.storeProducts,
                detailProduct: this.state.detailProduct,
                cart: this.state.cart,
                hotTrend: this.state.hotTrend,
                total: this.state.total,
                handle: {addCart: this.handleAddCart, 
                        getDetail: this.handleGetDetail, 
                        updateTotal: this.handleUpdateTotal, 
                        removeItem: this.handleRemoveItem,
                        changeNumber: this.handleChangeNumber
                    }
                }}>

                {this.props.children}
            </DataContext.Provider>
         );
    }
}
 
export default DataProvider;