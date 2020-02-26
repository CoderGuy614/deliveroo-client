import React from 'react'
import Nav from './Nav.js'
import Basket from './Basket.js'
import RestaurantMenu from './RestaurantMenu.js'

class Restaurant extends React.Component {
	render() {
		return (
			<>
      <Nav showFilters={false} />
      <div id="restaurant">
        <div>
          <h1>Peloton</h1>
          <div id="gallery">
            <div className="photo" style={{backgroundImage: 'url("https://bit.ly/2RXsprv")'}} />
            <div className="photo" style={{backgroundImage: 'url("https://bit.ly/2O622yD")'}} />
            <div className="photo" style={{backgroundImage: 'url("https://bit.ly/38FaBbs")'}} />
            <div className="photo" style={{backgroundImage: 'url("https://bit.ly/2RATsdq")'}} />
          </div>
          <ul className="categories">
            <li style={{background: '#40C9A2'}}>Vegetarian</li>
            <li style={{background: '#F2B430'}}>Breakfast</li>
          </ul>
          <div className="info">
            <span className="price"><i className="fas fa-dollar-sign" />20</span>
            <span className="likes"><i className="fas fa-thumbs-up" />347</span>
            <span className="time"><i className="fas fa-clock" />20 min</span>
          </div>
        </div>
        <RestaurantMenu />
        <Basket />
      </div>
      </>
		)
	}
}

export default Restaurant
