import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BuyListItem from './BuyListItem';
import ItemSelector from '../../selectors/items';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;

 
`;
export const BuyList = (props) => (
  <Wrapper>  
    {
      props.items.map((item) => {
        return <BuyListItem key={item._id} {...item} />;
      })
    }
  </Wrapper>
);


const mapStateToProps = (state) => {
  return {
    items: ItemSelector(state.items, state.filters)
  }
}

export default connect(mapStateToProps)(BuyList);