import React from "react";
import { Link } from "react-router-dom";

class RestaurantMenu extends React.Component {
  state = {
    menu: {
      menuCategories: []
    }
  };

  componentWillReceiveProps(props) {
    this.setState({
      menu: props.menu
    });
  }

  render() {
    return (
      <div id="menu">
        <h2>Menu</h2>
        {this.state.menu.menuCategories.map((menuCategory, i) => {
          return (
            <>
              <h3>{menuCategory.name}</h3>
              <ul>
                {menuCategory.items.map((item, i) => {
                  return (
                    <li>
                      <span className="name">{item.name}</span>
                      <span className="price">
                        ${item.price}
                        <i
                          className="fas fa-plus"
                          onClick={e => this.props.addToBasket(item)}
                        />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}

        {/*
          <h3>Smoothie Bowls</h3>
          <ul>
            <li>
              <span className="name">Green Godess</span>
              <span className="price">$5 <i className="fas fa-plus" /></span>
            </li>
            <li>
              <span className="name">Tutti Frutti</span>
              <span className="price">$10 <i className="fas fa-plus" /></span>
            </li>
            <li>
              <span className="name">Dragonball</span>
              <span className="price">$10 <i className="fas fa-plus" /></span>
            </li>
          </ul>
          <h3>Veggie Bowls</h3>
          <ul>
            <li>
              <span className="name">Avocado Madness</span>
              <span className="price">$12 <i className="fas fa-plus" /></span>
            </li>
            <li>
              <span className="name">Burrito Bandito</span>
              <span className="price">$15 <i className="fas fa-plus" /></span>
            </li>
          </ul>
          <h3>Drinks</h3>
          <ul>
            <li>
              <span className="name">Pure Coconut</span>
              <span className="price">$4 <i className="fas fa-plus" /></span>
            </li>
            <li>
              <span className="name">Choco Lava</span>
              <span className="price">$8 <i className="fas fa-plus" /></span>
            </li>
          </ul>
          */}
      </div>
    );
  }
}

export default RestaurantMenu;
