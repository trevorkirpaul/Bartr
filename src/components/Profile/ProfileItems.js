import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import ProfileItem from './ProfileItem';

const ItemsList = styled.ul`
  list-style: none;
  padding: 15px;
  
`;



export const ProfileItems = (props) => (
  <ItemsList>
    <h2>Items Currently Listed:</h2>
    {
      props.items.filter((item) => item.createdBy === props.username).map((i) => <ProfileItem key={i._id} {...i}/>)
    }
  </ItemsList>
)

const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps)(ProfileItems);