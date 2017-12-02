import React from 'react';
import styled from 'styled-components';
import SellForm from './SellForm';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { startAddItem } from '../../actions/items';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;  
`;
const TitleWrapper = styled.div`
  margin: 15px 0;
  color: #383838;
  font-family: 'Roboto', sans-serif;
  @media(max-width: 500px) {
    margin: 0;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 3em;
  font-weight: 700;
  margin: 15px 0;
  @media(max-width: 500px) {
   margin: 15px; 
  }
`;
const SubTitle = styled.h2`
  font-size: 1.5em;
  font-weight: 300;
  margin-bottom: 25px;
  @media(max-width: 500px) {
   margin: 15px;
   font-size: 1em; 
  }
`;

export class Sell extends React.Component {
  onSubmit = (item, image) => {
    this.props.startAddItem({
      ...item,
       "createdBy": this.props.account.username,
       "location": this.props.account.location
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
            <div>
              <span>You must be logged in to sell an item.</span>
              <Link to="/login">Click here to login</Link>
            </div>
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