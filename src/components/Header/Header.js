import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default () => (
  <header>
    <div className="headerLogo">
      <span>bartr</span>
    </div>
    <nav>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/buy" activeClassName="is-active" exact={true}>Buy</NavLink>
      <NavLink to="/sell" activeClassName="is-active" exact={true}>Sell</NavLink>
    </nav>
    <div className="login">
      <NavLink to="/login" activeClassName="is-active" exact={true}>Log In</NavLink>
      <NavLink to="/createAccount" activeClassName="is-active" exact={true}>Create Account</NavLink>
    </div>
  </header>
);