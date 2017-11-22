import React from 'react';
import { connect } from 'react-redux';
import BuyListItem from './BuyListItem';

export const BuyList = (props) => (
  <div className="BuyListWrapper">
    {
      props.items.length === 0 ?
        <h3>No Items</h3>
        :
        props.items.map((item) => {
          return <BuyListItem key={item._id} {...item} />
        })
    }
  </div>
);


const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(BuyList);