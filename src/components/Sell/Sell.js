import React from 'react';
import SellForm from './SellForm';
import {connect } from 'react-redux';
import { addItem } from '../../actions/items'

export class Sell extends React.Component {

  onSubmit = (expense) => {
    this.props.addItem(expense);
    this.props.history.push('/');
  };

  render() {
    return (
        <div>
          <h1>Sell</h1>
          <SellForm
            onSubmit={this.onSubmit}
          />
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