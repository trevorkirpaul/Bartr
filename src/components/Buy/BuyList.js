import React from 'react';
import { connect } from 'react-redux';
import BuyListItem from './BuyListItem';
import ItemSelector from '../../selectors/items';

export const BuyList = (props) => (
  <div className="BuyListWrapper">  
    {
      props.items.map((item) => {
        return <BuyListItem key={item._id} {...item} />;
      })
    }
  </div>
);


const mapStateToProps = (state) => {
  return {
    items: ItemSelector(state.items, state.filters)
  }
}

export default connect(mapStateToProps)(BuyList);