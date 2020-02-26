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
    console.log(a, this.props.restaurants);

    //display only the cards with that
  };

  componentWillMount() {
    axios
      .get("https://deliveroo-26feb.herokuapp.com/categories")
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
      console.log(this.state.filteredCategories);

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
          {this.state.categories.map((e, i) => {
            let realcolor = this.state.filteredCategories.find(x => x == e.name)
              ? "black"
              : e.color;
            return (
              <li key={i}>
                <a
                  key={i}
                  className="categoryTag"
                  onClick={() => this.filterCategory(e.name)}
                  style={{ borderColor: `${e.color}` }}
                >
                  <span
                    style={{
                      color: realcolor
                    }}
                  >
                    {e.name}
                  </span>
                </a>
              </li>
            );
          })}
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
