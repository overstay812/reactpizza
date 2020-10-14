import React, { useEffect, useState } from 'react';

import Header from './components/Header';

import './App.css';
import Home from './assets/img/pages/Home';
import Cart from './assets/img/pages/Cart';
import { Route } from 'react-router-dom';
import Axios from 'axios';

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    // fetch('http://localhost:3000/db.json')
    //   .then(response => console.log('fetch' , response.json()))
    //   // .then(data => setPizzas(data.pizzas))
    //   // .catch(e => console.log(e))
    Axios.get('http://localhost:3000/db.json')
      .then(response => setPizzas(response.data.pizzas))
      // .catch(e => console.log(e))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={() => <Home items={pizzas} />} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}


export default App;
