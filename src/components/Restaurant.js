import React from "react";
import axios from "axios";
import Loader from "./Loader.js";
import Nav from "./Nav.js";
import Basket from "./Basket.js";
import RestaurantMenu from "./RestaurantMenu.js";

class Restaurant extends React.Component {
  state = {
    restaurant: {
      categories: [],
      price: 0,
      likes: 0,
      menu: {},
      photos: [],
      avg: 0
    },

    basketItems: [],
    loading: true
  };

  constructor(props) {
    super(props);

    this.addToBasket = this.addToBasket.bind(this);
  }

  addToBasket(item) {
    let basketItems = this.state.basketItems;
    basketItems.push(item);
    this.setState({
      basketItems
    });
  }

  componentWillMount() {
    axios
      .get(
        `${process.env.REACT_APP_API}/restaurants/${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({
          restaurant: res.data,
          loading: false
        });
      })
      .catch(err => {
        console.log({ err });
      });
  }

  rounded = num => {
    return num.toFixed(2);
  };

  render() {
    return (
      <>
        <Nav showFilters={false} />
        <div id="restaurant">
          <div>
            <h1>{this.state.restaurant.name}</h1>
            <div id="gallery">
              {this.state.restaurant.photos.map((image, i) => (
                <div
                  className="photo"
                  style={{ backgroundImage: `url(${image})` }}
                  key={i}
                />
              ))}
            </div>
            <ul className="categories">
              {this.state.restaurant.categories.map((category, i) => (
                <li style={{ background: `${category.color}` }}>
                  {category.name}
                </li>
              ))}
            </ul>
            <div className="info">
              <span className="price">
                <i className="fas fa-dollar-sign" />
                {this.state.restaurant.avg.toFixed(2)}
              </span>
              <span className="likes">
                <i className="fas fa-thumbs-up" />
                {this.state.restaurant.likes}
              </span>
              <span className="time">
                <i className="fas fa-clock" />
                {this.state.restaurant.deliveryTime} min
              </span>
            </div>
          </div>
          <Loader loading={this.state.loading} />
          <RestaurantMenu
            menu={this.state.restaurant.menu}
            addToBasket={this.addToBasket}
          />
          <Basket items={this.state.basketItems} />
        </div>
      </>
    );
  }
}

export default Restaurant;
