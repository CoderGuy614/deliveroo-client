import React from "react";
import Loader from "./Loader.js";
import Nav from "./Nav.js";
import RestaurantCard from "./RestaurantCard.js";
import { Link } from "react-router-dom";
import axios from "axios";

class RestaurantList extends React.Component {
  state = {
    loading: true,
    restaurants: [],
    allRestaurants: []
  };
  filterRestaurant = fil => {
    this.setState({ restaurants: fil });
  };

  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/restaurants`)
      .then(dat =>
        this.setState({
          restaurants: dat.data,
          allRestaurants: dat.data,
          loading: false
        })
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
          <Loader loading={this.state.loading} />
          {this.state.restaurants.map((e, index) => {
            return <RestaurantCard key={index} restaurant={e} />;
          })}
        </div>
      </>
    );
  }
}

export default RestaurantList;
