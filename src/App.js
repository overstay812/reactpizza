import React, { useEffect } from 'react';

import Header from './components/Header';

import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route } from 'react-router-dom';
import { connect} from 'react-redux';

function App() {


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}



export default connect(null, null)(App);
