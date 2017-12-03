import React from 'react';
import styled from 'styled-components';
import SellForm from './SellForm';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { startAddItem } from '../../actions/items';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 10px auto;  
`;
const TitleWrapper = styled.div`
  color: #383838;
  padding: 25px;
  margin-bottom: 15px;
  background: #D8F7FA;
  border: 1px solid #9EB4B6;
  font-family: 'Roboto', sans-serif;
  @media(max-width: 500px) {
    margin: 10px;
    padding: 10px;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 3em;
  font-weight: 700;
  margin: 10px 0;
  @media(max-width: 500px) {
   margin: 5px; 
  }
`;
const SubTitle = styled.h2`
  font-size: 1.5em;
  font-weight: 300;
  @media(max-width: 500px) {
   margin: 15px;
   font-size: 1em; 
  }
`;
const NoAccountWrapper = styled.div`
  background: #F9AFB8;
  border: 1px solid #EF233C;
  margin: 0px;
  padding: 25px;
  @media(max-width: 500px) {
    margin: 10px;
  }
`;
const P = styled.p`
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-weight: 700;
`;
const StyledLink = styled(Link)`
  display: inline-block;
  /* text-decoration: none; */
  color: #383838;
  
`;
export class Sell extends React.Component {
  onSubmit = (item, image) => {
    this.props.startAddItem({
      ...item,
       "createdBy": this.props.account.username,
       "location": this.props.account.location,
       "email": this.props.account.email
    }, image);
    this.props.history.push('/buy');
    
  };
  render() {
    return (
        <Wrapper>
          <TitleWrapper>
            <Title>Sell</Title>
            <SubTitle>Selling an item? Complete this form to add a new post!</SubTitle>
          </TitleWrapper>          
            {
              this.props.account.username
              ? 
              <SellForm onSubmit={this.onSubmit}/>
              :
            <NoAccountWrapper>
              <P>You must be logged in to sell an item.</P>
              <StyledLink to="/login">Click here to login</StyledLink>
            </NoAccountWrapper>
            }
        </Wrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  account: state.login
})
const mapDispatchToProps = (dispatch) => {
  return {
    startAddItem: (item, image) => dispatch(startAddItem(item, image))
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Sell);