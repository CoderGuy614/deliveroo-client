import React from "react";
import { Link } from "react-router-dom";

class Basket extends React.Component {
  state = {
    basketItems: []
  };

  componentWillReceiveProps(props) {
    this.setState({
      basketItems: props.items
    });
  }

  calcTotalPrice() {
    let price = 0;
    let items = this.state.basketItems;
    items.forEach(e => {
      price += e.price;
    });
    return price;
  }

  removeItem(i) {
    let basketItems = this.state.basketItems;
    delete basketItems[i];
    this.setState({
      basketItems
    });
  }

  render() {
    return (
      <div id="basket">
        <h2>Your Basket</h2>
        <ul>
          {this.state.basketItems.map((item, i) => {
            return (
              <li>
                <i className="fas fa-minus" onClick={e => this.removeItem(i)} />
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
              </li>
            );
          })}
        </ul>

        <div id="total">
          <span>Total</span>
          <span className="price">${this.calcTotalPrice()}</span>
          <button>Place Order</button>
        </div>
      </div>
    );
  }
}

export default Basket;
