import React from 'react';
import SellForm from './SellForm';
import {connect } from 'react-redux';
import { startAddItem } from '../../actions/items';



export class Sell extends React.Component {

  onSubmit = (item) => {
    this.props.startAddItem(item);
    this.props.history.push('/buy'); 
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
    startAddItem: (item) => dispatch(startAddItem(item))
  };
}

export default connect(undefined,mapDispatchToProps)(Sell);