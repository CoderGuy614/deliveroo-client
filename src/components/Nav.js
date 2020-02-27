import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Nav extends React.Component {
  state = {
    categories: [],
    filteredCategories: []
  };

  find = e => {
    let a = this.props.restaurants.filter(el =>
      el.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    this.props.cb(a);
  };

  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/categories`)
      .then(dat =>
        this.setState({
          categories: dat.data
        })
      )
      .catch(err => console.log(err));
  }
  filterCategory = name => {
    let cpy = this.state.filteredCategories;
    if (!this.state.filteredCategories.find(e => e == name)) {
      cpy.push(name);
    } else {
      cpy = cpy.filter(e => e != name);
    }
    this.setState({ filteredCategories: cpy }, () => {
      if (this.state.filteredCategories.length == 0) {
        this.props.cb(this.props.restaurants);
        return;
      }
      let a = this.props.restaurants.filter(el => {
        for (let i = 0; i < el.categories.length; i++) {
          for (let j = 0; j < this.state.filteredCategories.length; j++) {
            if (el.categories[i].name == this.state.filteredCategories[j]) {
              return true;
            }
          }
        }
      });
      this.props.cb(a);
    });
  };
  sortBy = e => {
    let sortBy = e.target.value;
    let originalSort = this.props.restaurants;
    if (sortBy === "price") {
      let sort = originalSort.sort((a, b) => {
        return a.avg - b.avg;
      });
      this.props.cb(sort);
    } else if (sortBy === "delivery") {
      let sort = originalSort.sort((a, b) => {
        return a.deliveryTime - b.deliveryTime;
      });
      this.props.cb(sort);
    } else if (sortBy === "likes") {
      let sort = originalSort.sort((a, b) => {
        return b.likes - a.likes;
      });
      this.props.cb(sort);
    } else {
      this.props.cb(originalSort);
    }
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
        <ul className={this.props.showFilters ? "" : "hidden"}>
          {this.state.categories.map((e, i) => {
            let categoryClass = this.state.filteredCategories.find(
              x => x == e.name
            )
              ? "categoryTag selected"
              : "categoryTag";
            return (
              <li key={i}>
                <a
                  key={i}
                  className={categoryClass}
                  onClick={() => this.filterCategory(e.name)}
                  style={{ borderColor: e.color }}
                >
                  <span
                    style={{
                      color: e.color
                    }}
                  >
                    {e.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <select
          onChange={this.sortBy}
          className={this.props.showFilters ? "" : "hidden"}
        >
          <option value="all">Sort by:</option>
          <option value="price">Price</option>
          <option value="delivery">Delivery Time</option>
          <option value="likes">Likes</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.find}
          className={this.props.showFilters ? "" : "hidden"}
        />
      </nav>
    );
  }
}

export default Nav;
