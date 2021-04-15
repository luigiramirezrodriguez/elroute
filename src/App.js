import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.components.jsx';


function App() {
  return (
    <div>
      {/* exact || path => path itself || component = imported component */}
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
