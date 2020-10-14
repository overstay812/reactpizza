import React from 'react'
import { NavLink } from 'react-router-dom';
import logoSvg from '../assets/img/pizza-logo.svg';
import Button from './Button';


const Header = () => {
  return (
        <div className="header">
        <div className="container" >
          <NavLink className="header__logo" to='/'>
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </NavLink>
          <div className="header__cart">
              <Button outline={true}/>
          </div>
        </div>
      </div>
    )
}
export default  Header