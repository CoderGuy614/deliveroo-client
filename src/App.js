import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Restaurant from './components/Restaurant.js';
import RestaurantList from './components/RestaurantList.js';

function App() {
  return (
    <BrowserRouter>
				<Switch>
					<Route path="/restaurant/:id" component={Restaurant} />
					<Route path="/" component={RestaurantList} />
				</Switch>
			</BrowserRouter>
  );
}

export default App;
