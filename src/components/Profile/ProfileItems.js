import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import ProfileItem from './ProfileItem';

const ItemsList = styled.ul`
  list-style: none;
  padding: 15px;
  margin-bottom: 50px;
  background: #D8F7FA;
  border: 1px solid #9EB4B6;
  @media(max-width: 500px) {
    margin: 10px 10px 50px 10px;
  }
`;
const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.5em;
  color: #383838;
  text-align: center;
  margin: 15px 0;
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