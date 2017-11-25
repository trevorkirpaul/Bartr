import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


export const Header = (props) => (
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
      {props.username && <span>{props.username}</span> }      
      <NavLink to="/login" activeClassName="is-active" exact={true}>Log In</NavLink>
      <NavLink to="/createAccount" activeClassName="is-active" exact={true}>Create Account</NavLink>

    </div>
    
  </header>
);

const mapStateToProps = state => {
  return {
    username: state.login
  }
}

export default connect(mapStateToProps)(Header)