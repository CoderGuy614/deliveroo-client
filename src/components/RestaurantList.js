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
          <RestaurantCard restaurant="obj" />
          <Link to="/restaurant/1" className="restaurant">
            <div
              className="photo"
              style={{ backgroundImage: 'url("https://bit.ly/2vx8SGX")' }}
            />
            <h3>Bella Italia</h3>
            <ul className="categories">
              <li style={{ background: "#DD3C3E" }}>Italian</li>
            </ul>
            <div className="info">
              <span className="price">
                <i className="fas fa-dollar-sign" />
                20
              </span>
              <span className="likes">
                <i className="fas fa-thumbs-up" />
                347
              </span>
              <span className="time">
                <i className="fas fa-clock" />
                15 min
              </span>
            </div>
          </Link>
          <Link to="/restaurant/1" className="restaurant">
            <div
              className="photo"
              style={{ backgroundImage: 'url("https://bit.ly/2u17mMF")' }}
            />
            <h3>Peloton</h3>
            <ul className="categories">
              <li style={{ background: "#40C9A2" }}>Vegetarian</li>
              <li style={{ background: "#F2B430" }}>Breakfast</li>
            </ul>
            <div className="info">
              <span className="price">
                <i className="fas fa-dollar-sign" />
                17
              </span>
              <span className="likes">
                <i className="fas fa-thumbs-up" />
                201
              </span>
              <span className="time">
                <i className="fas fa-clock" />
                20 min
              </span>
            </div>
          </Link>
          <Link to="/restaurant/1" className="restaurant">
            <div
              className="photo"
              style={{ backgroundImage: 'url("https://bit.ly/2RyB1Ww")' }}
            />
            <h3>Nüde</h3>
            <ul className="categories">
              <li style={{ background: "#3A3335" }}>Burger</li>
              <li style={{ background: "#40C9A2" }}>Vegetarian</li>
            </ul>
            <div className="info">
              <span className="price">
                <i className="fas fa-dollar-sign" />
                22
              </span>
              <span className="likes">
                <i className="fas fa-thumbs-up" />
                959
              </span>
              <span className="time">
                <i className="fas fa-clock" />
                12 min
              </span>
            </div>
          </Link>
          <Link to="/restaurant/1" className="restaurant">
            <div
              className="photo"
              style={{ backgroundImage: 'url("https://bit.ly/2uDvBke")' }}
            />
            <h3>Burgerz</h3>
            <ul className="categories">
              <li style={{ background: "#3A3335" }}>Burger</li>
            </ul>
            <div className="info">
              <span className="price">
                <i className="fas fa-dollar-sign" />
                19
              </span>
              <span className="likes">
                <i className="fas fa-thumbs-up" />
                53
              </span>
              <span className="time">
                <i className="fas fa-clock" />
                35 min
              </span>
            </div>
          </Link>
          <Link to="/restaurant/1" className="restaurant">
            <div
              className="photo"
              style={{ backgroundImage: 'url("https://bit.ly/2t5Bzd1")' }}
            />
            <h3>Indigo</h3>
            <ul className="categories">
              <li style={{ background: "#590348" }}>Japanese</li>
            </ul>
            <div className="info">
              <span className="price">
                <i className="fas fa-dollar-sign" />
                32
              </span>
              <span className="likes">
                <i className="fas fa-thumbs-up" />
                192
              </span>
              <span className="time">
                <i className="fas fa-clock" />
                25 min
              </span>
            </div>
          </Link>
          <Link to="/restaurant/1" className="restaurant">
            <div
              className="photo"
              style={{ backgroundImage: 'url("https://bit.ly/2uJ78d8")' }}
            />
            <h3>Crate</h3>
            <ul className="categories">
              <li style={{ background: "#40C9A2" }}>Vegetarian</li>
              <li style={{ background: "#F2B430" }}>Breakfast</li>
            </ul>
            <div className="info">
              <span className="price">
                <i className="fas fa-dollar-sign" />
                32
              </span>
              <span className="likes">
                <i className="fas fa-thumbs-up" />
                192
              </span>
              <span className="time">
                <i className="fas fa-clock" />
                25 min
              </span>
            </div>
          </Link>
          <Link to="/restaurant/1" className="restaurant">
            <div
              className="photo"
              style={{ backgroundImage: 'url("https://bit.ly/3aLH8yt")' }}
            />
            <h3>Bottega Italiana</h3>
            <ul className="categories">
              <li style={{ background: "#DD3C3E" }}>Italian</li>
            </ul>
            <div className="info">
              <span className="price">
                <i className="fas fa-dollar-sign" />
                15
              </span>
              <span className="likes">
                <i className="fas fa-thumbs-up" />
                823
              </span>
              <span className="time">
                <i className="fas fa-clock" />
                30 min
              </span>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default RestaurantList;
