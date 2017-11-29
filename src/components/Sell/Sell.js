import React from 'react';
import SellForm from './SellForm';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { startAddItem } from '../../actions/items';



export class Sell extends React.Component {

  onSubmit = (item, image) => {
    // console.log({...item, ...image});
    this.props.startAddItem({
      ...item,
       "createdBy": this.props.account.username,
       "location": this.props.account.location
    }, image);
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
            {

              this.props.account.username ?  <SellForm
              onSubmit={this.onSubmit}
            /> :
            <div>
              <span>You must be logged in to sell an item.</span>
              <Link to="/login">Click here to login</Link>
            </div>

            }
           
          </div>
        </div>
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