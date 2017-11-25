import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLoginMenu from './HeaderLoginMenu';

// import { connect } from 'react-redux';
// import HeaderAccountMenu from './HeaderAccountMenu';


export default (props) => (
  <header>
    <div className="headerLogo">
      <span>+ bartr</span>
    </div>
    <nav>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/buy" activeClassName="is-active" exact={true}>Buy</NavLink>
      <NavLink to="/sell" activeClassName="is-active" exact={true}>Sell</NavLink>
    </nav>

    <div className="login">
      <HeaderLoginMenu />
    </div>

    {/* <div className="login">
      <NavLink to="/login" activeClassName="is-active" exact={true}>Login</NavLink>
      <NavLink to="/createAccount" activeClassName="is-active" exact={true}>Create Account</NavLink>
    </div>    */}
    {/* <HeaderAccountMenu
      accountUserName={props.username}
    /> */}
    
    
  </header>
)





// const mapStateToProps = state => {
//   return {
//     username: state.login.username
//   }
// }

// export default connect(mapStateToProps)(Header)