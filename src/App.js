import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.components';

const HatsPages = () => (
  <div>
    <h1>HATS PAGE</h1> 

  </div>
)

function App() {
  return (
    <div>
      {/* exact || path => path itself || component = imported component */}
      <Route exact path='/' component={HomePage} />
      <Route  path='/hats' component={HatsPages} />
    </div>
  );
}

export default App;
