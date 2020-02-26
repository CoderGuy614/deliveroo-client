import React from "react";
import Nav from "./Nav.js";
import RestaurantCard from "./RestaurantCard.js";
import { Link } from "react-router-dom";
import axios from "axios";

class RestaurantList extends React.Component {
  state = {
    restaurants: [],
    allRestaurants: []
  };
  filterRestaurant = fil => {
    this.setState({ restaurants: fil });
  };

  componentWillMount() {
    axios
      .get("https://deliveroo-26feb.herokuapp.com/restaurants")
      .then(dat =>
        this.setState({ restaurants: dat.data, allRestaurants: dat.data })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Nav
          showFilters="true"
          restaurants={this.state.allRestaurants}
          cb={this.filterRestaurant}
        />
        <div id="page">
          {this.state.restaurants.map(e => {
            return <RestaurantCard key={e._id} restaurant={e} />;
          })}
        </div>
      </>
    );
  }
}

export default RestaurantList;
