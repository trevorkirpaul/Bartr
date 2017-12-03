import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLoginMenu from './HeaderLoginMenu';
import HomeLogo from './HomeLogo';
import BuyLogo from './BuyLogo';
import SellLogo from './SellLogo';

const HeaderWrap = styled.header`
  background: #383838;
  color: #F1F5F7;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  justify-content: space-between;
  padding: 15px;
  @media (max-width: 500px) {
    /* flex-direction: column; */
    padding: 5px;
    flex-wrap: wrap;
    
  }
`;
const LogoWrap = styled.div`
  @media(max-width: 500px) {
    margin-bottom: 5px;
  }
`;
const Logo = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4em;
  font-weight: 700;
`;

const Nav = styled.nav`
  align-self: center;
  @media(max-width: 500px) {
    position: fixed;
    height: 35px;
    bottom: 0;
    left: 0;
    background: black;
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #F1F5F7;
  padding: 0 5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  &.${(props) => props.activeClassName} {
    color: #36C9C6;
  }
  @media(max-width: 500px) {
    padding: 5;
    font-weight: 400;
    
  }
`;


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    }
  }
  updateWindowDimensions = () => {

    this.setState(() => ({
      width: window.innerWidth,
      height: window.innerHeight
    }))
  }
  componentDidMount() {
    // check window size constantly in order to add menu buttons for mobile
    this.updateWindowDimensions();
    window.addEventListener('resize', () => {
      this.updateWindowDimensions();
      
    });
  }
  

  render() {
    return (
      <HeaderWrap>
        <LogoWrap>
        <Logo>+ bartr</Logo>
        </LogoWrap>
        
        <Nav>
          <StyledLink to="/" activeClassName="is-active" exact={true}>
            {(this.state.width >= 500) ? 'Home' : <HomeLogo/> }
            
          </StyledLink>

          <StyledLink to="/buy" activeClassName="is-active" exact={true}>
            {(this.state.width >= 500) ? 'Buy' : <BuyLogo/>}
          </StyledLink>

          <StyledLink to="/sell" activeClassName="is-active" exact={true}>
            {(this.state.width >= 500) ? 'Sell' : <SellLogo/>}            
          </StyledLink>
        </Nav>    
        <HeaderLoginMenu />
      </HeaderWrap>
    );
  }
}