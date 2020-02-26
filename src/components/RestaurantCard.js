import React from "react";
import { Link } from "react-router-dom";

class RestaurantCard extends React.Component {
  render() {
    let restaurant = this.props.restaurant;

    return (
      <Link to={`/restaurant/${restaurant._id}`} className="restaurant">
        <div
          className="photo"
          style={{ backgroundImage: `url(${restaurant.photos[0]})` }}
        />
        <h3>{restaurant.name}</h3>
        {
          <>
            <ul className="categories">
              {restaurant.categories.map((e, i) => {
                return (
                  <li key={i} style={{ background: `${e.color}` }}>
                    {e.name}
                  </li>
                );
              })}
            </ul>

            <div className="info">
              <span className="price">
                <i className="fas fa-dollar-sign" />
                {restaurant.avg.toFixed(2)}
              </span>
              <span className="likes">
                <i className="fas fa-thumbs-up" />
                {restaurant.likes}
              </span>
              <span className="time">
                <i className="fas fa-clock" />
                {restaurant.deliveryTime} min
              </span>
            </div>
          </>
        }
      </Link>
    );
  }
}

export default RestaurantCard;
