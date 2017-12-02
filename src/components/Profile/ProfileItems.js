import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import ProfileItem from './ProfileItem';

const ItemsList = styled.ul`
  list-style: none;
  padding: 15px;
  margin-bottom: 50px;
`;
const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.5em;
  color: #383838;
  text-align: center;
`;



export const ProfileItems = (props) => (
  <ItemsList>
    <Title>Items Currently Listed</Title>
    {
      props.items.filter((item) => item.createdBy === props.username).map((i) => <ProfileItem key={i._id} {...i}/>)
    }
  </ItemsList>
)

const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps)(ProfileItems);