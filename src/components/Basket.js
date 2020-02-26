import React from "react";
import { Link } from "react-router-dom";

class Basket extends React.Component {
  state = {
    basketItems: []
  };

  componentWillReceiveProps(props) {
    /*  this.setState({
      basketItems: props
    });
    */
  }

  render() {
    console.log(this.state.basketItems);
    return (
      <div id="basket">
        <h2>Your Basket</h2>
        <ul>
          {/*this.state.basketItems.map((item, i) => {
            return (
              <li>
                <i className="fas fa-minus" />
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
              </li>
            );
          })*/}
        </ul>

        <div id="total">
          <span>Total</span>
          <span className="price">$22</span>
          <button>Place Order</button>
        </div>
      </div>
    );
  }
}

export default Basket;
