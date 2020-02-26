import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  state = {};

  find = e => {
    let a = this.props.restaurants.filter(el =>
      el.name.includes(e.target.value)
    );

    this.props.cb(a);
    console.log(a, this.props.restaurants);

    //display only the cards with that
  };

  render() {
    return (
      <nav>
        <Link to="/">
          <div
            id="logo"
            style={{ backgroundImage: 'url("https://bit.ly/2S2G7JA")' }}
          />
        </Link>
        <ul>
          <li>
            <Link
              className="categoryTag"
              to="/restaurants/category/Italian"
              style={{ borderColor: "#DD3C3E" }}
            >
              <span style={{ color: "#DD3C3E" }}>Italian</span>
            </Link>
          </li>
          <li>
            <Link
              className="categoryTag"
              to="/"
              style={{ borderColor: "#3A3335" }}
            >
              <span style={{ color: "#3A3335" }}>Burger</span>
            </Link>
          </li>
          <li>
            <Link
              className="categoryTag"
              to="/"
              style={{ borderColor: "#40C9A2" }}
            >
              <span style={{ color: "#40C9A2" }}>Vegetarian</span>
            </Link>
          </li>
          <li>
            <Link
              className="categoryTag"
              to="/"
              style={{ borderColor: "#F2B430" }}
            >
              <span style={{ color: "#F2B430" }}>Breakfast</span>
            </Link>
          </li>
          <li>
            <Link
              className="categoryTag"
              to="/"
              style={{ borderColor: "#590348" }}
            >
              <span style={{ color: "#590348" }}>Japanese</span>
            </Link>
          </li>
        </ul>
        {this.props.showFilters ? (
          <>
            <select>
              <option value>Sort by:</option>
              <option value>Price</option>
              <option value>Delivery Time</option>
              <option value>Likes</option>
            </select>
            <input type="text" placeholder="Search..." onChange={this.find} />
          </>
        ) : (
          ""
        )}
      </nav>
    );
  }
}

export default Nav;
