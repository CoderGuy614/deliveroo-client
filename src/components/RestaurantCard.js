import React from 'react'
import { Link } from 'react-router-dom'

class RestaurantCard extends React.Component {
  render() {
    let restaurant = this.props.restaurant;

    return (
      <Link to={`/restaurant/${restaurant._id}`} className="restaurant">
        <div className="photo" style={{backgroundImage: 'url("https://bit.ly/2u17mMF")'}} />
        <h3>{restaurant.name}</h3>
        {
          /*
          <ul className="categories">
          {
            restaurant.categories.map((e,i) => {
                return <li style={{background: `${e.color}`}}>{e.name}</li>
            })
          }
        </ul>
        <div className="info">
          <span className="price"><i className="fas fa-dollar-sign" />17</span>
          <span className="likes"><i className="fas fa-thumbs-up" />201</span>
          <span className="time"><i className="fas fa-clock" />20 min</span>
        </div>
        */
      }
      </Link>
    )
  }
}

export default RestaurantCard
