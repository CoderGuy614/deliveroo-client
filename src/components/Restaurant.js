import React from 'react'

class Restaurant extends React.Component {
	render() {
		return (
			<>
      <div id="restaurant">
        <div>
          <h1>Peloton</h1>
          <div id="gallery">
            <div
              class="photo"
              style="background-image: url('https://bit.ly/2RXsprv')"
            ></div>
            <div
              class="photo"
              style="background-image: url('https://bit.ly/2O622yD')"
            ></div>
            <div
              class="photo"
              style="background-image: url('https://bit.ly/38FaBbs')"
            ></div>
            <div
              class="photo"
              style="background-image: url('https://bit.ly/2RATsdq')"
            ></div>
          </div>
          <ul class="categories">
            <li style="background: #40C9A2">Vegetarian</li>
            <li style="background: #F2B430">Breakfast</li>
          </ul>
          <div class="info">
            <span class="price"><i class="fas fa-dollar-sign"></i>20</span>
            <span class="likes"><i class="fas fa-thumbs-up"></i>347</span>
            <span class="time"><i class="fas fa-clock"></i>20 min</span>
          </div>
        </div>
        <div id="menu">
          <h2>Menu</h2>
          <h3>Smoothie Bowls</h3>
          <ul>
            <li>
              <span class="name">Green Godess</span>
              <span class="price">$5 <i class="fas fa-plus"></i></span>
            </li>
            <li>
              <span class="name">Tutti Frutti</span>
              <span class="price">$10 <i class="fas fa-plus"></i></span>
            </li>
            <li>
              <span class="name">Dragonball</span>
              <span class="price">$10 <i class="fas fa-plus"></i></span>
            </li>
          </ul>
          <h3>Veggie Bowls</h3>
          <ul>
            <li>
              <span class="name">Avocado Madness</span>
              <span class="price">$12 <i class="fas fa-plus"></i></span>
            </li>
            <li>
              <span class="name">Burrito Bandito</span>
              <span class="price">$15 <i class="fas fa-plus"></i></span>
            </li>
          </ul>
          <h3>Drinks</h3>
          <ul>
            <li>
              <span class="name">Pure Coconut</span>
              <span class="price">$4 <i class="fas fa-plus"></i></span>
            </li>
            <li>
              <span class="name">Choco Lava</span>
              <span class="price">$8 <i class="fas fa-plus"></i></span>
            </li>
          </ul>
        </div>
        <div id="basket">
          <h2>Your Basket</h2>
          <ul>
            <li>
              <i class="fas fa-minus"></i>
              <span class="name">Avocado Madness</span>
              <span class="price">$12</span>
            </li>
            <li>
              <i class="fas fa-minus"></i>
              <span class="name">Tutti Frutti</span>
              <span class="price">$10</span>
            </li>
          </ul>
          <div id="total">
            <span>Total</span>
            <span class="price">$22</span>
            <button>Place Order</button>
          </div>
        </div>
      </div>
      </>
		)
	}
}

export default Restaurant
