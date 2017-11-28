import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {setLogOut} from '../../actions/login';

const urlIMGavatar = 'http://localhost:3001/avatar/';

export const HeaderAccountMenu = (props) => (
      <div className="loginInner">
        <div id="headerAvatarWrapper">
          {props.accountUserName && <div id="headerAvatar">
              <img src={`${urlIMGavatar}${props.accountAvatar}`} alt=""/>
            </div>}
        </div>
        {!props.accountUserName ? <Link to="/login">Login</Link> : <Link to="/profile">{props.accountUserName}</Link>}
        {!props.accountUserName && <Link to="/createAccount">Create Account</Link> }
        {props.accountUserName && <Link to="/" onClick={props.logOut}>Log Out</Link> }
        {props.location}
      </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(setLogOut())
  }
}

export default connect(undefined, mapDispatchToProps)(HeaderAccountMenu);