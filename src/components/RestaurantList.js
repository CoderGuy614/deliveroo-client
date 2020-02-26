import React from 'react'
import { Link } from 'react-router-dom'

class RestaurantList extends React.Component {
	render() {
		return (
      <>
			<nav>
			<div
				id="logo"
				style="background-image: url('https://bit.ly/2S2G7JA')"
			></div>
			<ul>
				<li>
					<a href="/" style="border-color: #DD3C3E">
						<span style="color: #DD3C3E">Italian</span>
					</a>
				</li>
				<li>
					<a href="/" style="border-color: #3A3335">
						<span style="color: #3A3335">Burger</span>
					</a>
				</li>
				<li>
					<a href="/" style="border-color: #40C9A2">
						<span style="color: #40C9A2">Vegetarian</span>
					</a>
				</li>
				<li>
					<a href="/" style="border-color: #F2B430">
						<span style="color: #F2B430">Breakfast</span>
					</a>
				</li>
				<li>
					<a href="/" style="border-color: #590348">
						<span style="color: #590348">Japanese</span>
					</a>
				</li>
			</ul>
			<select>
				<option value="">Sort by:</option>
				<option value="">Price</option>
				<option value="">Delivery Time</option>
				<option value="">Likes</option>
			</select>
			<input type="text" placeholder="Search..." />
		</nav>
		<div id="page">
			<a href="restaurant.html" class="restaurant">
				<div
					class="photo"
					style="background-image: url('https://bit.ly/2vx8SGX')"
				></div>
				<h3>Bella Italia</h3>
				<ul class="categories">
					<li style="background: #DD3C3E">Italian</li>
				</ul>
				<div class="info">
					<span class="price"><i class="fas fa-dollar-sign"></i>20</span>
					<span class="likes"><i class="fas fa-thumbs-up"></i>347</span>
					<span class="time"><i class="fas fa-clock"></i>15 min</span>
				</div>
			</a>
			<a href="restaurant.html" class="restaurant">
				<div
					class="photo"
					style="background-image: url('https://bit.ly/2u17mMF')"
				></div>
				<h3>Peloton</h3>
				<ul class="categories">
					<li style="background: #40C9A2">Vegetarian</li>
					<li style="background: #F2B430">Breakfast</li>
				</ul>
				<div class="info">
					<span class="price"><i class="fas fa-dollar-sign"></i>17</span>
					<span class="likes"><i class="fas fa-thumbs-up"></i>201</span>
					<span class="time"><i class="fas fa-clock"></i>20 min</span>
				</div>
			</a>
			<a href="restaurant.html" class="restaurant">
				<div
					class="photo"
					style="background-image: url('https://bit.ly/2RyB1Ww')"
				></div>
				<h3>Nüde</h3>
				<ul class="categories">
					<li style="background: #3A3335">Burger</li>
					<li style="background: #40C9A2">Vegetarian</li>
				</ul>
				<div class="info">
					<span class="price"><i class="fas fa-dollar-sign"></i>22</span>
					<span class="likes"><i class="fas fa-thumbs-up"></i>959</span>
					<span class="time"><i class="fas fa-clock"></i>12 min</span>
				</div>
			</a>
			<a href="restaurant.html" class="restaurant">
				<div
					class="photo"
					style="background-image: url('https://bit.ly/2uDvBke')"
				></div>
				<h3>Burgerz</h3>
				<ul class="categories">
					<li style="background: #3A3335">Burger</li>
				</ul>
				<div class="info">
					<span class="price"><i class="fas fa-dollar-sign"></i>19</span>
					<span class="likes"><i class="fas fa-thumbs-up"></i>53</span>
					<span class="time"><i class="fas fa-clock"></i>35 min</span>
				</div>
			</a>
			<a href="restaurant.html" class="restaurant">
				<div
					class="photo"
					style="background-image: url('https://bit.ly/2t5Bzd1')"
				></div>
				<h3>Indigo</h3>
				<ul class="categories">
					<li style="background: #590348">Japanese</li>
				</ul>
				<div class="info">
					<span class="price"><i class="fas fa-dollar-sign"></i>32</span>
					<span class="likes"><i class="fas fa-thumbs-up"></i>192</span>
					<span class="time"><i class="fas fa-clock"></i>25 min</span>
				</div>
			</a>
			<a href="restaurant.html" class="restaurant">
				<div
					class="photo"
					style="background-image: url('https://bit.ly/2uJ78d8')"
				></div>
				<h3>Crate</h3>
				<ul class="categories">
					<li style="background: #40C9A2">Vegetarian</li>
					<li style="background: #F2B430">Breakfast</li>
				</ul>
				<div class="info">
					<span class="price"><i class="fas fa-dollar-sign"></i>32</span>
					<span class="likes"><i class="fas fa-thumbs-up"></i>192</span>
					<span class="time"><i class="fas fa-clock"></i>25 min</span>
				</div>
			</a>
			<a href="restaurant.html" class="restaurant">
				<div
					class="photo"
					style="background-image: url('https://bit.ly/3aLH8yt')"
				></div>
				<h3>Bottega Italiana</h3>
				<ul class="categories">
					<li style="background: #DD3C3E">Italian</li>
				</ul>
				<div class="info">
					<span class="price"><i class="fas fa-dollar-sign"></i>15</span>
					<span class="likes"><i class="fas fa-thumbs-up"></i>823</span>
					<span class="time"><i class="fas fa-clock"></i>30 min</span>
				</div>
			</a>
		</div>
    </>
		)
	}
}

export default RestaurantList
