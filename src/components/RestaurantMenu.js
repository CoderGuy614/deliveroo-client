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
      </div>
    );
  }
}

export default RestaurantMenu;
