import React from 'react';

import Header from './components/Header';

import './App.css';
import Home from './assets/img/pages/Home';
import Cart from './assets/img/pages/Cart';
import { Route } from 'react-router-dom';

function App() {


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
