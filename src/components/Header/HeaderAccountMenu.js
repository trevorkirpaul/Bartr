import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {setLogOut} from '../../actions/login';
import {URLimage} from '../../serverLocation';



const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media(max-width: 500px) {
    
  }
`;
const IMGwrapper = styled.div`
  height: 25px;
  width: 25px;
  margin: 0 15px;
`;
const IMG = styled.img`
  height: 100%;
  width: 100%
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #F1F5F7;
  margin: 0 5px;
`;


export const HeaderAccountMenu = (props) => (
      <Wrapper>
        <IMGwrapper>
          {props.accountUserName &&
              <IMG src={`${URLimage}${props.accountAvatar}`} alt=""/>
            }
        </IMGwrapper>
        {!props.accountUserName ? <StyledLink to="/login">Login</StyledLink> : <StyledLink to="/profile">{props.accountUserName}</StyledLink>}
        {!props.accountUserName && <StyledLink to="/createAccount">Create Account</StyledLink> }
        {props.accountUserName && <StyledLink to="/" onClick={props.logOut}>log-out</StyledLink> }
        {props.location}
      </Wrapper>
)

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(setLogOut())
  }
}

export default connect(undefined, mapDispatchToProps)(HeaderAccountMenu);