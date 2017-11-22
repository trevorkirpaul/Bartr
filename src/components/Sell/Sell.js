import React from 'react';
import SellForm from './SellForm';
import axios from 'axios';
import {connect } from 'react-redux';
import { addItem } from '../../actions/items'



export class Sell extends React.Component {

  onSubmit = (expense) => {
    // this.props.addItem(expense);
    // this.props.history.push('/');
    const urlAPI = 'http://localhost:3001/api/items';
    axios.post(urlAPI, expense)
      .then(
        this.props.history.push('/')
      )
      .catch(err => console.err);
    
  };

  render() {
    return (
        <div className="sellWrapper">
          <div className="sellTitle">
            <h1>Sell</h1>
            <h2>Selling an item? Complete this form to add a new post!</h2>
          </div>
          <div className="sellForm">
            <SellForm
              onSubmit={this.onSubmit}
            />
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (expense) => dispatch(addItem(expense))
  };
}

export default connect(undefined,mapDispatchToProps)(Sell);